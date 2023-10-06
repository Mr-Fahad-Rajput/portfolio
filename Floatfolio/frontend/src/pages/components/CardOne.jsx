import up from "../../assets/up.svg";
const CardOne = (props) => {
  const { cardImg, cardHeading, subHeading, difPercntage } = props;
  return (
    <div className="rounded-lg m-4 transform duration-500 border-2 border-dBrand dark:border-mainBg hover:scale-110 dark:bg-mainBg bg-lBrand p-4 w-max mx-auto">
      <div className="flex h-14 w-14 mx-auto overflow-hidden border-2 border-mainBg dark:border-dBrand items-center rounded-lg bg-balBrand dark:bg-secondaryBg">
        <img src={cardImg} alt="Card Image" className="object-cover" loading="lazy"/>
      </div>

      <div className="mt-4 ">
        <div>
          <h4 className="text-2xl font-bold text-balBrand">{cardHeading}</h4>
        </div>
        <span className="flex items-center gap-2 text-lg font-medium text-dBrand">
          <span className="text-lg font-medium">{subHeading}</span>
          {difPercntage}
          <img src={up} alt="Up arrow Symbol" className="h-6 w-3 pb-1" loading="lazy"/>
        </span>
      </div>
    </div>
  );
};

export default CardOne;
