import { MARKS, BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

import Heading_1 from "./Heading_1";
import Heading_2 from "./Heading_2";
import Heading_3 from "./Heading_3";
import Heading_4 from "./Heading_4";
import Heading_5 from "./Heading_5";
import Heading_6 from "./Heading_6";
import Hyperlink from "./Hyperlink";
import OrderedList from "./OrderedList";
import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";

export default function PageSection({ heading, body }) {
  const richTextOptions = {
    renderMark: {
      [MARKS.CODE]: (node, children) => {
        return <code className="text-cyan-900 dark:text-cyan-500">{node}</code>;
      },
    },

    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const img = body.links.assets.block.find(
          (i) => i.sys.id === node.data.target.sys.id
        );
        return (
          <picture>
            <Image
              key={img?.sys.id}
              src={img?.url}
              alt=""
              width={img?.width}
              height={img?.height}
              loading="lazy"
            />
          </picture>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mt-4">{children}</p>
      ),

      [BLOCKS.HEADING_1]: (node, children) => <Heading_1>{children}</Heading_1>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading_2>{children}</Heading_2>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading_3>{children}</Heading_3>,
      [BLOCKS.HEADING_4]: (node, children) => <Heading_4>{children}</Heading_4>,
      [BLOCKS.HEADING_5]: (node, children) => <Heading_5>{children}</Heading_5>,
      [BLOCKS.HEADING_6]: (node, children) => <Heading_6>{children}</Heading_6>,
      [BLOCKS.OL_LIST]: (node, children) => (
        <OrderedList>{children}</OrderedList>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <UnorderedList>{children}</UnorderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <ListItem node={node}>{children}</ListItem>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Hyperlink node={node}>{children}</Hyperlink>
      ),
    },
  };

  return (
    <>
      <Heading_2 text={heading} />

      {body ? (
        <div className="max-w-4xl">
          {documentToReactComponents(body.json, richTextOptions)}
        </div>
      ) : null}
    </>
  );
}
