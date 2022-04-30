import "./singlePost.css"

export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
       <img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid
       =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80"alt="" className="singlePostImg"></img>
       <h1 className="singlePostTitle">
         Explore the nation of colours.
         <div className="singlePostEdit">
           <i className="singlePostIcon far fa-edit"></i>
           <i className="singlePostIcon far fa-trash-alt"></i>
         </div>
       </h1>
         <div className="singlePostInfo">
           <span className="singlePostAuthor">Author:<b>Thegirltemi</b> </span>
           <span className="singlePostDate">1 hour ago </span>
         </div>
         <p className="singlePostDesc">paintings create a real expression of satisfaction.
         It brings a soothing effect to the soul and brings about satisfaction
         </p>
      </div>
    </div>
  )
}
