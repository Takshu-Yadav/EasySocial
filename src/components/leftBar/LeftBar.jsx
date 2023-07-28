import "./leftBar.scss"
import Network from "../../assets/network.png"
import Groups from "../../assets/groups.png"
import Marketplace from "../../assets/marketplace.png"
import Watch from "../../assets/watch.png"
import Ideas from "../../assets/ideas.png"
import Messages from "../../assets/messages.png"
import Gallery from "../../assets/gallery.png"
import Post from "../../assets/post.png"
import Videos from "../../assets/videos.png"
import Polls from "../../assets/polls.png"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {

  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={loggedIn.profilePic} alt="Profile" />
            <span>{loggedIn.name}</span>
          </div>
          <div className="item">
            <img src={Network} alt="Network" />
            <span>Network</span>
          </div>
          <div className="item">
            <img src={Groups} alt="Groups" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Marketplace} alt="Marketplace" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="Watch" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Ideas} alt="Ideas" />
            <span>Ideas</span>
          </div>
          <hr />
          <div className="menu">
            <span className="menuheading">Shortcuts</span>
            <div className="item">
              <img src={Messages} alt="Messages" />
              <span>Messages</span>
            </div>
            <div className="item">
              <img src={Gallery} alt="Gallery" />
              <span>Gallery</span>
            </div>
            <div className="item">
              <img src={Post} alt="Post" />
              <span>Post</span>
            </div>
            <div className="item">
              <img src={Videos} alt="Videos" />
              <span>Videos</span>
            </div>
            <div className="item">
              <img src={Polls} alt="Polls" />
              <span>Polls</span>
            </div>
          </div>
          <hr />
          <div className="menu">
            <span className="menuheading">Others</span>
            <div className="menu">
              <span>Tutorials</span>
              <span>About Us</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar