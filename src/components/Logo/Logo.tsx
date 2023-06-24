import "./Logo.css";
import Image from "../../assets/devpardo.png";

const Logo = () => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="border border-red">
          <img className="full-image" src={Image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Logo;
