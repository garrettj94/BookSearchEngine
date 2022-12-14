import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser(email: String!, password: String!) {
      loginUser(email: $email, password: $password) {
      token
      username
      email
      _id

    

      
        
      }
    
      
    }
  
`;

export const ADD_USER = gql`
  mutation addUser(username: String! ,email: String!, password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      _id
      username
      email
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

export const SAVE_BOOK = gql`
  mutation saveBook($saveBook: BookInput!) {
    saveBook(saveBook: $saveBook) {
      _id
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