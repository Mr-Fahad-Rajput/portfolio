import { useNavigate } from "react-router-dom";

const DivApi = (props) => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const { divImg, divHeading, description, difficulty, route } = props;
  return (
    <div
      onClick={() => {
        navigate(route);
      }}
      className=" rounded-lg m-2 border-2 border-dBrand dark:bg-lBrand hover:scale-110 bg-lBrand p-2 transform duration-500"
    >
      <img
        className="rounded-lg h-[170px] m-auto aspect-video"
        src={divImg}
        alt="API Image"
      />
      <div className="p-2">
        <h5 className=" text-2xl font-bold text-balBrand tracking-tight mb-2 text-center">
          {divHeading}
        </h5>
        <p className="text-base font-medium text-dBrand break-words text-justify tracking-tighter mb-10">
          {description}
        </p>
      </div>
      <div className=" m-2 self-center bottom-0 w-11/12 absolute">
        <div>
          <h4 className=" text-xl dark:text-dBrand font-semibold underline cursor-default">
            Integration Complexity
          </h4>
        </div>
        <div className="w-full bg-mainBg dark:bg-lBrand outline-2 outline outline-dBrand  h-5 mt-2 rounded">
          <div
            className={` bg-mainBg h-5 rounded ${difficulty} text-dBrand text-center`}
          >
            <p className="font-semibold">{difficulty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivApi;
