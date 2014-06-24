mimosa-esnext
===========

## Overview

This is an ES6 compiler for the Mimosa build tool. This module is for use with Mimosa `2.0+`.

For more information regarding Mimosa, see http://mimosa.io

Compilation is done with [google traceur](https://github.com/google/traceur-compiler)

## Usage

Add `'esnext'` to your list of modules. That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.
When you create a javascript file that has ES6 syntax, add a comment line as `// use esnext` to flag it to the compiler.
e.g:
```js
// use esnext

import {View} from 'view';

// ...

export class SomeView extends View {
    // ...
}
```

## Functionality

This module will compile ES6 files during `mimosa watch` and `mimosa build`.  It provides the ability to choose your wrapper type, for instance, commonjs or AMD.


## Default Config

```coffeescript
esnext:
  extensions: ["js"]
  containsText: "use esnext"
  traceurOptions: 
  	modules: "commonjs"
  	experimental: true
```

- extensions: an array of strings, the extensions of your ES6 files.
- containsText: if a value is provided, only files that contain the value will be compiled with traceur
- traceurOptions: [traceur compiler options](https://github.com/google/traceur-compiler/blob/master/src/options.js#L245)
	* modules: a string, how compiled ES6 code is wrapped, defaults to no wrapping, can be amd or commonjs.
	* experimental: boolean, whether to allow experimental features