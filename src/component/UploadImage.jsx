import React, { useState } from "react";
import axios from "axios";
import { FaFileUpload } from "react-icons/fa";


const  UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post("/predict", formData);
      setPrediction(response.data.predictedClass);
    } catch (error) {
      console.error(error);
      // ... (Handle error)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange}  className={"text-cyan-50 border-cyan-500 border-2 rounded-[10px] px-[10px] py-[10px] mx-[15px] my-[20px] cursor-pointer"}/>
        <button type="submit" className={"text-cyan-50 border-cyan-500 border-2 rounded-[10px] px-[15px] py-[10px] mx-[15px] my-[20px] cursor-pointer hover:bg-gray-800"}>Predict</button>
      </form>
      {prediction && <p className={"text-cyan-400 text-2xl font-medium"}>Predicted class: {prediction}</p>}
    </div>
  );
}

export default UploadImage;
