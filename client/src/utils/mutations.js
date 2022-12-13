import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login(email: String!, password: String!) {
    login(email: $email, password: $password) {
      Token
      user{
      _id
      username
     } 
      
        
      }
    
      
    }
  
`;

export const CREATE_USER = gql`
  mutation createUser(username: String! ,email: String!, password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      Token
      user{
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