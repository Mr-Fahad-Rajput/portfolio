import CardOne from '../components/CardOne.jsx';
import viewIcon from './views.svg';
import userIcon from './users.svg';
import salesIcon from './sales.svg';
import profitIcon from './dollar.svg';


function Dashboard() {
    return (
      <>
        <section className="mainContent">
        <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
                Monthly Report
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-8">
        <CardOne cardImg={viewIcon} cardHeading="Views:353280" subHeading="Growth:" difPercntage="1.33%"/>
        <CardOne cardImg={salesIcon} cardHeading="Sales: $25040" subHeading="Growth:" difPercntage="0.46%"/>
        <CardOne cardImg={profitIcon} cardHeading="Profits:$4560" subHeading="Growth:" difPercntage="2.89%"/>
        <CardOne cardImg={userIcon} cardHeading="Users:65490" subHeading="Growth:" difPercntage="10.09%"/>
      </div>
{/* eslint-disable */}
      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div> */}
        </section>
      </>
    );
  }
  export default Dashboard;
  