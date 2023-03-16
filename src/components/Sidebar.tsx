import React, { useState } from 'react'
import {
  sideLinks
  , sideItems, Button, MdOutlineArrowBackIos, Link
} from '..'
const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('dashboard')
  const [activeSubLink, setActiveSubLink] = useState('finance')
  const [expanded, setExpanded] = useState('dashboard')
  return (
    <div className=' row-span-2 col-span-1 p-5  shadow-md text-black text-sm'>
      <Button size="md" className='w-full bg-bleu'>Purchase now</Button>
      <div className='mt-12  flex items-center justify-start flex-col gap-3 p-5 '>
        {
          sideItems.map((item) => <div key={item.id} className='w-full flex flex-col'>
            <span className={`${activeLink === item.title.toLocaleLowerCase() ? "text-bleu" : ""} text-base flex items-center p-1  gap-2 cursor-pointer w-10/12 justify-between`}> <div className='text-base flex items-center p-1  gap-2'>
            <item.icon className='  h-6 w-6 grow-0 order-none flex-none' /><Link href={'#'} onClick={() => setExpanded(() => {
              setActiveLink(item.title.toLowerCase())
              return item.title.toLowerCase()
            })} className='  text-base font-bold'>{item.title}</Link >
            </div>
              <MdOutlineArrowBackIos className='-rotate-90 cursor-pointer h-3 w-4' />
            </span>
            <ul className={`w-full items-start pl-8 self-stretch gap-2  flex-col  transition-all duration-1000 ${expanded === item.title.toLocaleLowerCase() ? "flex" : "hidden"}`}>
              {sideLinks.map(sideLink => <li key={`${item.id}ul${sideLink.id}`} className={`transition-all duration-100`}>
                <Link href="" onClick={() => setActiveSubLink(sideLink.title.toLowerCase())} className={`${activeSubLink === sideLink.title.toLowerCase() ? "text-bleu" : "text-gray"} transition-all duration-600 hover:text-bleu `}>{sideLink.title}</Link>
              </li>)}

            </ul>

          </div>)
        }
      </div>
    </div>
  )
}

export default Sidebar
