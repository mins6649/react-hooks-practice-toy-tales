import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, handleDelete, handleLikePatch}) {

  const renderToyData = toyData.map((toy)=>{
    return <ToyCard key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} handleDelete={handleDelete} handleLikePatch={handleLikePatch}/>
  })

  return (
    <div id="toy-collection"> {renderToyData} </div>
  );
}

export default ToyContainer;
