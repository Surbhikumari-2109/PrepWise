import Result from "../models/Result.js";

export const saveResult = async (req, res) => {
  try {
    const { userId, userName, subject, score, total } = req.body;

    const result = await Result.create({
      userId,
      userName,
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

export const getUserResults = async (req, res) => {
  try {
    const { userId } = req.params;

    const results = await Result.find({
      userId,
    }).sort({ createdAt: -1 });

    res.json(results);
  } catch (error) {
     console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Result.aggregate([
      {
        $group: {
          _id: "$userName",
          totalScore: { $sum: "$score" },
        },
      },
      {
        $sort: {
          totalScore: -1,
        },
      },
    ]);

    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
