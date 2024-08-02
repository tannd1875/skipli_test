const express = require("express");
const {
  GeneratePostCaption,
  GetPostIdea,
  CreateCaptionsFromIdeas,
  SaveGeneratedContent,
  GetUserGeneratedContent,
  UnSaveContent,
} = require("../controllers/captionController");

const router = express.Router();

router.post("/caption", GeneratePostCaption);
router.post("/caption/idea", GetPostIdea);
router.post("/caption/idea-to-caption", CreateCaptionsFromIdeas);
router.post("/caption/save-content", SaveGeneratedContent);
router.get("/caption/saved-content", GetUserGeneratedContent);
router.post("/caption/delete", UnSaveContent);
module.exports = { routes: router };
