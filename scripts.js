const argv = require('minimist')(process.argv.slice(2));
var command = argv.command;

const execSync = require('child_process').execSync;
const env = Object.create(process.env);

// get the build date & time (UTC)
var datetime = new Date().toISOString().substr(0, 19).replace('T', ' ');
env.REACT_APP_BUILD_DATE= datetime;

console.log('Env variables: ' + JSON.stringify(env));
console.log('Run command: react-scripts start');
execSync(command, { env: env, stdio: 'inherit' });