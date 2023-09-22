import gitIcon from "../../Contact/github.svg";
import previewIcon from "./external-link.svg";

const DivProjects = (props) => {
  // eslint-disable-next-line
  const { divImg, divHeading, description, route, sourceCode, techStack } = props;

  return (
    <div className="rounded-lg m-2 border-2 border-dBrand dark:bg-mainBg bg-lBrand p-2">
      <h5 className=" text-2xl font-bold text-balBrand tracking-tight mb-2 text-center">
        {divHeading}
      </h5>
      <div className="p-2 md:flex gap-4 w-full">
        <>
          <img
            className="rounded-lg m-auto border-2 border-dBrand"
            src={divImg}
            alt="API Image"
            loading="lazy"
          />
          <a href={route} target="_blank" rel="noopener noreferrer">
            <div className="border-dBrand dark:border-lBrand  border-2 rounded-[0.6em] text-dBrand dark:text-mainBg m-2 cursor-pointer transform transition duration-500 hover:scale-110 flex justify-evenly dark:bg-dBrand bg-secondaryBg ">
              <h1 className="m-1 my-auto dark:text-secondaryBg text-lg font-semibold text-balBrand">
                Live Preview
              </h1>
              <div className="aspect-square w-14">
                <img src={previewIcon} alt="Github Icon" />
              </div>
            </div>
          </a>
        </>
        <>
          <p className="text-base font-medium text-dBrand break-words text-justify tracking-tighter">
          {description}
        </p>
        <div>
        <a href={route} target="_blank" rel="noopener noreferrer">
            <div className="border-dBrand dark:border-lBrand  border-2 rounded-[0.6em] text-dBrand dark:text-mainBg m-2 cursor-pointer transform transition duration-500 hover:scale-110 flex justify-evenly dark:bg-dBrand bg-secondaryBg ">
              
              <div className="">
                <img src={previewIcon} alt="Github Icon" className="aspect-square w-14" />
              </div>
            </div>
          </a>
        </div>
        </>
      </div>
      <div className="flex">
        <div></div>
      </div>
    </div>
  );
};

export default DivProjects;
