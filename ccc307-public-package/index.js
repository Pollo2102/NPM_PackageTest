const fetch = require('node-fetch');
var express = require('express');
var app = express();


getUsers = (appToken, userInfo) => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => resolve(json));
    });
}

getUsers().then(function(newJSON){
    app.get('/', function(req, res){
        res.redirect('/get_new_users');
    });
    app.get('/get_new_users', function(req, res){
        res.send(newJSON);
    });
    app.listen(3001, function(){
        console.log('User information obtained succesfully!!!');
    });
    
});

module.exports = {
    getUsers
}