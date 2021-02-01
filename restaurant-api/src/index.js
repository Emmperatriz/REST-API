const express = require('express');
const app = express();

//SEETTING SERVER
app.set('port', process.env.PORT || 3000);

//JSON
app.use(express.json()); 

//ROUTES
app.use(require('./routes/restaurants'));

//SERVER
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});