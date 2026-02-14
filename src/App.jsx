
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
 import { ToastContainer, toast } from 'react-toastify';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import Footer from './components/Footer/Footer';


function App() {
// Coin Count Start
  const [coins, setCoins] = useState(0)
  const handleCoinCount = ()=>{
    setCoins(coins + 1000000)
  }
  const notify = () => toast("Free Credit Claimed! 1000000 Coins Added");

//Coin Count End 

//
const [view, setView]= useState("available")


//Played Count in Selected button
const [countSelectedPlayers, setCountSelectedPlayers] = useState(0)




//Player adding to the selected button
const [addSelectedPlayers, setAddSelectedPlayers]= useState([])
const handleAddSelectedPlayers = availablePlayer =>{

    const isAlreadySelected = addSelectedPlayers.find(
    player => player.playerId === availablePlayer.playerId
  );
    if (isAlreadySelected) {
    toast("You already selected this player!");
    return;
  }
    if (addSelectedPlayers.length >= 6) {
    toast("You can select only 6 players!");
    return;
  }

   if(availablePlayer.price>coins){
    const notify2 = () => toast("You don't have enough coins to choose this player!");
    notify2(); 

  }

  else {
    setAddSelectedPlayers([...addSelectedPlayers, availablePlayer])
    setCoins(coins-availablePlayer.price)
     setCountSelectedPlayers(countSelectedPlayers + 1)
    const addingNotify = () => toast(`You have chosen ${availablePlayer.name} and spent ${availablePlayer.price} coins!`);
    addingNotify();
     console.log("added")
  }
  
}

//Delete Player

const handleRemovePlayer = (playerId) => {
  const remainingPlayers = addSelectedPlayers.filter(selectedPlayer => selectedPlayer.playerId !== playerId);
  setAddSelectedPlayers(remainingPlayers);
  setCountSelectedPlayers(countSelectedPlayers - 1);
  console.log("deleting")
};

// const [addMorePlayer, setAddMorePlayer] = useState([])

const handleAddMorePlayer = () => {
  // setAddMorePlayer([...addMorePlayer, availablePlayer])
  setView("available")
}



  return (
    <>
      <Header coins={coins}></Header>
      <Hero handleCoinCount={handleCoinCount} notify={notify}></Hero>
      <ToastContainer position='top-center'></ToastContainer>

    <div className=''>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold'>
           {view === "available" ? "Available Players" : `Selected Players: ${countSelectedPlayers}/6`}
        </h2>
        <div className='flex justify-end items-center'>
                <button className={`hover:bg-lime-500 font-bold p-4 rounded-l-2xl ${view === 'available' ? 'bg-lime-300' : 'bg-lime-100'}`} onClick={()=> setView('available')}> Available</button>
                <button className={`hover:bg-lime-500 font-bold p-4 rounded-r-2xl ${view === 'selected' ? 'bg-lime-300' : 'bg-lime-100'}` }onClick={()=> {setView('selected')}}> Selected ({countSelectedPlayers})</button>
        </div>
      </div>

      {
        view=== "available" && <AvailablePlayers handleAddSelectedPlayers={handleAddSelectedPlayers}></AvailablePlayers>
        
      }
      {
        view=== "selected" &&  <SelectedPlayers countSelectedPlayers={countSelectedPlayers} addSelectedPlayers={addSelectedPlayers} handleRemovePlayer={handleRemovePlayer} handleAddMorePlayer={handleAddMorePlayer} ></SelectedPlayers>
      }
      <Footer></Footer>
    </div>
      
     
    </>
  )
}

export default App
