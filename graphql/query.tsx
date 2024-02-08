import { gql } from '@apollo/client';

const POST_BY_SLUG = gql `
query ($slug:String){
  posts (filters: {slug: {eq: $slug}}){
    data {
      id
      attributes {
        title
        slug
        content
        updatedAt
        meta_description
        meta_title
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
              slug
            }
          }
        }
        img {
          data {
            attributes {
              formats
              url
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
        title
        slug
        content
        publishedAt
        updatedAt
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
              url
              ext
              name
              hash
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
        title
        slug
        content
        publishedAt
        img {
          data {
            attributes {
              url
              ext
              name
              hash
            }
          }
        }
      }
    }
  }
}
`

const ALL_TAG = gql `
query {
    tags{
      data {
        id
        attributes{
          title
        }
      }
    }
}
`



export {
  POST_BY_SLUG,
  GET_ALL_POST,
  ALL_CATEGORY,
  GET_LATEST_POST,
  ALL_TAG,
};

