# About

This is only a test project to learn how to publish NPM packages.

# Installation

`npm i shadowizard --save-dev`

# Then...

```
import {shadowizard} from 'shadowizard';

shadowizard({
    shadowType: 'soft',
    padding: false
});
```

## Options

Shadowizard takes 2 options, both optional:

* *shadowType* - _'hard' | 'soft'_ (Defaults to soft)
* *padding* - _boolean_ (Defaults to false)
