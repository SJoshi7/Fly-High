import React from 'react';

const DetailTable = (props) =>{
    return(
      <table>
        <thead>
          <tr>
            <th>Airline</th>
            <th>Departure</th>
            <th><button onClick={()=>props.sortBy('Duration')}>Duration</button></th>
            <th>Arrival</th>
            <th><button onClick={()=>props.sortBy('Price')}>Price</button></th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map(row=>(
              <tr>
                <td>{row.Airline}</td>
                <td>{row.From}</td>
                <td>{row.Duration}</td>
                <td>{row.To}</td>
                <td>{row.Price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
}

export default DetailTable;
