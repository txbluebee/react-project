import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine  } from 'react-sparklines';


function avaerage(data){
    return _.round(_.sum(data)/data.length);
}


class Chart extends React.Component{

    render(){
        return (
            <div>
                <Sparklines height={120} width={180} data={this.props.data}>
                    <SparklinesLine color={this.props.color} />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div>{avaerage(this.props.data)} {this.props.unit}</div>
            </div>
        );
    }
}

export default Chart;