import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import SkeletonViewer from './SkeletonViewer'
import SkullViewer from './SkullViewer'
import RibcageViewer from './RibcageViewer'
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/skull" element={<SkullViewer/>} />
      <Route path="/skeleton" element={<SkeletonViewer />} />
      <Route path="/ribcage" element={<RibcageViewer />} />
    </Routes>
  )
}

export default App
