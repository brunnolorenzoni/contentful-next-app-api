import dotenv from 'dotenv';

if(process.env.NODE_ENV) {
  dotenv.config({
    path: `./.${process.env.NODE_ENV}.env`
  })
} else {
  throw new Error("environment not set");
}

import app from './app'

const API_PORT = process.env.PORT;

app.listen(API_PORT, () => {
  console.log(`App is running on port: ${API_PORT}!`);
  console.log(`http://localhost:${API_PORT}/`);
});