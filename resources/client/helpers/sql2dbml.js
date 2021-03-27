const fs = require('fs')
const {importer} = require('@dbml/core')

// read PostgreSQL file script
const postgreSQL = fs.readFileSync('./schema.sql', 'utf-8')

// generate DBML from PostgreSQL script
const dbml = importer.import(postgreSQL, 'postgres')

module.export = dbml
