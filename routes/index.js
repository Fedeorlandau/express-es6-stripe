import express from 'express';
import stripeController from '../controllers/stripe'

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/stripe', stripeController.index);

export default router;
