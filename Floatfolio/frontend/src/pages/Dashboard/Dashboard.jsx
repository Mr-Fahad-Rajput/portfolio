import CardOne from "../components/CardOne.jsx";
import ChartOne from "../components/ChartOne.jsx";
import ChartTwo from "../components/ChartTwo.jsx";
import TableTwo from "../components/TableTwo.jsx";
import viewIcon from "./views.svg";
import userIcon from "./users.svg";
import salesIcon from "./sales.svg";
import profitIcon from "./dollar.svg";

function Dashboard() {
  return (
    <>
      <section className="mainContent">
        <div className=" bg-secondaryBg dark:bg-balBrand rounded-lg m-2 ">
            <div className="flex justify-center"><h1 className=" inline-block whitespace-nowrap dark:text-secondaryBg font-semibold text-2xl cursor-default text-dBrand">
          Monthly Report
         </h1></div>
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
        </div></div>
        <div className="p-8 w-full md:flex flex-row">
          <ChartOne />
          <ChartTwo />
        </div>
          <div className="">
          <TableTwo />
          </div>
      </section>
    </>
  );
}
export default Dashboard;
