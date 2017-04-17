## key-event

[![Build Status](https://travis-ci.org/npm-dom/key-event.svg?branch=master)](https://travis-ci.org/npm-dom/key-event)

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
