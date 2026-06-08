import express from 'express';
import { getAll, getOne, createOne, updateOne, deleteOne } from '../controllers/factoryHandler.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const createGenericRouter = (Model, roles = []) => {
  const router = express.Router();

  // All generic routes are protected. Only specific roles can mutate if roles are provided.
  router.route('/')
    .get(protect, getAll(Model))
    .post(protect, roles.length ? authorize(...roles) : (req, res, next) => next(), createOne(Model));

  router.route('/:id')
    .get(protect, getOne(Model))
    .put(protect, roles.length ? authorize(...roles) : (req, res, next) => next(), updateOne(Model))
    .delete(protect, roles.length ? authorize(...roles) : (req, res, next) => next(), deleteOne(Model));

  return router;
};

export default createGenericRouter;
