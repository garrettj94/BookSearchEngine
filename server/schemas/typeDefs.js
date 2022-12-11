const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
  }

  type Book {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    User: [User]
    Book(_id: String): [Book]
  }

  type Mutation {
    createUser(Book1: )
    createBook(user1: String!, user2: String!): Book
    
  }
`;

module.exports = typeDefs;
