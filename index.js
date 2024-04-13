import express from 'express';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname); 

const app = express();

app.use(express.static(path.join(__dirname, 'template')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'template', 'html', 'index.html'));
});

app.get('/css/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'template', 'style.css'));
});

app.listen(3000, () => {
  console.log('Servidor Express inicializado');
});
