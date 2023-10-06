import CardOne from "../components/CardOne.jsx";
import ChartOne from "../components/ChartOne.jsx";
import ChartTwo from "../components/ChartTwo.jsx";
import TableTwo from "../components/TableTwo.jsx";
import viewIcon from "./views.svg";
import userIcon from "./users.svg";
import salesIcon from "./sales.svg";
import alertIcon from "./megaphone.svg";
import profitIcon from "./dollar.svg";
import { useEffect, useState } from "react";
import AlertBox from "../components/AlertBox.jsx";


function Dashboard() {
  const [responseStatus, setResponseStatus] = useState({
    status: false,
    text: "",
  });
  useEffect(() => {
    function isMobileDevice() {
      return window.innerWidth <= 768;
    }

    if (isMobileDevice()) {
      setResponseStatus({
        status: true,
        text: 'This Page is best viewed on a larger screen. Please use a desktop or tablet for an optimal experience.',
      });

      setTimeout(() => {
        setResponseStatus({
          status: false,
          text: '',
        });
      }, 5000);
    }
  }, []);
  return (
    <>
      <section className="mainContent">
        <div className=" bg-secondaryBg dark:bg-balBrand rounded-lg m-2 w-full">
        <AlertBox responseStatus={responseStatus} msgImg={alertIcon} />
          <div className="flex justify-center ">
            <h1 className=" inline-block whitespace-nowrap dark:text-secondaryBg font-semibold text-2xl cursor-default text-dBrand">
              Monthly Report
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-8">
            <CardOne
              cardImg={viewIcon}
              cardHeading="Visits:35328"
              subHeading="Growth:"
              difPercntage="1.33%"
            />
            <CardOne
              cardImg={salesIcon}
              cardHeading="Sales:$2504"
              subHeading="Growth:"
              difPercntage="0.46%"
            />
            <CardOne
              cardImg={profitIcon}
              cardHeading="Profits:$4560"
              subHeading="Growth:"
              difPercntage="2.89%"
            />
            <CardOne
              cardImg={userIcon}
              cardHeading="Users:6549"
              subHeading="Growth:"
              difPercntage="10.09%"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="mx-auto w-auto md:flex flex-row max-md:pr-2">
            <ChartOne />
            <ChartTwo />
          </div>
        </div>
        <div className="w-full p-2 ">
          <div className="p-1 w-full mx-auto">
            <TableTwo />
          </div>
        </div>
      </section>
    </>
  );
}
export default Dashboard;
