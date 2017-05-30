/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    "wilton/shared", 
    "wilton/utils", 
    "./_testUtils"
], function(shared, utils, testUtils) {
    "use strict";

    shared.put({
        key: "foo",
        value: {
            bar: 42
        }
    });
    
    var out1 = shared.get({
        key: "foo"
    });
    testUtils.assert(!utils.undefinedOrNull(out1.bar));
    testUtils.assert(42 === out1.bar);

    // todo: wait for change

    shared.remove({
        key: "foo"
    });

});