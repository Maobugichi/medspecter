import brain from "./assets/brain.svg";
import skel from "./assets/skel.svg";
import targ from "./assets/targ.svg";
import trendUp from "./assets/trendUp.svg";
import trendDown from "./assets/trendDown.svg";
import hourGlass from "./assets/hourglass.svg";
import drop from "./assets/drop.svg";
import ruler from "./assets/ruler.svg";
import scale from "./assets/scale.svg"
import clock from "./assets/Clock.svg";
import blueCircle from "./assets/blueCircle.svg";
import notePencil from "./assets/NotePencil.svg";
import four from "./assets/four.svg";
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
    viewBox:"0 0 24 24",
    path:"patientlists/1"
    },

    {
    id:"he",
    dd: "M216 40h-80V24a8 8 0 0 0-16 0v16H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h39.36l-21.61 27a8 8 0 0 0 12.5 10l29.59-37h56.32l29.59 37a8 8 0 1 0 12.5-10l-21.61-27H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 136H40V56h176zm-112-56v24a8 8 0 0 1-16 0v-24a8 8 0 0 1 16 0m32-16v40a8 8 0 0 1-16 0v-40a8 8 0 0 1 16 0m32-16v56a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0",
    text:"Image Analysis",
    xmlns:"http://www.w3.org/2000/svg",
    viewBox:"0 0 256 256",
     path:"analysis/1"
    },
    {
        id:"her",
        dd: "M188.25 169.77A84.3 84.3 0 0 0 220 102c-1-43.64-35.9-79.62-79.45-81.91A84 84 0 0 0 52 103l-22.9 44c-.05.09-.09.18-.13.27a12 12 0 0 0 5.66 15.46l.13.06L60 174.38V208a12 12 0 0 0 12 12h48a4 4 0 0 0 0-8H72a4 4 0 0 1-4-4v-36.19a4 4 0 0 0-2.34-3.64l-27.5-12.59a4 4 0 0 1-1.88-5l23.27-44.72A4.1 4.1 0 0 0 60 104a76 76 0 0 1 64-75v23.4a20 20 0 1 0 8 0V28.11a78 78 0 0 1 8.11 0c33.13 1.74 60.72 25 69.2 55.89H184a4 4 0 0 0-3.07 1.44l-27.46 33a20.12 20.12 0 1 0 6.13 5.13L185.87 92H211a75.9 75.9 0 0 1-29.44 72.8a4 4 0 0 0-1.57 3.7l8 64a4 4 0 0 0 4 3.5h.5a4 4 0 0 0 3.51-4.5ZM140 72a12 12 0 1 1-12-12a12 12 0 0 1 12 12m4 76a12 12 0 1 1 12-12a12 12 0 0 1-12 12",
        text:"AI Diagnosis Report",
        xmlns:"http://www.w3.org/2000/svg" ,
        viewBox:"0 0 256 256",
        path:"aidiagnosis/1"
    },
    
    {
        id:"you",
        dd:"M12.5 11.5h7.489q-.202-3.039-2.326-5.172q-2.124-2.134-5.163-2.317zm-1 8.489V4.012q-3.16.182-5.33 2.483T4 12t2.17 5.505t5.33 2.484m1 0q3.039-.177 5.166-2.314q2.126-2.136 2.323-5.175H12.5zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.506.71t2.858 1.93t1.929 2.855q.71 1.637.71 3.511q0 1.852-.708 3.491t-1.924 2.864t-2.856 1.932t-3.509.707",
        text:"Analytics",
        xmlns:"http://www.w3.org/2000/svg" ,
        viewBox:"0 0 24 24",
        path:"analytics/1"
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

const docInfo = [
    {
        src: four,
        text:"Active Patients Monitored",
        arrSrc: trendUp,
        percentage:"+30.8%",
        amount:354,
        data :{
            weekly: [ { value:88, label: "0-17"}, { value:72, label: "18-24"},{ value:186, label:"25-31"},{ value:102, label:"32-38"},{ value:88, label:"39-45" },{ value:118, label:"39-45" },{ value:40, label:"39-45" },{ value:76, label:"39-45" },{ value:140, label:"39-45" },{ value:116, label:"39-45" }],
            monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" },{ value:177, label:"Infections" },{ value:177, label:"Infections" }],
            yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
           },
        aiAccuracy:{ weekly: [ { value:96, label: "Bone Tumor",fill:"#FC485A"}, { value:124, label: "Cancer",fill:"#34C759"},{ value:141, label:"Infection",fill:"#34C759"},{ value:141, label:"Stroke",fill:"#34C759"},]}
      },
      {
          src: clock,
          text:"Average Scan Analysis Time",
          arrSrc: trendUp,
          percentage:"+8.9%",
          amount:265,
          data :{
            weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
            monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" },{ value:177, label:"Infections" },{ value:177, label:"Infections" }],
            yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
           },
      },
      {
          src: blueCircle,
          text:"Critical Findings Detected",
          arrSrc: trendUp,
          percentage:"+2.9%",
          amount:120,
          data :{
            weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
            monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" },{ value:177, label:"Infections" },{ value:177, label:"Infections" }],
            yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
           },
      },
      {
        src: notePencil,
        text:"Reviewed Cases",
        arrSrc: trendDown,
        percentage:"-9.7%",
        amount:25,
        data :{
            weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
            monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" },{ value:177, label:"Infections" },{ value:177, label:"Infections" }],
            yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
           },
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
     statusText:"text-[#FFFFFF]",
     width:"w-[140px]"
   },
   {
    name: "Modupe Soyinka",
    diagnosis:"Multiple Sclerosis",
    date:"12-02-2025",
    status:"Observation",
    bgColor:"bg-[#00000008]",
    statusColor:"bg-[#fadfd5]",
    statusText:"text-[#E65F2B]",
    width:"w-[140px]"
   },
   {
    name: "Ipigansi Bozimo",
    diagnosis:"Stroke",
    date:"12-02-2025",
    status:"Critical",
    bgColor:"bg-[#00000003]",
    statusColor:"bg-[#fcd2d2]",
    statusText:"text-[#EE201C]",
     width:"w-[140px]"
   },
   {
    name: "Maryam Salisu",
    diagnosis:"Tuberculosis",
    date:"12-02-2025",
    status:"Recovering",
    bgColor:"bg-[#00000008]",
    statusColor:"bg-[#d6f4de]",
    statusText:"text-[#34C759]",
     width:"w-[140px]"

   },
   {
    name: "Fatima Kabiru",
    diagnosis:"Asthma",
    date:"12-02-2025",
    status:"Discharged",
    bgColor:"bg-[#00000003]",
    statusColor:"bg-[#cccccc]",
    statusText:"text-[#FFFFFF]",
     width:"w-[140px]"
   },
   {
    name: "Safiya Maiwada",
    diagnosis:"Lung Cancer",
    date:"12-02-2025",
    status:"Critical",
    bgColor:"bg-[#00000008]",
    statusColor:"bg-[#fcd2d2]",
    statusText:"text-[#EE201C]",
    width:"w-[140px]"
   },
   {
    name: "Musa Kawu",
    diagnosis:"Leukemia",
    date:"12-02-2025",
    status:"Critical",
    bgColor:"bg-[#00000003]",
    statusColor:"bg-[#fcd2d2]",
    statusText:"text-[#EE201C]",
    width:"w-[140px]"
   },
   {
    name: "Rahma Isa",
    diagnosis:"Sepsis",
    date:"12-02-2025",
    status:"Recovering",
    bgColor:"bg-[#00000008]",
    statusColor:"bg-[#d6f4de]",
    statusText:"text-[#34C759]",
    width:"w-[140px]"
   },
   {
    name: "Fatima Kabiru",
    diagnosis:"Colorectal Cancer",
    date:"12-02-2025",
    status:"Observation",
    bgColor:"bg-[#00000003]",
    statusColor:"bg-[#fadfd5]",
    statusText:"text-[#E65F2B]",
   
   },
   {
   id:"#000001",
   name: "Diobu Pakabo",
   diagnosis:"Sepsis",
   date:"12-04-2000",
   treatment:"Antibiotics",
   status:"Observation",
   doctor:"Dr Akintayo",
   number:"+234 814 001 8031",
   bgColor:"bg-[#00000003]",
   statusColor:"bg-[#fadfd5]",
   statusText:"text-[#E65F2B]",
   data :{
    weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" },{ value:177, label:"Infections" },{ value:177, label:"Infections" }],
    yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
   },
   streakProgress: {currentStreak: "7 days" , longestStreak: "15 days", lastMissedDay: "15 days"},
   confidenceScores: [{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"}],
   insight: {one: "Monitor test results to ensure continued progress." , two: "Reinforce the importance of consistent medication use.", three: "Encourage continued medication adherence for better detection accuracy."},
   history:[{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   

   ],
   src:[hourGlass,drop,ruler,scale],
  
   bloodGroup:"A+",
   height:175,
   weight:65,
  
   },
   {
   id:"#000002",
   name: "Hafsat Garba",
   diagnosis:"Malaria",
   date:"04-05-2012",
   treatment:"AntiMalaria",
   status:"Discharged",
   doctor:"Dr Anna",
   number:"+234 914 607 5727",
   bgColor:"bg-[#00000008]",
   statusColor:"bg-[#cccccc]",
   statusText:"text-[#ffffff]",
   data :{
    weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
   },
   streakProgress: {currentStreak: "7 days" , longestStreak: "15 days", lastMissedDay: "15 days"},
   confidenceScores: [{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"}],
   insight: {one: "Monitor test results to ensure continued progress." , two: "Reinforce the importance of consistent medication use.", three: "Encourage continued medication adherence for better detection accuracy."},
   history:[{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   

   ],
   src:[hourGlass,drop,ruler,scale],
   bloodGroup:"O-",
   height:160,
   weight:55
   },
   {
   id:"#000003",
   name: "Rabi Wakili",
   diagnosis:"Typhoid",
   date:"06-08-2001",
   treatment:"Antibiotics",
   status:"Observation",
   doctor:"Dr Adeyemi",
   number:"+234 705 613 7573",
   bgColor:"bg-[#00000003]",
   statusColor:"bg-[#fadfd5]",
   statusText:"text-[#E65F2B]",
   data :{
    weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
   },
   streakProgress: {currentStreak: "7 days" , longestStreak: "15 days", lastMissedDay: "15 days"},
   confidenceScores: [{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"}],
   insight: {one: "Monitor test results to ensure continued progress." , two: "Reinforce the importance of consistent medication use.", three: "Encourage continued medication adherence for better detection accuracy."},
   history:[{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   

   ],
   src:[hourGlass,drop,ruler,scale],
   bloodGroup:"B+",
   height:180,
   weight:70
   },
   {
   id:"#000004",
   name: "Ikaki Pakabo",
   date:"17-02-1999",
   diagnosis:"HIV/AIDS",
   treatment:"Antiretroviral Theraph ",
   status:"Observation",
   doctor:"Dr Okafor",
   number:"+234 817 031 8837",
   bgColor:"bg-[#00000008]",
   statusColor:"bg-[#fadfd5]",
   statusText:"text-[#E65F2B]",
   src:[hourGlass,drop,ruler,scale],
   data :{
    weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
   },
   streakProgress: {currentStreak: "7 days" , longestStreak: "15 days", lastMissedDay: "15 days"},
   confidenceScores: [{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"}],
   insight: {one: "Monitor test results to ensure continued progress." , two: "Reinforce the importance of consistent medication use.", three: "Encourage continued medication adherence for better detection accuracy."},
   history:[{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   

   ],
   bloodGroup:"AB-",
   height:165,
   weight:60
   },
   {
   id:"#000005",
   name: "Ebibere Akani",
   date:"13-10-2003",
   diagnosis:"Asthma",
   treatment:"Inhalers",
   status:"Recovering",
   doctor:"Dr Balogun",
   number:"+234 707 943 8710",
   bgColor:"bg-[#00000003]",
   statusColor:"bg-[#d6f4de]",
   statusText:"text-[#34C759]",
   data :{
    weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
   },
   streakProgress: {currentStreak: "7 days" , longestStreak: "15 days", lastMissedDay: "15 days"},
   confidenceScores: [{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"}],
   insight: {one: "Monitor test results to ensure continued progress." , two: "Reinforce the importance of consistent medication use.", three: "Encourage continued medication adherence for better detection accuracy."},
   history:[{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   

],
   src:[hourGlass,drop,ruler,scale],
   bloodGroup:"A-",
   height:170,
   weight:65
   },
   {
   id:"#000006",
   name: "Bilkisu Jibrin",
   date:"29-03-1948",
   diagnosis:"Bronchitis",
   treatment:"Fluids",
   status:"Recovering",
   doctor:"Dr Nwosu",
   number:"+234 703 172 9197",
   bgColor:"bg-[#00000008]",
   statusColor:"bg-[#d6f4de]",
   statusText:"text-[#34C759]",
   data :{
    weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
   },
   streakProgress: {currentStreak: "7 days" , longestStreak: "15 days", lastMissedDay: "15 days"},
   confidenceScores: [{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"}],
   insight: {one: "Monitor test results to ensure continued progress." , two: "Reinforce the importance of consistent medication use.", three: "Encourage continued medication adherence for better detection accuracy."},
   history:[{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   

   ],
   src:[hourGlass,drop,ruler,scale],
   bloodGroup:"O+",
   height:155,
   weight:50
   },
   {
   id:"#000007",
   name: "Titi Iwalewa",
   date:"15-12-2002",
   diagnosis:"Brain Tumor",
   treatment:"Chemotheraphy",
   status:"Critical",
   doctor:"Dr Aluko",
   number:"+234 901 261 4631",
   bgColor:"bg-[#00000003]",
   statusColor:"bg-[#fcd2d2]",
   statusText:"text-[#EE201C]",
   data :{
    weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
   },
   streakProgress: {currentStreak: "7 days" , longestStreak: "15 days", lastMissedDay: "15 days"},
   confidenceScores: [{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"}],
   insight: {one: "Monitor test results to ensure continued progress." , two: "Reinforce the importance of consistent medication use.", three: "Encourage continued medication adherence for better detection accuracy."},
   history:[{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   

   ],
   src:[hourGlass,drop,ruler,scale],
   bloodGroup:"AB+",
   height:185,
   weight:75
   },
   {
   id:"#000008",
   name: "Idris Yahaya",
   date:"02-11-1997",
   diagnosis:"Stroke",
   treatment:"Rehabilitation",
   status:"Critical",
   doctor:"Dr Kalu",
   number:"+234 910 202 8760",
   bgColor:"bg-[#00000008]",
   statusColor:"bg-[#fcd2d2]",
   statusText:"text-[#EE201C]",
   src:[hourGlass,drop,ruler,scale],
   data :{
    weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
   },
   streakProgress: {currentStreak: "7 days" , longestStreak: "15 days", lastMissedDay: "15 days"},
   confidenceScores: [{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"}],
   insight: {one: "Monitor test results to ensure continued progress." , two: "Reinforce the importance of consistent medication use.", three: "Encourage continued medication adherence for better detection accuracy."},
   history:[{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   

   ],
   
   bloodGroup:"B-",
   height:178,
   weight:72
   },
   {
   id:"#000009",
   name: "Ebizi Inengite",
   date:"04-12-2005",
   diagnosis:"Migraine",
   treatment:"Triptans",
   status:"Recovering",
   doctor:"Dr Hassan",
   number:"+234 803 418 1571",
   bgColor:"bg-[#00000003]",
   statusColor:"bg-[#d6f4de]",
   statusText:"text-[#34C759]",
   data :{
    weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
   },
   streakProgress: {currentStreak: "7 days" , longestStreak: "15 days", lastMissedDay: "15 days"},
   confidenceScores: [{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"}],
   insight: {one: "Monitor test results to ensure continued progress." , two: "Reinforce the importance of consistent medication use.", three: "Encourage continued medication adherence for better detection accuracy."},
   history:[{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   

   ],
   src:[hourGlass,drop,ruler,scale],
   bloodGroup:"O+",
   height:168,
   weight:62
   },
   {
   id:"#000010",
   name: "Kelechi Ibe",
   date:"16-05-1978",
   diagnosis:"Ulcers",
   treatment:"Omeprazole",
   status:"Recovering",
   doctor:"Dr. Ibrahim",
   number:"+234 901 261 4631",
   bgColor:"bg-[#00000008]",
   statusColor:"bg-[#d6f4de]",
   statusText:"text-[#34C759]",
   data :{
    weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
   },
   streakProgress: {currentStreak: "7 days" , longestStreak: "15 days", lastMissedDay: "15 days"},
   confidenceScores: [{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"}],
   insight: {one: "Monitor test results to ensure continued progress." , two: "Reinforce the importance of consistent medication use.", three: "Encourage continued medication adherence for better detection accuracy."},
   history:[{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   

   ],
   src:[hourGlass,drop,ruler,scale],
   bloodGroup:"AB-",
   height:182,
   weight:78
   },
   {
   id:"#000011",
   name: "Adeleke Rae",
   date:"23-02-2005",
   diagnosis:"Diarrhoea",
   treatment:"Tetracycline",
   status:"Recovering",
   doctor:"Dr. Abbey",
   number:"+234 918 019 0931",
   bgColor:"bg-[#00000003]",
   statusColor:"bg-[#d6f4de]",
   statusText:"text-[#34C759]",
   data :{
    weekly: [ { value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    monthly:[{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }],
    yearly: [{ value:125, label: "Pneumonia"}, { value:223, label: "Brain Tumor"},{ value:125, label:"Arthritis"},{ value:77.7, label:"Lung Nodules"},{ value:177, label:"Infections" }]   
   },
   streakProgress: {currentStreak: "7 days" , longestStreak: "15 days", lastMissedDay: "15 days"},
   confidenceScores: [{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"},{date: "Jan 1 ,2025" , diagnosis: "Pneumonia" , rate: "81%"}],
   
   insight: {one: "Monitor test results to ensure continued progress." , two: "Reinforce the importance of consistent medication use.", three: "Encourage continued medication adherence for better detection accuracy."},
   history:[{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },{
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   {
    date:"Dec 05,2024",
    treatment:"Chemotherapy Cycle 2"
   },
   

   ],
   src:[hourGlass,drop,ruler,scale],
   bloodGroup:"A+",
   height:172,
   weight:68
}]

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


const svgContent = {
   lines: [
      {
        d:"m55.28,20l-15.55,-6l-49.58,0",
        stroke:"#FF8E26" 

      }, {
        d:"m80,205l-19.52,8l-79.48,0",
        stroke:"#14CC26"
      } , {
        d:"m180.28,181l19.52,8l62.48,0",
        stroke:"#3371EB"
      }
    ] , 
   text: [
      {
        x:0,
        y:209,
        content:"infections"
      },
      {
        x:225,
        y:185,
        content:"Tutors"
      },
      {
        content:"Fractures",
        x:0,
        y:9
      }
    ],
   pie: [
      {
        d:"M107.28,6.6c0,-3.64 2.96,-6.62 6.6,-6.4c25.15,1.56 49.03,11.95 67.34,29.46c19.91,19.03 31.71,45.01 32.95,72.53c1.24,27.51 -8.18,54.45 -26.3,75.19c-16.66,19.09 -39.51,31.58 -64.42,35.39c-3.6,0.55 -6.82,-2.15 -7.14,-5.78l-1.22,-13.49c-0.33,-3.63 2.36,-6.81 5.95,-7.44c18.05,-3.14 34.55,-12.38 46.68,-26.27c13.59,-15.56 20.66,-35.76 19.73,-56.4c-0.93,-20.64 -9.78,-40.12 -24.71,-54.4c-13.34,-12.75 -30.61,-20.46 -48.86,-21.97c-3.64,-0.3 -6.6,-3.23 -6.6,-6.87l0,-13.55z",
        fill:"#3371EB", 
        stroke:"#3371EB"
      },
      {
        d:"m99.06,6.94c-0.29,-3.63 -3.49,-6.36 -7.1,-5.84c-18.94,2.74 -36.85,10.52 -51.81,22.58c-14.97,12.06 -26.38,27.9 -33.09,45.83c-1.27,3.41 0.71,7.11 4.2,8.18l12.95,3.95c3.49,1.07 7.15,-0.91 8.5,-4.3c5.1,-12.81 13.43,-24.13 24.22,-32.83c10.8,-8.7 23.63,-14.43 37.23,-16.68c3.6,-0.6 6.31,-3.76 6.01,-7.39l-1.11,-13.5z" ,
        fill:"#FF8E26",
        stroke:"#FF8E26"
      },
      {
        d:"m107.28,207.4c0,3.64 -2.96,6.62 -6.6,6.4c-13.59,-0.84 -26.92,-4.27 -39.26,-10.13c-14.34,-6.8 -26.98,-16.7 -37.01,-28.99c-10.04,-12.28 -17.22,-26.65 -21.01,-42.05c-3.28,-13.26 -3.97,-27.01 -2.08,-40.49c0.5,-3.62 4.01,-5.92 7.59,-5.19l13.27,2.7c3.57,0.73 5.85,4.22 5.42,7.84c-1.15,9.59 -0.56,19.32 1.77,28.73c2.85,11.55 8.23,22.33 15.76,31.54c7.52,9.22 17,16.64 27.75,21.74c8.76,4.16 18.18,6.68 27.8,7.48c3.64,0.3 6.6,3.23 6.6,6.87l0,13.55z" , 
        fill:"#14CC26",
        stroke:"#14CC26"
      }
    ]
  }

  


export { anomalyPatient ,navItem , weekInfo , pending , patientInfo , anomaly , docInfo , svgContent }


