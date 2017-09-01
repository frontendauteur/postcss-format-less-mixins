var postcss = require('postcss');
var fs = require('fs');
var plugin = require('./');
var less = require('postcss-less');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input, { syntax: less })
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}
function read(path) {
    return fs.readFileSync(path, 'utf-8');
}
function getFile(name) {
    return read('test/fixtures/' + name);
}
it('should remove space between parentheses and semicolon', function () {
    return run(getFile('semicolon.less'), getFile('semicolon.out.less'));
});

it('should remove space above mixins', function () {
    return run(getFile('space-above.less'), getFile('space-above.out.less'));
});
