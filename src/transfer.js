import React from 'react';
import './transfer.css'

  function TransferForm(props) {
    const handleSubmit= (e) => {
      e.preventDefault();
      // ???
    }
  
    return (
      <form className='Simple' onSubmit={e => {handleSubmit(e)}}>
        {/* Heading */}
        <label  className='Head'>📝 Transfer some coins 📝</label>
        <br />
        <br/>

        {/* Sender Address */}
        <label  className='Text'>👛 My Address 👛</label>
        <br />
        <input 
          name='My Address' 
          type='text'
        />
        <br/>
        <br/>

        {/* Receiver Address */}
        <label  className='Text'>👛 Receiver Address 👛</label>
        <br />
        <input 
          name='Receiver Address' 
          type='text'
        />
        <br/>
        <br/>

        {/* Coins */}
        <label className='Text'>🪙 Amount 🪙</label>
        <br />
        <input 
          name='Amount' 
          type='text' 
        />
        <br />
        <br />

        {/* Send */}
        <input 
          className='Link'
          type='submit' 
          value='SEND ➡️' 
        />
      </form>
    )
  }

  export default TransferForm;