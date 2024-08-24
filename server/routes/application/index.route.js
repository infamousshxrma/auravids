const express = require("express");
const userRoutes = require("./user.routes.js");
// const userRoutes = require("./userRoutes");
// const videoRoutes = require("./videoRoutes");
// const commentRoutes = require("./commentRoutes");

const router = express.Router();

router.use("/users/", userRoutes);


router.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome"
    })
})

module.exports = router;
