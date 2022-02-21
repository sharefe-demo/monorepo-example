const fs = require('fs')
const pkg = require('./package.json')

const templateFileName = 'repo-a.js'

const template = fs.readFileSync('./src/' + templateFileName, 'utf-8')

const replaced = template.replace('{{VERSION}}', pkg.version)

fs.writeFileSync('./lib/' + templateFileName, replaced, 'utf-8')