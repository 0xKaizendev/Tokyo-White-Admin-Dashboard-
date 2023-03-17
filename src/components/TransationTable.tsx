import React, { useState } from 'react'
import { tableHead, tableData, BiTrendingDown, MdDelete, Table, ImSearch, Input, MdEdit,IoIosArrowForward } from '..'

const TransationTable = () => {
  const setps: { id: string, step: number }[] = [
    {
      id: 'setp1',
      step: 1
    },
    {
      id: 'setp2',
      step: 2
    },
    {
      id: 'setp3',
      step: 3
    },
    {
      id: 'setp4',
      step: 4
    },
    {
      id: 'setp5',
      step: 5
    },
    {
      id: 'setp6',
      step: 6
    },
  ]
  const [data, setData] = useState(tableData.slice(0, 5))
  const [step, setStep] = useState(1)

  const handleSteps = (pas: number) => {
    // On defini le pas actuel sur son numero correspondant ce qui lui donne cet arriere pla bleu
    setStep(pas)
    // Indice de départ pour extraire les transactions
    const startIndex = (pas - 1) * 5;
    // Indice de fin pour extraire les transactions
    const endIndex = startIndex + 5;

    // méthode slice pour extraire une tranche de 10 transactions
    const tranche = tableData.slice(startIndex, endIndex);
    setData(tranche)

    return tranche;
  }

  return (
    <div className='w-full  p-6'>
      <div className='w-full flex items-center p-4'>
        <p className='mb-2 font-bold flex-1 text-base'>Recent Orders</p>

        <div className='mb-2 flex-1 flex justify-end'>
          <div className="w-22 ">
            <Input label="Search..." icon={<ImSearch className='cursor-pointer text-bleu' />} size='md' />
          </div>
        </div>
      </div>
      <div className='block w-full overflow-x-hidden shadow-md   rounded-xl'>
        <Table className='text-base shadow-none ' >
          <Table.Head className=' shadow-none'>
            {
              tableHead.map(head => <Table.HeadCell className='uppercase px-6 bg-blueGray-50  align-middle  border-solid border-gray py-3  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left h-16 text-xs' key={head.id + "jsj"}>{head.title}</Table.HeadCell>)
            }

          </Table.Head>
          <Table.Body className=' shadow-none'>
            {
              data.map((cell, id) => <Table.Row key={cell.id} className='  shadow-none text-sm'>
                <Table.Cell className='shadow-none'>
                  <div className='flex gap-4'>
                    <span className='w-8 h-8 rounded-full bg-[#ECFBE6] flex items-center justify-center'>
                      <BiTrendingDown className='w-6 h-6 text-vert' />
                    </span>
                    <span className='flex flex-col gap-1'>
                      <p className='font-bold text-base'>
                        {cell.details}
                      </p>
                      <p className='text-blue-gray-300 text-xs'>
                        {cell.date.toLocaleString()}
                      </p>
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell className='shadow-none'>
                  <div>
                    <p className='uppercase font-bold text-base'>
                      {cell.id}
                    </p>
                    <div className='flex gap-2 items-center justify-start'>
                      <div className='h-2 w-2 rounded-full bg-vert'></div>
                      <p className='text-vert'>Deposit</p>
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell className=' font-body shadow-none'>
                  <div>
                    <p className=' font-bold text-base'>
                      {cell.source}
                    </p>
                    <div className='mt-1'>

                      <p className='text-blue-gray-300'>****1111</p>
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell className='uppercase font-body shadow-none'>
                  <div className=''>
                    <p className=' font-bold text-base'>
                      {cell.amount}
                    </p>
                    <div className='mt-1 text-right mr-2'>

                      <p className='text-blue-gray-300'>18,477854.21 USD</p>
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell className='uppercase shadow-none'>
                  <div>
                    <p className=' font-bold'>
                      {cell.balance}
                    </p>
                    <div className='mt-1'>

                      <p className='text-blue-gray-300 mt-1 text-right mr-2'>18,477854.21 USD</p>
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell className='shadow-none'>
                  <div className=' bg-[#ECFBE6] py-1 rounded-md text-center'>
                    <p className='text-vert font-bold'> {cell.status}</p>
                  </div>
                </Table.Cell>
                <Table.Cell className='' >
                  <div className='flex justify-between gap-8'>
                    <MdEdit className='w-4 h-6 text-bleu cursor-pointer' />
                    <MdDelete className='w-4 h-6 text-red-500 cursor-pointer' />
                  </div>
                </Table.Cell>
              </Table.Row>)
            }
          </Table.Body>
        </Table>
        <div className=' items-center w-full justify-center h-10 flex m-4  font-semibold text-black'>
          <div className='justify-center gap-10 flex w-2/4 items-center'>
            <span className='cursor-pointer text-xl ' onClick={(e: any) => {step>1? handleSteps(step - 1): null}}>{"<"}</span>
            {
              setps.map(numer => <span key={numer.id} className={`w-10 h-10 shadow-2xl drop-shadow-lg ${step === numer.step ? "bg-[#1A75FF]" : ""} rounded-md flex items-center justify-center 
          cursor-pointer`} id={numer.step.toString()}>
                <p id={numer.step.toString()} className={`text-xl font-mono ${step === numer.step ? "text-white" : "text-black"}`}
                  onClick={(e: any) => handleSteps(Number(e.target.id))}
                >{numer.step}</p>
              </span>)
            }
            <span className='cursor-pointer text-xl' onClick={(e: any) => {step>=1 && step <6? handleSteps(step + 1): null}}>{">"}</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TransationTable
