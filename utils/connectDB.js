const mongoose = require('mongoose')
const {uri, db, password} = require('./config')

module.exports = async() => {
  try {
    let dbUri = uri.replace('<password>', password)
    dbUri = dbUri.replace('<dbname>', db)
    
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Database is connected')
  } catch(err) {
    throw new Error(err)
  }
}