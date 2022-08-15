import { Box, Button, Container, Flex, FormControl, Heading, Image, Img, Input, MenuItemOption, MenuOptionGroup, Select, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Footer.css"
import {Facebook, Linkedin, Twitter, Youtube} from "react-feather"

export default function Footer() {
  return (
    <Container color="white" backgroundColor="#15372c">
        <Flex justifyContent="space-evenly">
            <Box>
                <Box>
                    <Text className='footer_head'>Products</Text>
                    <Text className='footer_text'>
                        <Link  style={{textDecoration:"none", color:"white", margin:"0rem 0rem 2rem 0rem"}} to="/">
                            Recruiting
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white", paddingBottom:"1rem"}} to="/">
                            Onboarding
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Pricing
                        </Link>
                    </Text>
                </Box>
               

                <Box>
                    <Text className='footer_head'>Segments</Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white", marginTop:"1rem"}} to="/">
                        Enterprise
                        </Link></Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white" , marginTop:"1rem"}} to="/">
                        Small to midsize
                        </Link></Text>
                </Box>


                <Text>
                    <Text className='footer_head'>Solutions</Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Integrations
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Structured hiring
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Talent sourcing
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Candidate experience
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Diversity,equity & inclusion 
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            More solutions
                        </Link>
                    </Text>
                </Text>
             </Box>

             <Box>
                <Box>
                    <Text className='footer_head'>Resources</Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Blog
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Guidence
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Customer stories
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Hiring glossary
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Support
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Developer resources
                        </Link>
                    </Text>
                </Box>

                <Box>
                    <Text className='footer_head'>Platform</Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Ethical principles
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Services
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Mobile
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            APIs
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Security
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            GDPR
                        </Link>
                    </Text>
                </Box>
             </Box>

             <Box>
                <Box>
                    <Text className='footer_head' >About us</Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Mission
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Belonging
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Company
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Careers
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Press & awards
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Contact
                        </Link>
                    </Text>

                </Box>
                <Box>
                    <Text className='footer_head'>Community</Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Events
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Open
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Talent Makers
                        </Link>
                    </Text>
                    <Text className='footer_text'>
                        <Link style={{textDecoration:"none", color:"white"}} to="/">
                            Newsletter
                        </Link>
                    </Text>
                </Box>
             </Box>

             <Box className='footer_right_corner'>
                <Heading as='h2' size='2xl'>
                Modern Recruiter newsletter
                </Heading>
                <Text className='footer_text'>Our bi-weekly newsletter full of inspiration, podcasts, trends and news.</Text>
                <FormControl>
                    <Text className='footer_email'>* Email address</Text>
                    <Input
                    className='footer_email_input'
                    type="text"
                    name="email"
                    />
                </FormControl>
                <Button className='footer_subscribe_button'>Subscribe</Button>
                <Text className='footer_text'>Choose your language</Text>
                <Select className='footer_text'>
                    <option value="English(US)">English(US)</option>
                    <option value="English(UK)">English(UK)</option>
                    <option value="Deutsch">Deutsch</option>
                </Select>
             </Box>
        </Flex>

        <Box className='footer_social_media'>
            <a  background-color="#15372c" href="https://www.facebook.com/greenhouse.io">
            <Facebook/>
            </a>
            <a href="https://www.linkedin.com/company/greenhouse-inc-/">
            <Linkedin/>
            </a>
            <a href="https://twitter.com/Greenhouse">
            <Twitter/>
            </a>
            <a href="https://www.youtube.com/channel/UCwLlhrx5lFssgTwKCHEuC8g">
            <Youtube/>               
            </a>
        </Box>

        <Flex justifyContent="space-around" paddingBottom="2rem">
            <Box>
                <p>©2022 Greenhouse Software, Inc.
                    <br/>
                    “Hire for what’s next” and “Greenhouse Talent Makers” are trademarks of Greenhouse Software.
                </p>
            </Box>
            <Box display="flex" justifyContent="space-between" gap="1rem" paddingTop="1rem">
                <Text>
                    <Link  style={{textDecoration:"none", color:"white", textDecoration:"underline"}} to="/">Cookie preferences</Link>
                </Text>
                <Text>
                    <Link  style={{textDecoration:"none", color:"white" , textDecoration:"underline"}} to="/">Privacy policy</Link>
                </Text>
                <Text>
                    <Link  style={{textDecoration:"none", color:"white" , textDecoration:"underline"}} to="/">Terms of service</Link>
                </Text>
            </Box>
        </Flex>
    </Container>
   
  )
}
