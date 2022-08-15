import { Box, Img } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../Navbar'
import "../../Styles/HomePage.css"
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const data = [
  {
    id: "1",
    key: "1",
    title: "Integrate new hires into the team more quickly",
    img: "https://sharp.services.greenhouse.io/production/Greenhouse-Onboarding-meet-your-team.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=ade780132354cc93215364e20ed0aef3fe418e5aa430a7f386eb2cb8a46b93d9"
  },
  {
    id: "2",
    key: "2",
    title: "Design personal welcome experiences",
    text: "",
    img: "https://sharp.services.greenhouse.io/production/Greenhouse-Onboarding-feedback-results.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=69579a5baea45f2ed14696fba5208bf946a9006269c549d87a70a7a6cdfe0a59"
  },
  {
    id: "3",
    key: "3",
    title: "Apply consistant and fair processes",
    text: "",
    img: "https://sharp.services.greenhouse.io/production/Greenhouse-Onboarding-welcome-experience.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=39c90099556658e73289a15bbe9144cf5ad710416d7b70123badad290712f322"
  },
  {
    id: "4",
    key: "4",
    title: "Keep everyting moving forward with automated task",
    text: "",
    img: "https://sharp.services.greenhouse.io/production/Greenhouse-Onboarding-tasks_2022-04-14-025706_aqkn.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=a979ec1fa2de4cb4ed1121027adcc6c3a4c242f5aa495074ede0d0c2eb845ba9"
  },
  {
    id: "5",
    key: "5",
    title: "Build a foundation for constant improvements",
    img: "https://sharp.services.greenhouse.io/production/Greenhouse-Onboarding-feedback-results.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=69579a5baea45f2ed14696fba5208bf946a9006269c549d87a70a7a6cdfe0a59"
  }
];

