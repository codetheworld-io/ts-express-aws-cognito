import express from 'express';
import router from "./router";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use('/api/v1/users', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on :${port}`);
});
