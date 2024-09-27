const Video = require("../../../models/videos.model");
const generateUniqueSlug = require("../../../utils/uniqueSlug");
const videoCreationSchema = require("../../../validations/videos/videoCreationSchema");

/**
 * Controller to create a new video entry in the database.
 * @param {Object} req - The request object, containing video metadata in the body.
 * @param {Object} res - The response object to send back the result.
 * @param {Function} next - The next middleware function.
 */
const createVideoController = async (req, res, next) => {
  try {
    // Validate the request body using Joi schema
    const { error, value } = videoCreationSchema.validate(req.body, {
      abortEarly: false,
    });

    // If validation fails, send error response
    if (error) {
      const validationErrors = error.details.map((detail) => detail.message);
      return res.status(400).json({
        message: "Validation error",
        errors: validationErrors,
      });
    }

    // Destructure video data from request body
    const {
      title,
      status,
      description,
      video_filepath,
      transcoding_preference,
      thumbnail_url,
      video_url,
      duration,
    } = value;

    console.log("Video data received:", value);

    // Generate a unique slug for the video based on the title
    const slug = await generateUniqueSlug(title);

    // Create a new video entry using the provided data
    const newVideo = await createNewVideo({
      ...value, slug
    });

    // If the video is live, create a Zoom meeting (or other live event functionality)
    if (status === "live") {
      await createLiveZoomMeeting({});
    }

    res.status(201).json({
      message: "Video uploaded successfully",
      video: newVideo,
    });
  } catch (error) {
    console.error("Error uploading video:", error);
    res.status(500).json({ message: `Internal server error: ${error?.message || ''}` });
  }
};

/**
 * Helper function to create a new video entry and save it to the database.
 * @param {Object} videoData - The video data to be saved.
 * @returns {Promise<Object>} - Returns the saved video document.
 */
const createNewVideo = async (videoData) => {
  const newVideo = new Video(videoData);
  await newVideo.save();
  return newVideo;
};

/**
 * Controller to retrieve all video entries from the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object to send back the result.
 * @param {Function} next - The next middleware function.
 */
const getAllVideosController = async (req, res, next) => {
  try {
    // Fetch all videos from the database
    const videos = await fetchAllVideos();

    res.status(200).json({
      message: "Videos fetched successfully",
      data: videos,
    });
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Helper function to fetch all videos from the database.
 * @returns {Promise<Array>} - Returns an array of video documents.
 */
const fetchAllVideos = async () => {
  return await Video.find({}).lean();
};

module.exports = {
  createVideoController,
  getAllVideosController,
};
