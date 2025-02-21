import brain from "./assets/brain.svg";
import skel from "./assets/skel.svg";
import targ from "./assets/targ.svg";
import trendUp from "./assets/trendUp.svg";
import trendDown from "./assets/trendDown.svg";
import users from "./assets/users.svg"
const navItem = [{
    id:"hel",
    d:"M19.903 8.586a1 1 0 0 0-.196-.293l-6-6a1 1 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a1 1 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a1 1 0 0 0-.051-.259q-.014-.048-.033-.093M16.586 8H14V5.414zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10z",
    dd: "M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z",
    text: "Overview",
    xmlns:"http://www.w3.org/2000/svg",
   viewBox:"0 0 24 24",
   path:"overviews/1"
},

{
    id:"hei",
    dd: "M7.346 16.539h1.539V15H7.346zm0-3.77h1.539v-1.538H7.346zm0-3.769h1.539V7.462H7.346zm3.846 7.27h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z",
    text:"Patient List",
    xmlns:"http://www.w3.org/2000/svg",
    viewBox:"0 0 24 24"
    },

    {
    id:"he",
    dd: "M216 40h-80V24a8 8 0 0 0-16 0v16H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h39.36l-21.61 27a8 8 0 0 0 12.5 10l29.59-37h56.32l29.59 37a8 8 0 1 0 12.5-10l-21.61-27H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 136H40V56h176zm-112-56v24a8 8 0 0 1-16 0v-24a8 8 0 0 1 16 0m32-16v40a8 8 0 0 1-16 0v-40a8 8 0 0 1 16 0m32-16v56a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0",
    text:"Image Analysis",
    xmlns:"http://www.w3.org/2000/svg",
    viewBox:"0 0 256 256"
    },
    {
        id:"her",
        dd: "M188.25 169.77A84.3 84.3 0 0 0 220 102c-1-43.64-35.9-79.62-79.45-81.91A84 84 0 0 0 52 103l-22.9 44c-.05.09-.09.18-.13.27a12 12 0 0 0 5.66 15.46l.13.06L60 174.38V208a12 12 0 0 0 12 12h48a4 4 0 0 0 0-8H72a4 4 0 0 1-4-4v-36.19a4 4 0 0 0-2.34-3.64l-27.5-12.59a4 4 0 0 1-1.88-5l23.27-44.72A4.1 4.1 0 0 0 60 104a76 76 0 0 1 64-75v23.4a20 20 0 1 0 8 0V28.11a78 78 0 0 1 8.11 0c33.13 1.74 60.72 25 69.2 55.89H184a4 4 0 0 0-3.07 1.44l-27.46 33a20.12 20.12 0 1 0 6.13 5.13L185.87 92H211a75.9 75.9 0 0 1-29.44 72.8a4 4 0 0 0-1.57 3.7l8 64a4 4 0 0 0 4 3.5h.5a4 4 0 0 0 3.51-4.5ZM140 72a12 12 0 1 1-12-12a12 12 0 0 1 12 12m4 76a12 12 0 1 1 12-12a12 12 0 0 1-12 12",
        text:"AI Diagnosis Report",
        xmlns:"http://www.w3.org/2000/svg" ,
        viewBox:"0 0 256 256"
    },
    
    {
        id:"you",
        dd:"M12.5 11.5h7.489q-.202-3.039-2.326-5.172q-2.124-2.134-5.163-2.317zm-1 8.489V4.012q-3.16.182-5.33 2.483T4 12t2.17 5.505t5.33 2.484m1 0q3.039-.177 5.166-2.314q2.126-2.136 2.323-5.175H12.5zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.506.71t2.858 1.93t1.929 2.855q.71 1.637.71 3.511q0 1.852-.708 3.491t-1.924 2.864t-2.856 1.932t-3.509.707",
        text:"Analytics",
        xmlns:"http://www.w3.org/2000/svg" ,
        viewBox:"0 0 24 24"
    },
    {
        id:"mine",
        dd:"M138 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-54-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m58-54v128a14 14 0 0 1-14 14H82.23l-33.16 28.64l-.06.05A13.87 13.87 0 0 1 40 238a14.1 14.1 0 0 1-5.95-1.33A13.88 13.88 0 0 1 26 224V64a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v160a2 2 0 0 0 3.26 1.55l34.82-30.08A6 6 0 0 1 80 194h136a2 2 0 0 0 2-2Z",
        text:"Chat",
        xmlns:"http://www.w3.org/2000/svg" ,
        viewBox:"0 0 256 256"
    }
]

