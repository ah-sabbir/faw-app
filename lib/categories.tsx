import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ALL_CATEGORY, GET_ALL_POST } from "@/graphql/query"

// apolloclient for api request
const client = new ApolloClient({
  uri: process.env.STRAPI_API_URL+"/graphql",
  headers: {
      'Authorization': 'Bearer '+process.env.STRAPI_API_KEY
  },
  cache: new InMemoryCache()
});

// function to get all the posts
const GET_ALL_CATEGORY = async () => {
    try{
        const { data } = await client.query({
            query: ALL_CATEGORY,
          })
          const categories = data?.categories?.data
          return categories
    }catch(e){
        return new Error()
    }
};

export default GET_ALL_CATEGORY;