import { useState } from 'react'

import './App.css'

function App() {
   const[name,setName]=useState<string>("")

   const greetUser=()=>{
  
    alert( `salam ${name}`)
   }

   const[age,setAge]=useState<number>(0)

const checkEligibility=()=>{
if(age>=18){
  alert(true)
}else{
  alert(false)
}
}

const [number, setNumber] = useState<number>(0); 
const [numbers, setNumbers] = useState<number[]>([]); 
const addNumber = () => {
  setNumbers((prevNumbers) => [...prevNumbers, number]);
  setNumber(0);
};

const calculateSum = () => {
  const summ = numbers.reduce((sum, num) => sum + num, 0); 
  return summ;
};

  return (
    
    <>
    <p>Ad daxil edin</p>
     <input type="text" onChange={(e)=>setName(e.target.value)}  />
     <button onClick={greetUser}>salam ver</button>
     <br /> <br />
     <p>Yas daxil edin</p>
     <input type="number" onChange={(e)=>setAge(Number(e.target.value))} />
     <button onClick={checkEligibility}>yasi yoxla</button>
     <br /> <br />
     <p>Cemi hesablamaq</p>
     <p>Eded daxil edin: </p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={addNumber}>eded xail et</button>
      <p>Daxil edilen ededler {numbers.join(", ")}</p> 
      <p>Ededlerin cemi: {calculateSum()}</p> 
    </>
  )
}

export default App
