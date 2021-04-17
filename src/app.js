const express = require('express');
require('./db/conn');
const app = express();

const port = process.env.PORT || 8000;
const StudentRouter = require('./routers/StudentRouter');

app.use(express.json());
app.use(StudentRouter);

app.listen(port, () => {
	console.log(`connection suceesfull at port ${port}`);
});
