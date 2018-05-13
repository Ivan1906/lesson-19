const list = ({ Answer }, { config }) => async (req, res, next) => {
  let { limit, skip } = req.query;
  skip = skip ? parseInt(skip, 10) : 0;
  limit = limit ? parseInt(limit, 10) : 100;

  try {
    const answers = await Answer.find({})
      .skip(skip)
      .limit(limit)
      .sort({ _id: -1 });

    res.status(200).send({ answers });
  } catch (error) {
    next(error);
  }
};

module.exports= { list };
