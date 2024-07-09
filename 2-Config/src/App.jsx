import { useState } from 'react'

function App() {
  const [likes, setLikes] = useState(0)

  function UpdateLikes(){
    setLikes(likes + 1)
  }

  // eslint-disable-next-line react/prop-types
  function Header({nama}){
    return <h1>Halo Nama saya: {nama}</h1>
  }

  return <>
    <Header nama="Cesya"/>
    <Header nama="Apridita"/>
    <button onClick={UpdateLikes}>Like({likes})</button>
  </>
}


export default App
