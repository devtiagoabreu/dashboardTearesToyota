//Sidebar imports

import { 
  UilEstate,
  UilUsersAlt,
  UilClipboardAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
} from '@iconscout/react-unicons';

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",    
  },
  {
    icon: UilClipboardAlt,
    heading: "Ordens",    
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",    
  },
  {
    icon: UilPackage,
    heading: "Products",    
  },
  {
    icon: UilChart,
    heading: "Analytics",    
  },
  
];
 
export const CardsData = [
  {
    title: "Tear 001",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "6098,70",
    png: UilUsdSquare,
    series: [
      {
        name: "Eficiência",
        data: [75,85,90,70,60,15,90,93]
      },
    ]
  },
  {
    title: "Tear 002",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 85,
    value: "6235,50",
    png: UilUsdSquare,
    series: [
      {
        name: "Eficiência",
        data: [10,20,30,0,80,85,90,95]
      },
    ]
  },
  {
    title: "Tear 003",
    color: {
      backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42% )",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 91,
    value: "8105,70",
    png: UilUsdSquare,
    series: [
      {
        name: "Eficiência",
        data: [91,99,100,0,30,70,90,92]
      },
    ]
  },
];

