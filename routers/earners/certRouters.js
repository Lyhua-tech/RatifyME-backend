const { upload } = require("../../app");
const express = require("express");
const router = express.Router();

const certContollers = require("../../controllers/earners/certControllers");

router
    .route("/:achievementId/earner/:earnerId")
    .post(upload.single("certFile"), certContollers.uploadCerti);

module.exports = router;
