import * as React from 'react';
import * as _ from 'lodash';

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    console.log('data',data);
    console.log('average',_.round(_.sum(data)/data.length));
    return(_.round(_.sum(data)/data.length));
}

export default (props) => {
    return (
     <div>
         <Sparklines height={120} width={180} data={props.data}>
             <SparklinesLine color={props.color}/>
             <SparklinesReferenceLine type="avg" />
         </Sparklines>
         <div>{average(props.data)} {props.units}</div>
     </div>
    );
}