import OverviewBlocks from "../OverviewBlocks"
import { docInfo } from "../../actions"
const AnalyticsBlock = ({docinfo}) => {
   const blocks = docinfo.map(info => {
    return(
        <OverviewBlocks
         src={info.src}
         amount={info.amount}
         percentage={info.percentage}
         text={info.text}
         arrSrc={info.arrSrc}
         width="w-[48%] lg:w-[23%]"
       />
    )
   })


   return(
     <div className="w-full flex  flex-wrap h-auto md:min-h-[25vh] min-h-[35vh] xxSmall:min-h-[35vh] limitedSize:min-h-[10%] justify-between smallSize:bg-blue-400">
        {blocks}
     </div>
   )
}

export default AnalyticsBlock