const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');


// step 1 清空cjs umd esm目录
gulp.task('clean', async () => {
    await del('dist/**');
    await del('es/**')
    await del('lib/**')
})

// step 2 针对不同类型的产物进行构建
// commonjs
gulp.task('cjs', () => {
    return gulp.src(['./es/**/*.js']).pipe(babel({
        configFile: '../../.babelrc',
     })).pipe(gulp.dest('lib/'))
 })

// es module
gulp.task('es', () => {
    const tsProject = ts.createProject('tsconfig.pro.json', {
        module: 'ESnext',
    })
    return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'))
})

// 声明文件 index.d.ts
gulp.task('declaration', () => {
    const tsProject = ts.createProject('tsconfig.pro.json', {
        declaration: true,
        emitDeclarationOnly: true,
    })
    return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
})



exports.default = gulp.series('clean', 'es', 'cjs', 'declaration')