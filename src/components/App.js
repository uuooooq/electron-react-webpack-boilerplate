import React from 'react'

import '../assets/css/App.css'
const fs = window.require('fs').promises;

const fileHelper = {
  readFile: (path) => {
    return fs.readFile(path, {encoding: 'utf8'})
  },
  writeFile: (path, content) => {
    return fs.writeFile(path, content,{encoding: 'utf8'})
  },
  renameFile: (path, newPath) => {
    return fs.rename(path, newPath)
  },
  deleteFile: (path) => {
    return fs.unlink(path)
  },
}

function App() {
  const [value,setValue] = React.useState('xx');

  React.useEffect(()=>{
    fileHelper.readFile('/Users/zhudongwei/Documents/sfjsldfj.md').then(value => {
      setValue(value);
    })
  })

  return (
    <div>
      <h1>Hello, Electron!</h1>

      <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!{ __dirname}</p>
      <div>{value}</div>
    </div>
  )
}

export default App
