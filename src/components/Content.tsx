import React from 'react'
import { AiOutlineArrowUp, cryptoLogos, Button, Image, MdOutlineLock, MdPhoneLocked ,MdMailOutline,WatchList} from '..'
import { PieChart } from './PieChart'

import { Switch } from "@material-tailwind/react";
import TransationTable from './TransationTable';
import styles from '../styles/index.module.css'
const Content = () => {
  return (
    <div className={`p-5 ${styles.content}`}>
      <div className='leading-[40px]'>
        <h1 className='text-3xl font-bold leading-10'>Hello, Rozales!</h1>
        <p className='text-gray text-base'>Today is a good day to start trading crypto assets!</p>
      </div>
      <div className='w-full   shadow-md  flex flex-row p-8 gap-4 rounded-md'>
        <div className='flex flex-col p-2 gap-10  w-2/4 items-start '>
          <p className='font-bold text-lg'>Account Balance</p>
          <span className='flex flex-col gap-2'>
            <p className='text-4xl font-bold'>$23,647.14</p>
            <p className='text-gray font-bold text-base'>1.01000005496 BTC</p>
          </span>
          <div className='flex items-center justify-center gap-4'>
            <span className='h-12 w-12 bg-vert rounded-md shadow-md flex items-center justify-center'>
              <AiOutlineArrowUp color='white' size={30} />
            </span>
            <span className='text-base h-full '>
              <p className='font-bold mb-1 text-xl'>+ $23,647.14</p>
              <p className='text-base  text-gray'>This month</p>
            </span>
          </div>
          <div className='w-full flex gap-4'>
            <Button size="md" className='flex-1 bg-transparent border text-bleu border-blue'>Send</Button>
            <Button size="md" className='flex-1  bg-bleu '>Receive</Button>
          </div>
        </div>
        <div className='flex w-2/4'>
          <div className=' border-l-2 border-t-0 border-r-0 border-b-0 border w-2/4 flex items-center justify-center  border-[#e2e8f0] '>
            <div className="w-44 h-44 ">
              <PieChart />
            </div>

          </div>
          <div className='w-2/4 h-full flex flex-col gap-4 p-4 items-center justify-center '>
            {
              cryptoLogos.map(element =>
                <div className='w-full gap-2 flex p-1 items-center justify-between' key={element.id}>
                  <div className='flex gap-3'>
                    <Image src={element.logo} alt={element.alt} width={30} height={30} className='w-[30px] h-[30px]' />
                    <div>
                      <p className=' text-base font-bold text-black'>{element.symbol}</p>
                      <p className='font-normal text-sm  text-gray'>{element.name}</p>
                    </div>
                  </div>
                  <div className=' flex flex-col items-end'>
                    <p className='font-bold  text-black text-base'>{element.percentage}%</p>
                    <p className={`font-bold text-sm ${element.change > 0 ? 'text-vert' : 'text-red-500'}`}>{element.change}%</p>
                  </div>
                </div>)
            }
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className='w-full flex px-10 py-5 '>

        <div className='flex gap-5   flex-col p-4 w-8/12 '>
          <div className='w-full  flex items-center justify-between p-5 '>
            <p className='text-xl text-black font-bold'>Wallet</p>
            <span className='flex items-center justify-center h-10 text-bleu  border-blue p-4 rounded-lg border-[3px] text-sm font-bold cursor-pointer'>
              <p> + Add New Wallet</p>
            </span>
          </div>
          <div className='flex gap-5 w-full justify-between'>
            {
              cryptoLogos.slice(0, 4).map((element, index) => {
                if (index != 3) {
                  return <div key={`${element.id}bis`} className=' w-48 shadow-md flex flex-col gap-4 p-5 '>
                    <Image src={element.logo} alt={element.alt} width={40} height={40} className='w-[40px] h-[40px]' />
                    <div>
                      <p className='font-bold text-base text-black'>{element.name}</p>
                      <p className=' text-base text-gray'>{element.symbol}</p>
                    </div>
                    <div>
                    <p className='font-bold text-xl text-black mt-10'>{element.amount}</p>
                    <p className='text-base text-gray'>{element.quantity}</p>
                    </div>
                  </div>
                } else {
                  return <div key={element.id} className='w-48 shadow-md flex flex-col gap-5 p-5 border-dashed items-center justify-center  border-bleu border-[2px]'>
                    <span className='w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer'>
                      <p className='text-6xl font-normal text-bleu'>+</p>
                    </span>
                  </div>
                }
              })
            }

          </div>
        </div>

        <div className=' flex-1 p-4 '>
          <div className='shadow-md w-full rounded-md flex h-full flex-col p-4  gap-1'>
            <p className='text-base font-bold h-14 border border-l-0 border-t-0 border-r-0 border-b-1 border-[#e2e8f0]'>Account Security</p>
            <div className='h-16 flex items-center py-12 gap-3 justify-between border border-l-0 border-t-0 border-r-0 border-b-1 border-[#e2e8f0]'>
              <span className='w-12 h-12 bg-red-200 rounded-full flex items-center  justify-center'>
                <MdOutlineLock className=' text-red-500 h-8 w-8' />
              </span>
              <div className='flex-1'>
                <p className='font-bold text-base'>2FA Authehtification</p>
                <p className=' text-red-500 mt-1 text-sm'>Disabled</p>
              </div>
              <Switch defaultChecked color="blue" id="2fa" />
            </div>
            <div className='h-16 flex items-center py-12 gap-3 justify-between border border-l-0 border-t-0 border-r-0 border-b-1 border-[#e2e8f0]'>
              <span className='w-12 h-12 bg-[#ECFBE6] rounded-full flex items-center  justify-center'>
                <MdPhoneLocked className=' text-vert opa h-8 w-8' />
              </span>
              <div className='flex-1'>
                <p className='font-bold text-base'>Phone verification</p>
                <p className=' text-vert text-sm mt-1'>Active</p>
              </div>
              <Switch defaultChecked color="blue" id="phone" />
            </div>
            <div className='h-16 flex items-center py-12 gap-3 justify-between '>
              <span className='w-12 h-12 bg-amber-100 rounded-full flex items-center  justify-center'>
                <MdMailOutline className=' text-amber-700 h-8 w-8' />
              </span>
              <div className='flex-1'>
                <p className='font-bold text-base '>2FA Authehtification</p>
                <p className=' text-amber-700 mt-1 text-sm '>Not Completed</p>
              </div>
              <Switch defaultChecked color="blue" id="email" />
            </div>
          </div>
        </div>
      </div>
      <TransationTable/>
      <WatchList/>
    </div>
  )
}

export default Content
