var shell = require('shelljs');

shell.cp('-R', 'src/public/js', 'dist/public/js/');
shell.cp('-R', 'src/public/fonts', 'dist/public/fonts/');
shell.cp('-R', 'src/public/images', 'dist/public/images/');