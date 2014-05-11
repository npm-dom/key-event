## key-event

Add/remove keyboard events.

## Install

```bash
$ npm install key-event
```

## Usage

```js
var keyEvent = require('key-event')
var removeKeyEvent = keyEvent.off

keyEvent(element, 'ctrl alt u', function (event) {
  console.log('hi!')
})
```
