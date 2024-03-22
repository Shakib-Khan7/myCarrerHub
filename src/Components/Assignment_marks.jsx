import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, FunnelChart, Funnel, LabelList } from 'recharts';

const Assignment_marks = () => {
    const data = [
        {
          "value": 50,
          "name": "assignment1",
          "fill": "#8884d8"
        },
        {
          "value": 60,
          "name": "点击",
          "fill": "#83a6ed"
        },
        {
          "value": 60,
          "name": "访问",
          "fill": "#8dd1e1"
        },
        {
          "value": 30,
          "name": "咨询",
          "fill": "#82ca9d"
        },
        {
          "value": 60,
          "name": "订单",
          "fill": "#a4de6c"
        }
      ]
      
                                  
      
    return (
        <div className='max-h-full'>
           <center>
           <FunnelChart width={350} height={250}>
        <><Tooltip /><Funnel
              dataKey="value"
              data={data}
              isAnimationActive
          >
              <LabelList position="down" fill="#000" stroke="none" dataKey="name" />
          </Funnel></>
      </FunnelChart>
           </center>
        </div>
    );
};

export default Assignment_marks;