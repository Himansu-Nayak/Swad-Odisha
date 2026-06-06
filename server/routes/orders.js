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

// Get all orders (Admin only - ideally would have an admin role check)
router.get('/all', authMiddleware, (req, res) => {
  const db = readDB();
  res.json(db.orders);
});

// Update order status (Admin only)
router.patch('/:id/status', authMiddleware, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const db = readDB();
  
  const orderIndex = db.orders.findIndex(o => o.id === id);
  if (orderIndex === -1) return res.status(404).json({ error: 'Order not found' });
  
  db.orders[orderIndex].status = status;
  writeDB(db);
  
  res.json(db.orders[orderIndex]);
});

module.exports = router;
