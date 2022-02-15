const mongoose= require('mongoose');

mongoose
  .connect('mongodb+srv://mastan:OrWBWxL4fXINb6Wn@attainu.nxoxc.mongodb.net/test', {
    useCreateIndex: true,  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
