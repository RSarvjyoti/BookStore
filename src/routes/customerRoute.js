const { Router } = require('express');
const { authenticate, authorize } = require('../middleware/auth');
const { getCustomerOrders } = require('../controllers/customerController');

const customerRoute = Router();

customerRoute.get('/:id/orders', authenticate, authorize['admin', 'customer'], getCustomerOrders);

module.exports = customerRoute;