import { request, gql } from "graphql-request";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const URL = `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`;

const query = gql`
  {
    navGroupCollection {
      items {
        title
      }
    }
  }
`;

const requestHeaders = {
  authorization: `Bearer ${accessToken}`,
};

export async function fetchContent() {
  // add a try / catch loop for nicer error handling
  try {
    const res = await request({
      url: URL,
      document: query,
      requestHeaders: requestHeaders,
    });

    const { data } = await res.json();
    return data;
  } catch (error) {
    // add a descriptive error message first,
    // so we know which GraphQL query caused the issue
    console.error(
      `There was a problem retrieving entries with the query ${query}`
    );
    console.error(error);
  }
}
