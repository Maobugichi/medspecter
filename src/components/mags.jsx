import magplus from "../assets/magplus.svg";
import magmin from "../assets/magmin.svg";
import MagImg from "./magimg";
const Mags = () => {
    return(
        <div>
            <button className="bg-[#FFFFFF66]">
                <MagImg
                 src={magplus}
                 alt="magnifying glass with plus sign"
                />
            </button>
            <button>
                <MagImg
                  src={magmin}
                  alt="magnifying glass with minus sign"
                />
            </button>
        </div>
    )
}

export default Mags