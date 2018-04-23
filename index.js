const { log, clear } = console
const json2xls = require('json2xls')
const fs = require('fs')

const json = require('./data/resources/premium-rate_WLNP85.json')

const run = async() => {
  clear()


  const xls = json2xls(json);
  fs.writeFileSync('data.xlsx', xls, 'binary');

  
}


run()