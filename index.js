const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

var knex = require('knex')({
  client: "postgresql",
  connection: {
    database: 'impacter-posts-dev',
    host: 'localhost',
    port: 5435,
    user: 'dev',
    password: 'dev',
  }
});

// get all posts
app.get('/posts', (req, res) => {
  knex.select().from("co_posts").then(function(data) {
    res.send(data)
  });
});

// Get all posts for a specific impacter /posts/:id  by using post_id
app.get('/posts/:id', (req, res) => {
  knex.where({ post_id: req.params.id }).from("co_posts").then(function(data) {
    res.send(data)
  });
});

// knex('users')
//   .where({ email: 'hi@example.com' })
//   .then(rows => ···)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});