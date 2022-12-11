import { gql } from '@apollo/client';

export const LOG_IN = gql`
{
    login {
      email
      password
      
    }
  }
`;

