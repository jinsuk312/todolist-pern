const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
// gives access to request.body and get json data
app.use(express.json());

app.listen(5000, () => {
	console.log('server has started on port 5000');
});
