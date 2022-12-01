const chokidar = require('chokidar')
const chalk = require('chalk')
const path = require('path')
const { spawn } = require('child_process')

let child = null

function runFile(filePath) {
  child = spawn('node', [filePath])
  child.stdout.on('data', data => {
    console.log('child process: ', data.toString())
  })
  child.stderr.on('data', data => {
    console.log(data.toString())
  })
  child.on('exit', code => {
    console.log(`子进程退出码：${code}`)
  })
  console.log(chalk.green.bold('- [run file] ' + filePath))
}
const httpFilePath = path.join(__dirname, 'httpServer.js')
// One-liner for current directory
chokidar.watch(httpFilePath).on('all', (event, path) => {
  console.log(chalk.green.bold(`- [${event}] `, path))
  if (event !== 'add') {
    child.kill()
  }
  runFile(httpFilePath)
})
