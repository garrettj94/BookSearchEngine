const { gql } = require('apollo-server-express');

const typeDefs = gql`

  input BookInput {
    _id: ID
    authors: String
    description: String
    title: String
    image: String
    link: String 
    

  }

  type Book {
    _id: ID
    authors: String
    description: String
    title: String
    image: String
    link: String 

  }
   
  
  type User{
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }


  type Auth {
    token: ID!
    user: [User]
  }

  type Query {
    me: [User]
    

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: BookInput): Book
    removeBook(saveBookID: ID!, input: BookInput): Book
  }
`;

module.exports = typeDefs;
