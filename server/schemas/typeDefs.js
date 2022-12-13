const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Login {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [saveBook]!
  }

  type saveBook {
    _id: ID
    bookCount: Int
    saveBook: [saveBook]!
  }
  type savedBooks {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
    
  
  }


  type Auth {
    token: ID!
    Login: Login
  }

  type Query {
    Login: [Login]
    user(username: String): Login
    savedBooks (username: String): [saveBook]
    saveBook(BookId: ID!): saveBook
    me: Login

  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    Login(email: String!, password: String!): Auth
    saveBook(saveBookID: ID!): savedBooks
    removeBook(saveBookID: ID!): savedBooks
  }
`;

module.exports = typeDefs;
