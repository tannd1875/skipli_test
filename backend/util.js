const handleTextGenerated = (text) => {
  const Array = text.split("\n\n");
  return Array;
};

const handleIdeaGenerated = (text) => {
  const Array = text.split("\n");
  return Array;
};

module.exports = { handleTextGenerated, handleIdeaGenerated };
