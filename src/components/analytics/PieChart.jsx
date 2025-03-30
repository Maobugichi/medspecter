import elli from "../../assets/elli.svg";
import ellip from "../../assets/ellip.svg";
import ellips from "../../assets/ellips.svg";

const PieChart =  () => {
    return(
      <div className=" h-60 relative w-full md:w-[70%] md:mx-auto">
        <img className="absolute right-20 md:right-35 lg:right-16 xtraSize:right-13 xxSmall:right-17 xxSmall:bottom-7" src={elli} alt="blue ellips" />
        <img className="absolute left-20 md:left-38 lg:left-17 smallSize:left-16" src={ellip} alt=" orange ellipses" />
        <img className="absolute left-19 md:left-37  lg:left-16 bottom-6 lg:bottom-7 xxSmall:bottom-7 smallSize:left-16" src={ellips} alt="green ellipses" />
      </div>
    )
}

export default PieChart