const weekInfo = [
    {
      src: brain,
      text:"MRI Scans",
      arrSrc: trendUp,
      percentage:"+20.9%",
      amount:265
    },
    {
        src: skel,
        text:"X-Rays",
        arrSrc: trendDown,
        percentage:"-12.7%",
        amount:98
    },
    {
        src: targ,
        text:"CT Scans",
        arrSrc: trendUp,
        percentage:"+12.7%",
        amount:167
    },

]

const pending = [{
  
    d:"M198 136a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h128a6 6 0 0 1 6 6m34-54H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12m-80 96h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12",
    viewBox:"0 0 256 256",
    fill:"#2e2a2a",
    text:"filter"
},
{
    d:"M42 128a6 6 0 0 1 6-6h72a6 6 0 0 1 0 12H48a6 6 0 0 1-6-6m6-58h56a6 6 0 0 0 0-12H48a6 6 0 0 0 0 12m136 116H48a6 6 0 0 0 0 12h136a6 6 0 0 0 0-12m44.24-102.24l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 8.48 8.48L178 62.49V144a6 6 0 0 0 12 0V62.49l29.76 29.75a6 6 0 0 0 8.48-8.48",
    viewBox:"0 0 256 256",
    fill:"#2e2a2a",
    text:"Sort"
},
{
    d:"M214 112v96a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14v-96a14 14 0 0 1 14-14h24a6 6 0 0 1 0 12H56a2 2 0 0 0-2 2v96a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2v-96a2 2 0 0 0-2-2h-24a6 6 0 0 1 0-12h24a14 14 0 0 1 14 14M92.24 68.24L122 38.49V136a6 6 0 0 0 12 0V38.49l29.76 29.75a6 6 0 1 0 8.48-8.48l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 1 0 8.48 8.48",
    viewBox:"0 0 256 256",
    fill:"#2e2a2a",
    text:"Export"
}

]

const patientInfo = [
    {
    
     name: "Alena Bergson",
     diagnosis:"Influenza",
     date:"12-02-2025",
     status:"Discharged",
     bgColor:"bg-[#00000003]",
     statusColor:"bg-[#cccccc]",
     statusText:"text-[#FFFFFF]"
   },
   {
    name: "Modupe Soyinka",
    diagnosis:"Multiple Sclerosis",
    date:"12-02-2025",
    status:"Observation",
    bgColor:"bg-[#00000008]",
    statusColor:"bg-[#fadfd5]",
    statusText:"text-[#E65F2B]"
   },
   {
    name: "Ipigansi Bozimo",
    diagnosis:"Stroke",
    date:"12-02-2025",
    status:"Critical",
    bgColor:"bg-[#00000003]",
    statusColor:"bg-[#fcd2d2]",
    statusText:"text-[#EE201C]"
   },
   {
    name: "Maryam Salisu",
    diagnosis:"Tuberculosis",
    date:"12-02-2025",
    status:"Recovering",
    bgColor:"bg-[#00000008]",
    statusColor:"bg-[#d6f4de]",
    statusText:"text-[#34C759]"

   },
   {
    name: "Fatima Kabiru",
    diagnosis:"Asthma",
    date:"12-02-2025",
    status:"Discharged",
    bgColor:"bg-[#00000003]",
    statusColor:"bg-[#cccccc]",
    statusText:"text-[#FFFFFF]"
   },
   {
    name: "Safiya Maiwada",
    diagnosis:"Lung Cancer",
    date:"12-02-2025",
    status:"Critical",
    bgColor:"bg-[#00000008]",
    statusColor:"bg-[#fcd2d2]",
    statusText:"text-[#EE201C]"
   },
   {
    name: "Musa Kawu",
    diagnosis:"Leukemia",
    date:"12-02-2025",
    status:"Critical",
    bgColor:"bg-[#00000003]",
    statusColor:"bg-[#fcd2d2]",
    statusText:"text-[#EE201C]"
   },
   {
    name: "Rahma Isa",
    diagnosis:"Sepsis",
    date:"12-02-2025",
    status:"Recovering",
    bgColor:"bg-[#00000008]",
    statusColor:"bg-[#d6f4de]",
    statusText:"text-[#34C759]"
   },
   {
    name: "Fatima Kabiru",
    diagnosis:"Colorectal Cancer",
    date:"12-02-2025",
    status:"Observation",
    bgColor:"bg-[#00000003]",
    statusColor:"bg-[#fadfd5]",
     statusText:"text-[#E65F2B]"
   },
]

