const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { readDB, writeDB } = require('../db');
const { SECRET } = require('../middleware/auth');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  const db = readDB();

  if (db.users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now().toString(), email, name, password: hashedPassword };
  
  db.users.push(newUser);
  writeDB(db);

  const token = jwt.sign({ userId: newUser.id }, SECRET, { expiresIn: '24h' });
  res.json({ token, user: { id: newUser.id, email, name } });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const db = readDB();

  const user = db.users.find(u => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '24h' });
  res.json({ token, user: { id: user.id, email, name: user.name } });
});

module.exports = router;
