import React from 'react';

export default function Setting({description,settings}) {
  return (
    <>
      <div className='settingLineTop'><h2>{description}</h2></div>
      <div className='statsDivider' > </div>
      <div className='settingLineBottom'>{settings}</div>

    </>
  );
}
