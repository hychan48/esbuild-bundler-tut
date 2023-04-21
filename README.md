# 
https://dev.to/midnqp/bundling-nodejs-into-single-executable-binary-l3g
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

# so doesnt have to be esbuild... can be vite even
npx pkg build.cjs
```

