import React, { ChangeEventHandler, useState, } from 'react'
import { tableHead, tableData, BiTrendingDown, MdDelete, Table, ImSearch, Input, MdEdit, IoIosArrowForward } from '..'
import { IconType, icons } from 'react-icons'

const TransationTable = () => {
  const TableBody: React.FC<{ Transactions:  {
    details: string,
    id: string,
    source: string,
    amount: string,
    balance: string,
    status: string,
    date: Date,
  }[] }> = ({ Transactions }) => {
    return (
      <Table.Body>
      {Transactions.map((cell, id) =>
        <Table.Row key={cell.id} className='  shadow-none text-sm'>
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
          <Table.Cell className='uppercase  shadow-none  '>
            <div className=''>
              <span className=' font-bold text-base text-left'>
                {cell.amount}
              </span> <br />

              <span className='text-blue-gray-300 text-left'>18,477854.21 USD</span>
            </div>
          </Table.Cell>
          <Table.Cell className='uppercase shadow-none '>
            <div className=''>
              <p className=' font-bold text-left '>
                {cell.balance}
              </p>
              <p className='text-blue-gray-300 mt-1 text-left '>18,477854.21 USD</p>
            </div>
          </Table.Cell>
          <Table.Cell className='shadow-none'>
            <div className={`${cell.status === 'Completed' ? "bg-[#ECFBE6]" : "bg-red-200"} py-1 rounded-md text-center`}>
              <p className={` font-bold ${cell.status === 'Completed' ? "text-vert" : "text-red-500"}`}> {cell.status}</p>
            </div>
          </Table.Cell>
          <Table.Cell className='' >
            <div className='flex justify-between gap-8'>
              <MdEdit className='w-4 h-6 text-bleu cursor-pointer' />
              <MdDelete className='w-4 h-6 text-red-500 cursor-pointer' />
            </div>
          </Table.Cell>
        </Table.Row>)}
    </Table.Body>
    );
  };
  

  const setps: { id: string, step: number, icon?: IconType }[] = [
    {
      id: 'prev',
      step: 0,
      icon: IoIosArrowForward
    },
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

    {
      id: 'next',
      step: 0,
      icon: IoIosArrowForward
    },
  ]
  const [data, setData] = useState(tableData.slice(0, 5))
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([{
    details: "Crypto Deposit",
    id: "6gfr85fsf4hr",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "rejected",
    date: new Date("March 8, 2024"),
  },]);
  const [searchTimeout, setSearchTimeout] = useState(0);
  const [step, setStep] = useState(1)
  const handlesearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout)
    setSearch(e.target.value)
    setSearchTimeout(
      Number(setTimeout(() => {
        const result = tableData.filter(
          (item) =>

            item.status.toLowerCase().includes(search.toLowerCase()) ||
            item.id.toLowerCase().includes(search.toLowerCase())
        )
        setSearchResult(result)
      }, 500))
    )
  }
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
  }

  return (
    <div className='w-full  p-6'>
      <div className='w-full flex items-center p-4'>
        <p className='mb-2 font-bold flex-1 text-base'>Recent Orders</p>
        <div className='mb-2 flex-1 flex justify-end'>
          <div className="w-22 ">
            <Input onChange={handlesearch} label="Search by status or id" icon={<ImSearch
              className='cursor-pointer text-bleu' />} size='md' />
          </div>
        </div>
      </div>
      <div className='block w-full overflow-x-hidden shadow-md   rounded-xl'>
        <Table className='text-base shadow-none ' >
          <Table.Head className=' shadow-none'>
            {
              tableHead.map(head => <Table.HeadCell className='uppercase px-6 bg-blueGray-50    border-solid border-gray py-3  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left h-16 text-xs' key={head.id + "jsj"}>{head.title}</Table.HeadCell>)
            }
          </Table.Head>
          {
            search?  <TableBody Transactions={searchResult} />: 
            <TableBody Transactions={data} />
          }

        </Table>
        <div className=' items-center w-full justify-center h-10 flex m-4  font-semibold text-black'>
          <div className='justify-center gap-10 flex w-2/4 items-center'>
            {
              setps.map((numer, index) => <span key={numer.id} className={`w-10 h-10 shadow-2xl drop-shadow-lg ${step === numer.step ? "bg-[#1A75FF]" : ""} rounded-md flex items-center justify-center 
          cursor-pointer`} id={numer.step.toString()}>
                {
                  numer.icon ? <numer.icon onClick={(e: any) => {
                    if (numer.id === 'prev' && step > 1) {
                      handleSteps(step - 1)
                    }
                    else if (step >= 1 && step < 6 && numer.id === 'next') {
                      handleSteps(step + 1)
                    }

                  }} className={` cursor-pointer h-6 w-6 ${index === 0 ? "rotate-180" : ""}`} /> : <p id={numer.step.toString()} className={`text-xl font-mono ${step === numer.step ? "text-white" : "text-black"}`}
                    onClick={(e: any) => handleSteps(Number(e.target.id))}
                  >{numer.step}</p>
                }
              </span>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransationTable
