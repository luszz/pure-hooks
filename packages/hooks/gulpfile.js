const commonConfig = require('../../gulpfile');
const gulp = require('gulp');
const fg = require('fast-glob');
const fs = require('fs');
const fse = require('fs-extra');
const gm = require('gray-matter');

function genDesc(path) {
    if(!fs.existsSync(path)) {
        return;
    }

    const mdFile = fs.readFileSync(path, 'utf8');
    const { content } = gm(mdFile);
    let description =
      (content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';

    description = description.trim();
    return description;
}

async function genMetaData() {
    const metaData = {
        functions: [],
    }

    const hook = fg.sync('src/use*', {
        onlyDirectories: true,
    }).map(item => item.replace('src/', '')).sort()

    await Promise.allSettled(
        hook.map(async (item) => {
            const description = await genDesc(`src/${item}/index.md`)
            return {
                name: item,
                description,
              };
        })
    ).then(res => {
        metaData.functions = res.map(item => {
            if (item.status === 'fulfilled') {
                return item.value;
              }
              return null;
        })
    })

    return metaData;
}

gulp.task('metaData', async () => {
    const metaData = await genMetaData();

    await fse.writeJson('metaData.json', metaData, { spaces: 2 });
})

exports.default = gulp.series(commonConfig.default, 'metaData')