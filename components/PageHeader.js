import { BLOCKS, INLINES } from "@contentful/rich-text-types";
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

export default function PageHeader({ title, headerHeadline, headerBody }) {
  const richTextOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const img = headerBody.links.assets.block.find(
          (i) => i.sys.id === node.data.target.sys.id
        );
        return (
          <div className="my-1">
            <Image
              key={img?.sys.id}
              src={img?.url}
              alt=""
              width={img?.width}
              height={img?.height}
              loading="lazy"
            />
          </div>
        );
      },
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
      <p className="mb-4 text-lg leading-6 font-semibold text-sky-500">
        {title}
      </p>

      <Heading_1 text={headerHeadline} />

      {headerBody ? (
        <div>{documentToReactComponents(headerBody.json, richTextOptions)}</div>
      ) : null}
    </>
  );
}
