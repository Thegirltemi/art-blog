import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid
        =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80"
        alt=""
        className="postImg"
      ></img>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat"> Life</span>
          <span className="postCat">Paintings</span>
        </div>
        <span className="postTitle">Vase of Flowers</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Regardless of their variety,Flowers have been symbols 
       of beauty in most civilizations of the world, and flower giving is still among the
       most popular of social amenities. As gifts, flowers serve as expressions of affection
      </p>
    </div>
  );
}
