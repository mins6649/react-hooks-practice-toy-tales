import React from "react";

function ToyCard({id, name, image, likes, handleDelete, handleLikePatch}) {

  function handleDonate(){
    handleDelete(id)
  }
  function handleLike(){
    handleLikePatch(id, likes)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
