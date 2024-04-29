import React, { useState }  from 'react'
import { AnimateSharedLayout } from 'framer-motion'

const Card = (props) => {

  const [expanded, setExpanded] = useState(false)

  return (
    <AnimateSharedLayout>
      {
        expanded? (
          'Expanded'//<ExpandedCard/>
        ):
        <CompactCard param = {props} set/>
      }
    </AnimateSharedLayout>
  )
}

//CompactCard
function CompactCard ({param}){
  const Png = param.png;
  return (
    <div className="CompactCard">
      <div className="radialBar">
        Chart
      </div>
      <div className="detail">
        <Png/>
        <span>${param.value}</span>
        <span>Últimas 24 horas</span>
      </div>
    </div>

  )
}



export default Card