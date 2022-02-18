import logoImg from '../assets/images/logo.svg'
import vetImg from '../assets/images/vet.svg'
import searchImg from '../assets/images/search.svg'
import gridImg from '../assets/images/grid.svg'
import petImg from '../assets/images/pet.svg'
import userImg from '../assets/images/user.svg'
import settingsImg from '../assets/images/settings.svg'
import profilePhoto from '../assets/images/avatar.png'
import logoutImg from '../assets/images/log-out.svg'
import menuImg from '../assets/images/menu.svg'

import '../styles/navbar.scss'

export function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <nav>
          <div className="header">
            <img src={logoImg} alt="logo" />
            <div>
              <img src={menuImg} alt="menu button" />
            </div>
          </div>

          <div className="options">
            <ul>
              <li>
                <img src={searchImg} alt="search icon" />
                <span>Search</span>
              </li>

              <li>
                <img src={gridImg} alt="dashboard icon" />
                <span>Dashboard</span>
              </li>

              <li>
                <img src={petImg} alt="pets icon" />
                <span>Pets</span>
              </li>

              <li>
                <img src={userImg} alt="user icon" />
                <span>Clients</span>
              </li>

              <li>
                <img src={vetImg} alt="vets icon" />
                <span>Vets</span>
              </li>

              <li>
                <img src={settingsImg} alt="settings icon" />
                <span>Settings</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <main>
        <p>DashBoard</p>
      </main>

      <footer>
        <div className="footer-navbar">
          <img className="profile-image" src={profilePhoto} alt="profile " />
          <div className="text-nav-footer">
            <p className="name">Eleonor Pena</p>
            <p>Vet</p>
          </div>
          <img className="logoutIcon" src={logoutImg} alt="log out icon" />
        </div>
      </footer>
    </div>
  )
}
