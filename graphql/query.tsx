import { gql } from '@apollo/client';

const POST_BY_SLUG = gql `
query ($slug:String){
  posts (filters: {Slug: {eq: $slug}}){
    data {
      id
      attributes {
        Title
        Slug
        Content
        tags {
          data {
            id
            attributes{
              title
            }
          }
        }
        category{
          data {
            id
            attributes{
              title
            }
          }
        }
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


const GET_ALL_POST = gql `
query {
  posts {
    data {
      id
      attributes {
        Title
        Slug
        Content
        publishedAt
        tags {
          data {
            id
            attributes{
              title
            }
          }
        }
        category{
          data {
            id
            attributes{
              title
            }
          }
        }
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
const ALL_CATEGORY = gql `
query {
    category{
      data {
        id
        attributes{
          title
        }
      }
    }
}
`

const GET_LATEST_POST = gql `
query {
  posts (sort: "id:desc") {
    data {
      id
      attributes {
        Title
        Slug
        Content
        publishedAt
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

export {
  POST_BY_SLUG,
  GET_ALL_POST,
  ALL_CATEGORY,
  GET_LATEST_POST
};

