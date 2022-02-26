import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
];

const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text }) => (
      <NavLink to={url} className='m-2 mb-0' >
        {text}
      </NavLink>
    ))}
  </div>
)

export default Links