import { IconType } from "react-icons";
import { ImSearch } from "react-icons/im";
import { BiLocationPlus, BiTargetLock } from "react-icons/bi";
import { MdBarChart, MdCake } from "react-icons/md";
import { AiFillSetting, AiFillCloud } from "react-icons/ai";
import { IoMdNotifications, IoIosPhonePortrait } from "react-icons/io";
import Chart, { ChartData, ChartOptions } from "chart.js/auto";
export const navLinks: { id: string; title: string }[] = [
  {
    id: "Elements",
    title: "Elements",
  },
  {
    id: "Widgets",
    title: "Widgets",
  },
  {
    id: "Helps",
    title: "Helps",
  },
];
export const navIcons: { id: number; icon: IconType; name: string }[] = [
  {
    id: 1,
    icon: ImSearch,
    name: "search",
  },
  {
    id: 2,
    icon: IoMdNotifications,
    name: "notification",
  },
  {
    id: 3,
    icon: AiFillSetting,
    name: "setting",
  },
];
export const sideLinks: { id: number; title: string }[] = [
  {
    id: 1,
    title: "Commerce",
  },
  {
    id: 2,
    title: "Finance",
  },
  {
    id: 3,
    title: "Analytics",
  },
  {
    id: 4,
    title: "Crypto",
  },
  {
    id: 5,
    title: "Helpdesk",
  },
  {
    id: 6,
    title: "Monitoring",
  },
  {
    id: 7,
    title: "Task",
  },
  {
    id: 8,
    title: "Fitness",
  },
  {
    id: 9,
    title: "Learning",
  },
  {
    id: 10,
    title: "Healthcare",
  },
];
export const sideItems: { id: string; title: string; icon: IconType }[] = [
  {
    id: "Overview",
    title: "Overview",
    icon: IoIosPhonePortrait,
  },
  {
    id: "Dashboard",
    title: "Dashboard",
    icon: MdBarChart,
  },
  {
    id: "Applications",
    title: "Applications",
    icon: MdCake,
  },
  {
    id: "Addresses",
    title: "Addresses",
    icon: BiTargetLock,
  },
  {
    id: "Extra menu",
    title: "Extra",
    icon: MdBarChart,
  },
  {
    id: "Element",
    title: "Element",
    icon: BiLocationPlus,
  },
  {
    id: "Widgets",
    title: "Widgets",
    icon: AiFillCloud,
  },
];
export const cryptoLogos: {
  id: string;
  logo: string;
  alt: string;
  name: string;
  symbol: string;
  percentage?: number;
  change: number;
  amount?: string;
  quantity?: number;
}[] = [
  {
    id: "BTC",
    logo: "/assets/btc.svg",
    alt: "Bitcoin logo",
    name: "Bitcoin",
    symbol: "BTC",
    percentage: 37,
    change: 2.54,
    amount: "$3,594.23",
    quantity: 1.2356,
  },
  {
    id: "XRP",
    logo: "/assets/xrp.svg",
    alt: "Ripple logo",
    name: "Ripple",
    symbol: "XRP",
    percentage: 22,
    change: -1.5,
    amount: "$1238.84",
    quantity: 22.05,
  },
  {
    id: "ADA",
    logo: "/assets/ada.svg",
    alt: "Cardano logo",
    name: "Cardano",
    symbol: "ADA",
    percentage: 10,
    change: 10.2,
    amount: "$500.00",
    quantity: 10.42,
  },
  {
    id: "ETH",
    logo: "/assets/eth.svg",
    alt: "Ethereum logo",
    name: "Ethereum",
    symbol: "ETH",
    percentage: 34,
    change: -5.2,
  },
];
export const tableHead: { id: string; title: string }[] = [
  {
    id: "order",
    title: "order detal",
  },
  {
    id: "order id",
    title: "order id",
  },
  {
    id: "source",
    title: "source",
  },
  {
    id: "amount",
    title: "amount",
  },
  {
    id: "balance",
    title: "balance",
  },
  {
    id: "status",
    title: "status",
  },
  {
    id: "action",
    title: "action",
  },
];

