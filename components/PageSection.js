import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function PageSection({ heading, body }) {
  const richTextOptions = {
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
    },
  };

  return (
    <>
      <h1 className="mt-8 text-3xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
        {heading}
      </h1>
      {body ? (
        <div>{documentToReactComponents(body.json, richTextOptions)}</div>
      ) : null}
    </>
  );
}
