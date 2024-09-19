const Footer = () => {
    const menuLinks = [
        {text: "Women's"},
        {text: "Men's"},
        {text: "On the street"},
        {text: "The Catwalk"},
        {text: "AdWatch"},
        {text: "About"},
        {text: "Tips"}
    ]
  return (
    <>
    <footer>
        <ul className='flex space-x-2'>
            { menuLinks.map((link) =>
            <li className='text-red-600 p-4'>{link.text}</li>
            )}
        </ul>
        <p className="text-gray-500">&copy; 2013 Valet Industries, Inc.</p>
    </footer>
    
    </>
  )
}

export default Footer