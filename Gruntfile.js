module.exports = function(grunt){
    grunt.initConfig({
        less: {
            compile: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    plugins: [
                        new (require('less-plugin-clean-css'))({advanced:true})
                    ]
                },
                files:[
                    {
                        src: "app/Resources/public/less/global.less",
                        dest: "web/public/css/global.css",
                        sourceMapURL: "global.css.map",
                        sourceMapFilename: "web/public/css/global.css.map"
                    }

                ]
            }
        },
        watch:{
            css:{
                files: 'app/Resources/public/less/*.less',
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
}

