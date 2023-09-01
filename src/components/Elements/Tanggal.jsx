import React from 'react'

const Tanggal = () => {
    const today = new Date();
    const tanggal = today.getDate();
    const bulan = today.getMonth() + 1;
    const tahun = today.getFullYear();

  return (
    <div>{`${tanggal}-${bulan}-${tahun}`}</div>
  )
}

export default Tanggal;

