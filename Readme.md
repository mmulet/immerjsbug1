# Repo to reproduce an immer.js bug
## Bug description
```javascript
//Will throw Uncaught TypeError: t.scope.immer.markChanged
immer.produce(map, draft => {
  draft.set("key", "value");
});
```
But it only throws this error when using immer.js as an exposed global.
It works when using a bundler like webpack.
This repo will host a test page that will call the above function in webpack
and as a global. 

## Installing/Building
* ```sh
npm install .
```
* ```sh
npm run build
```

## testing
```sh
npm test
```