import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
export const setMetaArray = meta => {
  meta = !meta ? [] : meta;
  return [].concat([], meta);
};

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

const SEO = ({ schema, title, meta }) => (
  <Helmet
    htmlAttributes={{
      lang: "en",
      itemscope: undefined,
      itemtype: `http://schema.org/${schema}`
    }}
    title={title}
    meta={setMetaTags(meta)}
  />
);

SEO.propTypes = {
  schema: PropTypes.string,
  title: PropTypes.string,
  meta: PropTypes.objectOf(PropTypes.object)
};

export default SEO;
