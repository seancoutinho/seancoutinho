const Header = ({ dark }) => {
  return (
    <div className="orido_tm_header fixed top-0 left-0 right-0 z-[10] py-[25px] px-[150px] transition-all duration-300 middle:hidden">
      <div className="header_in w-full flex items-center justify-between">
        <div className="logo">
          <a href="#">
            <img
              className="max-w-[170px] max-h-[90px]"
              src={`assets/img/logo/${dark ? "light" : "logo"}.png`}
              alt
            />
          </a>
        </div>
        <div className="menu relative">
          <ul className="anchor_nav flex items-center">
            <li className="current mr-[50px]">
              <a className="text-[#5A5A5A]" href="#home">
                Home
              </a>
            </li>
            <li className="mr-[50px]">
              <a className="text-[#5A5A5A]" href="#about">
                About
              </a>
            </li>
            <li className="mr-[50px]">
              <a className="text-[#5A5A5A]" href="#service">
                Service
              </a>
            </li>
            <li className="mr-[50px]">
              <a className="text-[#5A5A5A]" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="mr-[50px]">
              <a className="text-[#5A5A5A]" href="#blog">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="ccc" />
        </div>
        <div className="button">
          <a
            className="text-main-color font-bold font-dm inline-block rounded-[18px] px-[40px] pt-[17px] pb-[18px] transition-all duration-300"
            href="https://themeforest.net/user/marketify/portfolio"
            target="_blank"
          >
            Purchase Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
