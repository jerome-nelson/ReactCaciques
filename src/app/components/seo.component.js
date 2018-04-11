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
