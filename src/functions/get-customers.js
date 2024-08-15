const { app } = require('@azure/functions');
const { libraryConnectionPool } = require('../database/library.database');

app.http('get-customers', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

        try {
            let [rows, fields] = await libraryConnectionPool.query(`select * from customer`)
            return { status: 200, jsonBody: rows }
        }
        catch(error){
            context.log(error) 
            return { 
                status: 500, 
                jsonBody: {message: error.message || 'something went wrong'} 
            }
        }
    }
});
