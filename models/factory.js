module.exports = {
    identity: 'factory',
    connection: 'default',
    attributes: {
        
        name: {
            type: 'string',
            required: true,
        },
        location: {
            type: 'string',
            required: true,
        },
        
        user: {
            model: 'user',
        },
        
        tanks: {
            collection: 'tank',
            via: 'factory'
        },
    },
};