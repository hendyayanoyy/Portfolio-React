import React from 'react'

function Hero() {
  return (
    <div>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="./src/assets/images/foto-1.png"
      className="max-w-sm rounded-lg shadow-xl w-80 h-full mb-10" />
    <div className='text-justify'>
      <h1 className="text-5xl font-bold">Hi ! <br>
      </br>I'm Hendi Saputra</h1>
      <p className="py-6">
      I am a 6th semester student at Universitas Pamulang, majoring in Informatics Engineering. <br />
        I have a strong interest in web development, programming languages, and emerging technologies. <br />
        My passion lies in creating innovative solutions and continuously learning to improve my skills.
      </p>
    </div>
  </div>
    </div>
  )
}

export default Hero