import React from 'react'
import InputPassword from '../../components/Riders/InputPassword'
import SubmitWithdrawal from '../../components/Riders/SubmitWithdrawal'
import CheckWallet from '../../components/Riders/CheckWallet'

const PaymentPage = () => {

  return (

    <div className='space-y-10 py-5'>

        <InputPassword/>
        <SubmitWithdrawal/>
        <CheckWallet/>


    </div>
  )
}

export default PaymentPage