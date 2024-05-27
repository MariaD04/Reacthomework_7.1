import { useState } from 'react'
import './App.css'
import VideoList from './components/VideoList'
import videoData from './data/videoData'

function App() {
  const [list] = useState(videoData)

  return (
    <VideoList list={list} />
  )
}

export default App

