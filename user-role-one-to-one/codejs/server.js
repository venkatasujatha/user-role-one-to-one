const express = require('express');
const app = express();
const bodyparser = require('body-parser');
require('dotenv').config();
const {dataSource} = require('/home/tectoro/Desktop/codejs/database.js');
const router = require('/home/tectoro/Desktop/codejs/routes/routes.js');
const cors = require('cors');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
async function run() {
  try {
     await dataSource.initialize();
    // await dataSource.synchronize();
    console.log('Datasource initialized.');
    app.use('/', router);
    app.listen(process.env.port, () => {
      console.log(`Localhost is running on port ${process.env.port}`);
    });
  } catch (err) {
    console.log(err.message);
  }
}
run()