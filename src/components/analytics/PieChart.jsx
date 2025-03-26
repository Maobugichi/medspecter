import elli from "../../assets/elli.svg";
import ellip from "../../assets/ellip.svg";
import ellips from "../../assets/ellips.svg";

const PieChart =  () => {
    return(
      <div className=" h-60 relative">
        <img className="absolute right-20 md:right-16" src={elli} alt="" />
        <img className="absolute left-19 md:left-17" src={ellip} alt="" />
        <img className="absolute left-18 md:left-16  bottom-6 md:bottom-7" src={ellips} alt="" />
      </div>
    )
}

export default PieChart