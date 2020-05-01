const db = require('mongoose');

db.Promise = global.Promise;

// 'mongodb+srv://diegoMierez:labrumier22@cursonode-i4ley.mongodb.net/test?retryWrites=true&w=majority',
 async function connect (url) {
    await db.connect(url, {
        useNewUrlParser: true,
    });
    
    console.log('[db] conectada con éxito');
}

module.exports = connect;