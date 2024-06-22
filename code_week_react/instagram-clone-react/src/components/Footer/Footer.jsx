import styles from "./footer.module.scss";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { LuPlaySquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <GoHome className={styles.footerIcon} />
      <IoIosSearch className={styles.footerIcon} />
      <MdOutlineAddBox className={styles.footerIcon} />
      <LuPlaySquare className={styles.footerIcon} />
      <CgProfile className={styles.footerIcon} />
    </div>
  );
};

export default Footer;
