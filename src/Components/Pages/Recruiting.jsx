import { AspectRatio, Box, Button, Container, Heading, Img, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import "../../Styles/Recruit.css";
import Footer from '../Footer';

export default function Recruiting() {
  return (
    <Container>
         <Navbar />
         <Box>
            <Box className="recruit_section_1">
                <Box className='recruit_section_1_part_1'>
                    <Text className='recruit_section_1_part_1_text'>Greenhouse Recruiting</Text>
                    <Heading className='recruit_section_1_part_1_head'>Great hiring at every step</Heading>
                    <Text className='recruit_section_1_part_1_text'>Effectively and measurably make smarter hiring decisions with Greenhouse Recruiting.</Text>
                    <Button  className='recruit_section_1_part_1_button'><Link style={{textDecoration:"none", color:"white"}}  to="/">Request a demo</Link></Button>
                </Box>
                <Box>
                    <Img
                    height="871px"
                    width="720px"
                    src="https://sharp.services.greenhouse.io/production/Greenhouse-Recruiting-dashboard2.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=176c422ebf354345a39455295d81b18f2535558719de3598915d74d8f4c9db3c"
                    alt='recruit_img_1'
                    />
                </Box>
            </Box>

            <Box className="recruit_section_2">
                <Box >
                    <Heading className='recruit_section_2_head' as="h2" size="md">Get the technology and know-how to be great at hiring so you can:</Heading>
                </Box>
                <Box className='recruit_section_2_grid'>
                    <Text style={{border:"1px solid grey", padding:"5rem", fontSize:"20px"}}>Source and nurture the right candidates</Text>
                    <Text style={{border:"1px solid grey" , padding:"5rem" , fontSize:"20px"}}>Set up an equitable hiring process</Text>
                    <Text style={{border:"1px solid grey" , padding:"5rem" , fontSize:"20px"}}>Create an exceptional hiring experience for everyone</Text>
                    <Text style={{border:"1px solid grey" , padding:"5rem" , fontSize:"20px"}}>Use robust data and reports to continuously improve</Text>
                    <Text style={{border:"1px solid grey" , padding:"5rem" , fontSize:"20px"}}>Stay flexible with our Recruiting and Event mobile apps</Text>
                    <Text style={{border:"1px solid grey" , padding:"5rem" , fontSize:"20px"}}>Scale to the size of your business</Text>
                </Box>
            </Box>

            <Box className='recruit_section_3'>
                <AspectRatio className="recruit_section_3_video" maxW='680px' ratio={16/9}> 
                    <iframe width="800" height="515" src="https://www.youtube.com/embed/oVoQJIR_Uf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </AspectRatio>
            </Box>

            <Box className='recruit_section_4'>
                <Heading className='recruit_section_4_head'>Here’s how it works.</Heading>
            </Box>

            <Box className='recruit_section_5'>
                <Box>
                    <Img
                    height='871px'
                    width='720px'
                    src='https://sharp.services.greenhouse.io/production/Greenhouse-recruiting-sourcing-automation-product-image_2022-05-17-232750_opev.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=8de0803263cf246ee4e269eedd59a856d4491384ebb4f73c1045a19a9c4ce6b7'
                    alt='recruit_img_5'
                    />
                </Box>
                <Box className='recruit_section_5_part_2'>
                    <Heading className='recruit_section_5_part_2_head'>Find and engage top talent with ease</Heading>
                    <Text className='recruit_section_5_part_2_text'>Reach, classify and nurture talent so you can build a robust candidate pipeline that delivers exactly what you need for each role.</Text>
                    <UnorderedList className='recruit_section_5_part_2_list'>
                        <ListItem  className='recruit_section_5_part_2_list'>Access and optimize job listings across 1,000+ large and niche job boards, with recommendations based on historical and industry performance</ListItem>
                        <ListItem  className='recruit_section_5_part_2_list'>Easily and efficiently capture prospects' contact information, personalize and scale your outreach and automate communication</ListItem>
                        <ListItem  className='recruit_section_5_part_2_list'>Empower stakeholders to play their part with fine-grained permissions and stay on track with alerts, tasks and notifications</ListItem>
                        <ListItem  className='recruit_section_5_part_2_list'>Track candidate relationships over time</ListItem>
                    </UnorderedList>
                </Box>
            </Box>

            <Box className='recruit_section_6'>
                <Box className='recruit_section_6_part_2'>
                    <Heading className='recruit_section_6_part_2_head'>Collaborate with your hiring team</Heading>
                    <Text className='recruit_section_6_part_2_text'>Help build and maintain alignment between recruiters and hiring managers with easy, seamless communication – all within Greenhouse.</Text>
                    <UnorderedList className='recruit_section_6_part_2_list'>
                        <ListItem  className='recruit_section_6_part_2_list'>Kick off new jobs by configuring relevant fields that capture the necessary information from hiring managers for more informed hiring decisions</ListItem>
                        <ListItem  className='recruit_section_6_part_2_list'>Seamlessly collaborate with hiring teams directly in Greenhouse with @mentions, shared application reviews, and job and offer approvals to centralize communication</ListItem>
                        <ListItem  className='recruit_section_6_part_2_list'>Set new roles and candidates up for success with a more well-defined and thoughtful interview process</ListItem>
                        <ListItem  className='recruit_section_6_part_2_list'>Make better, more informed hiring decisions even faste</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <Img
                    height='871px'
                    width='720px'
                    src='https://sharp.services.greenhouse.io/production/Interview-scorecard-next-to-Job-Kickoff-form-screen_2022-02-23-171629_lcno.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=2d572520b12372624a6c5a75b43a59834ea63ad62963795e85fac03d69ca56e3'
                    alt='recruit_img_6'
                    />
                </Box>
            </Box>

            <Box className='recruit_section_7'>
                <Box>
                    <Img
                    height='871px'
                    width='720px'
                    src='https://sharp.services.greenhouse.io/production/Greenhouse-Recruiting-candidate-scorecard2.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=0757d9227f4cc7136cf0e4ee15a98f7de2734afbcf0df6e33307344c06bf0d5b'
                    alt='recruit_img_7'
                    />
                </Box>
                <Box className='recruit_section_7_part_2'>
                    <Heading className='recruit_section_7_part_2_head'>Set up a fair and equitable hiring process</Heading>
                    <Text className='recruit_section_7_part_2_text'>Reduce unconscious bias at every step of the hiring process with in-the-moment nudges, measurement tools and more.</Text>
                    <UnorderedList className='recruit_section_7_part_2_list'>
                        <ListItem  className='recruit_section_7_part_2_list'>Empower candidates to pre-record the correct pronunciation of their name and indicate their personal pronouns, so the hiring team can get it right and candidates feel seen and acknowledged</ListItem>
                        <ListItem  className='recruit_section_7_part_2_list'>Decide on a scorecard of key attributes for a candidate’s success at the beginning to evaluate all candidates consistently</ListItem>
                        <ListItem  className='recruit_section_7_part_2_list'>Create an organized plan that helps interviewers assess the right skills, traits and qualifications</ListItem>
                    </UnorderedList>
                </Box>
            </Box>

            <Box className='recruit_section_8'>
                <Box className='recruit_section_8_part_2'>
                    <Heading className='recruit_section_8_part_2_head'>Create an impressive candidate experience</Heading>
                    <Text className='recruit_section_8_part_2_text'>Connect with applicants through focused, meaningful interviews, career pages and customizable email templates that bring your brand to life.</Text>
                    <UnorderedList className='recruit_section_8_part_2_list'>
                        <ListItem  className='recruit_section_8_part_2_list'>Automate surveys to measure candidate experience</ListItem>
                        <ListItem  className='recruit_section_8_part_2_list'>Manage prospect data at in-person events with ease using the Events app</ListItem>
                        <ListItem  className='recruit_section_8_part_2_list'>Give candidates the flexibility to self-schedule interviews at a time most convenient for them</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <Img
                    height='871px'
                    width='720px'
                    src='https://sharp.services.greenhouse.io/production/Squarespace-career-page.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=94e724a26b77a4b2ff78c3d33f2fd3b7cc86f481ca5aaf550d3a368e58c4020e'
                    alt='recruit_img_8'
                    />
                </Box>
            </Box>

            <Box className='recruit_section_9'>
                <Box>
                    <Img
                    height='871px'
                    width='720px'
                    src='https://sharp.services.greenhouse.io/production/Greenhouse-Recruiting-reports-3.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=df407b5b8e561189608bbe5bddbdadb5ea7cca8810e465bd063a5e8e714d92cf'
                    alt='recruit_img_9'
                    />
                </Box>
                <Box className='recruit_section_9_part_2'>
                    <Heading className='recruit_section_9_part_2_head'>Constantly improve your process using reports</Heading>
                    <Text className='recruit_section_9_part_2_text'>Make data-driven decisions to easily measure your talent team’s work and find out what’s working best.</Text>
                    <UnorderedList className='recruit_section_9_part_2_list'>
                        <ListItem  className='recruit_section_9_part_2_list'>Analyze and share 30+ core reports for at-a-glance takeaways</ListItem>
                        <ListItem  className='recruit_section_9_part_2_list'>Connect reports to Google Sheets or your business intelligence platform with our BI Connector</ListItem>
                        <ListItem  className='recruit_section_9_part_2_list'>Leverage machine learning and predictive analytics with Greenhouse Predicts to uncover the likelihood of hiring a candidate on time</ListItem>
                    </UnorderedList>
                </Box>
            </Box>

            <Box className='recruit_section_10'>
                <Box className='recruit_section_10_part_2'>
                    <Heading className='recruit_section_10_part_2_head'>Scale to the size of your business</Heading>
                    <Text className='recruit_section_10_part_2_text'>Greenhouse helps businesses of every size and hiring need, from fast-growing startups to sophisticated global enterprises.</Text>
                    <UnorderedList className='recruit_section_10_part_2_list'>
                        <ListItem  className='recruit_section_10_part_2_list'>Advanced data configuration and customizable permissions and workflows help you meet the demands of complex systems</ListItem>
                        <ListItem  className='recruit_section_10_part_2_list'>Build the exact hiring tech stack your organization needs with our 300+ integrations and open Harvest API</ListItem>
                        <ListItem  className='recruit_section_10_part_2_list'>A localized experience lets your team conduct interviews, fill out scorecards and refer candidates to roles in their native language, including English, German, French, Spanish, Italian and Portuguese.</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <Img
                    height='871px'
                    width='720px'
                    src='https://sharp.services.greenhouse.io/production/Greenhouse-Recruiting-custom-configuration4.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=68f6d92528054bfb3f0641f6d1785b6aedb01059274b5641fff73e13ceb23711'
                    alt='recruit_img_10'
                    />
                </Box>
            </Box>

            <Box className="home_section_4">
                <Box className='home_section_4_part_1'>
                    <h1>Is your hiring strategy ready for what’s next?</h1>
                    <p>Learn more about Greenhouse Hiring Maturity and find out if your company is moving up the curve</p>
                    <button>Find out</button>
                </Box>
                <Box>
                    <Img
                    height="871px"
                    width="750px"
                    src="https://sharp.services.greenhouse.io/production/A-man-smiling-in-a-group-of-coworkers-around-a-table.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=a10dbb7e30cce9f6d5e2fa24078571559045d74d31386c76bce863990ceb7c90"
                    />
                </Box>
            </Box>

            <div className='home_section_7'>
                <div className='home_section_7_part1'>
                    <h3>
                        <a href="https://www.greenhouse.io/guidance/climbing-greenhouse-hiring-maturity-curve-own-every-moment-hiring-experience">
                        Distributed hiring and remote working – The essential guide
                        </a>
                    </h3>
                    <img
                    height="871px"
                    width="720px"
                    src="https://sharp.services.greenhouse.io/production/Woman-working-at-a-laptop-in-a-green-room.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=3f9ffd26b0ec89252c81ae15a693764bad3891f837cb36175d35cd7f32d33549"
                    />
                </div>
                <div className='home_section_7_part_2'>
                     <div className='home_section_7_part_2_first'>
                        <p>Distributed hiring & work</p>
                        <h1>Best practices for interactive remote interviews</h1>
                        <p>As the world moves toward increased virtual interaction with candidates, there are a number of…</p>
                    </div>
                    <div className='home_section_7_part_2_first'>
                        <p>Distributed hiring & work, Talent strategy</p>
                        <h1>How to hire in the age of remote work</h1>
                        <p>Talent teams are facing a new challenge: fully-remote hiring. How can you deliver the best…</p>
                        <button>More on distributed hiring</button>
                    </div>
                </div>
            </div>

            <div className='home_section_9'>
                <div>
                    <h2 className='home_section_9_head'>Ready to become great at hiring</h2>
                    <button className='home_section_9_button'>Request a demo</button>
                </div>
            </div>
        </Box>
        <Footer />
    </Container>
  );
};