const Result = require("../models/Result");

const saveResult = async (req, res) => {
  try {
    const { userId, subject, score, total } =
      req.body;

    const result = await Result.create({
      userId,
      subject,
      score,
      total,
    });

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUserResults = async (req, res) => {
  try {
    const { userId } = req.params;

    const results = await Result.find({
      userId,
    }).sort({ createdAt: -1 });

    res.json(results);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveResult,
  getUserResults,
};
