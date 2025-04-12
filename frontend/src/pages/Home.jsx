import { Link } from "react-router-dom";
import SearchComponent from "../components/SearchComponent";
import LatestHouses from "./LatestHouses";

function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-[#081E4A] text-center text-3xl font-bold dark:text-white">
            Find Your Perfect Rental Home
          </h1>
        </div>
        <div>
          <p className="text-xl my-5">
            A Great Platform to Connect users Directly with Tenant and
            Discover Your Dream Home
          </p>
        </div>
      </div>
      <div className="search">
        <SearchComponent />
      </div>
      <div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <h2 className="text-[#081E4A] font-bold my-5 text-3xl dark:text-white">
           Latest Listings
          </h2>
         <LatestHouses />
         </div>
        <div className="flex justify-end mr-10 my-5">
          <Link to='/houses' >
          <button className=" text-white bg-[#234B9A] rounded-2xl">
            Explore all
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
