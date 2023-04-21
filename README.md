# ES Build Bundler Tutorial
* note... it's really the "pkg" package.
* Could use vite or w/e
https://dev.to/midnqp/bundling-nodejs-into-single-executable-binary-l3g
https://yarnpkg.com/package/esbuild
https://yarnpkg.com/package/pkg
```bash
# maybe make this a nodejs path file so it works for both windows and linux:
mkdir -p builds
mkdir -p dist

mkdir -f builds
mkdir -f dist
```
```bash
npx esbuild index.js  --bundle --outfile=builds/build.cjs \
--format=cjs --platform=node
# or:
pnpm run build

# so doesnt have to be esbuild... can be vite even
npx pkg build.cjs

# package.json:
"pkg": {
    "scripts": "builds/**/*.js",
    "assets": "views/**/*",
    "targets": [ "node14-linux-arm64" ],
    "outputPath": "dist"
}

# or:
pnpm run build:pkg
```

# Reddit Building Binaries
https://www.reddit.com/r/linux/comments/m2g06w/does_anyone_else_hate_building_packages_from/