export default function HomePage() {
  const [toggle, setToggle] = useState();
  const [visible, setVisible] = useState(true);

  return (
    <div>
       <Navbar />
    <div className="home_section_1">
      <div className='home_section_1_part_1'>
        <p> Introducing Sourcing Automation</p>
        <h1>An efficient, personalized way to engage with talent</h1>
        <p className='home_section_1_part_1_lastchild'>Sourcing Automation helps you find, reach and engage top talent quickly and effectively. Easily capture your prospects' contact information, personalize and scale your outreach and automate communication – all with Greenhouse.</p>
        <button>See how it works</button>
      </div>
      <div>
        <Img
        height="871px"
        width="720px"
        src="https://sharp.services.greenhouse.io/production/Greenhouse-homepage-sourcing-automation-product-image.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=7754fb1603c84e31364b61f5f19ee99fb18b12d2ec5fe3c3ede07d566b8a438c"
         />
      </div>
    </div>

    <div className='home_section_2'>
      <div className='home_section_2_part_1'>
        <img
        height="871px"
        width="720px"
        src="https://sharp.services.greenhouse.io/production/Example-courses-from-Learn-Greenhouse-3.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=4b38236433fd0ec2ec499990c68c8d389bada59b72deee4aa999aa0feb207445"
        />
      </div>
      <div className='home_section_2_part_2'>
        <h1>Learning Greenhouse is easier than ever</h1>
        <p>Train your team on Greenhouse and explore recruiting best practices with on-demand videos and courses. This resource library also highlights core workflow paths for recruiters, coordinators, hiring managers and interviewers.</p>
        <button>Start learning</button>
      </div>
    </div>

   
      {data.map(({ title, key, img }) => 
            <div style={{display:"flex", justifyContent:"center"}} className="main">
              <div className="text">
              <h4 style={{color:"#2e4c43", padding:"3rem 8rem 3rem 8rem"}}
                  onClick={() => {
                    setToggle(key);
                    setVisible(false);
                  }}
                >
                  {title}{" "}
                </h4>
                {toggle === key ? (
                 
                 <img
                  height="871px"
                  width="720px"
                  src={img} key={key} className="photo" />
                
             ) : null}
              </div>
            </div>
      )}
    <buton><Link className='home_section_3_button' to="/onboarding">
      About onboarding</Link></buton>

      <div className="home_section_4">
      <div className='home_section_4_part_1'>
        <h1>Is your hiring strategy ready for what’s next?</h1>
        <p>Learn more about Greenhouse Hiring Maturity and find out if your company is moving up the curve</p>
        <button>Find out</button>
      </div>
      <div>
        <Img
        height="700px"
        width="755px"
        src="https://sharp.services.greenhouse.io/production/A-man-smiling-in-a-group-of-coworkers-around-a-table.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=a10dbb7e30cce9f6d5e2fa24078571559045d74d31386c76bce863990ceb7c90"
         />
      </div>
    </div>

    <div className='home_section_5'>
      <div className='home_section_5_part1'>
      <h3>
        <a href="https://www.greenhouse.io/guidance/climbing-greenhouse-hiring-maturity-curve-own-every-moment-hiring-experience">
          How to own every moment of your hiring experience
          </a>
          </h3>
        <img
        height="871px"
        width="720px"
        src="https://sharp.services.greenhouse.io/production/Greenhouse-Hiring-Maturity-curve-resources.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=41830eb37e801095dd850cb48a00d12884be11f144e9f4d665db4a392cb9a401"
        />
      </div>
      <div className='home_section_5_part_2'>
        <div className='home_section_5_part_2_first'>
          <p>Candidate sourcing, Hiring Maturity</p>
        <h1>How to get better at identifying and attracting the best talent for your organization</h1>
        <p>Climbing the Greenhouse Hiring Maturity™ curve Once you’ve understood the Greenhouse Hiring…</p>
        </div>
        <div className='home_section_5_part_2_first'>
          <p>Hiring Maturity, Talent strategy</p>
        <h1>How to make confident, informed hiring decisions</h1>
        <p>Climbing the Greenhouse Hiring Maturity™ curve Once you’ve understood the Greenhouse Hiring…</p>
        <button>More hiring maturity</button>
        </div>
      </div>
    </div>

    <div className='home_section_6'>
      <div className='home_section_6_part_1'>
       <h2>You're in good company</h2>
       <button>Share your thoughts on G2</button>

      </div>
      <div  className='home_section_6_part_2'>
        <div className='home_section_img'>
          <img
          width="215"
          height="50"
          src="https://sharp.services.greenhouse.io/production/Squarespace-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=aec1ac31518b64560204c23345a186514e6e4ec7e2ed1348eeecd8a311215402"
          alt="img"
          />
        </div>
        <div className='home_section_img'>
          <img
          width="215"
          height="50"
          src="https://sharp.services.greenhouse.io/production/JD-Power-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=73530e84025775b01ab82aefc5c264b382a1b58177bb3b39541f220ee8e57243"
          alt="img"
          />
        </div>
        <div className='home_section_img'>
          <img
          width="215"
          height="50" 
          src="https://sharp.services.greenhouse.io/production/wayfair-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=e414f9de33013b4e4cc2f07849e062caf94d813b6dcf294a71d81fd419119b9b" 
          alt="img" />
        </div>
        <div className='home_section_img'>
          <img
          width="215"
          height="50"
          src="https://sharp.services.greenhouse.io/production/GitLab-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=90343bafabaceb8b41f92ee7fcee1a5e4a07d3846b842833dd0d7ae71d394812" 
          alt="img" />
        </div>
        <div className='home_section_img'>
          <img
          width="215"
          height="50" 
          src="https://sharp.services.greenhouse.io/production/trivago-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=9f43ed82ddfdf755d3a4a46fc41037853d419e5631245c17f7cd2c56b2711e5a" 
          alt="img" />
        </div>
        <div className='home_section_img'>
          <img
          width="215"
          height="50" 
          src="https://sharp.services.greenhouse.io/production/Doordash-logo.png?auto=format&fit=max&lossless=true&q=90&w=430&s=3cc82bd0c82a9ad8818ae611902ec4d8f35452d915ed6c2de8dec56a66cf11e2" 
          alt="img" />
        </div>
      </div>
    </div>

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

    <div className='home_section_8'>
      <div className='home_section_8_part_1'>
        <h2>Share your Greenhouse experience</h2>
        <p>Has Greenhouse helped transform your hiring practices? Let fellow business leaders and talent pros know! Because when every company is good at hiring, every person's potential can be unlocked at work.</p>
        <button>Add your review</button>
      </div>
      <div className='home_section_8_part_2'>
        <img
        height="871px"
        width="720px" 
        src="https://sharp.services.greenhouse.io/production/Photo-of-brunette-woman-in-a-gray-vest-2.png?auto=format&fit=max&lossless=true&q=90&w=1440&s=e9d7003d6a3dd294708213002ecf8fec644dcf0db4aabef51fb388eea936a485" 
        alt="img" />
      </div>
    </div>

    <div className='home_section_9'>
      <div>
        <h2 className='home_section_9_head'>Ready to become great at hiring</h2>
        <button className='home_section_9_button'>Request a demo</button>
      </div>
    </div>

    <Footer />
    </div>
  );
};
