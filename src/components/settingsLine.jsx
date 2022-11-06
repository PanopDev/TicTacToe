import React from 'react';

export default function Setting({description,settings}) {
  return (
    <>
      <div className='settingLineLeft'><h2>{description}:</h2></div>
      <div className='settingLineRight'>{settings}</div>
    </>
  );
}
