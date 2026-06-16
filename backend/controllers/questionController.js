import Question from "../models/Question.js";
// Add Question
export const addQuestion = async (
  req,
  res
) => {
  try {
    const question =
      await Question.create(req.body);

    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Ques
export const deleteQuestion =
  async (req, res) => {
    try {
      await Question.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Question deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  //Update Ques
  export const updateQuestion =
  async (req, res) => {
    try {
      const question =
        await Question.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );

      res.json(question);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  export const getQuestions = async (
  req,
  res
) => {
  try {
    const questions =
      await Question.find().sort({
        createdAt: -1,
      });

    res.json(questions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};