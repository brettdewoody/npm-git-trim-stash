#!/usr/bin/env node

const exec = require('child_process').exec;

exec("cd ./bin");
exec("chmod +x git-trim-stash.js");
exec("npm link");
