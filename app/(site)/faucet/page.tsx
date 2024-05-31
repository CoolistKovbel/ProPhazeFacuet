import Link from 'next/link'
import React from 'react'

const Page = () => {


    const faucets = [
        {
            tokenName: "",
            tokenAddress: "",
            tokenLink: "",
            tokenAmountLeft: "",
            tokenAmountStaked: "",
            tokenDistributeRate: ""
        },
        {
            tokenName: "",
            tokenAddress: "",
            tokenLink: "",
            tokenAmountLeft: "",
            tokenAmountStaked: "",
            tokenDistributeRate: ""
        },
        {
            tokenName: "",
            tokenAddress: "",
            tokenLink: "",
            tokenAmountLeft: "",
            tokenAmountStaked: "",
            tokenDistributeRate: ""
        },
        {
            tokenName: "",
            tokenAddress: "",
            tokenLink: "",
            tokenAmountLeft: "",
            tokenAmountStaked: "",
            tokenDistributeRate: ""
        },
    ]




  return (
    <main className='p-4'>

        <header className='p-3'>
            <h2 className='text-2xl font-bold'>Faucet</h2>
            <p className='text-sm'>If you are looking to create a session to launch your token here be sure to pm.</p>
        </header>


        <section className='p-4 flex flex-col gap-4'>
            

            {
                faucets.map((item) => (
                    <div className='bg-[#222] p-4' key={crypto.randomUUID()}>
                        <h2 >{item.tokenName}</h2>
                        <p >Distribute: {item.tokenDistributeRate}</p>
                        <Link href={item.tokenLink}>{item.tokenAddress}</Link>
                        <p>tokenAmount left: {item.tokenAmountLeft}</p>
                        <p>Total stakes: {item.tokenAmountStaked}</p>
                    </div>
                ))
            }

        </section>



    </main>
  )
}

export default Page