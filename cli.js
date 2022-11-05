#!/usr/bin/env node

import process from 'node:process';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import meow from 'meow';
import copy from 'cpy';

const cli = meow(`
	Usage
	  $ @somehow-digital/editorconfig

	Options
	  --force, -f  Overwrite existing .editorconfig file.
`,{
	importMeta: import.meta,
	flags: {
		force: {
			type: 'boolean',
			alias: 'f',
		},
	},
});

const directory = dirname(fileURLToPath(import.meta.url));

await copy(`${directory}/.editorconfig`, process.cwd(), {
	overwrite: cli.flags.force,
});
