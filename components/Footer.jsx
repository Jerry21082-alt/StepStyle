import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const DarkFooter = () => {
  return (
    <footer className="sticky flex flex-col justify-center w-ful h-[225px] left-0 bottom-0 z-[-2] bg-black">
      <section className="text-center text-snow overflow-hidden block">
        <ul className="p-0 m-0 leading-none">
          <li className="px-[15px] py-[10px] inline-block">
            <FaFacebookF color="#fff" size={25} />
          </li>
          <li className="px-[15px] py-[10px] inline-block">
            <FaXTwitter color="#fff" size={25} />
          </li>
          <li className="px-[15px] py-[10px] inline-block">
            <FaYoutube color="#fff" size={25} />
          </li>
          <li className="px-[15px] py-[10px] inline-block">
            <FaInstagram color="#fff" size={25} />
          </li>
          <li className="px-[15px] py-[10px] inline-block">
            <FaLinkedinIn color="#fff" size={25} />
          </li>
        </ul>
      </section>

      <section
        className="dark-footer-p text-center uppercase text-[.84em]
      "
      >
        <ul className="mb-0 leading-[1.625em] list-none">
          <li className="inline-block my-0 mx-[15px]">
            <Link
              href={"/"}
              className="text-snow inline-block leading-[2em] relative dark-footer-link"
            >
              Home
            </Link>
          </li>
          <li className="inline-block my-0 mx-[15px]">
            <Link
              href={"/"}
              className="text-snow inline-block leading-[2em] relative dark-footer-link"
            >
              Contact Us
            </Link>
          </li>
          <li className="inline-block my-0 mx-[15px]">
            <Link
              href={"/"}
              className="text-snow inline-block leading-[2em] relative dark-footer-link"
            >
              Privacy
            </Link>
          </li>
          <li className="inline-block my-0 mx-[15px]">
            <Link
              href={"/"}
              className="text-snow inline-block leading-[2em] relative dark-footer-link"
            >
              Terms of use
            </Link>
          </li>
          <li className="inline-block my-0 mx-[15px]">
            <Link
              href={"/"}
              className="text-snow inline-block leading-[2em] relative dark-footer-link"
            >
              Accessibility
            </Link>
          </li>
          <li className="inline-block my-0 mx-[15px]">
            <Link
              href={"/"}
              className="text-snow inline-block leading-[2em] relative dark-footer-link"
            >
              Foia
            </Link>
          </li>
          <li className="inline-block my-0 mx-[15px]">
            <Link
              href={"/"}
              className="text-snow inline-block leading-[2em] relative dark-footer-link"
            >
              No fear act
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default DarkFooter;
