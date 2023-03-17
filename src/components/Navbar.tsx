import React, { useState } from 'react'
import { Link, Image, navLinks, MdOutlineArrowBackIos, navIcons ,  Menu,
  MenuHandler,
  MenuList,
  MenuItem,} from '..'
import styles from '../styles/index.module.css'
import { IconContext } from 'react-icons'
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('elements')
  const [activeIcon, setActiveIcon] = useState('')
  return (
    <div className={`${styles.navbar} flex p-5 items-center  shadow-md justify-between`}>
      <div className='flex items-center justify-start gap-5 flex-1   '>
        <Image src='/assets/Logo.png' alt='logo' width='100' height='100' />
        <ul className='flex gap-3 h-full items-center justify-center text-md'>
          {
            navLinks.map((link, index) => <li key={link.id}>
              <span className='flex flex-row items-center justify-center gap-1  text-base'>
                <div className='flex flex-col items-between justify-center'>
                  <Link className={`leading-8 ${activeLink === link.title.toLocaleLowerCase() ? 'text-bleu' : "text-gray"}`} href="" onClick={() => setActiveLink(link.title.toLocaleLowerCase())}>{link.title}</Link>
                  <span className={`w-12 h-1 rounded-md bg-bleu ${activeLink === link.title.toLocaleLowerCase() ? 'bg-bleu' : "bg-transparent"}`}></span>
                </div>
                {
                  index === 2 &&
                  <Menu>
                    <MenuHandler>
                      <span className='bg-transparent shadow-none hover:shadow-none'><MdOutlineArrowBackIos className='-rotate-90 text-black w-3 h-3' /></span>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem>Menu Item 1</MenuItem>
                      <MenuItem>Menu Item 2</MenuItem>
                      <MenuItem>Menu Item 3</MenuItem>
                    </MenuList>
                  </Menu>
                }
              </span>

            </li>)
          }
        </ul>
      </div>

      <div className='flex items-center justify-center '>
        <div className='flex items-center justify-center gap-3 flex-1'>
          <IconContext.Provider value={{ className: "text-bleu h-5 w-5 m-auto cursor-pointer" }}>
            <div className='flex gap-1'>
              {
                navIcons.map(icon =>
                  <span key={icon.id} className={`p-2 ${activeIcon == icon.name ? "bg-blue-50" : ""} rounded-md`}>
                    <Link href="" onClick={() => setActiveIcon(icon.name)}>  <icon.icon /></Link>

                  </span>
                )
              }
            </div>
          </IconContext.Provider>
          <div className='flex gap-2'>
            <Image src='/assets/Profile.png' alt='logo' width='45' height='45' className='row-span-2 col-span-1 rounded-md ' />
            <span className='text-center'>
              <p className=' col-span-4 font-bold text-black'>Rozales A.</p>
              <p className=' text-sm col-span-4 '>FullStack Developer</p>
            </span>

          </div>
        </div>
   <div className='ml-4'>
   <Menu>
          <MenuHandler>
            <span className='bg-transparent shadow-none hover:shadow-none'><MdOutlineArrowBackIos className='-rotate-90 text-black w-3 h-3' /></span>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
   </div>
      </div>
      <div>
      </div>


    </div>
  )
}

export default Navbar
