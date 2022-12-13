import { gql } from '@apollo/client';

export const QUERY_LOGIN = gql`
  login(email: String!, password: String!){
    login(email: $email, password: $password) {
      Token
      profile
      
    
      
    }
    }
  
`;

