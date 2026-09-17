import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Galleries } from './components/Galery'
import { Sorties } from './components/Outing'
import { Music } from './components/Song'
import { Cadeau } from './components/Cadeau'
import { Messages } from './components/Message'
import { DownloadableImage } from './components/download'


export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Galleries />
      <Music />
      <Sorties />
      <Cadeau />
      <Messages />
      <DownloadableImage />
    </div>
  )
}
