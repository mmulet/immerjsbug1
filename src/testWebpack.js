//webpack test. This will succeed
const immer = require("immer");

immer.enableMapSet();

const map = new Map();

immer.produce(map, draft => {
  draft.set("key", "value");
});
/**
 * This will log to console
 */
console.log("webpack test pass")
