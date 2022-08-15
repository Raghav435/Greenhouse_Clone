import { Box, Button, Container, Heading, Img, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import "../../Styles/Integrations.css"
import SearchBar from '../Common/SearchBar'
import FilterPanel from '../Common/FilterPanel'
import List from '../Common/List'
import { dataList } from '../Data/Index'
import EmptyView from '../Common/EmptyView'
import Footer from '../Footer'

export default function Integrations() {

    const [list, setList] = useState(dataList);
    const [resultsFound, setResultsFound] = useState(true);
    const [searchInput, setSearchInput] = useState('');


    const applyFilters = () => {
    let updatedList = dataList;

     // Search Filter
     if (searchInput) {
        updatedList = updatedList.filter(
          (item) =>
            item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
            -1
        );
      }
      setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [ searchInput]);

  return (
   <Container>
        <Navbar />
           <Box className="integrations_section_1">
                <Box className='integrations_section_1_part_1'>
                    <Text className='integrations_section_1_part_1_text'>Integrations</Text>
                    <Heading className='integrations_section_1_part_1_head'>The largest and most impactful integration ecosystem</Heading>
                    <Text className='integrations_section_1_part_1_text'>With 400+ pre-built integrations, you can easily connect Greenhouse with the industry’s best tools.</Text>
                    <Button  className='integrations_section_1_part_1_button'><Link style={{textDecoration:"none", color:"white"}}  to="/">See our integrations</Link></Button>
                </Box>
                <Box>
                    <Img
                    height="871px"
                    width="720px"
                    src="https://sharp.services.greenhouse.io/production/Greenhouse-botanical-5.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=027e7cd20c84f6b4497ffae08fb4ddb97bd140ba869ecdd04595d14bb9e3974a"
                    alt='integrations_img_1'
                    />
                </Box>
           </Box>

           <Box className="integrations_section_2">
                <Box>
                    <Img
                    height="871px"
                    width="720px"
                    src="https://sharp.services.greenhouse.io/production/Integrations-Image-2-1.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=bbab53617dd7fe6ad5c4c9843f4adefde7b52b689d788950116e9d6426ce8dcb"
                    alt='integrations_img_2'
                        />
                </Box>
                <Box className='integrations_section_2_part_1'>
                    <Heading className='integrations_section_2_part_1_head'>Customize your ideal hiring solution</Heading>
                    <Text className='integrations_section_2_part_1_text'>Our Greenhouse integration ecosystem has integrations for all of your hiring tech stack needs. We’ve also highlighted Customer-Preferred Partners to help you select peer-recommended tools with confidence.</Text>
                </Box>
           </Box>

           <Box className='Integrations_section_3'>
                <Box className='integrations_section_3_part_1'>
                    <Heading>Check out our latest integration partners</Heading>
                    <Button>See all partners</Button>
                </Box>
                <Box  className='integrations_section_3_part_2'>
                    <Box className='integrations_section_img'>
                        <Img
                        width="215"
                        height="50"
                        src="https://sharp.services.greenhouse.io/production/integrations/Paradoxy-logo-green.png?auto=format&fit=max&lossless=true&q=90&w=430&s=928dbf4d33d151c94b5b741631efb38f89434a6d80177b650509d7d01dce6942"
                        alt="img"
                        />
                    </Box>
                    <Box className='integrations_section_img'>
                        <Img
                        width="215"
                        height="50"
                        src="https://sharp.services.greenhouse.io/production/integrations/arbeitnow-logo-green.png?auto=format&fit=max&lossless=true&q=90&w=430&s=5134c194ba18b565f69ca1f0bcd53ebcd5950c1a1e3f5fbb38eeeed8794e6f8c"
                        alt="img"
                        />
                    </Box>
                    <Box className='integrations_section_img'>
                        <Img
                        width="215"
                        height="50" 
                        src="https://sharp.services.greenhouse.io/production/integrations/Cord-logo-green.png?auto=format&fit=max&lossless=true&q=90&w=430&s=08c4f04e6f0d59ad94bbbcd5187dda8440bc95937722c9b1827a52317464bb03" 
                        alt="img" />
                    </Box>
                    <Box className='integrations_section_img'>
                        <Img
                        width="215"
                        height="50"
                        src="https://sharp.services.greenhouse.io/production/integrations/Canditech-logo-green.png?auto=format&fit=max&lossless=true&q=90&w=430&s=3cf467f350a3e2708bc02656f5a09a939579ed97bb2157b459d764ecbe34a9ae" 
                        alt="img" />
                    </Box>
                    <Box className='integrations_section_img'>
                        <Img
                        width="215"
                        height="50" 
                        src="https://sharp.services.greenhouse.io/production/integrations/Microsoft-Teams-logo-green.png?auto=format&fit=max&lossless=true&q=90&w=430&s=5be8514686a2956e07f90e6572c880901338b8fcc60c49362b08ee890912ce78" 
                        alt="img" />
                    </Box>
                    <Box className='integrations_section_img'>
                        <Img
                        width="215"
                        height="50" 
                        src="https://sharp.services.greenhouse.io/production/integrations/Google-Meet-logo-green.png?auto=format&fit=max&lossless=true&q=90&w=430&s=6471865db29f876edb7d68f18ba13452eac7708f0da7f5461432053f5a348660" 
                        alt="img" />
                    </Box>
                </Box>
            </Box>

            <Box className="integrations_section_4">
                <Box className='integrations_section_4_part_1'>
                    <Heading className='integrations_section_4_part_1_head'>Reach more qualified candidates with Greenhouse Job Ad Market</Heading>
                    <Text className='integrations_section_4_part_1_text'>Access and optimize job listings across 1,000+ large and niche job boards, with recommendations based on historical and industry performance – all within Greenhouse.</Text>
                    <Button  className='integrations_section_4_part_1_button'><Link style={{textDecoration:"none", color:"white"}}  to="/">Learn how</Link></Button>
                </Box>
                <Box>
                    <Img
                    height="871px"
                    width="720px"
                    src="https://sharp.services.greenhouse.io/production/Image-of-Greenhouse-Job-Ad-Market.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=19309a826c92f4fb754efd6cf504c8d42bb4f39c468f540b1fd89d2a90d33607"
                    alt='integrations_img_4'
                    />
                </Box>
           </Box>

        <div className='middle_section'>
            <SearchBar
             value={searchInput}
             changeInput={(e) => setSearchInput(e.target.value)}
            />

            <div className='filter_list_top'>
                <div className='filter_panel_section'>

                    <FilterPanel />
                </div>

                <div className='list_section'>
                    <h2>Job distribution</h2>
                    <p>Sync and post your jobs across multiple channels to increase your pool of qualified candidates.</p>
                {resultsFound ? <List list={list} /> : <EmptyView />}
                </div>
            </div> 
        </div>


        <Footer/>

   </Container>
  )
}
