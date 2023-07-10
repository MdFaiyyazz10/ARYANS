import React, { useState } from 'react'
import { Button, FormControl ,FormLabel ,  Input, VStack} from '@chakra-ui/react'


const AddData = () => {

    // const [name, setName] = useState('')
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [placement_ratio, setPlacement] = useState("")
    const [average_ratio, setAverage] = useState("")
    const [cuttOff, setCuttOff] = useState("")
    const [website, setWebsite] = useState("")
    const [autonomous, setAutonomous] = useState("")
    const [rank, setRank] = useState(0)
    const [error, setError] = useState("")

    // console.log(name,address,placement,average,cuttoff,website,autonomous,rank)
    // console.log(setName)

    const submitHandler = async (e)=>{
        e.preventDefault()
        let addCollege = {name,address,placement_ratio,average_ratio,cuttOff,website,autonomous,rank}
        console.log(addCollege)

        const response = await fetch('http://localhost:4000', {
            method: "POST",
            body: JSON.stringify(addCollege),
            headers: {
              "Content-Type": "application/json"
            }
        })

        const result = await response.json() 

        if(!response.ok){
            console.log(result.error)
            setError(result.error)
        }else{
            console.log(result)
            setName("")
            setAddress("")
            setPlacement("")
            setAverage("")
            setCuttOff("")
            setWebsite("")
            setAutonomous("")
            setRank(0)
        }
    }


    
    

  return <>
      
      <div>
      {error && <div class="alert alert-danger" >{error} </div> }
      </div>
  
  <VStack pos={'relative'} top={'4rem'}  >
  <form onSubmit={submitHandler} >
    <FormControl >
  <FormLabel>College Name</FormLabel>
  <Input type='text'  value={name} onChange={(e)=> setName(e.target.value)} />
  <FormLabel>College Address</FormLabel>
  <Input type='text'  value={address} onChange={(e)=> setAddress(e.target.value)} />
  <FormLabel>Placement Ratio</FormLabel>
  <Input type='text'  value={placement_ratio} onChange={(e)=> setPlacement(e.target.value)} />
  <FormLabel>Average Ratio</FormLabel>
  <Input type='text'  value={average_ratio} onChange={(e)=> setAverage(e.target.value)} />
  <FormLabel>CuttOff</FormLabel>
  <Input type='text'  value={cuttOff} onChange={(e)=> setCuttOff(e.target.value)} />
  <FormLabel>Website</FormLabel>
  <Input type='text'  value={website} onChange={(e)=> setWebsite(e.target.value)} />
  <FormLabel>Autonomous</FormLabel>
  <Input type='text' value={autonomous} onChange={(e)=> setAutonomous(e.target.value)} />
  <FormLabel>Rank</FormLabel>
  <Input type='number'  value={rank} onChange={(e)=> setRank(e.target.value)} />
</FormControl>
    <Button type='submit' colorScheme='linkedin' variant={'solid'} m={'5'} left={'8'}>
    Submit
    </Button>
    </form>
    
  </VStack>
  
  </>
    


  
}

export default AddData
