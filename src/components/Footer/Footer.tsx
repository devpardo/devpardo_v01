import ScrollToTop from "react-scroll-to-top";
import Rocket from "../Rocket";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-black h-16 flex items-center align-middle">
        <footer className="text-center w-full text-white text-xs">
          <a
            href="/"
            target="_blank"
            className="no-underline text-white cursor-pointer"
          >
            Henster Bryan Pardo
          </a>{" "}
          &copy; {year} All rights reserved.
        </footer>
      </div>

      <ScrollToTop
        className="!flex items-center !justify-center pt-1 border-none !bg-[#fce94b] !shadow-none !h-20 !w-[100px] bg-transparent"
        smooth
        top={800}
        component={<Rocket />}
        style={{
          bottom: 100,
          right: 0,
        }}
      />
    </>
  );
};

export default Footer;
