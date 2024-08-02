const firebase = require("../firebase");
const {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} = require("firebase/firestore");

const { handleTextGenerated, handleIdeaGenerated } = require("../util");

const db = getFirestore(firebase);
const captionCol = collection(db, "caption");

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("...");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Caption = require("../models/caption");

const GeneratePostCaption = async (req, res) => {
  try {
    const socialNetwork = req.body.socialNetwork;
    const subject = req.body.subject;
    const tone = req.body.tone;

    const result = await model.generateContent(
      "10 paragraphs as caption without classify, title, order " +
        socialNetwork +
        " post: " +
        subject +
        ", style " +
        tone +
        ", each caption has hastag"
    );
    const response = result.response;
    const text = response.text();
    res.send(handleTextGenerated(text));
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetPostIdea = async (req, res) => {
  try {
    const topic = req.body.topic;

    const result = await model.generateContent(
      "10 idea without classify, without title for idea: " + topic
    );
    const response = result.response;
    const text = response.text();
    res.send(handleIdeaGenerated(text));
  } catch (error) {
    res.status(400).send(error);
  }
};

const CreateCaptionsFromIdeas = async (req, res) => {
  try {
    const idea = req.body.idea;

    const result = await model.generateContent(
      "Give me 10 caption without classify, without title for idea: " + idea
    );
    const response = result.response;
    const text = response.text();
    res.send(handleIdeaGenerated(text));
  } catch (error) {
    res.status(400).send(error);
  }
};

const SaveGeneratedContent = async (req, res) => {
  try {
    const topic = req.body.topic;
    const data = req.body.data;
    const phoneNumber = req.body.phoneNumber;
    await addDoc(captionCol, {
      topic: topic,
      data: data,
      phoneNumber: phoneNumber,
      id: captionCol.id,
    });
    res.send("Save content successfully!");
    return true;
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetUserGeneratedContent = async (req, res) => {
  try {
    const captionArray = [];
    const phoneNumber = req.body.phoneNumber;
    const captionSnapshot = await getDocs(captionCol);
    captionSnapshot.docs.map((doc) => {
      if (doc.data().phoneNumber == phoneNumber) {
        const caption = new Caption(doc.data().topic, doc.data().data, doc.id);
        captionArray.push(caption);
      }
    });
    res.send(captionArray);
  } catch (error) {
    res.status(400).send(error);
  }
};

const UnSaveContent = async (req, res) => {
  try {
    const captionId = req.body.id;

    const captionDocumentRef = doc(captionCol, captionId);
    await deleteDoc(captionDocumentRef);
    res.send("Remove successfully!");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};
module.exports = {
  GeneratePostCaption,
  GetPostIdea,
  CreateCaptionsFromIdeas,
  SaveGeneratedContent,
  GetUserGeneratedContent,
  UnSaveContent,
};
