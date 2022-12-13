import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login(email: String!, password: String!) {
    login(email: $email, password: $password) {
      token
      username
      email
      _id

    

      
        
      }
    
      
    }
  
`;

export const CREATE_USER = gql`
  mutation createUser(username: String! ,email: String!, password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
       profile{
          _id
          username
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