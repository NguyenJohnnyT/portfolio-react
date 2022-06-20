const express = require('express');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const cron = require('node-cron')
const fetch = require('node-fetch')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes); 

cron.schedule('0,2,10,20,30,40,50 * * * *', () => {
  if (process.env.NODE_ENV === 'production') {
    console.log('Keep server from sleeping every ten minutes.')
    return fetch('https://jtn-portfolio.herokuapp.com/api/projects').then(res => res.json())
  }
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
