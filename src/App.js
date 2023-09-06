import React from 'react'
import Table from 'react-bootstrap/Table';

import './App.css';
// import {SwimWearData} from '../Data';
// import Cart from './Cart';

const App = () => {
  return (
    <div>

    <Table className='mainTable' >
      <thead>
        <tr>
          {/* th is header--table heading*/}
          <th># RANK</th>
          <th> Name</th>
          <th>Price</th>
          <th>Exchange/USD</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>6</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>9</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>10</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>@fat</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  );
}

export default App;



 