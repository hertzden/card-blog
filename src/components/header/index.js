import { Link } from "gatsby"
import React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import "./style.scss"
// import Logo from '../../images/logo.png'
import Logo from '../../images/logo1.png'

const Header = () => {
return (
  <nav>
    <ul>
      <li>
        <a href='/'>
          <img src={Logo} alt="suprabha logo" className='logo'/>
        </a>
      </li>
      <li>
        <Link to="https://suprabha.me/"> Portfolio </Link>
      </li>
      <li>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
      </li>
      {/* <li>
        <Link to="/contact-us"> Contact Us </Link>
      </li> */}
    </ul>

    {/* <div>
      <input type="search" placeholder="Search" />
    </div> */}
  </nav>
)
}

export default Header
