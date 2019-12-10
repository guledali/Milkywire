# Getting started
To help you with the setup we have provided a PostgreSQL database that runs in Docker. To use this you need to have [Docker](https://www.docker.com/) and [Node](https://nodejs.org/) installed on your computer and then run these commands in your terminal.

1. Open this folder in your terminal
2. Run `docker-compose up`
3. Run `npm i`
4. Run `npm run init-db` to setup the database and populate it with data

If you don't want to run the database without docker you will have to update the `knexfile.js` file with the connection information for your database setup and then run `npm run init-db` to populate the database

# Dev
Run `npm run dev` to start nodemon

## Backend

The system needs a basic API to handle posts.

Create an api using Node.js, the user of the api should be able to

- Get all posts
- Get all posts for a specific impacter
- Update a post
- Delete a post

We have provided a basic setup with a PostgreSQL database that has a basic schema and is populated with data. Feel free to update the schema or exchange any framework that is part of the initial setup if you think that is necessary.

If you feel you have the time, you can also add so the user can create a new post by uploading an image to the API.
