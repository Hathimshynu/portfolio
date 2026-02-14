
require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/project');

const projects = [
  { title: 'Booking System', description: 'Laravel booking clone (demo)', tech: ['React','Node','MongoDB'], repoUrl: '', liveUrl: '', imageUrl: '' },
  { title: 'Portfolio', description: 'This portfolio site', tech: ['React','Vite'], repoUrl: '', liveUrl: '', imageUrl: '' }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Project.deleteMany({});
    await Project.insertMany(projects);
    console.log('Seeded');
    process.exit(0);
  })
  .catch(err => { console.error(err); process.exit(1); });
