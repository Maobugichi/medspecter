import { useContext } from "react";
import { pending } from "../../actions";
import Block from "./../Blocks";
import { ShowContext } from "../ContextProvider";

const Blockcont = ({onClick}) => {
  const { theme } = useContext(ShowContext)
    const blockItems = pending.map(item => (
        <Block
         d={item.d}
         viewBox={item.viewBox}
         fill={!theme ? "white" : item.fill }
         text={item.text}
         onClick={item.text == "filter" ? onClick : null}
        />
    ))
    return(
       <div className="flex gap-5 ">
         {blockItems}
       </div>
    )
}

export default Blockcont