const express = require('express');

const { errorHandler } = require('../middleware');
// list of models here
const { Answer } = require('../models/answer');
const { Question } = require('../models/question');
const { Vote } = require('../models/vote');
const { User } = require('../models/user');

// list of controllers here
const answers = require('../controllers/answers');
const questions = require('../controllers/questions');
const votes = require('../controllers/votes');
const auth = require('../controllers/auth');

// combine models ino one object
const models = { Answer, Question, Vote, User };

const routersInit = config => {
  const router = express();

  // register api points
  router.use('/answers', answers(models, { config }));
  router.use('/questions', questions(models, { config }));
  router.use('/votes', votes(models, { config }));
  router.use('/auth', auth(models, { config }));

  // catch api all errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;