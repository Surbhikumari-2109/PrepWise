import Subject from "../models/Subject.js";

export const addSubject = async (
  req,
  res
) => {
  try {

    const existing =
      await Subject.findOne({
        name: req.body.name,
      });

    if (existing) {
      return res.status(400).json({
        message:
          "Subject already exists",
      });
    }

    const subject =
      await Subject.create(req.body);

    res.status(201).json(subject);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getSubjects =
  async (req, res) => {
    try {
      const subjects =
        await Subject.find().sort({
          name: 1,
        });

      res.json(subjects);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const deleteSubject =
  async (req, res) => {
    try {
      await Subject.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Subject deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };