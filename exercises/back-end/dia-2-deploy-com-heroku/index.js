const app = require('express')();

const PORT =  process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Está vivo!!!')
})

app.listen(PORT, () => console.log(`Online na porta: ${PORT}`))