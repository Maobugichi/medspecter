const Streak = ({title,days}) => {
    return(
        <p className="text-[12px] flex w-[80%] justify-between mx-auto ">{title}: <span>{days}</span></p>
    )
}

export default Streak