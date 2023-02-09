import NavBar from "./NavBar";
import Logo from "../components/Logo";
//import { Link } from 'react-router-dom';
import user from "../assets/img/user.svg";
import bag from "../assets/img/bag.svg";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
//import {Link} from 'react-router-dom';
import Link from '@mui/material/Link';

function Header() {
  return (


    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#091625',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '15px 92px',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <Logo />
          <form>
            <Input
              type="text"
              placeholder="Search Products"
              sx={{
                backgroundColor: "white",
                borderRadius: '20px',
                width: '696px',
                height: '40px',
                padding: '15px',
                color: '#000000',
                marginRight: '100px'
              }} />
          </form>
    
        </Box>
        <Box
          sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent: 'flex-end'
          }}>
          <Box
          sx={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
          }}
          >
            <Box
              sx={{
                margin:'0px 10px'
              }}
            >
            <img src={user} alt="user icon" />
            </Box>
            
            <Link href="/signin" underline="none" color="#ffffff">Sign in</Link>
          </Box>
          <Box
           sx={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
          }}
          >
            <Box
            sx={{
              margin:'0px 10px'
            }}
            >
            <img src={bag} alt="bag icon" />
            </Box>          
            <Link  href="/cart" underline="none" color="#ffffff" >Cart</Link>
          </Box>
          </Box>
      </Box>
      <NavBar />
    </Box>
  )
}

export default Header