import { useEffect, useState } from "react";
function AlertBox(props) {
  const { responseStatus, msgImg } = props;
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (responseStatus.status) {
      setScale(100);
    } else {
      setScale(0);
    }
  }, [responseStatus.status]);
  return (
    <>
      <div className="flex items-center justify-center ">
        <div
          id="box"
          className={`animate-scale-${scale} w-auto h-auto  ${
            responseStatus.status ? "fixed" : "hidden"
          } rounded-[0.6em] cursor-pointer flex bg-secondaryBg dark:bg-[#6c48b3] border-lBrand border-2 `}
        >
          <img src={msgImg} alt="Message Response Icon" />
          <h4 className="whitespace-normal text-dBrand dark:text-secondaryBg self-center text-sm max-md:text-xs max-md:font-thin font-normal p-2 text-justify">
            {responseStatus.text}
          </h4>
        </div>
      </div>
    </>
  );
}

export default AlertBox;
