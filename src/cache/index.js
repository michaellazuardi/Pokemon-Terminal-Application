  const low = require('lowdb')
  const FileSync = require('lowdb/adapters/FileSync')
  const retriever = new FileSync('./src/cache/pokemon_db.text')
  const db = low(retriever)
  db.defaults({ local: {} }).write()


  this.get = function(inputKey) {
    const local = db.get('local').value()
    let found = null
    Object.keys(local).forEach(_id => {
      if (local[_id].id === parseInt(inputKey) || local[_id].name === inputKey) {
        found = {
          _id,
          ...local[_id],
          isExpired: local[_id].expire < Date.now()
        }
      }
    })
    return found
  }

  this.set = function(inputKey, value, time) {
    db
      .set(`local[${inputKey}]`, { 
        ...value,
        expire: time + Date.now(),
      })
      .write()
    return value
  }


