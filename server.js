// this is where it all begins
require('dotenv').config();
import app from './server/index';

const port = process.env.PORT || 7711;
const host = process.env.HOST || '127.0.0.1';

app.listen(port, () => {
  console.log(`Listening at http:${host}:${port}`)
});
