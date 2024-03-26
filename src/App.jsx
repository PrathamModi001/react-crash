import { useState } from 'react'
import './App.css'
import PostsList from './components/PostsList'
import MainHeader from './components/MainHeader'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const hideModalHandler = () => {
    setModalIsVisible(false);
  }

  const showModalHandler = () => {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
    </>
  )
}

export default App
