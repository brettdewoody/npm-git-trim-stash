git-trim-stash
=========

A command-line `git` utility for trimming that stash.

## Installation

    npm install git-trim-stash -g

## Usage

    > git-trim-stash [#]

## Example   

Let's say you have 37 stashes in your current repo.

    > git trim-stash 10

    27 stashes deleted.

Your stash will be trimmed to the number passed to the command.

Values greater than the number of stashes will result in a friendly message.
