import NextBtn from "./nxtbtn"

const PageCount = ({count}) => {
    return(
        <div className="flex text-[14px] text-[#8D8D8D] items-center">
            <p>100,000</p>
            <div className="flex">
               <NextBtn
                 d="M8.818 4.182a.45.45 0 0 1 0 .636L6.136 7.5l2.682 2.682a.45.45 0 1 1-.636.636l-3-3a.45.45 0 0 1 0-.636l3-3a.45.45 0 0 1 .636 0"
                />
                 <div>
                    {count}
                </div>
                <NextBtn
                 d="M6.182 4.182a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1 0 .636l-3 3a.45.45 0 1 1-.636-.636L8.864 7.5L6.182 4.818a.45.45 0 0 1 0-.636"
                />
            </div>
           <span>of 100 pages</span>
        </div>
    )
}

export default PageCount