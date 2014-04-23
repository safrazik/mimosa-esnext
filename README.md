mimosa-esnext
===========

## Overview

This is a ES6/Typescript compiler for the Mimosa build tool. This module is for use with Mimosa `2.0+`.

For more information regarding Mimosa, see http://mimosa.io

## Usage

Add `'esnext'` to your list of modules. That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.
When you create a javascript file that has ES6 syntax, `"use esnext";` to flag it to the compiler.
e.g:
```js
"use esnext";

import {View} from 'view';

// ...

export class SomeView extends View {
    // ...
}
```

## Functionality

This module will compile ES6/Typescript files during `mimosa watch` and `mimosa build`.  It provides the ability to choose your wrapper type, for instance, commonjs or AMD.