const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// POST /api/contact - Handle form submission
router.post('/', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email is invalid'),
  body('message').notEmpty().withMessage('Message is required')
], async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Save to database (optional)
    const contact = new Contact(req.body);
    await contact.save();
    
    // Log to console (for demonstration)
    console.log('New contact form submission:', req.body);
    
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

module.exports = router;