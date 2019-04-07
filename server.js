const express = require('express'),
  serveStatic= require('serve-static'),
  path = require('path');

  //Instantiate Express App
  const app = Express();

  //Middleware
  app.use('/', serveStatic(path.join(_dirname, 'public')));

  //Serve index
  app.use('/', (req, res) => {
    res.sendFile(_dirname + '/public/src/index.html');
  });

  //Port
  const port = process.env.PORT || 5000;

  //Start server
  app.listen(port, () => {
    console.log(`Server start on ${port}...`);
  });
