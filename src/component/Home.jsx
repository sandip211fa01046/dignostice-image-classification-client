import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
      <div className="bg-gray-900 h-screen flex flex-col items-center justify-center">
        <img
          src="/AI_and_Imaging_Diagnostics.webp"
          alt="Cancer Cell"
          className="w-1/2 h-auto mb-4 rounded-lg shadow-lg"
        />
        <div className="text-white text-4xl font-bold mb-4">Welcome to the</div>
        <div
          className={
            "text-cyan-600 flex items-center justify-center font-extrabold text-[30px]"
          }
        >
          Microscopic Cancer Cell Image Classification.
        </div>
        <div
          className={
            "flex item-center justify-center border-cyan-400 border-2 rounded-md text-cyan-50 text-[20px] font-bold px-[15px] py-[10px] mt-[22px] hover:bg-gray-800 hover:text-[23px] cursor-pointer transition duration-300 ease-in-out"
          }
          onClick={() => {
            navigate("/testing");
          } }
        >
          Click to check Image
        </div>
      </div>
    );
}

export default Home;