import Button from "../Button"
import DetailsBox from "../detailsbox"
const InfoFlex = ({warning,streak,scores, setIsShow,aiDiag}) => {
    return(
        <div className="xl:w-[37%]  grid gap-5 md:gap-10 md:w-full w-[95%]   mx-auto limitedSize:flex limitedSize:flex-col limitedSize:gap-13">
                <DetailsBox 
                 className="w-full h-[162px]"
                 info="Streak Progress"
                 headStyle="h-[29px] mt-5 text-[14px]"
                 img={warning}
                >
                    <div className="h-auto  grid gap-3">
                        {streak}
                    </div>
                </DetailsBox>

                <DetailsBox 
                info="Confidence Scores"
                className="h-auto min-h-[230px] w-full grid "
                headStyle="h-[29px] mt-5 text-[14px]"
                >
                    <div className="grid place-items-center gap-2 h-auto min-h-[150px] pb-3 transition-all ease-in">
                        {scores}
                        <Button
                         content="View Full History"
                         className="w-[133px] h-[32px] bg-[#1e40af] rounded-lg text-[12px] text-white"
                         setIsShow={setIsShow}
                        />
                    </div>
                </DetailsBox>
                <DetailsBox 
                info="AI Insights:Suggested Steps"
                svg={{d:"M190.37 170.62A86.27 86.27 0 0 0 222 102c-1-44.68-36.76-81.51-81.34-83.86A86 86 0 0 0 50 102.51l-22.69 43.6c-.07.13-.13.26-.19.4a14 14 0 0 0 6.61 18l.18.09l24.08 11V208a14 14 0 0 0 14 14h48a6 6 0 0 0 0-12H72a2 2 0 0 1-2-2v-36.19a6 6 0 0 0-3.5-5.46L39 153.78a2 2 0 0 1-.93-2.4l23.21-44.61A6 6 0 0 0 62 104a74.05 74.05 0 0 1 60-72.68v19.52a22 22 0 1 0 12 0V30.05c2-.05 4-.05 6 .06A74.29 74.29 0 0 1 206.63 82H184a6 6 0 0 0-4.61 2.16l-26.45 31.74a22.06 22.06 0 1 0 9.21 7.69L186.81 94h22.5a72 72 0 0 1 .67 8.26a74.24 74.24 0 0 1-29.58 60.94a6 6 0 0 0-2.35 5.54l8 64A6 6 0 0 0 192 238a6 6 0 0 0 .75-.05a6 6 0 0 0 5.21-6.7ZM138 72a10 10 0 1 1-10-10a10 10 0 0 1 10 10m6 74a10 10 0 1 1 10-10a10 10 0 0 1-10 10",fill:"#2e2a2a"}}
                className="h-[230px] w-full grid"
                headStyle="h-[29px] mt-5 text-[14px]"
                >
                 <div className="text-[12px] grid gap-4 h-[95%]">
                   {aiDiag}    
                </div>   
                </DetailsBox>
            </div>
    )
}

export default InfoFlex