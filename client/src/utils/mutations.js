import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login(email: String!, password: String!) {
    login(email: $email, password: $password) {
      token
      _id
      username
      email 
      password
      savedBooks
    
      
    }
  }
`;

export const CREATE_USER = gql`
  mutation login(email: String!, password: String!) {
    login(email: $email, password: $password) {
      token
      profile
      
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