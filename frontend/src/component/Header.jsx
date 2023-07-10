import React from 'react'
import {Drawer , DrawerBody , DrawerHeader , DrawerOverlay , DrawerContent , DrawerCloseButton , Button, useDisclosure, VStack, HStack} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {
    const {isOpen , onOpen , onClose} = useDisclosure()
  return  <>

    <Button pos={'fixed'} top={'4'} left={'4'} colorScheme='linkedin' p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen}>
        <BiMenuAltLeft size={'20'} />
    </Button>

    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>College Info</DrawerHeader>
        <DrawerBody>
        <VStack alignItems={'flex-start'}>
            <Button onClick={onClose} colorScheme='linkedin' variant={'ghost'}>
                <Link to={'/'}>Home</Link>
            </Button>
            <Button onClick={onClose} colorScheme='linkedin' variant={'ghost'}>
                <Link to={'/addcollege'}>Add Data</Link>
            </Button>
            <Button onClick={onClose} colorScheme='linkedin' variant={'ghost'}>
                <Link to={'/allcollege'}>All  Data</Link>
            </Button>
        </VStack>

        <HStack pos={'absolute'} bottom={'10'} left={'0'}bgColor={''} width={'full'} justifyContent={'space-evenly'}>
        <Button onClick={onClose} colorScheme='linkedin'>
            <Link to={'/login'} >Log In</Link>
        </Button>
        <Button onClick={onClose} colorScheme='linkedin' variant={'outline'}>
            <Link to={'signup'}>Sign Up</Link>
        </Button>

        </HStack>


        

        </DrawerBody>
        </DrawerContent>

    </Drawer>


  </>
}

export default Header
