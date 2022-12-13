import { gql } from '@apollo/client';

export const QUERY_ME= gql`

  query me{
    me{
      _id
      username
      email
      saveBooks{
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

