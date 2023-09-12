import Table from 'react-bootstrap/Table';
import './App.css';
import { useState, useEffect } from 'react';
const App = () => {
  const [data, setData] = useState();
  const apiUrl = "https://api.coincap.io/v2/assets"
  useEffect(() => {
     fetch(apiUrl)
      .then(response => response.json())
      .then(result => setData(result.data))
  }, []);
  data && console.log(data)
  return (
    <div>
     <Table className="mainTable">
        <thead>
          <tr>
            {/* th is header--table heading*/}
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>MarketCap</th>
          </tr>
        </thead >
        <tbody>
          {data && data.map((item)=>(
          <tr>
            <td>{item.rank}</td>
            <td>{item.name}</td>
            <td>${item.priceUsd}</td>
            <td>{item.marketCapUsd}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
};

export default App;


