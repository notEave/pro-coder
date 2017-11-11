#!/bin/bash

cd "$(dirname "$0")"

PATH=$(npm bin):$PATH tsc
PATH=$(npm bin):$PATH browserify ./js/Main.js -o ./brw/bundle.js

