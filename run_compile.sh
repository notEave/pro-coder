#!/bin/bash

cd ~/code/webdev/pro-coder/

PATH=$(npm bin):$PATH tsc
PATH=$(npm bin):$PATH browserify ./js/Main.js -o ./brw/bundle.js

