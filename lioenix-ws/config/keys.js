module.exports = {
    MongoURI: 'mongodb+srv://general:forever18@lioenix-xh0yh.mongodb.net/',
    
    // mongoClient option is no longer necessary in mongoose 5.x    
    // mongoClient: {
    //     useMongoClient: true
    // }
    
    secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret'
}