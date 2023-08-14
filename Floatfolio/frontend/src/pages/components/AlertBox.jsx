import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function AlertBox(props) {
  const { responseStatus, msgImg } = props;
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (responseStatus.status) {
      setScale(100);
    } else {
      setScale(0);
    }
  }, [responseStatus.status]); // Destructure the prop

  return (
    <>
      <div
        className={` md:w-full overflow-x-auto ${
          responseStatus.status ? "fixed" : "hidden"
        } bottom-10 max-md:bottom-1/3 items-center justify-center`}
      >
        <div
          id="box"
          className={` animate-scale-${scale} w-auto h-auto rounded-[0.6em] cursor-pointer flex bg-mainBg dark:bg-dBrand border-lBrand border-2 md:float-right md:mx-[30%]`}
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
//TODO remove and Uninstall Before Production
// Prop Types- Not Important in JS usually Used in TypeScript just for Code Quality
AlertBox.propTypes = {
  responseStatus: PropTypes.shape({
    status: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  msgImg: PropTypes.string.isRequired,
};

export default AlertBox;
