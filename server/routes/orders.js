const express = require('express');
const { readDB, writeDB } = require('../db');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.post('/', authMiddleware, (req, res) => {
  const { items, total, address } = req.body;
  const db = readDB();

  const newOrder = {
    id: Math.random().toString(36).substring(2, 9).toUpperCase(),
    userId: req.userId,
    items,
    total,
    address,
    status: 'Received',
    timestamp: Date.now()
  };

  db.orders.push(newOrder);
  writeDB(db);

  res.json(newOrder);
});

router.get('/', authMiddleware, (req, res) => {
  const db = readDB();
  const userOrders = db.orders.filter(o => o.userId === req.userId);
  res.json(userOrders);
});

module.exports = router;
