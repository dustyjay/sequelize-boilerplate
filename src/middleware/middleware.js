export const modifyMesaage = (req, res, next) => {
  // req.body.description = `SAYS: ${req.body.description}`;
  next();
};

export const performAsyncAction = async (req, res, next) => {
  try {
    // Demo for async middleware
    await axios.get('https://picsum.photos/id/0/info');
    next();
  } catch (err) {
    next(err);
  }
};
