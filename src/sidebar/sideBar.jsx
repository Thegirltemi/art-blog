import "./sidebar.css"

export default function sideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebaritem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://source.unsplash.com/Z9ZKGIs8voI"alt="" className="profileimg2"/>
          <p>An Art lover who believs that art is just more than
             the paintings ,Art is therapeutics and art to me is life</p>
         </div> 
        <div className="sidebarItem">
           <span className="sidebarTitle">CATEGORIES</span>
           <ul className="sidebarList">
              <li className="sidebarListItem">life</li>
              <li className="sidebarListItem">music</li>
             <li className="sidebarListItem">style</li>
               <li className="sidebarListItem">sport</li>
             <li className="sidebarListItem">Paintings</li>
             <li className="sidebarListItem">Gallery</li>
           </ul>
        </div>
          <div className="sidebarItem">
           <span className="sidebarTitle">FOLLOW US</span>
           <div className="sidebarSocial">
           <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
             <i className="sidebarIcon fab fa-pinterest-square"></i>
             <i className="sidebarIcon fab fa-instagram-square"></i>
           </div>
          </div>
    </div>
  )
}
