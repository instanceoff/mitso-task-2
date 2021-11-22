const router = require('express').Router();
const Dish = require('./category.model');
const dishesService = require('./category.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  // res.json(users.map(User.toResponse));
});

module.exports = router;
