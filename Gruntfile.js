module.exports = function(grunt)
{
    require( "load-grunt-config" )( grunt,
    {
        data: {
            version: grunt.option( "gitver" ) || Date.now(),
            env: grunt.option( "env" ) || "dev",
            api: "http://API_URL",
            aws: {
                accessKeyId: grunt.option( "aws-access-key-id" ),
                secretAccessKey: grunt.option( "aws-secret-access-key" ),
                s3Bucket: grunt.option( "aws-s3-bucket" ),
                cloudfrontDistributionId: grunt.option( "aws-cloudfront-distribution-id" ),
                region: grunt.option( "aws-region" )
            }
        }
    } );
};