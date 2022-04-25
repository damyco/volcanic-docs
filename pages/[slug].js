import PageHeader from "../components/PageHeader";
import PageSection from "../components/PageSection";

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
              title
              headerHeadline
              headerBody {
                json
                links {
                  assets {
                    block {
                      url
                      width
                      height
                      sys {
                        id
                      }
                    }
                  }
                }
              }
              sectionsCollection (limit: 30) {
                items {
                  sys {
                    id
                  }
                  heading
                  body {
                    json
                    links {
                      assets {
                        block {
                          url
                          width
                          height
                          sys {
                            id
                          }
                        }
                      }
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

    if (data.pageCollection.items.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: data.pageCollection.items[0],
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default function Content(props) {
  const { title, headerHeadline, headerBody, sectionsCollection } = props;

  return (
    <main>
      <PageHeader
        title={title}
        headerHeadline={headerHeadline}
        headerBody={headerBody}
      />

      {sectionsCollection
        ? sectionsCollection.items.map((section) => {
            return (
              <PageSection
                key={section.sys.id}
                heading={section.heading}
                body={section.body}
              />
            );
          })
        : null}
      {}
    </main>
  );
}
