import { Box, Button, Checkbox, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Img, Input, ListItem, Select, Text, UnorderedList, VStack,  } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import "../../Styles/DemoPage.css"
import ImageSlider from '../Common/ImageSlider'
import { SliderData } from '../Data/SliderData'
import Footer from '../Footer'
import Navbar from '../Navbar'

const initState = {
    email: "",
    firstname: "",
    lastname: "",
    companyname: '',
    companysize: '',
}


export default function DemoPage() {
    const [data, setData] = useState(initState);
    const [info, setInfo] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data);
        alert('Demo send to your email')
        data("");
    };

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        const valueToUpdate = type === "checkbox" ? checked : value;
      //named key
      //[variable] => "name" or "email" as key
      setData( { ...data, [name]: valueToUpdate} );

    }
  return (
    <Container>
        <Navbar />

        <Box className='demo_section_1'>
            <Box className='demo_section_1_part_1'>
                <Heading className='demo_section_1_part_1_head_1' as='h2' size='3xl'>Get a demo of Greenhouse</Heading>
                <Text className='demo_section_1_part_1_text'>From recruiting candidates to onboarding new team members, Greenhouse gives your company everything you need to be great at hiring.</Text>
                <Heading className='demo_section_1_part_1_head_2' as='h4' size='md'>Book a session with us to:</Heading>
                <UnorderedList
                style={{margin:"0rem 0rem 2rem 2rem"}}
                >
                    <ListItem  style={{margin:"2rem 0rem 2rem 2rem"}}>Get an overview of the Greenhouse platform</ListItem>
                    <ListItem  style={{margin:"2rem 0rem 2rem 2rem"}}>Discuss your goals with a product expert</ListItem>
                    <ListItem  style={{margin:"2rem 0rem 2rem 2rem"}}>Receive pricing details based on your needs</ListItem>
                </UnorderedList>
                <Heading className='demo_section_1_part_1_head_3' as='h4' size='md'>Once you complete the request form, a Greenhouse team member will reach out within 24 business hours.</Heading>
            </Box>
            <Box className='demo_section_1_part_2'>
                <form onSubmit={handleSubmit}  className='demo_form'>
                    <Box>
                        <label className='email_label'>Work email address</label>
                        <input
                        className='input'
                        type='text'
                        name='email'
                        value={data.email}
                        placeholder='username@yourcompany.com'
                        onChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <label className='firstname_label'>First name</label>    
                        <input
                        className='input'
                        type='text'
                        name='firstname'
                        value={data.firstname}
                        onChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <label className='lastname_label'>Last name</label>    
                        <input
                        className='input'
                        type='text'
                        name='lastname'
                        value={data.lastname}
                        onChange={handleChange}
                         />
                    </Box>
                    <Box>
                        <label className='companyname_label'>Company name</label>
                        <Input
                        className='input'
                        type='text'
                        name='companyname'
                        value={data.companyname}
                        onChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <label className='companyname_label'>Company size</label>
                        <Select
                            name='companysize'
                            onChange={handleChange}
                            fontSize='larger'
                            borderRadius='20px'
                            placeholder='Select'>
                            <option value='1-50'>1-50</option>
                            <option value='51-100'>51-100</option>
                            <option value='101-250'>101-250</option>
                            <option value='251-500'>251-500</option>
                            <option value='501-1000'>501-1000</option>
                        </Select >
                    </Box>
                    <Box>
                        <label className='label_bottom'>In addition to recruiting, are you interested in these other solutions?</label>
                        <VStack>
                            <Checkbox className='input'>
                                Sourcing Automation
                            </Checkbox> 
                            <Checkbox  className='input'>
                                Onboarding   
                            </Checkbox>
                        </VStack>
                    </Box>
                    <Box>
                        <Input
                        className='demo_section_1_button'
                        type='submit'
                        value='Request a demo'
                        />
                    </Box>
                </form>
            </Box>
        </Box>

        <Box className='demo_section_2'>
                <Box className='demo_section_2_part_1'>
                    <Heading className='demo_section_2_part_1_head'>Check out our latest integration partners</Heading>
                </Box>
                <Box  className='demo_section_2_part_2'>
                    <Box className='demo_section_img'>
                        <Img
                        width="215"
                        height="50"
                        src="https://sharp.services.greenhouse.io/production/Squarespace-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=aec1ac31518b64560204c23345a186514e6e4ec7e2ed1348eeecd8a311215402"
                        alt="img"
                        />
                    </Box>
                    <Box className='demo_section_img'>
                        <Img
                        width="215"
                        height="50"
                        src="https://sharp.services.greenhouse.io/production/JD-Power-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=73530e84025775b01ab82aefc5c264b382a1b58177bb3b39541f220ee8e57243"
                        alt="img"
                        />
                    </Box>
                    <Box className='demo_section_img'>
                        <Img
                        width="215"
                        height="50" 
                        src="https://sharp.services.greenhouse.io/production/wayfair-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=e414f9de33013b4e4cc2f07849e062caf94d813b6dcf294a71d81fd419119b9b" 
                        alt="img" />
                    </Box>
                    <Box className='demo_section_img'>
                        <Img
                        width="215"
                        height="50"
                        src="https://sharp.services.greenhouse.io/production/GitLab-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=90343bafabaceb8b41f92ee7fcee1a5e4a07d3846b842833dd0d7ae71d394812" 
                        alt="img" />
                    </Box>
                    <Box className='demo_section_img'>
                        <Img
                        width="215"
                        height="50" 
                        src="https://sharp.services.greenhouse.io/production/trivago-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=9f43ed82ddfdf755d3a4a46fc41037853d419e5631245c17f7cd2c56b2711e5a" 
                        alt="img" />
                    </Box>
                    <Box className='demo_section_img'>
                        <Img
                        width="215"
                        height="50" 
                        src="https://sharp.services.greenhouse.io/production/Doordash-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=3cc82bd0c82a9ad8818ae611902ec4d8f35452d915ed6c2de8dec56a66cf11e2" 
                        alt="img" />
                    </Box>
                </Box>
            </Box>

            <Box className='demo_section_3'>
                <Heading className='demo_section_3_head'>We’ve received awards and accolades for our hiring software and company culture</Heading>
           
                <ImageSlider
                slides={SliderData}
                />
            </Box>

            <Footer />

    </Container>
  )
}
