// GET_ALL_POSTS
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ALL_CATEGORY, ALL_TAG, GET_ALL_POST, GET_LATEST_POST, POST_BY_SLUG } from "@/graphql/query"

// apolloclient for api request
export const client = new ApolloClient({
  uri: process.env.STRAPI_API_URL+"/graphql",
  headers: {
      'Authorization': 'Bearer '+process.env.STRAPI_API_KEY
  },
  cache: new InMemoryCache({
    typePolicies: {
        Query: {
          fields: {
            YOUR_FIELD: {
              merge(existing = [], incoming: any) {
                return { ...existing, ...incoming };
                // this part of code is depends what you actually need to do, in my 
                // case i had to save my incoming data as single object in cache
              }
            }
          }
        }
      }
  })
});

// function to get all the posts
const ALL_POSTS = async () => {
    try{
        const { data } = await client.query({
            query: GET_ALL_POST,
          })
          const posts = data?.posts?.data
          return posts
    }catch(e){
        return new Error()
    }
};

// function to get latest posts
const LATEST_POST = async () => {
    try {
        const { data } = await client.query({
            query: GET_LATEST_POST,
            })
            return data?.posts?.data[0]
    } catch (error) {
        console.log(error)
        return new Error()
    }
}


const GET_POST_BY_SLUG = async (slug:String) => {
    try {
        const { data } = await client.query({
            query: POST_BY_SLUG,
            variables: {slug: slug}
          })
          const posts = data?.posts?.data
          return posts[0]
    } catch (error) {
        return new Error()
    }
}


const GET_CATEGORY = async () => {
    try {
        const { data } = await client.query({
            query: ALL_CATEGORY
        })
    } catch (error) {
        return new Error()
    }
}

const GET_TAGS = async () => {
    try {
        const { data } = await client.query({
            query: ALL_TAG
        })
    } catch (error) {
        return new Error()
    }
}



// ALL_CATEGORY,


export {
    ALL_POSTS,
    LATEST_POST,
    GET_POST_BY_SLUG,
    GET_CATEGORY,
    GET_TAGS
}
