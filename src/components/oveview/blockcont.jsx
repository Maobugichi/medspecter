import { pending } from "../../actions";
import Block from "./../Blocks";

const Blockcont = ({onClick}) => {
    const blockItems = pending.map(item => (
        <Block
         d={item.d}
         viewBox={item.viewBox}
         fill={item.fill}
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