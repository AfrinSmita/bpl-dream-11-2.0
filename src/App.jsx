
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
 import { ToastContainer, toast } from 'react-toastify';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';


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
  if(availablePlayer.price>coins){
    const notify2 = () => toast("You don't have enough coins to choose this player!");
    notify2(); 

  }
  else{
    setAddSelectedPlayers([...addSelectedPlayers, availablePlayer])
    setCoins(coins-availablePlayer.price)
     setCountSelectedPlayers(countSelectedPlayers + 1)
    const addingNotify = () => toast(`You have chosen ${availablePlayer.name} and spent ${availablePlayer.price} coins!`);
    addingNotify();
     console.log("added")
    }
  
}


  return (
    <>
      <Header coins={coins}></Header>
      <Hero handleCoinCount={handleCoinCount} notify={notify}></Hero>
      <ToastContainer position='top-center'></ToastContainer>

    <div className=''>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold'>Available Players</h2>
        <div className='flex justify-end items-center'>
                <button className='bg-lime-300 font-bold p-4 rounded-l-2xl' onClick={()=> setView('available')}> Available</button>
                <button className='active:bg-lime-300 hover:bg-lime-100 font-bold p-4 rounded-r-2xl' onClick={()=> {setView('selected')}}> Selected ({countSelectedPlayers})</button>
        </div>
      </div>

      {
        view=== "available" && <AvailablePlayers handleAddSelectedPlayers={handleAddSelectedPlayers}></AvailablePlayers>
      }
      {
        view=== "selected" &&  <SelectedPlayers countSelectedPlayers={countSelectedPlayers} addSelectedPlayers={addSelectedPlayers} ></SelectedPlayers>
      }

    </div>
      
     
    </>
  )
}

export default App
