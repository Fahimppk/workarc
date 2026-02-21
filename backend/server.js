const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'WebArc Studio API is running' });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required (name, email, message)',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address',
    });
  }

  // Log form data (ready for database integration)
  console.log('--- New Contact Form Submission ---');
  console.log('Name:   ', name);
  console.log('Email:  ', email);
  console.log('Message:', message);
  console.log('Time:   ', new Date().toISOString());
  console.log('----------------------------------');

  // TODO: Save to database here

  res.status(200).json({
    success: true,
    message: 'Thank you for reaching out! We will get back to you soon.',
  });
});

app.listen(PORT, () => {
  console.log(`WebArc Studio API running on http://localhost:${PORT}`);
});
