import { anomalyPatient } from "../../actions";
import AnomalyPatients from "./anomalypatients";
import { motion } from "motion/react";

const AnomalyTable = ({isShow , variants}) => {
    const transition = {
        duration: 0.5,
        
        ease: [0, 0.71, 0.2, 1.01],
    }
    
    const anomaly = anomalyPatient.slice(0,7).map(item => (
        <AnomalyPatients
         key={item.id}
         id={item.id}
         name={item.name}
         d={item.d}
         content={item.content}
         variants={variants}
        />
    ))

    const anomalyCont = anomalyPatient.slice(7).map(item => (
        <AnomalyPatients
         key={item.id}
         id={item.id}
         name={item.name}
         d={item.d}
         content={item.content}
         variants={variants}
        />
    ))
    return(
        <motion.div 
        initial={{height:0}}
        animate={{height : isShow ? 400 : 250}}
        transition={transition}
        className="h-auto  grid gap-1">
            {anomaly}
            {isShow && anomalyCont}
        </motion.div>
    )
}

export default AnomalyTable