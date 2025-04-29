const fs = require('fs');

const config = JSON.parse(process.env.CONFIG_JSON || '{}');

fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
