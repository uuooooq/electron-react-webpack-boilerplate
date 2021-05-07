import React from 'react'

import '../assets/css/App.css'
import fileHelper from './tool/fileHelper';

function App() {
  const [value,setValue] = React.useState('xx');

  React.useEffect(()=>{
    fileHelper.readFile('/Users/zhudongwei/Documents/menaljs.chm').then(value => {
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
