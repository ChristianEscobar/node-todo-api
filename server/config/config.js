let env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test') {
  let config = require('./config.json');
  let envConfig = config[env];  // Use bracket notation when using a varible to access a property

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}