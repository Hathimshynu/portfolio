// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/project');

const projects = [
  {
    title: "Buddy Invoice System - SaaS Finance Automation",
    description: "Enterprise-level SaaS platform automating invoice generation and document workflow management.",
    tech: [
      "PHP",
      "Laravel 8",
      "MySQL",
      "REST API",
      "Events & Listeners",
      "Jobs",
      "Caching",
      "Laravel Elfinder",
      "Ajax",
      "Bootstrap",
      "Git"
    ],
    highlights: [
      "Designed secure backend modules using MVC architecture",
      "Built role-based file upload & document management system",
      "Implemented Events, Listeners & Jobs for background processing",
      "Improved page load performance by 32% via REST API optimization",
      "Implemented user-wise storage management and validation"
    ],
    role: "Backend / Web Application Developer",
    company: "Enterprise SaaS Platform",
    createdAt: new Date()
  },
  {
    title: "Day Mart - E-Commerce Platform",
    description: "Full-stack Laravel-based e-commerce platform with mobile API support and secure Stripe integration.",
    tech: [
      "Laravel 8",
      "MySQL",
      "Stripe Integration",
      "REST API",
      "Caching",
      "JavaScript",
      "Bootstrap",
      "Git"
    ],
    highlights: [
      "Developed REST APIs for mobile application team",
      "Integrated secure Stripe payment gateway",
      "Implemented server-side caching improving performance by 25%",
      "Designed scalable and optimized MySQL database schema"
    ],
    role: "Full Stack Developer",
    company: "E-Commerce System",
    createdAt: new Date()
  },
  {
    title: "Emaid Projects - Dubai Cleaning Services App",
    description: "Real-time booking and slot-based scheduling system for Dubai-based cleaning services.",
    tech: [
      "PHP",
      "Laravel 8",
      "MySQL",
      "Ajax",
      "Authentication",
      "MVC Architecture"
    ],
    highlights: [
      "Implemented slot-based scheduling for efficient booking management",
      "Built authentication & authorization mechanisms",
      "Optimized backend queries for scalability",
      "Enhanced performance and application security"
    ],
    role: "Software Developer",
    company: "Dubai Cleaning Services Platform",
    createdAt: new Date()
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await Project.deleteMany({});
    console.log("Old projects removed");

    await Project.insertMany(projects);
    console.log("Resume projects inserted successfully");

    process.exit();
  } catch (err) {
    console.error("Seeding error:", err.message);
    process.exit(1);
  }
}

seedDatabase();
