const DivApi = (props) => {
  const { divImg, divHeading, description, difficulty } = props;
  return (
    <div className="rounded-lg m-2 border-2 border-dBrand dark:border-mainBg hover:scale-110 dark:bg-mainBg bg-lBrand p-2 transform duration-500">
      <img
        class="rounded-lg"
        src={divImg}
        alt="API Image"
      />
      <div class="p-2">
        <h5 class=" text-2xl font-bold text-balBrand tracking-tight mb-2">
          {divHeading}
        </h5>
        <p class="text-base font-medium text-dBrand text-justify">
          {description}
        </p>
        <div className="m-auto h-auto w-full ">
          <div>
            <h4 className=" text-xl dark:text-dBrand font-semibold underline cursor-default">Integration Complexity</h4>
          </div>
          <div className="w-full bg-balBrand dark:bg-secondaryBg outline-2 outline outline-dBrand dark:outline-lBrand h-5 mt-2 rounded">
            <div className={`bg-mainBg dark:bg-balBrand h-5 rounded w-[${difficulty}%] text-center text-balBrand dark:text-secondaryBg `}><p>{difficulty}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivApi;
