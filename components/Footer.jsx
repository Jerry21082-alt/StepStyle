import {
  aboutList,
  newReleasesList,
  supportList,
  trendingList,
} from "@/constants/footerLists";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const DarkFooter = () => {
  const fullYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-center w-full left-0 bottom-0 z-[-2] bg-black relative">
      <section className="flex flex-col md:flex-row items-start justify-start md:justify-between p-4 md:p-20 space-y-10 md:space-y-0">
        <ul className="m-0 flex flex-col space-y-4 text-gray">
          <h4 className="text-snow">Trending</h4>
          {trendingList.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>

        <ul className="m-0 flex flex-col space-y-4 text-gray">
          <h4 className="text-snow">New Releases</h4>
          {newReleasesList.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>

        <ul className="m-0 flex flex-col space-y-4 text-gray">
          <h4 className="text-snow">Support</h4>
          {supportList.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>

        <ul className="m-0 flex flex-col space-y-4 text-gray">
          <h4 className="text-snow">About Us</h4>
          {aboutList.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
      </section>

      <section className="w-full text-gray border-t border-t-gray p-4 md:px-20 flex items-center justify-start flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookie Setting</span>
        </div>

        <div>&copy;{fullYear} StepStyle. All Rights Reverved</div>

        <div className="flex items-center space-x-4">
          <div className="w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="-5.0 -10.0 110.0 135.0"
              fill="#FFFFFF"
            >
              <g>
                <path d="m49.973 85.473c-0.52734 0-0.99609-0.29297-1.2305-0.76172-1.2891-2.3438-3.1641-5.4492-5.2734-9.0234-8.7891-14.645-22.086-36.672-22.086-47.102 0-15.758 12.77-28.59 28.59-28.59 15.758 0 28.59 12.828 28.59 28.59 0 10.484-13.414 32.688-22.262 47.453-2.0508 3.3984-3.8086 6.3867-5.1562 8.6719-0.23438 0.41016-0.70312 0.76172-1.1719 0.76172zm0-82.66c-14.176 0-25.719 11.539-25.719 25.777 0 9.6094 13.004 31.34 21.617 45.637 1.582 2.5781 2.9297 4.9805 4.1602 6.9141 1.1133-1.9336 2.4609-4.1602 3.9844-6.5625 8.1445-13.59 21.852-36.32 21.852-45.988-0.11719-14.234-11.656-25.777-25.895-25.777z" />
                <path d="m49.973 43.996c-8.4961 0-15.406-6.9141-15.406-15.406 0-8.4375 6.9141-15.348 15.406-15.348 8.4375 0 15.348 6.9141 15.348 15.348 0 8.4961-6.9141 15.406-15.348 15.406zm0-27.945c-6.9141 0-12.535 5.625-12.535 12.535 0 6.9141 5.625 12.535 12.535 12.535 6.9141 0 12.477-5.625 12.477-12.535 0-6.9141-5.5664-12.535-12.477-12.535z" />
                <path d="m49.973 100c-17.164 0-30.578-6.9727-30.578-15.992 0-7.3242 8.8477-13.531 22.027-15.406 0.58594-0.058593 1.1133 0.17578 1.4648 0.64453 1.2305 2.0508 2.3438 3.9844 3.3984 5.8008 1.4062 2.2852 2.6367 4.2773 3.6914 6.0938 1.2891-2.168 2.8125-4.8047 4.6289-7.7344 0.82031-1.2891 1.6406-2.6953 2.5195-4.1602 0.29297-0.46875 0.87891-0.70312 1.4648-0.64453 13.18 1.9922 22.027 8.1445 22.027 15.406 0 9.0234-13.473 15.992-30.637 15.992zm-9.0234-28.473c-10.895 1.8164-18.746 7.0312-18.746 12.477 0 7.1484 12.711 13.18 27.77 13.18 14.996 0 27.77-6.0352 27.77-13.18 0-5.4492-7.793-10.66-18.688-12.477-0.70313 1.1719-1.3477 2.2852-2.0508 3.3398-2.3438 3.9258-4.3945 7.2656-5.8594 9.8438-0.23438 0.46875-0.70312 0.76172-1.1719 0.76172-0.52734 0-0.99609-0.29297-1.2305-0.76172-1.2305-2.168-2.9297-4.9805-4.8047-8.2031-0.99609-1.5234-2.0508-3.1641-2.9883-4.9805z" />
              </g>
            </svg>
          </div>
          <span>Nigeria</span>
        </div>
      </section>
    </footer>
  );
};

export default DarkFooter;
