import React from 'react'

const CheckWallet = () => {
  return (
    <div className='bg-[#F3F3F3] w-[80%] mx-auto py-8 rounded-3xl'>
        <div className='w-[80%] mx-auto mb-8'>
        <p className='text-[#011233] text-center font-2xl font-semibold mb-8'>
            Payment confirmation is still process.</p>
            <p className='text-[#03120C] text-center text-[14px] font-normal  '>
            Paystack will send your payment 
across to available account balance
once your delivery is verified. 
            </p>
            </div>
            <div className='border-t-2 pt-5  flex justify-center '>
                <button className='font-semibold text-[18px] '>Check Wallet</button>

            </div>


    </div>
  )
}

export default CheckWallet