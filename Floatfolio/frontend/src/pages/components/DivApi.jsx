import { useNavigate } from "react-router-dom";

const DivApi = (props) => {
    const navigate = useNavigate();
    // eslint-disable-next-line 
  const { divImg, divHeading, description, difficulty, route } = props;
  return (
    <div onClick={()=>{navigate(route) } }className="rounded-lg m-2 border-2 border-dBrand dark:border-mainBg hover:scale-110 dark:bg-mainBg bg-lBrand p-2 transform duration-500">
      <img
        className="rounded-lg"
        src={divImg}
        alt="API Image"
      />
      <div className="p-2">
        <h5 className=" text-2xl font-bold text-balBrand tracking-tight mb-2">
          {divHeading}
        </h5>
        <p className="text-base font-medium text-dBrand text-justify ">
          {description}
        </p>
        <div className="m-auto h-auto w-full ">
          <div>
            <h4 className=" text-xl dark:text-dBrand font-semibold underline cursor-default">Integration Complexity</h4>
          </div>
          <div className="w-full bg-mainBg dark:bg-lBrand outline-2 outline outline-dBrand dark:outline-lBrand h-5 mt-2 rounded">
            <div className={` bg-mainBg h-5 rounded ${difficulty} text-dBrand dark:text-secondaryBg text-center`}><p>{difficulty}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivApi;
