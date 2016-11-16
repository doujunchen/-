/**
 * Created by plter on 2016/11/9.
 */

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-closure-compiler');


    grunt.initConfig({
        'closure-compiler': {
            build_es6: {
                //google closure jar文件位置，tools下面的build里面
                closurePath: 'tools',
                js: ['Hello.js', 'Main.js'],
                jsOutputFile: 'main.min.js',
                //编程设置，选择默认
                options: {}
            }
        }
    });
    //                  注册一个closure任务（closure-compiler是指定子任务）
    grunt.registerTask('default', ['closure-compiler:build_es6']);


    // grunt.registerTask("build", function () {
    //     console.log("Run build task");
    // });
    //
    // grunt.registerTask("Task1", function () {
    //     console.log("Task 1");
    // });
    //
    // grunt.registerTask("Task2", function () {
    //     console.log("Task 2");
    // });
    //
    //

};