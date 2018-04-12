import { setMetaArray, setMetaTags } from "./seo.component";

describe("SEO Component Methods", () => {
  describe("setMetaTags", () => {
    it("should create array", () => {
      expect(setMetaArray()).toEqual([]);
    });
    it("should add items to array", () => {
      expect(setMetaArray("testItem")).toEqual(["testItem"]);
    });
  });
  describe("setMetaTags", () => {
    it("should return array of objects", () => {
      expect(
        setMetaTags({
          title: { name: "title", value: "Test Title" },
          description: { name: "description", value: "Test Description" }
        })
      ).toEqual([
        { name: "title", content: "Test Title" },
        { itemprop: "title", content: "Test Title" },
        { name: "description", content: "Test Description" },
        { itemprop: "description", content: "Test Description" }
      ]);
    });
  });
});
