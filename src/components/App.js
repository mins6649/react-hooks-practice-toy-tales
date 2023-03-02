import React, { useState , useEffect} from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toyData, setToyData] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(data => setToyData(data))
  }, [])

  //Hides Form Button
  const [showForm, setShowForm] = useState(false);
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  //Form:
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  function handleName(e){
    setName(e.target.value);
  }
  function handleImage(e){
    setImage(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    const newToy = {name, image}
    const newToyList = [...toyData, newToy]

    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
    .then(res => res.json())
    .then(()=> setToyData(newToyList))
  }

  //Donate(Delete):
  function handleDelete(id){
    // setToyData(toyData.filter((toy) => toy.name !== name))

    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE",
    })
    .then(res =>{
          if (res.ok){
            setToyData(toyData.filter((toy) => toy.id !== id))
      }
    })
  }

  //Like Update:
  function handleLikePatch(id, likes){
    //NEED TO WORK ON.
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleSubmit={handleSubmit} handleName={handleName} handleImage={handleImage}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData} handleDelete={handleDelete} handleLikePatch={handleLikePatch}/>
    </>
  );
}

export default App;
