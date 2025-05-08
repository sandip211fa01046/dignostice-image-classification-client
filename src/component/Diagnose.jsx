import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import UploadImage from './UploadImage';

const Diagnose = () => {

  return (
    <div className={"bg-gray-900 h-screen flex flex-col items-center justify-center"}>
        <IoArrowBack className={"text-cyan-400 text-3xl font-bold cursor-pointer absolute top-5 left-5"} onClick={() => window.history.back()}/>
        <div className={"text-cyan-400 text-3xl font-bold flex items-center justify-center"}>Dignose now!</div>
        <div className={"text-cyan-400 text-2xl font-bold flex items-center justify-center mt-5"}>Upload your image</div>
        <UploadImage/>


    </div>
  )
}

export default Diagnose