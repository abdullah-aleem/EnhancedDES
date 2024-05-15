import React from 'react'

import { TypewriterEffect } from './components/ui/typewriter-effect';
function Home() {
  const words = [
    {
      text: "A",
    },
    {
      text: "Encryption",
    },
    {
      text: "system",
    },
    {
      text: "based",
    },
    {
      text: "on",
    },
    {
      text: "AES",
    },
    {
      text: "and",
    },
    {
      text: "DES",
    },
    {
      text: "with",
    },
    {
      text: "HKDF",
    },
    {
      text: "Based",
    },
    {
      text: "Key",
    },
    {
      text: "Generation.",
      className: " text-purple-500",
    },
  ];
  return (
    <div className='flex-1 w-full flex flex-col justify-center  '>
      <h1 className='text-8xl text-gray-400'>Enhanced-DES</h1>
      
      <TypewriterEffect words={words} />

    </div>
  )
}

export default Home