//Global test. This will fail
immer.enableMapSet();

const map = new Map();


immer.produce(map, draft => {
  draft.set("key", "value");
});
/**
 * This will log to console because an error will be thrown before it does
 * Will throw t.scope.immer.markChanged
 */
console.log("global test pass")
