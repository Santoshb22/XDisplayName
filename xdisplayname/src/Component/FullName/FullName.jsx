import React from 'react'

const FullName = ({data}) => {
    console.log(data);
    const {firstName, lastName} = data;

  return (
    <div className='fullname'>
        <p>Full Name: {`${firstName} ${lastName}`}</p>
    </div>
  )
}

export default FullName