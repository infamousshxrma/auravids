import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-light-gray flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center items-center w-full">
          <Link
            to={`/`}
            class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
          >
            <img src="/blinks.png" className="w-8 mr-2" />
            <svg
              className="w-auto h-5 text-gray-900 fill-current"
              viewBox="0 0 102.067 37.102"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="svgGroup"
                stroke-linecap="round"
                fill-rule="evenodd"
                font-size="9pt"
                stroke="#000"
                stroke-width="0.25mm"
                fill="#000"
                style={{ stroke: "#000", strokeWidth: "0.25mm", fill: "#000" }}
              >
                <path
                  d="M 5.129 35.623 A 23.76 23.76 0 0 0 6.117 36.3 Q 6.681 36.645 7.461 36.842 A 8.026 8.026 0 0 0 8.467 37.025 A 10.862 10.862 0 0 0 9.769 37.102 Q 10.628 37.102 11.542 36.975 A 13.108 13.108 0 0 0 11.969 36.909 A 11.544 11.544 0 0 0 14.567 36.15 Q 15.517 35.8 16.342 35.3 A 14.772 14.772 0 0 0 16.794 35.015 A 12.647 12.647 0 0 0 17.842 34.25 A 232.463 232.463 0 0 1 18.246 33.921 Q 18.673 33.575 19.017 33.3 A 13.587 13.587 0 0 0 19.033 33.281 Q 19.279 32.984 19.537 32.639 A 22.488 22.488 0 0 0 20.067 31.9 A 30.76 30.76 0 0 0 20.579 31.131 A 22.361 22.361 0 0 0 21.017 30.425 A 19.637 19.637 0 0 0 21.127 30.237 Q 21.353 29.846 21.403 29.708 A 0.193 0.193 0 0 0 21.417 29.65 L 21.617 29.275 A 2.728 2.728 0 0 1 21.825 28.946 A 3.43 3.43 0 0 1 22.167 28.55 A 8.211 8.211 0 0 0 22.295 28.26 Q 22.572 27.601 22.817 26.725 Q 23.117 25.65 23.292 24.55 Q 23.414 23.78 23.353 23.181 A 3.088 3.088 0 0 0 23.267 22.7 A 8.309 8.309 0 0 0 22.79 21.268 A 6.069 6.069 0 0 0 21.217 19.1 A 9.035 9.035 0 0 0 21.21 19.095 Q 19.712 17.798 17.417 16.95 Q 16.967 16.8 16.567 16.65 L 16.167 16.5 L 16.692 16.125 Q 17.217 15.75 17.942 15.175 A 61.491 61.491 0 0 0 18.299 14.889 A 54.332 54.332 0 0 0 19.317 14.05 Q 20.417 13.05 21.592 11.6 A 24.247 24.247 0 0 0 22.292 10.694 A 20.448 20.448 0 0 0 23.592 8.7 A 12.878 12.878 0 0 0 23.843 8.238 Q 24.218 7.511 24.369 6.958 A 2.756 2.756 0 0 0 24.467 6.4 Q 24.476 5.9 24.424 5.438 A 5.205 5.205 0 0 0 22.667 1.975 A 6.447 6.447 0 0 0 21.665 1.255 Q 19.992 0.276 17.467 0.05 Q 16.517 -0.05 15.717 0.05 Q 15.067 0.131 14.846 0.146 A 1.229 1.229 0 0 1 14.767 0.15 A 0.173 0.173 0 0 1 14.723 0.27 Q 14.643 0.359 14.417 0.375 A 12.464 12.464 0 0 1 14.258 0.385 Q 14.131 0.393 14.018 0.396 A 6.207 6.207 0 0 1 13.817 0.4 A 0.983 0.983 0 0 0 13.729 0.385 Q 13.402 0.343 12.906 0.482 A 5.092 5.092 0 0 0 12.542 0.6 A 14.435 14.435 0 0 0 11.92 0.842 A 11.635 11.635 0 0 0 11.042 1.25 Q 10.535 1.513 10.409 1.691 A 0.193 0.193 0 0 0 10.367 1.8 Q 10.33 1.945 10.399 2.103 A 0.787 0.787 0 0 0 10.467 2.225 A 1.019 1.019 0 0 1 10.496 2.271 A 0.83 0.83 0 0 1 10.617 2.7 A 0.163 0.163 0 0 1 10.734 2.796 Q 10.806 2.944 10.744 3.31 A 3.414 3.414 0 0 1 10.717 3.45 Q 10.567 4.15 9.867 5.7 A 1256.628 1256.628 0 0 1 9.397 6.804 Q 9.147 7.393 8.865 8.055 A 2632.376 2632.376 0 0 1 8.142 9.75 A 303.948 303.948 0 0 0 7.098 12.225 A 358.87 358.87 0 0 0 6.017 14.85 A 623.233 623.233 0 0 0 5.473 16.189 A 560.745 560.745 0 0 0 3.917 20.075 Q 3.292 21.653 2.774 22.977 A 442.84 442.84 0 0 0 2.192 24.475 A 201.283 201.283 0 0 0 2.079 24.766 Q 1.616 25.97 1.368 26.663 A 22.041 22.041 0 0 0 1.217 27.1 A 39.671 39.671 0 0 1 1.208 27.131 Q 1.026 27.821 0.898 28.202 A 4.386 4.386 0 0 1 0.817 28.425 Q 0.667 28.8 0.417 29.25 A 4.422 4.422 0 0 0 0.24 29.603 Q -0.063 30.286 0.017 30.825 A 3.488 3.488 0 0 0 0.192 31.506 A 4.502 4.502 0 0 0 0.517 32.2 A 8.847 8.847 0 0 0 0.522 32.207 Q 1.218 33.15 1.692 33.275 A 0.337 0.337 0 0 0 1.778 33.286 Q 2.139 33.286 2.583 32.52 A 6.53 6.53 0 0 0 2.792 32.125 A 15.472 15.472 0 0 0 3.125 31.39 Q 3.493 30.527 3.968 29.214 A 94.892 94.892 0 0 0 4.467 27.8 Q 5.292 25.513 5.807 24.055 A 235.262 235.262 0 0 0 6.117 23.175 A 96.663 96.663 0 0 1 6.202 22.932 Q 6.556 21.926 6.787 21.347 A 11.63 11.63 0 0 1 6.942 20.975 Q 7.149 20.504 7.314 20.317 A 0.485 0.485 0 0 1 7.417 20.225 Q 7.617 20.1 7.967 20 A 0.077 0.077 0 0 0 7.973 20 Q 8.034 19.995 8.437 19.904 A 48.067 48.067 0 0 0 8.567 19.875 Q 9.117 19.75 9.817 19.6 A 89.183 89.183 0 0 1 9.82 19.599 Q 10.343 19.487 10.67 19.431 A 7.219 7.219 0 0 1 10.867 19.4 Q 13.867 18.6 16.092 19.275 A 7.947 7.947 0 0 1 16.5 19.411 A 6.317 6.317 0 0 1 19.567 21.7 A 1.43 1.43 0 0 1 19.702 21.875 Q 19.961 22.268 20.072 22.939 A 6.168 6.168 0 0 1 20.142 23.6 A 7.786 7.786 0 0 1 20.154 24.032 Q 20.154 24.561 20.084 25.122 A 11.337 11.337 0 0 1 19.817 26.525 Q 19.417 28.1 18.367 29.45 A 19.459 19.459 0 0 1 17.475 30.461 A 16.294 16.294 0 0 1 15.392 32.325 A 10.926 10.926 0 0 1 14.137 33.132 A 12.86 12.86 0 0 1 11.717 34.15 Q 9.867 34.65 8.392 34.425 A 5.654 5.654 0 0 1 7.877 34.322 A 4.507 4.507 0 0 1 5.917 33.3 A 8.569 8.569 0 0 0 5.693 33.085 Q 5.497 32.902 5.266 32.708 A 15.933 15.933 0 0 0 4.792 32.325 Q 4.117 31.8 3.817 32 A 3.877 3.877 0 0 0 3.757 32.039 Q 2.656 32.76 3.055 33.606 A 1.641 1.641 0 0 0 3.217 33.875 A 4.569 4.569 0 0 0 3.558 34.284 Q 4.126 34.896 5.129 35.623 Z M 67.96 33.042 A 1.597 1.597 0 0 0 68.267 33.2 A 3.813 3.813 0 0 0 68.548 33.19 Q 68.896 33.164 69.107 33.07 A 0.623 0.623 0 0 0 69.317 32.925 Q 69.508 32.714 69.553 32.196 A 4.032 4.032 0 0 0 69.567 31.85 A 0.757 0.757 0 0 1 69.56 31.821 Q 69.49 31.485 69.624 30.71 A 11.829 11.829 0 0 1 69.692 30.35 A 19.796 19.796 0 0 1 69.816 29.787 A 22.787 22.787 0 0 1 70.292 28.075 A 64.071 64.071 0 0 1 70.461 27.553 Q 70.639 27.011 70.784 26.608 A 17.757 17.757 0 0 1 70.917 26.25 Q 71.317 25.65 71.667 25.1 A 1.019 1.019 0 0 1 71.689 25.066 Q 71.996 24.624 72.621 24.749 A 1.918 1.918 0 0 1 72.817 24.8 A 13.601 13.601 0 0 1 72.964 25.01 Q 73.032 25.109 73.091 25.2 A 6.373 6.373 0 0 1 73.217 25.4 A 1.436 1.436 0 0 1 73.277 25.51 Q 73.367 25.695 73.367 25.85 L 73.667 26.325 A 13.918 13.918 0 0 1 73.705 26.386 Q 73.837 26.598 73.949 26.795 A 8.54 8.54 0 0 1 74.167 27.2 Q 74.367 27.55 74.542 27.925 Q 74.667 28.195 74.703 28.374 A 0.658 0.658 0 0 1 74.717 28.5 A 74.607 74.607 0 0 0 75.668 29.706 Q 76.583 30.84 77.257 31.561 A 12.679 12.679 0 0 0 77.867 32.175 A 7.149 7.149 0 0 0 78.174 32.446 Q 79.074 33.193 79.717 33.15 A 2.318 2.318 0 0 0 80.768 33.396 Q 80.888 33.396 81.011 33.385 A 3.075 3.075 0 0 0 81.492 33.3 Q 82.467 33.05 83.417 32.1 A 21.474 21.474 0 0 0 83.424 32.092 Q 84.017 31.499 84.092 31.325 Q 84.167 31.15 83.967 30.75 A 1.951 1.951 0 0 0 83.958 30.726 Q 83.895 30.544 83.806 30.404 A 0.935 0.935 0 0 0 83.292 30 A 0.83 0.83 0 0 0 83.166 29.971 Q 82.693 29.899 81.817 30.25 Q 80.961 30.642 80.155 30.399 A 2.586 2.586 0 0 1 79.517 30.1 Q 78.417 29.4 77.867 27.85 A 0.414 0.414 0 0 0 77.852 27.747 Q 77.798 27.541 77.553 27.163 A 7.598 7.598 0 0 0 77.392 26.925 A 10.453 10.453 0 0 1 77.202 26.646 A 11.76 11.76 0 0 1 76.517 25.45 A 13.983 13.983 0 0 1 76.167 24.896 A 17.907 17.907 0 0 1 75.717 24.1 L 75.317 23.35 A 0.589 0.589 0 0 1 75.357 23.314 Q 75.579 23.13 76.592 22.5 A 247.826 247.826 0 0 1 76.915 22.299 Q 77.41 21.992 77.968 21.649 A 440.589 440.589 0 0 1 79.192 20.9 A 653.994 653.994 0 0 0 80.072 20.362 Q 80.995 19.797 81.717 19.35 A 19.638 19.638 0 0 0 81.9 19.236 Q 82.734 18.71 83.132 18.333 A 1.997 1.997 0 0 0 83.367 18.075 A 0.813 0.813 0 0 0 83.389 18.043 Q 83.698 17.578 83.167 16.95 Q 82.717 16.35 82.292 16.2 A 0.675 0.675 0 0 0 82.19 16.173 Q 81.867 16.113 81.347 16.309 A 4.527 4.527 0 0 0 81.017 16.45 Q 80.864 16.603 80.447 16.859 A 12.165 12.165 0 0 1 80.167 17.025 Q 79.517 17.4 78.917 17.8 A 1.435 1.435 0 0 0 78.818 17.829 Q 78.564 17.912 78.238 18.112 A 5.87 5.87 0 0 0 77.917 18.325 A 130.769 130.769 0 0 1 77.614 18.539 A 145.957 145.957 0 0 1 76.667 19.2 Q 76.321 19.439 76.004 19.636 A 11.156 11.156 0 0 1 75.467 19.95 A 11.868 11.868 0 0 1 75.244 20.113 Q 74.912 20.35 74.598 20.538 A 6.846 6.846 0 0 1 73.967 20.875 L 73.267 21.2 Q 73.167 21.05 73.567 19.875 A 13.859 13.859 0 0 1 73.581 19.832 Q 73.986 18.657 75.017 16.325 A 250.831 250.831 0 0 1 75.245 15.809 Q 76.246 13.56 77.767 10.25 Q 79.167 7.45 79.942 5.25 A 35.903 35.903 0 0 0 80.125 4.717 Q 80.717 2.949 80.717 2.25 A 1.512 1.512 0 0 0 80.634 1.774 Q 80.563 1.561 80.432 1.332 A 3.911 3.911 0 0 0 80.142 0.9 Q 79.692 0.314 79.472 0.186 A 0.22 0.22 0 0 0 79.367 0.15 Q 79.167 0.15 78.967 0.175 A 0.504 0.504 0 0 0 78.849 0.205 Q 78.708 0.259 78.567 0.4 Q 78.367 0.4 78.192 0.6 A 0.607 0.607 0 0 0 78.087 0.773 Q 78.05 0.865 78.032 0.98 A 1.462 1.462 0 0 0 78.017 1.2 A 2.377 2.377 0 0 1 78.009 1.235 Q 77.9 1.74 77.442 2.875 A 87.543 87.543 0 0 1 77.427 2.912 Q 77.192 3.493 76.921 4.139 A 148.506 148.506 0 0 1 76.342 5.5 Q 75.717 6.95 75.117 8.35 Q 74.567 9.7 74.092 10.85 Q 73.617 12 73.142 13.125 Q 72.667 14.25 72.017 15.6 A 40.629 40.629 0 0 0 71.754 16.204 Q 71.617 16.527 71.468 16.891 A 84.084 84.084 0 0 0 71.092 17.825 Q 70.567 19.15 70.017 20.425 A 72.221 72.221 0 0 1 69.902 20.689 Q 69.558 21.478 69.276 22.07 A 24.935 24.935 0 0 1 69.067 22.5 A 40.078 40.078 0 0 0 68.86 23.138 A 55.172 55.172 0 0 0 68.642 23.85 A 4.978 4.978 0 0 1 68.466 24.342 A 3.98 3.98 0 0 1 68.017 25.15 A 115.641 115.641 0 0 0 67.661 26.233 Q 67.493 26.754 67.345 27.234 A 66.712 66.712 0 0 0 67.017 28.325 A 46.873 46.873 0 0 1 67.01 28.347 Q 66.714 29.362 66.501 29.923 A 5.665 5.665 0 0 1 66.367 30.25 Q 66.367 30.577 66.472 30.938 A 3.705 3.705 0 0 0 66.667 31.45 A 4.713 4.713 0 0 0 66.787 31.692 A 4.035 4.035 0 0 0 67.417 32.575 A 3.826 3.826 0 0 0 67.668 32.818 Q 67.817 32.949 67.96 33.042 Z M 88.967 33.65 Q 88.017 33.25 87.167 32.575 A 9.614 9.614 0 0 1 86.779 32.252 Q 86.408 31.923 86.205 31.658 A 1.732 1.732 0 0 1 86.067 31.45 Q 86.067 31 86.217 30.825 Q 86.357 30.661 87.003 30.673 A 5.417 5.417 0 0 1 87.092 30.675 A 11.45 11.45 0 0 1 87.512 30.698 Q 88.229 30.75 89.467 30.9 Q 89.874 30.9 90.421 30.854 A 20.897 20.897 0 0 0 90.967 30.8 A 12.889 12.889 0 0 0 92.043 30.636 A 10.71 10.71 0 0 0 92.642 30.5 A 3.726 3.726 0 0 0 92.939 30.411 Q 93.396 30.251 93.501 30.039 A 0.311 0.311 0 0 0 93.517 30 Q 93.748 30 93.637 29.85 A 0.459 0.459 0 0 0 93.617 29.825 Q 93.467 29.65 93.267 29.45 Q 93.119 29.45 92.943 29.354 A 1.353 1.353 0 0 1 92.817 29.275 A 1.304 1.304 0 0 0 92.665 29.183 Q 92.585 29.142 92.511 29.121 A 0.537 0.537 0 0 0 92.367 29.1 A 0.345 0.345 0 0 0 92.319 28.934 Q 92.217 28.749 91.898 28.53 A 3.188 3.188 0 0 0 91.892 28.525 Q 91.417 28.2 90.917 28 Q 89.971 27.227 89.248 26.582 A 34.683 34.683 0 0 1 89.017 26.375 A 5.797 5.797 0 0 1 88.799 26.168 Q 88.247 25.613 88.417 25.4 L 88.417 25.175 L 88.417 25.15 A 0.338 0.338 0 0 1 88.214 25.071 Q 87.947 24.869 87.642 24.15 Q 87.304 23.355 87.235 22.687 A 3.265 3.265 0 0 1 87.217 22.35 Q 87.217 21.763 87.552 20.863 A 9.095 9.095 0 0 1 87.567 20.825 A 10.827 10.827 0 0 1 88.04 19.761 A 13.878 13.878 0 0 1 88.517 18.9 A 10.44 10.44 0 0 1 89.051 18.092 Q 89.346 17.69 89.653 17.367 A 6.16 6.16 0 0 1 89.767 17.25 Q 90.667 16.4 92.017 15.425 A 34.282 34.282 0 0 1 94.028 14.075 A 30.349 30.349 0 0 1 94.692 13.675 A 16.18 16.18 0 0 1 95.478 13.242 Q 96.298 12.822 96.917 12.65 A 5.61 5.61 0 0 1 97.707 12.405 Q 98.168 12.3 98.592 12.3 A 2.921 2.921 0 0 1 99.387 12.405 A 2.481 2.481 0 0 1 99.967 12.65 A 2.928 2.928 0 0 1 100.619 13.1 A 3.631 3.631 0 0 1 100.892 13.375 A 9.795 9.795 0 0 1 101.429 14.028 A 8.409 8.409 0 0 1 101.642 14.325 A 4.747 4.747 0 0 1 101.823 14.61 Q 101.909 14.757 101.969 14.89 A 1.889 1.889 0 0 1 102.067 15.15 Q 102.067 15.75 101.967 16.475 Q 101.875 17.136 101.722 17.652 A 5.529 5.529 0 0 1 101.692 17.75 Q 101.548 18.203 101.285 18.283 A 0.404 0.404 0 0 1 101.167 18.3 L 101.042 18.325 Q 100.932 18.347 100.919 18.542 A 0.845 0.845 0 0 0 100.917 18.6 A 0.851 0.851 0 0 1 100.83 18.957 Q 100.699 19.24 100.371 19.562 A 4.485 4.485 0 0 1 100.167 19.75 Q 99.217 20.4 98.517 20.525 Q 97.817 20.65 97.667 20 A 2.062 2.062 0 0 1 97.583 19.88 Q 97.501 19.753 97.467 19.65 Q 97.42 19.509 97.24 19.501 A 0.499 0.499 0 0 0 97.217 19.5 L 97.067 19.35 A 0.436 0.436 0 0 1 96.971 19.199 Q 96.917 19.061 96.917 18.85 A 0.535 0.535 0 0 1 97.003 18.561 A 0.725 0.725 0 0 1 97.067 18.475 L 97.217 18.3 A 0.316 0.316 0 0 0 97.367 18.256 Q 97.578 18.141 97.867 17.725 A 8.971 8.971 0 0 0 98.509 16.642 A 9.973 9.973 0 0 0 98.592 16.475 A 8.143 8.143 0 0 0 98.718 16.2 Q 98.886 15.816 98.912 15.617 A 0.519 0.519 0 0 0 98.917 15.55 Q 98.917 15.25 98.842 15.2 A 0.163 0.163 0 0 0 98.796 15.181 Q 98.682 15.15 98.367 15.15 A 22.682 22.682 0 0 0 97.799 15.403 Q 97.546 15.52 97.262 15.657 A 47.899 47.899 0 0 0 96.667 15.95 Q 95.667 16.45 94.792 16.925 A 10 10 0 0 0 94.314 17.2 Q 93.857 17.482 93.584 17.735 A 2.457 2.457 0 0 0 93.517 17.8 A 41.663 41.663 0 0 1 93.447 17.922 Q 93.307 18.164 93.267 18.225 Q 93.217 18.3 93.017 18.3 A 0.166 0.166 0 0 0 93.014 18.27 Q 92.988 18.133 92.692 18.475 A 9.71 9.71 0 0 0 92.474 18.736 Q 92.218 19.053 91.892 19.5 A 46.616 46.616 0 0 0 91.099 20.618 A 42.39 42.39 0 0 0 90.992 20.775 A 281.699 281.699 0 0 0 90.793 21.067 Q 90.517 21.475 90.367 21.7 A 0.308 0.308 0 0 0 90.32 21.765 Q 90.257 21.875 90.184 22.121 A 5.525 5.525 0 0 0 90.142 22.275 A 4.063 4.063 0 0 0 90.05 22.718 A 2.978 2.978 0 0 0 90.017 23.15 A 2.195 2.195 0 0 0 89.97 23.309 Q 89.9 23.586 89.946 23.767 A 0.404 0.404 0 0 0 90.067 23.975 Q 90.271 24.159 90.876 24.66 A 134.721 134.721 0 0 0 91.167 24.9 Q 92.917 26.2 93.917 27.05 Q 94.741 27.751 95.225 28.247 A 7.957 7.957 0 0 1 95.417 28.45 A 3.895 3.895 0 0 1 95.684 28.776 Q 95.946 29.136 96.016 29.447 A 1.203 1.203 0 0 1 96.017 29.45 A 6.931 6.931 0 0 1 96.323 30.013 Q 96.785 30.976 96.623 31.589 A 1.106 1.106 0 0 1 96.567 31.75 Q 96.217 32.55 94.867 33.15 A 2.423 2.423 0 0 1 94.534 33.283 Q 94.043 33.442 93.217 33.55 Q 92.067 33.7 90.867 33.725 Q 89.982 33.743 89.369 33.694 A 6.635 6.635 0 0 1 88.967 33.65 Z M 61.217 30.725 A 2.252 2.252 0 0 0 61.415 30.84 Q 62.013 31.15 62.867 31.15 A 2.24 2.24 0 0 0 63.163 31.055 Q 63.687 30.843 63.767 30.425 A 0.808 0.808 0 0 0 63.781 30.273 Q 63.781 29.941 63.512 29.581 A 2.581 2.581 0 0 0 63.267 29.3 A 2.436 2.436 0 0 1 63.167 29.194 Q 62.921 28.917 62.692 28.5 A 3.803 3.803 0 0 1 62.622 28.367 Q 62.523 28.169 62.461 27.983 A 2.039 2.039 0 0 1 62.367 27.575 A 1.421 1.421 0 0 1 62.364 27.555 Q 62.333 27.255 62.459 27.177 A 0.2 0.2 0 0 1 62.567 27.15 L 62.567 27.125 L 62.567 26.9 Q 62.485 26.9 62.433 26.879 A 0.137 0.137 0 0 1 62.342 26.775 L 62.317 26.65 A 0.309 0.309 0 0 0 62.395 26.58 Q 62.537 26.407 62.62 25.935 A 5.473 5.473 0 0 0 62.667 25.6 A 12.466 12.466 0 0 0 62.721 24.945 Q 62.758 24.315 62.742 23.6 Q 62.725 22.878 62.633 22.35 A 4.086 4.086 0 0 0 62.517 21.85 Q 62.467 21.65 62.442 21.45 Q 62.417 21.25 62.417 21.05 A 1.032 1.032 0 0 0 62.369 20.907 Q 62.269 20.665 62.027 20.368 A 4.943 4.943 0 0 0 61.767 20.075 Q 61.217 19.5 60.592 19.075 A 4.573 4.573 0 0 0 60.442 18.977 Q 60.109 18.769 59.846 18.694 A 1.013 1.013 0 0 0 59.567 18.65 Q 59.367 18.65 58.917 18.825 A 11.013 11.013 0 0 0 58.75 18.892 A 9.811 9.811 0 0 0 58.067 19.2 A 1.975 1.975 0 0 0 57.771 19.287 Q 57.3 19.462 56.542 19.925 A 32.631 32.631 0 0 0 56.162 20.16 A 29.016 29.016 0 0 0 54.617 21.2 Q 53.914 21.708 53.607 21.971 A 2.615 2.615 0 0 0 53.467 22.1 A 12.688 12.688 0 0 0 53.264 22.23 Q 53.025 22.386 52.712 22.602 A 44.819 44.819 0 0 0 52.392 22.825 Q 52.012 23.092 51.68 23.32 A 46.497 46.497 0 0 1 51.192 23.65 L 50.667 24 A 0.821 0.821 0 0 1 50.67 23.93 Q 50.683 23.77 50.757 23.55 A 3.573 3.573 0 0 1 50.842 23.325 Q 50.973 23.006 51.203 22.477 A 126.584 126.584 0 0 1 51.367 22.1 A 24.592 24.592 0 0 0 51.889 21.215 Q 52.851 19.498 52.992 18.475 A 3.035 3.035 0 0 0 53.02 18.062 Q 53.02 17.005 52.267 16 A 3.198 3.198 0 0 0 52.187 15.898 Q 51.768 15.385 51.267 15.225 A 1.218 1.218 0 0 0 51.152 15.194 Q 50.674 15.092 50.317 15.45 A 0.416 0.416 0 0 0 50.084 15.52 A 0.561 0.561 0 0 0 49.967 15.625 A 0.54 0.54 0 0 0 49.909 15.706 Q 49.852 15.805 49.854 15.911 A 0.408 0.408 0 0 0 49.867 16 A 12.435 12.435 0 0 1 49.809 16.551 Q 49.701 17.391 49.492 18 A 5.487 5.487 0 0 1 49.466 18.074 Q 49.277 18.599 48.913 19.289 A 19.176 19.176 0 0 1 48.517 20 A 72.937 72.937 0 0 0 48.47 20.107 Q 48.138 20.868 47.742 21.825 Q 47.446 22.538 47.308 23.045 A 4.139 4.139 0 0 0 47.217 23.45 A 7.296 7.296 0 0 0 47.079 23.664 Q 46.785 24.14 46.642 24.55 Q 46.535 24.855 46.4 24.974 A 0.273 0.273 0 0 1 46.217 25.05 A 2.752 2.752 0 0 0 46.176 25.16 Q 46.102 25.37 45.984 25.776 A 38.303 38.303 0 0 0 45.892 26.1 Q 45.667 26.9 45.517 27.7 A 23.563 23.563 0 0 0 45.467 27.975 Q 45.393 28.393 45.374 28.614 A 1.583 1.583 0 0 0 45.367 28.75 A 1.064 1.064 0 0 0 45.435 28.865 Q 45.516 28.985 45.657 29.148 A 6.615 6.615 0 0 0 45.817 29.325 Q 46.167 29.7 46.517 30.1 A 19.497 19.497 0 0 0 46.739 30.275 Q 47.081 30.541 47.292 30.675 Q 47.567 30.85 47.967 30.65 A 0.471 0.471 0 0 0 48.108 30.629 Q 48.328 30.56 48.485 30.269 A 1.795 1.795 0 0 0 48.592 30.025 Q 48.817 29.4 49.917 28.2 Q 51.317 27 52.892 25.9 A 97.666 97.666 0 0 1 53.864 25.23 A 82.84 82.84 0 0 1 55.917 23.875 A 273.03 273.03 0 0 1 56.216 23.684 Q 57.462 22.892 58.267 22.4 A 4.704 4.704 0 0 1 58.453 22.3 Q 58.994 22.027 59.343 22.05 A 0.68 0.68 0 0 1 59.492 22.075 Q 59.83 22.175 59.931 22.83 A 3.658 3.658 0 0 1 59.967 23.2 A 26.821 26.821 0 0 0 59.97 23.639 A 22.019 22.019 0 0 0 59.992 24.325 A 2.568 2.568 0 0 1 59.993 24.354 Q 60.011 24.856 59.817 25.05 Q 59.699 25.245 59.674 25.761 A 6.353 6.353 0 0 0 59.667 26.075 A 10.339 10.339 0 0 0 59.684 26.67 A 12.595 12.595 0 0 0 59.792 27.725 A 13.717 13.717 0 0 0 59.935 28.556 A 10.251 10.251 0 0 0 60.117 29.3 A 5.126 5.126 0 0 0 60.294 29.658 Q 60.69 30.38 61.217 30.725 Z M 28.594 33.504 A 2.186 2.186 0 0 0 28.867 33.45 A 1.082 1.082 0 0 0 29.025 33.354 A 0.691 0.691 0 0 0 29.317 32.875 A 2.739 2.739 0 0 0 29.33 32.754 Q 29.367 32.332 29.367 31.3 A 6.226 6.226 0 0 1 29.37 31.092 Q 29.401 30.188 29.688 28.942 A 23.578 23.578 0 0 1 30.042 27.6 A 1954.396 1954.396 0 0 0 30.748 25.187 A 2551.131 2551.131 0 0 0 31.517 22.55 Q 32.317 20.4 32.317 19.9 L 32.342 19.625 Q 32.359 19.439 32.455 19.379 A 0.206 0.206 0 0 1 32.567 19.35 Q 32.767 19.15 32.792 18.95 Q 32.817 18.75 32.817 18.55 A 0.174 0.174 0 0 1 32.82 18.521 Q 32.839 18.41 32.982 18.041 A 18.912 18.912 0 0 1 33.067 17.825 Q 33.223 17.434 33.428 16.946 A 93.134 93.134 0 0 1 33.692 16.325 A 101.79 101.79 0 0 1 34.06 15.475 A 85.946 85.946 0 0 1 34.417 14.675 Q 34.767 13.9 34.967 13.5 A 17.407 17.407 0 0 1 35.089 13.145 Q 35.149 12.977 35.207 12.828 A 8.452 8.452 0 0 1 35.342 12.5 Q 35.468 12.211 35.503 12.026 A 0.685 0.685 0 0 0 35.517 11.9 Q 35.517 11.738 35.814 11.129 A 16.629 16.629 0 0 1 35.967 10.825 A 19.704 19.704 0 0 0 36.189 10.38 A 22.566 22.566 0 0 0 36.817 8.95 A 5677.484 5677.484 0 0 0 36.851 8.878 Q 37.775 6.933 38.217 6 A 23.583 23.583 0 0 0 38.404 5.596 Q 38.593 5.176 38.709 4.867 A 5.093 5.093 0 0 0 38.817 4.55 Q 38.967 4.05 38.967 3.4 Q 38.967 3.063 38.943 2.772 A 5.11 5.11 0 0 0 38.892 2.35 A 1.229 1.229 0 0 0 38.696 1.863 A 1.608 1.608 0 0 0 38.417 1.55 L 37.817 0.95 L 37.617 0.75 A 1.743 1.743 0 0 0 37.437 0.76 A 2.157 2.157 0 0 0 37.192 0.8 A 0.896 0.896 0 0 0 37.137 0.814 A 0.732 0.732 0 0 0 36.817 1 Q 36.417 1 36.217 1.2 Q 36.078 1.339 36.035 1.575 A 1.275 1.275 0 0 0 36.017 1.8 A 0.388 0.388 0 0 1 36.016 1.815 Q 36.006 2.083 35.642 3.225 Q 35.267 4.4 34.667 6.1 Q 34.067 7.8 33.392 9.55 Q 32.717 11.3 32.142 12.725 Q 31.71 13.794 31.406 14.427 A 9.355 9.355 0 0 1 31.217 14.8 A 0.673 0.673 0 0 1 31.179 15.019 A 0.879 0.879 0 0 1 31.092 15.2 Q 30.967 15.4 30.967 15.6 Q 30.967 15.741 30.905 15.943 A 2.728 2.728 0 0 1 30.842 16.125 Q 30.769 16.313 30.739 16.476 A 1.221 1.221 0 0 0 30.717 16.7 A 0.801 0.801 0 0 0 30.663 16.76 Q 30.548 16.9 30.442 17.143 A 3.648 3.648 0 0 0 30.342 17.4 Q 30.167 17.9 30.167 18.3 A 1.646 1.646 0 0 1 30.152 18.519 A 1.839 1.839 0 0 1 30.017 19 Q 29.929 19.204 29.825 19.289 A 0.247 0.247 0 0 1 29.667 19.35 Q 29.585 19.513 29.356 20.088 A 63.972 63.972 0 0 0 29.242 20.375 A 26.903 26.903 0 0 0 29.221 20.428 Q 28.905 21.234 28.567 22.25 Q 28.217 23.3 27.917 24.275 A 33.674 33.674 0 0 0 27.787 24.706 Q 27.593 25.367 27.517 25.75 Q 27.517 25.991 27.446 26.338 A 6.487 6.487 0 0 1 27.367 26.675 Q 27.217 27.25 26.967 27.85 A 17.735 17.735 0 0 0 26.883 28.26 Q 26.642 29.516 26.647 30.526 A 7.536 7.536 0 0 0 26.667 31.05 A 5.663 5.663 0 0 0 26.76 31.751 Q 26.834 32.118 26.956 32.414 A 2.236 2.236 0 0 0 27.342 33.05 A 1.669 1.669 0 0 0 27.388 33.1 Q 27.867 33.599 28.594 33.504 Z M 8.567 17.05 L 9.492 16.875 Q 10.417 16.7 11.517 16.475 A 21.433 21.433 0 0 0 12.029 16.364 Q 12.542 16.246 12.88 16.135 A 3.978 3.978 0 0 0 13.117 16.05 Q 13.308 15.935 13.631 15.762 A 29.94 29.94 0 0 1 13.842 15.65 A 3.297 3.297 0 0 0 14.277 15.372 Q 14.477 15.223 14.68 15.032 A 5.94 5.94 0 0 0 14.817 14.9 Q 15.517 14.25 16.592 13.025 A 49.06 49.06 0 0 0 18.585 10.596 A 53.673 53.673 0 0 0 18.717 10.425 Q 19.521 9.372 20.031 8.481 A 10.65 10.65 0 0 0 20.317 7.95 A 18.583 18.583 0 0 0 20.812 7.132 Q 21.491 5.938 21.567 5.275 A 2.019 2.019 0 0 0 21.58 5.046 Q 21.58 4.382 21.117 3.857 A 2.336 2.336 0 0 0 21.017 3.75 A 1.65 1.65 0 0 0 20.526 3.353 Q 20.294 3.226 19.998 3.138 A 4.143 4.143 0 0 0 19.492 3.025 A 9.647 9.647 0 0 0 18.077 2.904 Q 17.655 2.898 17.217 2.925 A 12.349 12.349 0 0 0 16.299 3.015 Q 15.868 3.074 15.494 3.163 A 6.44 6.44 0 0 0 15.167 3.25 A 4.732 4.732 0 0 0 14.764 3.393 Q 14.399 3.542 14.167 3.725 A 0.883 0.883 0 0 0 13.849 4.24 A 1.388 1.388 0 0 0 13.817 4.55 A 1.524 1.524 0 0 1 13.65 5.236 A 1.935 1.935 0 0 1 13.542 5.425 A 5.759 5.759 0 0 1 13.339 5.719 Q 13.173 5.944 13.017 6.1 Q 12.967 6.45 12.767 6.725 L 12.567 7 A 0.468 0.468 0 0 1 12.542 7.119 Q 12.455 7.407 12.06 8.246 A 48.51 48.51 0 0 1 11.867 8.65 Q 11.167 10.1 10.467 12 A 185.188 185.188 0 0 0 10.042 13.023 Q 9.526 14.276 9.177 15.186 A 53.444 53.444 0 0 0 9.067 15.475 A 35.528 35.528 0 0 0 8.897 15.934 Q 8.602 16.75 8.57 16.999 A 0.418 0.418 0 0 0 8.567 17.05 Z M 36.367 31.85 Q 35.967 31.45 35.792 30.85 A 3.319 3.319 0 0 1 35.656 29.917 A 3.21 3.21 0 0 1 35.667 29.65 A 3.636 3.636 0 0 1 35.729 29.212 Q 35.774 28.993 35.846 28.81 A 1.927 1.927 0 0 1 35.917 28.65 Q 35.917 28.39 35.97 28.203 A 0.839 0.839 0 0 1 36.042 28.025 A 0.79 0.79 0 0 0 36.099 27.897 Q 36.131 27.804 36.131 27.716 A 0.478 0.478 0 0 0 36.117 27.6 Q 36.067 27.4 36.217 26.9 Q 36.367 26.4 36.517 25.95 Q 36.785 25.338 37.082 24.534 A 41.903 41.903 0 0 0 37.267 24.025 Q 37.667 22.9 38.017 21.8 Q 38.367 20.7 38.617 19.9 A 94.389 94.389 0 0 0 38.703 19.621 Q 38.862 19.107 38.909 18.928 A 2.319 2.319 0 0 0 38.917 18.9 A 0.637 0.637 0 0 1 38.985 18.596 Q 39.123 18.338 39.538 18.27 A 1.807 1.807 0 0 1 39.717 18.25 Q 40.317 18.05 40.617 18.225 A 0.914 0.914 0 0 1 40.779 18.352 Q 41.042 18.6 41.417 19.2 Q 41.787 19.57 41.729 20.282 A 2.731 2.731 0 0 1 41.717 20.4 Q 41.617 21.2 41.067 22.4 A 5.896 5.896 0 0 0 40.962 22.622 Q 40.849 22.873 40.716 23.218 A 21.701 21.701 0 0 0 40.592 23.55 Q 40.317 24.3 40.217 24.9 Q 40.017 25.3 39.742 26.025 A 24.525 24.525 0 0 0 39.427 26.902 A 20.125 20.125 0 0 0 39.267 27.4 A 2.426 2.426 0 0 0 39.206 27.573 Q 39.136 27.795 39.067 28.125 Q 38.967 28.6 38.817 29.125 Q 38.667 29.65 38.417 30.05 A 23.92 23.92 0 0 1 38.251 30.759 Q 37.896 32.166 37.592 32.45 A 0.335 0.335 0 0 1 37.355 32.544 Q 36.988 32.544 36.367 31.85 Z M 41.025 11.315 A 1.6 1.6 0 0 0 41.217 11.55 A 3.026 3.026 0 0 0 41.431 11.704 Q 42.013 12.085 42.542 12 Q 43.011 11.925 43.551 11.342 A 5.558 5.558 0 0 0 43.917 10.9 Q 44.571 10.101 44.855 9.552 A 2.464 2.464 0 0 0 45.017 9.175 A 1.227 1.227 0 0 0 45.044 9.075 Q 45.147 8.627 44.941 8.024 A 4.068 4.068 0 0 0 44.767 7.6 Q 44.474 7.131 44.155 6.843 A 1.944 1.944 0 0 0 43.692 6.525 A 1.266 1.266 0 0 0 43.626 6.496 Q 43.221 6.33 42.803 6.497 A 1.573 1.573 0 0 0 42.517 6.65 Q 42.317 6.7 42.167 6.875 A 0.725 0.725 0 0 0 42.103 6.961 A 0.535 0.535 0 0 0 42.017 7.25 Q 42.091 7.695 41.807 8.251 A 3.6 3.6 0 0 1 41.567 8.65 A 6.152 6.152 0 0 1 41.55 8.674 Q 41.169 9.223 40.86 9.408 A 0.629 0.629 0 0 1 40.617 9.5 Q 40.467 9.5 40.517 9.925 Q 40.567 10.35 40.767 10.825 A 3.497 3.497 0 0 0 40.863 11.036 Q 40.941 11.191 41.025 11.315 Z"
                  vector-effect="non-scaling-stroke"
                />
              </g>
            </svg>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-charcoal-gray">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-charcoal-gray">
          Or{" "}
          <Link
            to="/login"
            className="font-medium text-blinks-blue hover:text-blinks-blue-dark"
          >
            sign in to your account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            {/* Form Fields */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-charcoal-gray"
              >
                Full name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-charcoal-gray placeholder-charcoal-gray text-charcoal-gray focus:outline-none focus:ring-blinks-blue focus:border-blinks-blue focus:z-10 sm:text-sm"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-charcoal-gray"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-charcoal-gray placeholder-charcoal-gray text-charcoal-gray focus:outline-none focus:ring-blinks-blue focus:border-blinks-blue focus:z-10 sm:text-sm"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-charcoal-gray"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete=""
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-charcoal-gray placeholder-charcoal-gray text-charcoal-gray focus:outline-none focus:ring-blinks-blue focus:border-blinks-blue focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirm_password"
                className="block text-sm font-medium text-charcoal-gray"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  autoComplete=""
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-charcoal-gray placeholder-charcoal-gray text-charcoal-gray focus:outline-none focus:ring-blinks-blue focus:border-blinks-blue focus:z-10 sm:text-sm"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-blinks-yellow hover:bg-blinks-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blinks-blue"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-charcoal-gray"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-light-gray text-charcoal-gray">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-charcoal-gray rounded-md shadow-sm text-sm font-medium text-charcoal-gray bg-white hover:bg-gray-50"
                >
                  <img
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                    alt="Facebook"
                  />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-charcoal-gray rounded-md shadow-sm text-sm font-medium text-charcoal-gray bg-white hover:bg-gray-50"
                >
                  <img
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                    alt="Twitter"
                  />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-charcoal-gray rounded-md shadow-sm text-sm font-medium text-charcoal-gray bg-white hover:bg-gray-50"
                >
                  <img
                    className="h-6 w-6"
                    src="https://www.svgrepo.com/show/506498/google.svg"
                    alt="Google"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
