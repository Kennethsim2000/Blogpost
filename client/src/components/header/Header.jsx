import "./header.css"
import Dandelion from '../assets/Dandelion.jpg';

/*This header class contains the header */
const header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={Dandelion} alt="" />
    </div>
  )
}

export default header
