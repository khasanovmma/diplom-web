const fs        = require('fs'),
      path      = './gulp/tasks',
      arrayPath = fs.readdirSync(path).map(file => file = path+ '/' + file)
module.exports = arrayPath