const express = require('express');
const { readDB, writeDB } = require('../db');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// Public: Get all menu items
router.get('/', (req, res) => {
  const db = readDB();
  res.json(db.menu);
});

// Admin: Add new menu item
router.post('/', authMiddleware, (req, res) => {
  const db = readDB();
  const newItem = { ...req.body, id: Date.now().toString() };
  db.menu.push(newItem);
  writeDB(db);
  res.json(newItem);
});

// Admin: Update menu item
router.put('/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const index = db.menu.findIndex(item => item.id === id);
  
  if (index === -1) return res.status(404).json({ error: 'Item not found' });
  
  db.menu[index] = { ...db.menu[index], ...req.body };
  writeDB(db);
  res.json(db.menu[index]);
});

// Admin: Delete menu item
router.delete('/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  const db = readDB();
  const initialLength = db.menu.length;
  db.menu = db.menu.filter(item => item.id !== id);
  
  if (db.menu.length === initialLength) {
    return res.status(404).json({ error: 'Item not found' });
  }
  
  writeDB(db);
  res.json({ message: 'Item deleted' });
});

module.exports = router;
