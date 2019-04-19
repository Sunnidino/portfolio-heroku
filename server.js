'use strict';

   const express = require('express'),
       serveStatic = require('serve-static'),
       path = require('path');

   // Instantiate Express App
   //const app = express();

   // Middleware
   app.use('/', serveStatic(path.join(__dirname, '/public')));

   // Serve Index
   app.get('/', (req, res) => {
       res.sendFile(__dirname + '/public/index.html');
   });

   // Port
   const port = process.env.PORT || 8000;

   // Start Server
   let port = process.env.PORT;
      if (port == null || port == "") {
  port = 8000;
}
      app.listen(port);
