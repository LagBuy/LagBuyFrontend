import React from 'react'

const TermAndCondition = () => {
  return (
    <section className="container mx-auto px-4 py-14">
      <div className='space-y-4'>
        <h1 className='text-xl font-semibold'>TERMS AND CONDITIONS </h1>
        <p className='text-lg'>
          By using LagBuy, you agree to abide by our terms and conditions, which
          outlines the rules and responsibilites governing your use of the
          platform. Please review the terms and conditions before proceeding to
          shop on our platform, as they detail information regarding your rights
          and responsibilities as a user.
        </p>
        <form action="">
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className='text-lg'> I agree to LagBuy’s terms and condition</label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default TermAndCondition