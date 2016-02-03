module.exports = function(grunt){
    grunt.initConfig({
        watch:{
            css:{
                files: 'app/Resources/public/scss/*.scss',
                tasks: ['sass']
            }
        },
        sass:{
            dist: {
                options: {
                    style: 'compressed',
                    precision:8,
                    trace:true,
                    update:true

                },
                files: {
                    'web/public/css/global.css': 'app/Resources/public/scss/global.scss'
                }
            }
        },
        copy:{
            fonts:{
              files:[
                  {
                      cwd: 'vendor-front/bootstrap-sass/assets/fonts/bootstrap/',
                      dest:'web/public/fonts/',
                      flatten:true,
                      filter: 'isFile',
                      expand:true,
                      src:'**'
                  },
                  {
                      cwd: 'vendor-front/font-awesome/fonts/',
                      dest:'web/public/fonts/',
                      flatten:true,
                      filter: 'isFile',
                      expand:true,
                      src:'**'
                  },
                  {
                      cwd: 'vendor-front/jquery/dist/',
                      dest:'web/public/js/',
                      flatten:true,
                      filter: 'isFile',
                      expand:true,
                      src:'jquery.min.js'
                  },
                  {
                      cwd: 'vendor-front/bootstrap-sass/assets/javascripts/',
                      dest:'web/public/js/',
                      flatten:true,
                      filter: 'isFile',
                      expand:true,
                      src:'bootstrap.min.js'
                  },
              ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
}

