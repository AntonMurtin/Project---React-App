const express = require('express');
const cors = require('cors')

const expressConfig = require('./config/express');
const dbConnect = require('./config/mongoose');
const { port } = require('./config/constants');

const routes = require('./routes');

const app = express();

expressConfig(app);
app.use(cors())
dbConnect()
    .then(console.log('Db is conect'))
    .catch((err) => console.log(`Db error:${err}`));


app.use(routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));