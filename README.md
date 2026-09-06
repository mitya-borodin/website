# Personal web site

[borodin.site](https://borodin.site)

## How to deploy

1. Setup [nginx-le](https://github.com/nginx-le/nginx-le)
1. Replace their [docker-compose.yml](https://github.com/nginx-le/nginx-le/blob/master/docker-compose.yml) to our [docker-compose.yml](https://github.com/mitya-borodin/personal-website/blob/master/docker-compose.yml)
1. docker-compose up -d

## Available Scripts

### npm start

Runs the app in the development mode.
Open <http://localhost:8080> to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
