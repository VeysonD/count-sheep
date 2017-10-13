// this is where it all begins
require('dotenv').config();
import app from './server/index';


var port = process.env.PORT || 7711;
