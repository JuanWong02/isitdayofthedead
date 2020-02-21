const express = require('express');
//creamos nueva app con express
const app = express();

app.set('view engine', 'ejs');
//definir puerto
const port = 3000;

const specialDay = 2;
//Month is base 0
const sepcialMonth = 10; //november

//When base url is requested (/)
//HTTP GET Method
//configurar la respuesta del servidor cuando se pide la url raiz con GET
app.get('/',(req, res) => {
    let currentDate = new Date();

    let currentDayOfTheMonth = currentDate.getDate();

    let currentMonth = currentDate.getMonth();

    if (currentDayOfTheMonth === specialDay && currentMonth === sepcialMonth){
        //res.send('YES');
        res.render('index', {message: 'YES'});
    } else {
        //res.send('NO');
        res.render('index',{message: 'NO'});
    }

});
//arrancar el servidor en el puerto indicado
app.listen(port, () => {
    //funcion que se manda a llamar cuando el servidor arranca
    console.log(`Server listening on port ${port}`);
    
});