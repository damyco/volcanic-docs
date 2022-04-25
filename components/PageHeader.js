import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

import Heading_1 from "./Heading_1";

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
  };

  return (
    <>
      <p className="mb-4 text-sm leading-6 font-semibold text-sky-500">
        {title}
      </p>

      <h1 className="text-3xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
        {headerHeadline}
      </h1>

      {headerBody ? (
        <div>{documentToReactComponents(headerBody.json, richTextOptions)}</div>
      ) : null}
    </>
  );
}
