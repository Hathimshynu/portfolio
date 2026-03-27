// routes/projects.js
const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// GET all projects with pagination
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Set caching headers (cache for 1 hour)
    res.set('Cache-Control', 'public, max-age=3600');
    
    const projects = await Project.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
    
    const total = await Project.countDocuments();
    
    res.json({
      projects,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a project (admin/seeding)
router.post('/', async (req, res) => {
  try {
    const p = new Project(req.body);
    await p.save();
    res.status(201).json(p);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
