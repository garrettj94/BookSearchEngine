import { gql } from '@apollo/client';

export const QUERY_ME= gql`

  query me{
    me{
      token
      username
      email
      _id
      savedBooks{
        bookCount
        authors
        description
        bookId
        image
        link
        title}

    }


  } 
  
    
  
  
`;

