import pie from "../../assets/pie.svg";

const PieChart =  () => {
    return(
      <div className=" h-60 relative w-full grid place-items-center md:w-[70%] md:mx-auto">
        <img src={pie} alt="pie chart" />
       
      </div>
    )
}

export default PieChart