import OverviewBlocks from "../OverviewBlocks"
import { weekInfo } from "../../actions"

const WeekInfo = ({variants}) => {
    const info = weekInfo.map((info , i) => (
        <OverviewBlocks
         key={info.src}
         src={info.src}
         amount={info.amount}
         percentage={info.percentage}
         text={info.text}
         arrSrc={info.arrSrc}
         width="lg:w-[33%] w-[45%]"
         transition={{
            duration: 1.5,
            delay: (i * 0.5),
            type:"spring",
            bounce: 0.5 ,
           
            stiffness: 50
          }}
          variants={variants}
      
        />
    ))

    return(
        <div className=" flex w-full gap-2 h-[30vh] lg:h-[25%]  xl:h-[25vh] 3xl:h-[15vh]  flex-wrap lg:flex-nowrap xl:justify-between">
            {info}
        </div>
    )
}

export default WeekInfo