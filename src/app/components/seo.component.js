import React from "react";
import Helmet from "react-helmet";

export const setMetaArray = meta => {
  meta = !meta ? [] : meta;
  return [].concat([], meta);
};

// Used instead of store
// TODO: Integrate Redux and store these as config
// TODO: Type definition
export const setMetaTags = ({ title, description }) => {
  let metaObjects = [];
  [title, description].forEach(metaObj => {
    metaObjects = [].concat(metaObjects, [
      { name: metaObj.name, content: metaObj.value },
      { itemprop: metaObj.name, content: metaObj.value }
    ]);
  });
  return metaObjects;
};

const mockData = {
  title: "Test Website"
};

const mockProps = {
  schema: "CreativeWork",
  title: mockData.title,
  meta: setMetaTags({
    title: { name: "title", value: "Test Title" },
    description: { name: "description", value: "Test Description" }
  })
};

const SEO = () => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
        itemscope: undefined,
        itemtype: `http://schema.org/${mockProps.schema}`
      }}
      title={mockProps.title}
      meta={mockProps.meta}
    />
  );
};

export default SEO;
