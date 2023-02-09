import Logo from "../components/Logo";
import phone from "../assets/img/phone.svg";
import { socialNetworks } from "../utils/socialNetworks"
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';


function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#E6E8E9',
        padding: '80px 92px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}
      >

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '25%'
          }}
        >
          <Logo />
          <Box
            sx={{
              width: '80%',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '24px',
              marginTop: '24px'
            }}
          >
            We sell custom products for all your needs. Packs and bulk products that you will enjoy.
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '15px',
              lineHeight: '16px',
            }}
          >
            <img src={phone} alt="Phone icon" />
            <p>+1-202-555-0129</p>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            {socialNetworks.map(el => (
              <Box
                sx={{
                  marginRight: '12px'
                }}
              >
                <a href={el.url} key={el.name}>
                  <img src={el.icon} alt={el.name} />
                </a>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '25%'
          }}
        >
          <h3>
            Our Company
          </h3>
          <Link href="" underline="none" color="#3A4451" margin="12px 0px">
            About Us
          </Link>
          <Link href="" underline="none" color="#3A4451" margin="12px 0px">
            FAQ
          </Link>
          <Link href="" underline="none" color="#3A4451" margin="12px 0px">
            PartnerShips
          </Link>
          <Link href="" underline="none" color="#3A4451" margin="12px 0px">
            Sustainability
          </Link>
          <Link href="" underline="none" color="#3A4451" margin="12px 0px">
            Blog
          </Link>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '25%'
          }}
        >
          <h3>
            How can we help
          </h3>
          <Link href="" underline="none" color="#3A4451" margin="12px 0px">
            Place a ticket
          </Link>
          <Link href="" underline="none" color="#3A4451" margin="12px 0px">
            Track your order
          </Link>
          <Link href="" underline="none" color="#3A4451" margin="12px 0px">
            Help Center
          </Link>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '25%'
          }}
        >
          <h3>Information</h3>
          <Link href="" underline="none" color="#3A4451" margin="12px 0px">
            Contact Us
          </Link>
          <Link href="" underline="none" color="#3A4451" margin="12px 0px">
            Live Chat
          </Link>
          <Link href="" underline="none" color="#3A4451" margin="12px 0px">
            Privacy
          </Link>
          <Link href="" underline="none" color="#3A4451" margin="12px 0px">
            Terms of use
          </Link>
        </Box>
      </Box>


      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '96px'
        }}
      >
        <p>© 2022 Customer Products. All rights reserved.</p>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',

          }}
        >
          <Box>
            <label>Region:</label>
            <select name="region">
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="mexico">Mexico</option>
            </select>
          </Box>
          <Box>
            <label>Language:</label>
            <select name="language">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default Footer
