import "./navbar.scss"
import { Link } from "react-router-dom"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>EasySocial</span>
        </Link>
        <HomeRoundedIcon />
        <AppsRoundedIcon />
        {darkMode ? <WbSunnyRoundedIcon onClick={toggle} /> : <NightlightIcon onClick={toggle} />}
        <div className="search">
          <SearchRoundedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonRoundedIcon />
        <EmailRoundedIcon />
        <NotificationsRoundedIcon />
        <div className="user">
          <img src={loggedIn.profilePic} alt="Profile" />
          <span>{loggedIn.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar