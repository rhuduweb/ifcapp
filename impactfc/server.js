const express = require('express');
path = require('path');
const app = express();

app.use(express.static(__dirname+'/dist/impactfc'));

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname+'/dist/impactfc/index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
