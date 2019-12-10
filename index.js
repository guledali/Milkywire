const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))


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

// Get all posts
app.get('/posts', (req, res) => {
  knex.select().from("co_posts").then((data) => {
    res.json(data)
  });
});

// Get all posts for a specific impacter
app.get('/posts/:id', (req, res) => {
  knex.where({ post_id: req.params.id }).from("co_posts").then((data) => {
    res.json(data)
  });
});

// Update a post
app.put('/posts/:id', (req, res) => {
  knex("co_posts")
    .where({ "post_id": req.params.id }).update({
      "post_id": req.body.post_id,
      "description": req.body.description,
      "type": req.body.type,
      "status": req.body.status,
      "data": {
          "media": req.body.data.media
      },
      "reaction_count": req.body.reaction_count,
      "impacter_id": req.body.impacter_id,
      "published_at": req.body.published_at,
      "created_at": req.body.created_at,
      "updated_at": req.body.updated_at
  }).then(() => {
      res.json("updated")
    })
  });

// Delete a post
app.delete('/posts/:id', (req, res) => {
  knex("co_posts")
    .where({ "post_id": req.params.id }).del().then(() => {
      res.json("deleted")
    })
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});