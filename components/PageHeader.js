import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

import Heading_1 from "./Heading_1";
import Heading_2 from "./Heading_2";
import Heading_3 from "./Heading_3";
import Heading_4 from "./Heading_4";
import Heading_5 from "./Heading_5";
import Heading_6 from "./Heading_6";

export default function PageHeader({ title, headerHeadline, headerBody }) {
  const richTextOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const img = headerBody.links.assets.block.find(
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
      [BLOCKS.HEADING_1]: (node, children) => <Heading_1>{children}</Heading_1>,
    },
    [BLOCKS.HEADING_2]: (node, children) => <Heading_2>{children}</Heading_2>,
    [BLOCKS.HEADING_3]: (node, children) => <Heading_3>{children}</Heading_3>,
    [BLOCKS.HEADING_4]: (node, children) => <Heading_4>{children}</Heading_4>,
    [BLOCKS.HEADING_5]: (node, children) => <Heading_5>{children}</Heading_5>,
    [BLOCKS.HEADING_6]: (node, children) => <Heading_6>{children}</Heading_6>,
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
