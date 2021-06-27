# Time Well Spent

Progressive Web App (PWA) for a time budgeting app.  
This tool applies finance tracking ideas of limits and goals to time tracking.

## Status

[![Netlify Deployment](https://github.com/benknight135/timewellspent/actions/workflows/main.yml/badge.svg)](https://github.com/benknight135/timewellspent/actions/workflows/main.yml)

[![Netlify Status](https://api.netlify.com/api/v1/badges/294bdce9-bfa5-43b9-8c9c-a83ed3316e17/deploy-status)](https://app.netlify.com/sites/friendly-poitras-c8045e/deploys)

## Deployment

Commits and pull requests on 'master' branch are deployed to Netlify production server.  
Commits on 'dev' branch are not deployed, submit pull request to 'master' branch to deploy on production server.  
GitHub actions are used to test builds (not to deploy).

## Configuration

### Netlify
[Netlify](https://www.netlify.com/) is used for hosting due to good integration with GitHub and simple setup.

#### Build settings
**Repository:** github.com/benknight135/timewellspent  
**Base directory:** Not set  
**Build command:** npm ci && npm run build --if-present && npm test  
**Publish directory:** build  

#### Deploy contexts
**Production branch:** master  
**Branch deploys:** dev

#### Learn More
Learn more details on [Netlify GitHub Deployment](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)

#

### React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#