export const tableData: {
  details: string;
  id: string;
  source: string;
  amount: string;
  balance: string;
  status: string;
  date: Date;
}[] = [
  {
    details: "Crypto Deposit",
    id: "6gfr85fsf4hr",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "rejected",
    date: new Date("Apr 12, 2023"),
  },
  {
    details: "Fiat Deposit",
    id: "6gfr85fsf4gf",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("Jan 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "ggs6gfr85fsf4",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 30, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "sfg6gfr85fsf4",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("Feb 15, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "er6gfr85fsf4",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "qax6gfr85fsf4",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "6gfr85afsf4hr",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "6gfr85fsdf4gf",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "ggs6gfr8c5fsf4",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "sfg6gfr85dfsf4",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "er6gfrw85fsf4",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "qax6gfrqa85fsf4",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "6gfxr85afsf4hr",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "6gfr8x5fsdf4gf",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "ggs6gfxr8c5fsf4",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "sfg6gfrx85dfsf4",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "er6gfrwx85fsf4",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
  {
    details: "Fiat Deposit",
    id: "qax6gfxrqa85fsf4",
    source: "Bank Account",
    amount: "+ 0.35547663174 BTC",
    balance: "+ 0.65547663174 BTC",
    status: "Completed",
    date: new Date("March 8, 2024"),
  },
];

const generateUniqueIds = <T extends { id?: string }>(array: T[]): T[] => {
  const idSet = new Set<string>();
  return array.map((item) => {
    if (!item.id) {
      let newId = "";
      do {
        newId = Math.random().toString(36).substr(2, 9);
      } while (idSet.has(newId));
      idSet.add(newId);
      return { ...item, id: newId };
    }
    return item;
  });
};
export const data = generateUniqueIds(tableData);

export const chartColors: {
  id: string;
  color1: string;
  color2: string;
  color3: string;
}[] = [
  {
    id: "greenChart",
    color1: "rgba(68, 214, 0, 0.51)",
    color2: "rgba(68, 214, 0, 0.16)",
    color3: "rgba(68, 214, 0, 0)",
  },
  {
    id: "blueChart",
    color1: "rgba(26, 117, 255, 1)",
    color2: "rgba(26, 117, 255, 0.16)",
    color3: "rgba(26, 117, 255, 0)",
  },
  {
    id: "orangeChart",
    color1: "rgba(255, 163, 26, 1)",
    color2: "rgba(255, 163, 26, 0.16)",
    color3: "rgba(255, 163, 26, 0)",
  },
];


export const cryptoPrice: {
  id: string;
  logo: string;
  alt: string;
  name: string;
  symbol: string;
  percentage: number;
  change: number;
  amount: number;
  quantity?: number;
  price:string,
  chartColor:{}
}[] = [
  {
    id: "BTCp",
    logo: "/assets/btc.svg",
    alt: "Bitcoin logo",
    name: "Bitcoin",
    symbol: "BTC",
    percentage: 37,
    change: 2.54,
    amount: 500,
    quantity: 1.2356,
    price:"27,296.30",
    chartColor:{
      id: "greenChart",
      color1: "rgba(68, 214, 0, 0.51)",
      color2: "rgba(68, 214, 0, 0.16)",
      color3: "rgba(68, 214, 0, 0)",
    },
  },
  {
    id: "ETHp",
    logo: "/assets/eth.svg",
    alt: "Ethereum logo",
    name: "Ethereum",
    symbol: "ETH",
    percentage: -10,
    change: -5.2,
    price:"1,786,99",
    amount:-90,
    chartColor:  {
      id: "blueChart",
      color1: "rgba(26, 117, 255, 1)",
      color2: "rgba(26, 117, 255, 0.16)",
      color3: "rgba(26, 117, 255, 0)",
    },
  },
  {
    id: "ADAp",
    logo: "/assets/ada.svg",
    alt: "Cardano logo",
    name: "Cardano",
    symbol: "ADA",
    percentage: -21,
    change: 10.2,
    amount: -5,
    quantity: -10.42,
    price:"0,23",
    chartColor:  {
      id: "orangeChart",
      color1: "rgba(255, 163, 26, 1)",
      color2: "rgba(255, 163, 26, 0.16)",
      color3: "rgba(255, 163, 26, 0)",
    },
  },
  
];