import gql from 'graphql-tag';


export const allArticlesQuery = gql`
    query allArticlesQuery{
  articles {
    data {
      id
      attributes {
        title
        date
        slug
        description
        body
      }
    }
  }
}
    `

export const singleArticleQuery = gql`
  query singleArticleQuery($id: ID!) {
    article(id: $id) {
      data {
        id
        attributes {
          title
          description
          body
          slug
        }
      }
    }
  }
`;

export const homePageQuery = gql`
query homePageQuery{
  page(id:1){
  data{
    id
    attributes{
      slug 
      title 
      blocks{
        __typename
        ... on ComponentBlocksHero{
          id 
          title 
          text 
          image {
          \tdata{
            \tattributes{
              \turl
            }
          }
        }
          Card{title text image{data{attributes{url}}} }
          
        }
      }
    }
  }
}
}
`


    
