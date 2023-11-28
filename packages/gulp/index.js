const { series, parallel } = require("gulp")
const { task } = require("gulp-execa")
const { buildTypescript, watchTypescript, watchTypescriptSymlink } = require("./typescript")
const { copyReadmeFiles, watchReadmeFiles } = require("./readme")
const { buildScss, watchScss, watchScssSymlink } = require("./scss")
const { createBundle, cleanBundle } = require("./bundle")
const { detectPort, serveDemo, serveSite } = require("./serve")
const { copyFontFiles } = require("./font")
const { buildH5, buildSite, copyH5, copySite, copyGitIgnore } = require("./www")

function watch() {
  watchScss("icons")
  watchScss("core")
  watchTypescript("icons")
  watchTypescript("hooks")
  watchTypescript("core")
  watchReadmeFiles("core/src", "components")
  watchReadmeFiles("core/docs", "components")
  watchReadmeFiles("hooks/src", "hooks")
}

function watchSymlink() {
  watchScssSymlink("icons")
  watchScssSymlink("core")
  watchTypescriptSymlink("icons")
  watchTypescriptSymlink("hooks")
  watchTypescriptSymlink("core")
  watchReadmeFiles("core/src", "components")
  watchReadmeFiles("core/docs", "components")
  watchReadmeFiles("hooks/src", "hooks")
}

const createBundles = parallel(createBundle("icons"), createBundle("hooks"), createBundle("core"))

exports.createBundles = createBundles

exports.clean = series(
  createBundles,
  task("gatsby clean", {
    cwd: "site",
    stdio: "inherit",
  }),
)

exports.develop = series(
  detectPort,
  parallel(
    createBundles, //
    watchSymlink,
    serveDemo,
    serveSite,
  ),
)

exports.watch = watch

exports.buildPackages = series(
  createBundles, //
  copyFontFiles("core"),
  buildScss("icons"),
  buildScss("core"),
  buildTypescript("icons"),
  buildTypescript("hooks"),
  buildTypescript("core"),
)

const readme = series(
  copyReadmeFiles("core/src", "components"), //
  copyReadmeFiles("core/docs", "components"),
  copyReadmeFiles("hooks/src", "hooks"),
)

exports.buildWww = series(
  cleanBundle("www"),
  buildH5,
  readme,
  buildSite,
  copyGitIgnore(),
  copyH5(),
  copySite(),
)

exports.serve = parallel(serveDemo, serveSite)
