import { gql } from '@apollo/client';

const GET_ALL_POST = gql `
query {
    posts {
      data {
        id
        attributes {
          Title
          Slug
          Content
          img {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`


export {GET_ALL_POST};
