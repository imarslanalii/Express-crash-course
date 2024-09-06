const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const members = require('./members');

const app = express();

// init middleware
// app.use(logger)

// Get all membrs 
app.get('/api/members', (req, res) => res.json(members));

// get single member
app.get('/api/members/:id', (req, res) => {
    // res.send(req.params.id);
    res.json(members.filter( members => members.id === parseInt(req.params.id)));

});

// app.get('/', (req, res) => {
    // res.send('<h1>Hello World</h1')
    // res.sendFile(path.join(__dirname, 'public', 'index.html'))
    // set static folder 
// })
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));