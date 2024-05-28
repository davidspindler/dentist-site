import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom"

import { MegaMenu } from 'primereact/megamenu';

import { Button } from 'primereact/button';
import Home from './Home'     
import About from './About'
import Services from './pages/Services'
import { useNavigate } from 'react-router-dom' 
import Footer from './components/Footer'



function App() {
  // const [count, setCount] = useState(0)
const navigate = useNavigate()

  const items = [
    {
        label: 'Home',
        command: (event) => {
          navigate("")
      },
    },
    {
        label: 'Meet Us',
        icon: 'pi pi-mobile',
      
        items: [
            [
                {
                    label: 'More About Us',
                    items: [{
                      label: "About OCCFAD",    command: (event) => {
                        navigate("aboutOFFCAD")
                    },
                    } ,{ label: 'Meet the Doctors',
                    command: (event) => {
                      navigate("MeetTheDoctors")
                  },
                  }, ,{ label: 'Address / Google Map / Location Dot',   command: (event) => {
                    navigate("address")
                }, }, { label: 'Office Tour (location / building / how to access /photos)',
                command: (event) => {
                  navigate("tour")
              },
              },{ label: 'Patient Experiences',
              command: (event) => {
                navigate("patientexperiences")
            },
            }, ],
                 
                },
               
             
            ],
         
        ]
    },
    {
        label: 'Patient Care Services',
        icon: 'pi pi-clock',
        items: [
          [
              {
                  label: 'Cosmetic and Restorative Dentistry ',
                  items: [{ label: 'Smile Design', command: (event) => navigate('/smiledesign') },
                  { label: 'Veneers', command: (event) => navigate('/veneers') },
                  { label: 'Crowns', command: (event) => navigate('/crowns') },
                  { label: 'Teeth Whitening', command: (event) => navigate('/teethwhitening') },
                  { label: 'Crown Lengthening', command: (event) => navigate('/crownlengthening') },
                  { label: 'Gingival/Gum Contouring', command: (event) => navigate('/gingivalgumcontouring') },
                  { label: 'Fillings (Resin and porcelain)', command: (event) => navigate('/fillings') },
                  { label: 'Root Canals', command: (event) => navigate('/rootcanals') }]
              },
              {
                  label: 'Oral and Perio Surgery',
                  items: [{ label: 'Tooth Extractions (including Wisdom Teeth)', command: (event) => navigate('/toothextractions') },
                  { label: 'Full Mouth Extractions', command: (event) => navigate('/fullmouthextractions') },
                  { label: 'Bone Augmentations (PRF and BMP)', command: (event) => navigate('/boneaugmentations') },
                  { label: 'Gingival / Gum Contouring', command: (event) => navigate('/gingivalgumcontouring') },
                  { label: 'Gum Treatment', command: (event) => navigate('/gumtreatment') }]
              },
          ],
          [
              {
                  label: 'Implants and Prosthetics',
                  items: [  { label: 'Implant Treatment', command: (event) => navigate('/implanttreatment') },
                  { label: 'Failed Implant Treatment', command: (event) => navigate('/failedimplanttreatment') },
                  { label: 'Sinus Lift', command: (event) => navigate('/sinuslift') },
                  { label: 'Implant Supported Dentures', command: (event) => navigate('/implantsupporteddentures') },
                  { label: 'All on X and All on 4s', command: (event) => navigate('/allonx') },
                  { label: 'Other Prosthectics', command: (event) => navigate('/otherprosthetics') },
                ]
              },
              {
                  label: 'Preventative Dentistry',
                  items: [  { label: 'Checkup and Cleanings', command: (event) => navigate('/checkupandcleanings') },
                  { label: 'Sealants', command: (event) => navigate('/sealants') },
                  { label: 'Flouride Treatments', command: (event) => navigate('/flouridetreatments') }]
              }
          ],
          [
              {
                  label: 'Sedation',
                  items: [{ label: 'IV Anestesia Sedation', command: (event) => navigate('/ivanestesiasedation')  }, { label: 'Oral Sedation', command: (event) => navigate('/oralsedation') }]
              },
              {
                  label: 'Technological Advancements',
                  items: [  { label: '3D Image / CT Scans', command: (event) => navigate('/3dimagectscans') },
                  { label: 'Intraoral Scanners', command: (event) => navigate('/intraoralscanners') },
                  { label: 'Biolase Laser', command: (event) => navigate('/biolaselaser') },
                  { label: 'Soft Tissue Lasers', command: (event) => navigate('/softtissuelasers') },
                  { label: 'Bone Grafting', command: (event) => navigate('/bonegrafting') }]
              }
          ]
      ]

    }
];

  return (
    <>
   <MegaMenu model={items} breakpoint="960px" className="p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutOFFCAD" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="*" element={<div>sorry, unable to find this page, please navigate back to home</div>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