const anomaly = [
    {
        bgColor: "bg-[#FEF2F2]" ,
        text: "5 High",
        border:"border-[#FEE2E2]",
        width:"w-[64px]",
        color:"text-[#FC485A]"
    },
    {
        bgColor: "bg-[#FFF7ED]" ,
        text: "3 Medium",
        border:"border-[#FFEDD5]",
        width:"w-[84px]",
        color:"text-[#E65F2B]"
    },
    {
        bgColor: "bg-[#FEFCE899]" ,
        text: "4 Low",
        border:"border-[#FEF9C3]",
        width:"w-[61px]",
        color:"text-[#FCAE48]"
    },
]

const anomalyPatient = [
    {
        id:"#14859",
        name:"Adewale Favour",
        content:"2 Specialists Notified",
        d:"M112.6 158.43a58 58 0 1 0-57.2 0a93.83 93.83 0 0 0-50.19 38.29a6 6 0 0 0 10.05 6.56a82 82 0 0 1 137.48 0a6 6 0 0 0 10-6.56a93.83 93.83 0 0 0-50.14-38.29M38 108a46 46 0 1 1 46 46a46.06 46.06 0 0 1-46-46m211 97a6 6 0 0 1-8.3-1.74A81.8 81.8 0 0 0 172 166a6 6 0 0 1 0-12a46 46 0 1 0-17.08-88.73a6 6 0 1 1-4.46-11.14a58 58 0 0 1 50.14 104.3a93.83 93.83 0 0 1 50.19 38.29A6 6 0 0 1 249 205"
    },
    {
        id:"#15962",
        name:"Kalu Abel",
        content:"3 Specialists Notified",
        d:"M237 147.44a4 4 0 0 1-5.48-1.4c-8.33-14-20.93-22-34.56-22a4 4 0 0 1-1.2-.2a37 37 0 0 1-3.8.2a4 4 0 0 1 0-8a28 28 0 1 0-27.12-35a4 4 0 0 1-7.75-2a36 36 0 1 1 54 39.48c10.81 3.85 20.51 12 27.31 23.48a4 4 0 0 1-1.4 5.44M187.46 214a4 4 0 0 1-1.46 5.46a3.93 3.93 0 0 1-2 .54a4 4 0 0 1-3.46-2a61 61 0 0 0-105.08 0a4 4 0 0 1-6.92-4a68.35 68.35 0 0 1 39.19-31a44 44 0 1 1 40.54 0a68.35 68.35 0 0 1 39.19 31M128 180a36 36 0 1 0-36-36a36 36 0 0 0 36 36m-64-64a28 28 0 1 1 27.12-35a4 4 0 0 0 7.75-2a36 36 0 1 0-53.57 39.75a63.55 63.55 0 0 0-32.5 22.85a4 4 0 0 0 6.4 4.8A55.55 55.55 0 0 1 64 124a4 4 0 0 0 0-8"
    },
    {
        id:"#16859",
        name:"Morayo Funmi",
        content:"2 Specialists Notified",
        viewBox:"0 0 256 256",
        d:"M112.6 158.43a58 58 0 1 0-57.2 0a93.83 93.83 0 0 0-50.19 38.29a6 6 0 0 0 10.05 6.56a82 82 0 0 1 137.48 0a6 6 0 0 0 10-6.56a93.83 93.83 0 0 0-50.14-38.29M38 108a46 46 0 1 1 46 46a46.06 46.06 0 0 1-46-46m211 97a6 6 0 0 1-8.3-1.74A81.8 81.8 0 0 0 172 166a6 6 0 0 1 0-12a46 46 0 1 0-17.08-88.73a6 6 0 1 1-4.46-11.14a58 58 0 0 1 50.14 104.3a93.83 93.83 0 0 1 50.19 38.29A6 6 0 0 1 249 205"
    },
    {
        id:"#17859",
        name:"Ade Mercy",
        content:"3 Specialists Notified",
        d:"M237 147.44a4 4 0 0 1-5.48-1.4c-8.33-14-20.93-22-34.56-22a4 4 0 0 1-1.2-.2a37 37 0 0 1-3.8.2a4 4 0 0 1 0-8a28 28 0 1 0-27.12-35a4 4 0 0 1-7.75-2a36 36 0 1 1 54 39.48c10.81 3.85 20.51 12 27.31 23.48a4 4 0 0 1-1.4 5.44M187.46 214a4 4 0 0 1-1.46 5.46a3.93 3.93 0 0 1-2 .54a4 4 0 0 1-3.46-2a61 61 0 0 0-105.08 0a4 4 0 0 1-6.92-4a68.35 68.35 0 0 1 39.19-31a44 44 0 1 1 40.54 0a68.35 68.35 0 0 1 39.19 31M128 180a36 36 0 1 0-36-36a36 36 0 0 0 36 36m-64-64a28 28 0 1 1 27.12-35a4 4 0 0 0 7.75-2a36 36 0 1 0-53.57 39.75a63.55 63.55 0 0 0-32.5 22.85a4 4 0 0 0 6.4 4.8A55.55 55.55 0 0 1 64 124a4 4 0 0 0 0-8"
    },
    {
        id:"#18859",
        name:"Joko Tomiwa",
        content:"4 Specialists Notified",
        d:"M29.6 123.2a4 4 0 0 0 5.6-.8a56 56 0 0 1 89.6 0a3.93 3.93 0 0 0 6.38 0a56 56 0 0 1 89.6 0a4 4 0 1 0 6.4-4.8a63.55 63.55 0 0 0-32.5-22.85a36 36 0 1 0-37.4 0a63.4 63.4 0 0 0-29.3 19a63.34 63.34 0 0 0-29.3-19a36 36 0 1 0-37.4 0A63.6 63.6 0 0 0 28.8 117.6a4 4 0 0 0 .8 5.6M148 64a28 28 0 1 1 28 28a28 28 0 0 1-28-28m-96 0a28 28 0 1 1 28 28a28 28 0 0 1-28-28m142.7 134.75a36 36 0 1 0-37.4 0A63.4 63.4 0 0 0 128 217.7a63.34 63.34 0 0 0-29.3-18.95a36 36 0 1 0-37.4 0a63.6 63.6 0 0 0-32.5 22.85a4 4 0 0 0 6.4 4.8a56 56 0 0 1 89.6 0a3.93 3.93 0 0 0 6.38 0a56 56 0 0 1 89.6 0a4 4 0 0 0 6.4-4.8a63.55 63.55 0 0 0-32.48-22.85M52 168a28 28 0 1 1 28 28a28 28 0 0 1-28-28m96 0a28 28 0 1 1 28 28a28 28 0 0 1-28-28"
    },
    {
        id:"#19859",
        name:"Aluko Mary",
        content:"2 Specialists Notified",
        viewBox:"0 0 256 256",
        d:"M112.6 158.43a58 58 0 1 0-57.2 0a93.83 93.83 0 0 0-50.19 38.29a6 6 0 0 0 10.05 6.56a82 82 0 0 1 137.48 0a6 6 0 0 0 10-6.56a93.83 93.83 0 0 0-50.14-38.29M38 108a46 46 0 1 1 46 46a46.06 46.06 0 0 1-46-46m211 97a6 6 0 0 1-8.3-1.74A81.8 81.8 0 0 0 172 166a6 6 0 0 1 0-12a46 46 0 1 0-17.08-88.73a6 6 0 1 1-4.46-11.14a58 58 0 0 1 50.14 104.3a93.83 93.83 0 0 1 50.19 38.29A6 6 0 0 1 249 205"
    },
    {
        id:"#20859",
        name:"Olori Dare",
        content:"2 Specialists Notified",
        viewBox:"0 0 256 256",
        d:"M112.6 158.43a58 58 0 1 0-57.2 0a93.83 93.83 0 0 0-50.19 38.29a6 6 0 0 0 10.05 6.56a82 82 0 0 1 137.48 0a6 6 0 0 0 10-6.56a93.83 93.83 0 0 0-50.14-38.29M38 108a46 46 0 1 1 46 46a46.06 46.06 0 0 1-46-46m211 97a6 6 0 0 1-8.3-1.74A81.8 81.8 0 0 0 172 166a6 6 0 0 1 0-12a46 46 0 1 0-17.08-88.73a6 6 0 1 1-4.46-11.14a58 58 0 0 1 50.14 104.3a93.83 93.83 0 0 1 50.19 38.29A6 6 0 0 1 249 205"
    },
    {
        id:"#14859",
        name:"Adewale Favour",
        content:"2 Specialists Notified"
    },
    {
        id:"#14859",
        name:"Adewale Favour",
        content:"2 Specialists Notified"
    },
    {
        id:"#14859",
        name:"Adewale Favour",
        content:"2 Specialists Notified"
    }

]


export { anomalyPatient ,navItem , weekInfo , pending , patientInfo , anomaly }


