const fs = require('fs');
const path = require('path');
const config = require('./config');
const renderFile = require('pug').renderFile;

function compilePug(pugDir, htmlDir) {
    const pugFiles = fs.readdirSync(pugDir);
    pugFiles.forEach(p => {
        console.log('Compiling %s...', p);
        const htmlFile = path.join(htmlDir, p.replace(path.extname(p), '.html'));
        const htmlContent = renderFile(path.join(pugDir, p));
        fs.writeFile(htmlFile, htmlContent, err => {
            if (err) {
                console.log('Error compiling %s: %s', p, err);
                process.exit(1);
            }
        });
    });
}

module.exports = compilePug;

if (require.main === module) {
    compilePug(
        path.join(config.appRoot, 'templates'),
        path.join(config.appRoot, 'public'));
}
