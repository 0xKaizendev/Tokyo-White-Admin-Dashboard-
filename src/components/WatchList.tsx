import React, { useState } from 'react'
import styles from '../styles/index.module.css'
import  AreaChart  from './AreaChart'
import { CgMenuGridR, TiThMenu, chartColors } from '..'
const WatchList = () => {
  const [selected, setSelected] = useState('grid')
  return (
    <div className={` p-6 w-full `}>
      <div className='w-full flex items-center justify-between'>
        <p className='font-bold text-base text-black'>Watch List</p>
        <div className='rounded-md  flex text-center border-2 border-blue-500'>
          <span className={`${selected === 'grid' ? "bg-bleu" : ""} p-1 flex flex-1 items-center`}>
            <CgMenuGridR className={`h-5 w-5 cursor-pointer ${selected === 'grid' ? "text-white" : "text-bleu"}`} onClick={() => setSelected('grid')} />
          </span>
          <span className={`${selected === 'menu' ? "bg-bleu" : ""} p-1 flex flex-1 items-center`}>
            <TiThMenu className={`h-4 w-5 cursor-pointer ${selected === 'menu' ? "text-white" : "text-bleu"}`} onClick={() => setSelected('menu')} />
          </span>
        </div>
      </div>
      <div className='flex gap-4 items-center '>
        {
          chartColors.map(chart => <div key={chart.id} className='flex-1 h-[30rem] flex-col rounded-sm shadow-md bg-black items-end justify-end '>
            hd
            <AreaChart gradient={chart}/>
            </div>)
        }

      </div>
    </div>
  )
}

export default WatchList
