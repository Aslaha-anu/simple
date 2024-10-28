import { Button, Stack, TextField } from '@mui/material';
import './App.css'
import { useState } from 'react';

function App() {

const [principle,setPrinciple]=useState(0)
const [interest,setInterest]=useState(0)
const [year,setYear]=useState(0)
const[simpleInterest,setSimpleInterest]=useState(0)

const[isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
const[isInvaldInterest,setIsInvalidInterest]=useState(false)
const[isInvalidyear,setIsInvalidyear]=useState(false)

console.log(principle);
const validUserInput=(tag)=>{
  const{name,value}=tag
console.log(name,value);
console.log(typeof value);
console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
if(!!value.match(/^[0-9]*.?[0-9]+$/)){
 
if(name=='principle'){
  setPrinciple(value)
  setIsInvalidPrinciple(false)
}
else if(name=='interest'){
  setInterest(value)
  setIsInvalidInterest(false)
}
else{
  setYear(value)
  setIsInvalidyear(false)
}
}

else{
    if(name=='principle'){
      setIsInvalidPrinciple(true)
    }
    else if(name=='interest'){
     
      setIsInvalidInterest(true)
    } 
    else{
      
      setIsInvalidyear(true)
    }
}

}


 const handleCalculate=(e)=>{
  e.preventDefault()
  console.log("button clicked");
    if(principle && interest && year){
      setSimpleInterest(principle*interest*year/100)
    }
     else{
     alert(" enter the fields")
     }
  
 }
const handleReset=()=>{
   setInterest(0)
   setPrinciple(0)
   setYear(0)
   setIsInvalidPrinciple(false)
   setIsInvalidInterest(false)
   setIsInvalidyear(false)
   setSimpleInterest(false)
}
 

  return (
   
     <div className="bg-dark d-flex align-item-center justify-content-center p-3 " style={{minHeight:"100vh",width:"100%"}}>
     <div className='bg-light rounded p-5 ' style={{width:"550px"}}>
        <h2>Simple Intrest Calculator</h2>
        <p>Calculator your simple interest Easliy</p>
     <div className="d-flex align-items-center justify-content-center bg-warning rounded text-light flex-column " style={{height:"150px"}}>
          <h1>₹&nbsp;{simpleInterest}</h1>
          <h5>Total Simple interest</h5>
     </div>
           <form className='mt-3'>
     <div className='mb-3'>
   
        <TextField name='principle' onChange={e=>validUserInput(e.target)} value={principle || ""} className='w-100' id="outlined-basic" label="₹ principle Amount" variant="outlined" />

     </div>
{
     isInvalidPrinciple &&
       <p className='text-danger'>invalid priciple amount</p>
}
     <div className='mb-3'>
      <TextField name='interest'  onChange={e=>validUserInput(e.target)} value={interest || ""}  className='w-100' id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" />

     </div>
{
     isInvaldInterest &&
       <p className='text-danger'>invalid intrest </p>
}
     <div className='mb-3'>
       <TextField name='year'  onChange={e=>validUserInput(e.target)} value={year || ""}  className='w-100' id="outlined-basic" label="Time Period (Yr)" variant="outlined" />
    
     </div>
{
     isInvalidyear &&
       <p className='text-danger'>invalid year </p>
}
     <Stack direction="row" spacing={2}>
     <Button type='submit' disabled={isInvalidPrinciple || isInvaldInterest || isInvalidyear} onClick={handleCalculate} variant="contained" style={{background:'black', width:'50%', height:'50px'}}>Calculate</Button>
     <Button onClick={handleReset} variant="outlined"  style={{ width:'50%', height:'50px'}}>Reset</Button>
     </Stack>
     </form>
      </div>
      </div> 
  
  )
}

export default App
