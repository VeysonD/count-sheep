// this is where it all begins
import env from 'process-env';
import app from './server/index';

// start the local environment
env.config();

var port =
