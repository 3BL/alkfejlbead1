module.exports = {
    identity: 'tank',
    connection: 'default',
    attributes: {
        /*date: {
            type: 'datetime',
            defaultsTo: function () { return new Date(); },  // defaultsTo - alapértéket lehet beállítani
            required: true,
        },*/
        
        status: {
            type: 'string',
            enum: ['new','being developed','prototype','ready'],
            required: true,
        },
        tankname: {
            type: 'string',
            required: true,
        },
        weight: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
            required: true,
        },
        /*user: {
            model: 'user',
        },*/
        factory:{
            model: 'factory',  
        },
    }
}