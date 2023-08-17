import p1 from '../../assets/product-01.png';
import p2 from '../../assets/product-02.png';
import p3 from '../../assets/product-03.png';
import p4 from '../../assets/product-04.png';
const TableTwo = () => {
  return (
    <div className="rounded-lg border-2 w-full border-dBrand bg-[#6C48B3] text-secondaryBg dark:border-mainBg">
      <div className="py-3 flex justify-center">
        <h4 className="text-xl inline-block font-semiboldtext-secondaryBg">
          Top Products
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Category</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Sold</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Profit</p>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12 w-12 rounded-lg m-1 ">
              <img src={p1} alt="Product" className="rounded-lg border-2 border-dBrand " />
            </div>
            <p className="text-sm text-mainBg">
              Apple Watch Series 7
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-mainBg">Electronics</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-mainBg">$269</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-mainBg">22</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$45</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12 w-12 rounded-lg m-1 ">
              <img src={p2} alt="Product" className="rounded-lg border-2 border-dBrand " />
            </div>
            <p className="text-sm text-mainBg">Macbook Pro M1</p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-mainBg">Electronics</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-mainBg">$546</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-mainBg">34</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$125</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12 w-12 rounded-lg m-1 ">
              <img src={p3} alt="Product" className="rounded-lg border-2 border-dBrand " />
            </div>
            <p className="text-sm text-mainBg">
              Dell Inspiron 15
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-mainBg">Electronics</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-mainBg">$443</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-mainBg">64</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$247</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12 w-12 rounded-lg m-1 ">
              <img src={p4} alt="Product" className="rounded-lg border-2 border-dBrand " />
            </div>
            <p className="text-sm text-mainBg">HP Probook 450</p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-mainBg">Electronics</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-mainBg">$499</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-mainBg">72</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">$103</p>
        </div>
      </div>
    </div>
  );
};

export default TableTwo;
