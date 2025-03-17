import Progress from "./Progress"

const History = ({date,treatment}) => {
    return(
        <div className="flex h-[50px]">
            <Progress/>
            <p className="flex flex-col h-full  text-[14px]">
                <span className="text-[12px]">{date}</span>
                {treatment}
            </p>
        </div>
    )
}

export default History