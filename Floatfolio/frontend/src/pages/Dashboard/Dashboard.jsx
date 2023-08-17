import CardOne from "../components/CardOne.jsx";
import ChartOne from "../components/ChartOne.jsx";
import ChartTwo from "../components/ChartTwo.jsx";
import viewIcon from "./views.svg";
import userIcon from "./users.svg";
import salesIcon from "./sales.svg";
import profitIcon from "./dollar.svg";

function Dashboard() {
  return (
    <>
      <section className="mainContent">
        <h1 className="mb-4 dark:text-secondaryBg font-semibold text-2xl underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
          Monthly Report
        </h1>
        <div className="grid rounded-lg m-2 grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-8 bg-secondaryBg dark:bg-balBrand">
          <CardOne
            cardImg={viewIcon}
            cardHeading="Visits:353280"
            subHeading="Growth:"
            difPercntage="1.33%"
          />
          <CardOne
            cardImg={salesIcon}
            cardHeading="Sales: $25040"
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
            cardHeading="Users:65490"
            subHeading="Growth:"
            difPercntage="10.09%"
          />
        </div>
        <div className="p-8 w-full flex flex-row">
          <ChartOne />
          <ChartTwo />
        </div>
          {/* <ChartThree /> */}
          {/* <div className=""><TableOne /></div> */}
          {/* <ChatCard /> */}
      </section>
    </>
  );
}
export default Dashboard;
