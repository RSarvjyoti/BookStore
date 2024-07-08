const { Router } = require('express');
const { authenticate, authorize } = require('../middleware/auth');
const { getBookReview } = require('../controllers/bookController');

const bookRoute = Router();

bookRoute.get('/:id/reviews', authenticate, authorize['admin', 'customer'], getBookReview)

module.exports = bookRoute;