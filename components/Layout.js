import Header from "./Header";
import SideNav from "./SideNav";
import React, { useState, useEffect } from "react";

import { request, gql } from "graphql-request";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const URL = `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`;

const query = gql`
  {
    navigationCollection(limit: 1) {
      items {
        navigationGroupsCollection {
          items {
            sys {
              id
            }
            title
            listOfLinksCollection {
              items {
                sys {
                  id
                }
                title
                slug
              }
            }
          }
        }
      }
    }
  }
`;

const requestHeaders = {
  authorization: `Bearer ${accessToken}`,
};

export default function Layout({ children }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    request({
      url: URL,
      document: query,
      requestHeaders: requestHeaders,
    }).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="overflow-hidden">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
            <div>Loading...</div>;
            <div className="lg:pl-[19.5rem]">
              <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
                <section className="mb-16 relative">{children}</section>
              </main>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Header />
        <div className="overflow-hidden">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
            <div>No data, please refresh the page to try again</div>;
            <div className="lg:pl-[19.5rem]">
              <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
                <section className="mb-16 relative">{children}</section>
              </main>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <SideNav data={data} />
          <div className="lg:pl-[19.5rem]">
            <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
              <section className="mb-16 relative">{children}</section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
