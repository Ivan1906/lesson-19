const { NotAcceptable } = require('rest-api-errors');
const { sendOne } = require('../../middleware');
const _ = require('lodash');

const create = ({ Vote }, { config }) => async (req, res, next) => {
  try {
    const vote = new Vote();
    if (!req.body.title) {
      throw new NotAcceptable(405, 'Should by title}');
    }
    _.extend(question, req.body);
    await vote.save();

    return sendOne(res, { vote });
  } catch (error) {
    next(error);
  }
};

module.exports= { create };
