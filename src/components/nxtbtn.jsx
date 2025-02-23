const NextBtn = ({d}) => {
    return(
        <button className={`h-[28px] w-[28px] border border-[#E4E4E4] rounded-md`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 15 15"><path fill="#2e2a2a" fillRule="evenodd" d={d} clipRule="evenodd"></path></svg>
        </button>
    )
}

export default NextBtn