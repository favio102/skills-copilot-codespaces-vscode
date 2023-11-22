// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Initialize express
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Initialize comments
const commentsByPostId = {};

// Route handler
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

// Route handler
app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    // Get comments for specific post
    const comments = commentsByPostId[req.params.id] || [];

    // Add new comment to comments array
    comments.push({ id: commentId, content });

    // Update comments array
    commentsByPostId[req.params.id] = comments;

    // Send back comment
    res.status(201).send(comments);
});

// Listen on port 4001
app.listen(4001, () => {
    console.log('Listening on 4001');
});