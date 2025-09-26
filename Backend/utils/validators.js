exports.validatePostContent = (content) => {
  if (!content || content.trim().length === 0) {
    throw new Error('Content cannot be empty 📝');
  }

};
