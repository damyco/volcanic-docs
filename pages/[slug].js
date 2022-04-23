const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export async function getStaticPaths() {
  try {
    const fetchParams = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `
        {
          navigationCollection(limit: 1) {
            items {
              navigationGroupsCollection {
                items {
                  listOfLinksCollection {
                    items {
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      `,
      }),
    };
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`,
      fetchParams
    );

    const { data } = await res.json();

    const nav = data.navigationCollection.items.map((item) => item);
    const navGroups = nav[0].navigationGroupsCollection.items.map(
      (item) => item
    );
    const navLinks = navGroups[0].listOfLinksCollection.items.map((item) => {
      return { params: { slug: item.slug } };
    });

    return {
      paths: navLinks,
      fallback: true,
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const fetchParams = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `
        {
          pageCollection(limit: 1, where: { slug: "${params.slug}" }) {
            items {
              headerHeadline
              headerBody {
                json
              }
              sectionsCollection {
                items {
                  heading
                  body {
                    json
                  } 
                }
              }
            }
          }
        }
      `,
      }),
    };
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`,
      fetchParams
    );

    const { data } = await res.json();

    if (data.pageCollection.items.length === 0) {
      return {
        notFound: true,
      };
    }
    return {
      props: data.pageCollection.items[0],
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

export default function Content({ headerHeadline }) {
  return (
    <main>
      <h1>{headerHeadline}</h1>
      <p></p>
    </main>
  );
}
