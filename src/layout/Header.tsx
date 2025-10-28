import { useState } from "react";
import Container from "../components/Container";
import HeaderLinkDisplayer from "../components/display/HeaderLinkDisplayer";
import Menu from "../components/display/Menu";
import { headerData, headerData2 } from "../constant";
import Logo from "../icons/Logo";

function Header() {
  const [open, setOPen] = useState(false);
  return (
    <div className="w-full  py-3 border relative rounded-b-4xl ">
      {/* <Container className="flex items-center justify-between pt-0! "> */}
      {/* <Logo className="w-[150px] h-auto " /> */}
      {/* </Container> */}
      <Container className="pt-0! flex items-center justify-between  ">
        <div className="w-full flex items-end justify-between  ">
          <HeaderLinkDisplayer data={headerData[0]} />
          <Logo className="w-[150px] lg:w-[230px] h-auto " />
          <HeaderLinkDisplayer data={headerData[1]} />
        </div>
        <Menu isClicked={open} onClick={() => setOPen(!open)} />
      </Container>

      <img
        src="/images/vanilla-image.png"
        alt="vanilla image"
        className="lg:w-[150px] xl:w-[200px] h-auto absolute bottom-0 left-0 translate-y-1/2  hidden lg:block "
      />
      <ul
        className={`absolute  w-full h-screen top-0 left-0 bg-white lg:hidden flex flex-col items-center justify-center gap-8 text-2xl transition-transform duration-700 ${
          open ? "translate-x-0" : "translate-x-full"
        } `}
      >
        {headerData2.map((link, id) => (
          <li key={id}>
            <a href={link.href} onClick={() => setOPen(false)}>
              {" "}
              {link.label}{" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
