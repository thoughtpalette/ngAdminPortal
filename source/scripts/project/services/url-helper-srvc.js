angMod.service( "UrlHelper", [
    function ()
    {

        var urlHelper = {};
        var pathRoot = "{{ API_PATH }}";

        urlHelper.clientToken = {
            get: function () { return "/v1/token"; }
        };

        urlHelper.login = function () {
            return pathRoot + "/v1/user/login";
        };

        urlHelper.customer =  {
            create: function () { return pathRoot + "/v1/customer/register"; },
            getList: function () { return pathRoot + "/v1/customer"; },
            getSingle: function () { return pathRoot + "/v1/customer/"; },
            update: function () { return pathRoot + "/v1/customer/"; },
            updatePassword: function () { return pathRoot + "/v1/user/reset_password"; },
            resetPassword: function () { return pathRoot + "/v1/reset_password"},
            delete: function () { return pathRoot + "/v1/customer/"; },
            refund: function () { return pathRoot + "/v1/customer/refund/"; },
            getHistory: function () { return pathRoot + "/v1/customer/history/" }
        };

        urlHelper.company = {
            create: function () { return pathRoot + "/v1/valet/register"; },
            getList: function () { return pathRoot + "/v1/valet"; },
            update: function () { return pathRoot + "/v1/valet/"; },
            delete: function () { return pathRoot + "/v1/valet/"; }
        };

        return urlHelper;

    }
] );