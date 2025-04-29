const fs = require('fs');

const config = JSON.parse(process.env.ARQUIVO_FIREBASE || '{}');

fs.writeFileSync('./dayane-cunha-advocacia-firebase-adminsdk-fbsvc-4b45b37ebe.json', JSON.stringify(config, null, 2));
