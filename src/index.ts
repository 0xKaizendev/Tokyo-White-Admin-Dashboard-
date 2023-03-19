import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import WatchList from "./components/WatchList";
import Link from "next/link";
import { Table } from "flowbite-react";
import {
  navLinks,
  navIcons,
  sideLinks,
  cryptoLogos,
  tableHead,
  tableData,
  sideItems,
  chartColors,cryptoPrice
} from "./constants";
import {
  MdOutlineArrowBackIos,
  MdBarChart,
  MdOutlineLock,
  MdPhoneLocked,
  MdMailOutline,
  MdModeEdit,
  MdDelete,
  MdEdit,
} from "react-icons/md";
import { BiLocationPlus } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { CgMenuGridR } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { IoIosPhonePortrait, IoIosArrowForward } from "react-icons/io";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BiTrendingDown } from "react-icons/bi";
import { Input } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
export {
  Navbar,
  Sidebar,
  Content,
  Link,
  Image,
  navLinks,
  MdOutlineArrowBackIos,
  navIcons,
  sideLinks,
  Table,
  MdBarChart,
  BiLocationPlus,
  sideItems,
  ImSearch,
  IoIosPhonePortrait,
  AiOutlineArrowUp,
  cryptoLogos,
  Button,
  MdOutlineLock,
  MdPhoneLocked,
  MdMailOutline,
  tableHead,
  tableData,
  BiTrendingDown,
  MdModeEdit,
  MdDelete,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
  MdEdit,
  IoIosArrowForward,
  WatchList,
  CgMenuGridR,
  TiThMenu,
  chartColors,cryptoPrice
};
