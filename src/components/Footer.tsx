import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="p-10 bg-hsla text-gray-100 flex items-center justify-between">
      <Logo title="Tech Blog" className="text-white" />
      <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
        <Link href={"https://github.com/SaiMani30"} target="blank">
          <BsGithub className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
        <Link
          href={"https://www.facebook.com/SaiManikantaPatro/"}
          target="blank"
        >
          <BsFacebook className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
        <Link href={"https://www.instagram.com/nameis_mani30/"} target="blank">
          <BsInstagram className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
        <Link href={"https://www.linkedin.com/in/sai-manikanta-patro-b21011204/"} target="blank">
          <FaLinkedin className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
        </Link>
      </div>
      <p className="text-sm text-gray-300">
        © All rights reserved{" "}
        <Link
          href={"https://www.instagram.com/nameis_mani30/"}
          target="blank"
          className="hover:text-white font-semibold duration-200"
        >
          @Sai Manikanta Patro
        </Link>
      </p>
    </Container>
  );
};

export default Footer;
