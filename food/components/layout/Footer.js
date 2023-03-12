import React from "react";
import Image from "next/image";
import classes from "./Footer.module.scss";
import Logo from "../../images/meal_khuj_logo_primary.png";
import Text from "../text/Text";

function Footer() {
  return (
    <footer className={classes.footer}>
      <Image width={50} height={50} src={Logo} alt="Mr West" />
      <Text>Find the perfect meal recipe for you</Text>
      <Text className={classes.copyright}>
        © “Mr-West” 2022 All right reserved.
      </Text>
    </footer>
  );
}

export default Footer;
