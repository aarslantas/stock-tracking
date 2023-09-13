const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const { PubSub } = require("graphql-subscriptions");

const app = express();
const pubsub = new PubSub();

mongoose.connect(
  "mongodb+srv://tubaarslantas2469:A9uYFEMFJWFF7MDV@cluster0.lclu4lr.mongodb.net/?retryWrites=true&w=majority"
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res, pubsub }),
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log("Server is running on http://localhost:4000/graphql");
});
