import React from 'react'

const Article = ({text, text2, image}) => {
  return (
    <>
    <article className='border-b-2 border-gray-200'>
        <h1 className="text-gray-400 mt-6 text-2xl">{text}</h1>
        <h2 className='font-sans text-4xl py-4'>{text2}</h2>
        <img src = {image}/>
        <p className='text-gray-600 mt-8 leading-7'><span className='text-gray-400 text-7xl float-left'>C</span>onsectetur adipisicing elit. Sint consectetur, iste blanditiis illo labore laudantium quidem neque dicta expedita. Blanditiis, eum. Voluptatum, facilis. Quidem ipsum nesciunt, minima asperiores dicta minus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste iure architecto numquam fugiat qui reprehenderit nulla, ea mollitia dolor accusamus molestias? Nam ratione minus perspiciatis molestias voluptatibus repellat. Explicabo, quo.
        Quidem ipsum nesciunt, minima asperiores dicta minus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste iure architecto numquam fugiat qui reprehenderit nulla, ea mollitia dolor accusamus molestias? Nam ratione minus perspiciatis molestias voluptatibus repellat. Explicabo, qu</p>
        <br/>
        <p className='text-right text-red-600 font-extrabold pb-4'>Continues...</p>
    </article>
    </>
  )
}

export default Article