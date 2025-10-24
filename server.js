const express = require("express");

const app = express();
const port = process.env.PORT || 6000;

app.use('/meditation', meditationRoutes);
app.use('/songs', songRoutes);

app.listen(port, () => {});