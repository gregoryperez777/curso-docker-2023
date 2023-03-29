const cron = require('node-cron');
const { syncDB } = require('./tasks/sync-db');

console.log('inicio de la aplicacion');

cron.schedule('*/5 * * * * *', syncDB);
