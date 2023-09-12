import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
const Test = () => {
//we use state to hold data from api so we can use map
    const [data,setData] = useState()
//call api inside use effect
useEffect(()=>{

    //get 3 lines below from https://docs.coincap.io/#f8869879-171f-4240-adfd-dd2947506adc
    //top JavaScriptFetch-> RESTfulAPI -> Asset ->assetID -> example Request copy code
    fetch("http://api.coincap.io/v2/assets")
    .then(response => response.json())//get data convert to json
    .then(result => setData(result.data))//next hold data and covert to something else
},[])


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

        </tbody>
        </Table>
    </div>
  )
}

export default Test
//get link from api