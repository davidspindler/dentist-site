import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MegaMenu } from 'primereact/megamenu';

import { Button } from 'primereact/button';
        
        

function App() {
  const [count, setCount] = useState(0)
  const items = [
    {
        label: 'Home',
        // icon: 'pi pi-box',
        // items: [
        //     [
        //         {
        //             label: 'Living Room',
        //             items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
        //         }
        //     ],
        //     [
        //         {
        //             label: 'Kitchen',
        //             items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
        //         },
        //         {
        //             label: 'Bathroom',
        //             items: [{ label: 'Accessories' }]
        //         }
        //     ],
        //     [
        //         {
        //             label: 'Bedroom',
        //             items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
        //         }
        //     ],
        //     [
        //         {
        //             label: 'Office',
        //             items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
        //         }
        //     ]
        // ]
    },
    {
        label: 'Meet Us',
        icon: 'pi pi-mobile',
        items: [
            [
                {
                    label: 'About OFFCAD',
                },
                {
                  label: 'Address / Google Maps',
              },
              {
                label: 'Meet the Doctors',
                items: [{ label: 'Dr. Divya Peddireddy' }, { label: 'Dr. Kevin Uesigi' }, { label: 'Dr. Kevin Uesigi' }]
            },
            {
              label: 'Office Tour (loaction / building / how to access, Office photos)'
          },
          {
            label: 'Patient Experiences',
        }
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
                  items: [{ label: 'Smile Design' }, { label: 'Veneers' },{ label: 'Crowns' }, { label: 'Teeth Whitening' },{ label: 'Crown Lengthening' }, { label: 'Gingival/Gum Contouring' },{ label: 'Fillings (Resin and porcelain)' }, { label: 'Root Canals' }]
              },
              {
                  label: 'Oral and Perio Surgery',
                  items: [{ label: 'Tooth Extractions (including Wisdom Teeth)' }, { label: 'Full Mouth Extractions' }, { label: 'Bone Augmentations (PRF and BMP)' }, { label: 'Gingival / Gum Contouring' }, { label: 'Gum Treatment' }]
              },
          ],
          [
              {
                  label: 'Implants and Prosthetics',
                  items: [{ label: 'User 3.1' }, { label: 'User 3.2' },{ label: 'User 3.1' }, { label: 'User 3.2' },{ label: 'User 3.1' }, { label: 'User 3.2' },]
              },
              {
                  label: 'Preventative Dentistry',
                  items: [{ label: 'User 3.1' }, { label: 'User 3.2' },{ label: 'User 3.1' }, { label: 'User 3.2' },{ label: 'User 3.1' }, { label: 'User 3.2' },]
              }
          ],
          [
              {
                  label: 'Sedation',
                  items: [{ label: 'IV Anestesia Sedation' }, { label: 'Oral Sedation' }]
              },
              {
                  label: 'Technological Advancements',
                  items: [{ label: 'User 3.1' }, { label: 'User 3.2' },{ label: 'User 3.1' }, { label: 'User 3.2' },{ label: 'User 3.1' }, { label: 'User 3.2' },]
              }
          ]
      ]

    }
];

  return (
    <>
   <MegaMenu model={items} breakpoint="960px" className="p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
