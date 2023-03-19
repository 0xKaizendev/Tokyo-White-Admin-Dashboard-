import React, { useState } from 'react'
import AreaChart from './AreaChart'
import { CgMenuGridR, TiThMenu, chartColors, cryptoPrice, Image, Button } from '..'
const WatchList: React.FC<{ fill: boolean }> = ({ fill }) => {
  const [selected, setSelected] = useState('grid')
  return (
    <div className={` p-6 w-full ${!fill === true ? ' shadow-md' : ""} flex flex-col items-center justify-center`}>
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
      <div className='flex gap-4 items-center  w-full '>
        {
          cryptoPrice.map(chart =>
            <div key={chart.id} className={`flex-1  flex-col rounded-sm ${fill === true ? ' shadow-md' : ""}   items-center justify-center`}>
              <div className={`gap-3 flex items-start p-4  w-full  ${!fill === true ? "justify-between" : ""}`}>

                <div className='flex  gap-3'>
                  <Image src={chart.logo} width={chart.id === 'ETHp' ? 28 : 42} height={chart.id === 'ETHp' ? 28 : 42} alt={chart.alt} />
                  <span className=''>

                    <p className='text-base font-bold text-black'>{chart.name}</p>
                    <p className='text-sm text-gray'>{chart.symbol}</p>
                  </span>
                </div>
                <span className={`${fill === true ? "hidden" : 'flex'} items-center justify-center text-gray text-sm h-7 w-10 rounded-md  bg-blue-gray-50 text-right font-bold`}><div className='p-1 '>24h</div></span>
              </div>
              <div className='gap-1 flex items-center p-4  w-full  flex-col'>
                <div className='w-full flex  items-center  gap-4'>
                  <p className='text-black  font-bold text-2xl'> ${chart.price}</p>
                  <span className={`text-xs font-bold ${chart.percentage > 0 ? "text-vert" : "text-red-500"}`}>{chart.percentage > 0 ? "+" : "-"} {Math.abs(chart.percentage)}%</span>
                </div>
                <div className='w-full flex  items-center  gap-4 ml-5'>
                  <p className={` font-bold text-base ${chart.amount > 0 ? "text-vert" : "text-red-500"}`}>{chart.amount > 0 ? "+" : "-"}${Math.abs(chart.amount)}</p>

                  <p className={`text-sm font-light text-gray`}>last 24h</p>
                </div>

              </div>
              <div className={`w-full  ${fill === true ? "h-48" : 'h-24'} `}>
                <AreaChart gradient={chart.chartColor} fill={fill} />
              </div>
            </div>)
        }
      </div>
      {!fill && <Button size="md" className='bg-transparent border mt-3 text-bleu border-blue'>View more assets</Button>}
    </div>
  )
}

export default WatchList
