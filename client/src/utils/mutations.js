import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login(email: String!, password: String!) {
    login(email: $email, password: $password) {
      Token
      profile
    
      
    }
  }
`;

export const CREATE_USER = gql`
  mutation signup(email: String!, password: String!) {
    signup(email: $email, password: $password) {
      Token
      profile{_id
      username
      email 
      password
      }
      
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($saveBook: BookInput!) {
    saveBook(saveBook: $saveBook) {
      _id
      username
      email
      bookCount
      SavedBooks{
        authors
        description
        bookId
        image
        link
        title
        
      }
      
    }
  }
`;

export const REMOVE_BOOK = gql`
   mutation removeBook($removeBook: BookInput!) {
    removeBook(removeBook: $removeBook) {
      _id
      username
      email
      bookCount
      SavedBooks{
        authors
        description
        bookId
        image
        link
        title
        }
  }
   }
`
  ;