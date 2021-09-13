//|EXPRESS|
const express = require('express');
const path = require('path');
// const db = require('./config/connection');
const routes = require('./controllers');
//| SEQUELIZE |
const sequelize = require('./config/connection');
// const { typeDefs, resolvers } = require('./schemas');
// const { ApolloServer } = require('apollo-server-express');
// const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(routes); 

app.get('*', (req, res) => {
    const buildPath = path.join(__dirname, 'build', 'index.html');
    res.sendFile(buildPath);
  });

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});

//! For mongoDB
//const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });
//
// async function startServer () {
//   await server.start();
//   server.applyMiddleware({ app });

//   app.use(express.urlencoded({ extended: true }));
//   app.use(express.json());


//   // if we're in production, serve client/build as static assets
//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
//   };

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
//   });  

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`🌍 Now listening on localhost:${PORT}  `)
//       console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
//     });
//   });
// }

// startServer()