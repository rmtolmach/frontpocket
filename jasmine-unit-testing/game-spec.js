System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function main() {
        describe('header component', function () {
            it('should add string to header names', function () {
                var header = new Header();
                var name = 'foo';
                header.addName(name);
                expect(header.names.length).toBe(1);
                expect(header.names[0]).toBe(name);
            });
        });
    }
    exports_1("main", main);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=game-spec.js.map