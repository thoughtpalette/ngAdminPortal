"use strict";
var environmentTarget = "local";

var getTarget = function ()
{
    return environmentTarget;
};
var setTarget = function ( target )
{
    environmentTarget = target;
};

module.exports = {
    replace:
    {
        src: [ "build/project.js" ],
        overwrite: true,
        replacements: [ {
            from: 'var pathRoot = "/v1";',
            to: function ( matched )
            {
                var target = getTarget();
                if( target === "local" )
                {
                    return 'var pathRoot = "https://54.186.79.255";';
                }
                return matched;
            }
        }]
    }
};