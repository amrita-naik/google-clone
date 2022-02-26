import React from 'react'
import {RevolvingDot} from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <RevolvingDot color="#00BFFF" height={400} width={120} />
    </div>
  )
}

export default Loading