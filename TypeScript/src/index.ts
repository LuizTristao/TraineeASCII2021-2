import express from 'express';
import { helloworld } from './routess';

const app = express();

app.get('/', helloworld);

app.listen(3333);
