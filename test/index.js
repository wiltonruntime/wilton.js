/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define([], function() {

    return {
        main: function() {
            require([
                // core
                "wilton/test/LoggerTest",
                "wilton/test/DBConnectionTest",
                "wilton/test/CronTaskTest",
                "wilton/test/fsTest",
                "wilton/test/fsPromiseTest",
                "wilton/test/hexTest",
                "wilton/test/httpClientTest",
                "wilton/test/miscTest",
                "wilton/test/mustacheTest",
                "wilton/test/ServerTest",
                "wilton/test/sharedTest",
                "wilton/test/threadTest",
                "wilton/test/utilsTest"
            ], function() {});
        }
    };
});
