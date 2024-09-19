import React from 'react'

const Nav = () => {
    const menuLinks = [
        {text: "Women's"},
        {text: "Men's"},
        {text: "On the street"},
        {text: "The Catwalk"},
        {text: "AdWatch"},
        {text: "About"}
    ]
  return (
    <>
    <nav>
        <ul className='flex space-x-2'>
            { menuLinks.map((link) =>
            <li className='text-gray-500 underline p-4'>{link.text}</li>
            )}
        </ul>
    </nav>
    </>
  )
}

export default Nav