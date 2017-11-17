const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

const ipaddress = getIPAdress();


app.get('/api/home',(req,res)=>{
    res.json({
        code: '0000',
        msg: 'proxy success'
    })
})



let server = app.listen(port, function () {
    
    if (ipaddress) {
        console.log('please open ' + ipaddress + ':' + port + ' in browser');
    } else {
        console.log('no networking, please open ' + ipaddress + ':' + port + ' in browser')
    }

});



/**
 * 获取本机IP
 * @return {[string]} [IP地址]
 */
function getIPAdress() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}