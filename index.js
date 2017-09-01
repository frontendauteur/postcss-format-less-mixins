var postcss = require('postcss');

module.exports = postcss.plugin('postcss-format-less-mixins', function () {
    function cleanSemicolon(sel) {
        return sel.replace(/\s+/g, '') + (sel.endsWith(';') ? '' : ';');
    }
    return function (root) {
        root.walkRules(function (rule) {
            rule.walkRules(function (decl) {
                if (decl.mixin === true) {
                    const { before } = decl.raws;
                    const { selector } = decl;
                    const cloned = decl.clone({
                        raws: {
                            before: before.replace(/(\n\n|\r\n\r\n)/g, '\r\n'),
                            between: ''
                        },
                        selector: cleanSemicolon(selector)
                    });
                    decl.replaceWith(cloned);
                }
            });
        });
    };
});
