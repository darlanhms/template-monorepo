import React, { useEffect } from 'react'
import api from '@monorepo/axios-config'

const App: React.FC = () => {
  useEffect(() => {
    api
      .get('/')
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return <h1>Hello World</h1>
}

export default App
