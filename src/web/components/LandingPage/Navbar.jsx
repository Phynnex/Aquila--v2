import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
export default function Example() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className=" mb-4 mt-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row   lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="secondary"
        className="p-1 font-semibold text-base"
      >
        <Link to="/" className="flex items-center">
          How It Works
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="secondary"
        className="p-1 font-semibold text-base"
      >
        <Link to="/pricing" className="flex items-center">
         Pricing
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="secondary"
        className="p-1 font-semibold text-base"
      >
      
        <Link to="/contact" className="flex items-center">
          Contact Us
        </Link>
      </Typography>
      
    </ul>
  );
 
  return (
    <Navbar className="fixed mx-auto w-screen border-none rounded-none px-4 lg:px-8 lg:py-4 opacity-100 z-10 bg-white ">
      <div className="container mx-auto flex items-center justify-between text-secondary">
        <Typography
          as="a"
          href="#"
          variant="medium"
          color="secondary"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span>Logo</span>
        </Typography>
        <div className="w-1/2 flex justify-around">
        <div className="hidden lg:block">{navList}</div>
        <Link to="/login">
        <button className="hidden lg:inline-block border-2 border-secondary px-12 text-secondary rounded-md py-2">
          <span>Login</span>
        </button>
        </Link>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Link to="/login">
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Login</span>
          </Button>
          </Link>
        </div>
      </MobileNav>
    </Navbar>
  );
}