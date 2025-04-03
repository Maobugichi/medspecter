import OverviewBlocks from "../OverviewBlocks"
import { docInfo } from "../../actions"
const AnalyticsBlock = ({docinfo}) => {
   const blocks = docinfo.map((info,i) => {
    return(
        <OverviewBlocks
         src={info.src}
         amount={info.amount}
         percentage={info.percentage}
         text={info.text}
         arrSrc={info.arrSrc}
         width="w-[48%] lg:w-[23%]"
         transition={{
            duration: 1.5,
            delay: (i * 0.5),
            type:"spring",
            bounce: 0.5 ,
            stiffness: 50
          }}
       />
    )
   })


   return(
     <div className="w-full flex  flex-wrap h-auto md:min-h-[25vh] min-h-[35vh] xxSmall:min-h-[35vh] limitedSize:min-h-[10%] justify-between custom:bg-blue-400">
        {blocks}
     </div>
   )
}

export default AnalyticsBlock