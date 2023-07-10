import React, { useEffect, useState } from 'react'
import {Card , CardBody  , Heading , Text , CardFooter , Button , CardHeader, HStack } from '@chakra-ui/react'

const AddData = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState("")

  async function getData() {
    let response = await fetch('http://localhost:4000')
    const result = await response.json()

    if(!response.ok){
      console.log(result.error)
      setError(result.error)
    }else{
    setData(result)
    }


  }

  useEffect(() => {
    
    getData()
  
  },[])

  console.log(data)
  

  return (
    <HStack pos={'absolute'} top={'10rem'} left={'10rem'} >
      {/* <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' w={'full'} > */}
  <Card >
    <CardHeader>
      <Heading size='md' >College Info</Heading>
    </CardHeader>
    <div>
    {data && data.map((ele)=>(
      <CardBody key={ele._id} >
      <Text>{ele.name}</Text>
      <Text>{ele.address}</Text>
      <Text>{ele.placement_ratio}</Text>
      <Text>{ele.average}</Text>
      <Text>CuttOff</Text>
      <Text>Website</Text>
      <Text>Autonomous</Text>
      <Text>RanK</Text>
    </CardBody>
    ))}
    <CardFooter justifyContent={'space-evenly'}>
      <Button  marginRight={'2'}>Delete</Button>
      <Button>Edit</Button>
    </CardFooter>
    </div>
    
  </Card>
 
  
{/* </SimpleGrid> */}
    </HStack>



  )
}

export default AddData
