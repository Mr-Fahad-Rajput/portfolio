import gitIcon from "../../Contact/github.svg";
import previewIcon from "./external-link.svg";

const DivProjects = (props) => {
  // eslint-disable-next-line
  const { divImg, divHeading, description, route, sourceCode, techStack } = props;
  return (
    <div className="rounded-lg m-2 border-2 border-dBrand dark:bg-mainBg bg-lBrand p-2">
      <h5 className=" text-xl font-bold text-balBrand tracking-tight mb-2 text-center">
        {divHeading}
      </h5>
      <div className="max-w-max md:flex">
        <img
          className="rounded-lg m-auto border-2 border-dBrand md:max-w-[30%] md:float-left"
          src={divImg}
          alt="API Image"
          loading="lazy"
        />
        <p className="text-base font-normal  text-dBrand break-words text-justify tracking-tighter m-2">
          {description}
        </p>
        <div className="md:float-right md:py-4">
          <a href={route} target="_blank" rel="noopener noreferrer">
            <div className="border-dBrand dark:border-dBrand  border-2 rounded-lg text-dBrand dark:text-mainBg my-2 cursor-pointer transform transition duration-500 hover:scale-110 flex justify-evenly dark:bg-lBrand bg-secondaryBg ">
              <h1 className="m-1 my-auto dark:text-secondaryBg text-sm font-semibold text-balBrand">
                Live Preview
              </h1>
              <div className="aspect-square w-14">
                <img src={previewIcon} alt="Preview Icon" />
              </div>
            </div>
          </a>
          <a href={sourceCode} target="_blank" rel="noopener noreferrer">
            <div className="border-dBrand dark:border-dBrand  border-2 rounded-lg text-dBrand dark:text-mainBg my-2 cursor-pointer transform transition duration-500 hover:scale-110 flex justify-evenly dark:bg-lBrand bg-secondaryBg">
              <h1 className="m-1 my-auto dark:text-secondaryBg text-sm font-semibold text-balBrand">
                Source Code
              </h1>
              <div className="aspect-square w-12 ">
                <img src={gitIcon} alt="Github Icon" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <h6 className="text-lg font-bold text-balBrand tracking-tight text-center">
        {" "}
        Technologies Used:
      </h6>
      <div className=" border-dBrand dark:border-lBrand border-2 rounded-lg text-dBrand dark:text-mainBg cursor-default flex justify-around dark:bg-dBrand bg-mainBg">
        {techStack.map((tech, index) => (
          <div className="m-2 text-center" key={index}>
            <img
              src={tech.logo}
              alt={`${tech.name} Icon`}
              className="aspect-square w-8 mx-auto dark:bg-mainBg rounded-lg"
            />
            <figcaption className="font-medium ">{tech.name}</figcaption>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DivProjects;