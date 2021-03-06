const { NotAcceptable } = require('rest-api-errors');
const { sendOne } = require('../../middleware');
const _ = require('lodash');

const create = ({ Answer }, { config }) => async (req, res, next) => {
  try {
    const answer = new Answer();
    if (!req.body.title) {
      throw new NotAcceptable(405, 'Should by title}');
    }
    _.extend(answer, req.body);
    await answer.save();

    return sendOne(res, { answer });
  } catch (error) {
    next(error);
  }
};

module.exports= { create };
