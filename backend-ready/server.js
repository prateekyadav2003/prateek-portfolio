// Boilerplate server configuration for future Node/Express API scaling

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Middleware for JWT check
const verifyJWT = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: "No token provided." });
  
  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET || 'secret', (err, decoded) => {
    if (err) return res.status(401).json({ message: "Failed to authenticate token." });
    req.userId = decoded.id;
    next();
  });
};

// API Endpoints Placeholders
app.get('/api/projects', (req, res) => {
  res.json({ message: "GET projects list database integration placeholder" });
});

app.post('/api/projects', verifyJWT, (req, res) => {
  res.json({ message: "Authenticated POST new project placeholder" });
});

app.get('/api/certificates', (req, res) => {
  res.json({ message: "GET certificates list placeholder" });
});

app.post('/api/contact', (req, res) => {
  // Integrate NodeMailer or SendGrid here
  const { name, email, subject, message } = req.body;
  console.log(`Received contact email from ${name}:`, { email, subject, message });
  res.status(200).json({ success: true, message: "Email parsed and sent successfully!" });
});

// App listener
app.listen(PORT, () => {
  console.log(`Portfolio Scalable Server running on http://localhost:${PORT}`);
});
