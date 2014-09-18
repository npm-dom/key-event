## bind-key

Add/remove keyboard events.

## Install

```bash
$ npm install bind-key
```

## Usage

```js
var bindKey = require('bind-key')
var off = bindKey.off

bindKey(element, 'ctrl alt u', function (event) {
  console.log('hi!')
})
```
