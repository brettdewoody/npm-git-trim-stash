#!/usr/bin/env node

const exec = require('child_process').exec;
const stashNum = process.argv[2];

exec('git stash list', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }

  const stashArr = stdout.match(/stash@\{(\d*)\}/g);
  const stashes = stashArr.length;
  const stashesDelete = stashes - stashNum;

  if (stashNum < stashes) {
    (function dropStash (i) {
       setTimeout(function () {
          exec(`git stash drop stash@{${stashNum}}`, (err, stdout, stderr) => {
            if (err) {
              console.error(`Error: ${err}`);
              return;
            }
          });
          if (--i) dropStash(i);
       }, 50)
    })(stashesDelete);

    console.log(`${stashesDelete} stash${(stashesDelete === 1 ? '': 'es')} deleted.`)

  } else {
    console.log('Please select a valid stash limit.');
    console.log(`There are only ${stashes} stashes available.`);
  }

});
