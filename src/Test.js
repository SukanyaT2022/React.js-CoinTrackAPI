import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import './Test.css';
import { FaDove,FaBitcoin } from 'react-icons/fa';
// import from react boostrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Test = () => {
//we use state to hold data from api so we can use map
    const [data,setData] = useState()
//call api inside use effect
useEffect(()=>{
  const apiUrl = "https://api.coincap.io/v2/assets";
    //get 3 lines below from https://docs.coincap.io/#f8869879-171f-4240-adfd-dd2947506adc
    //top JavaScriptFetch-> RESTfulAPI -> Asset ->assetID -> example Request copy code
    fetch(apiUrl)
    .then(response => response.json())//get data convert to json
    .then(result => setData(result.data.slice(0,20)))//next hold data and covert to something else
//slice line 14 use to slide only rang 1 to 20 / not show all
  },[])
  return (
    <div>
      <div className='topNav'><FaDove className='birdIcon' />Buy,sell,swap your favourite assets.</div>


      {/* //start navbar react boostarp */}
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Coin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Exchange</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Swap</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

{/* end navbar boostrap */}

      <div className='belowNav'><FaBitcoin className='birdLogo'/><h3>CyptoTrack</h3></div>
      <div className='bigBlueBoxUnder'></div>
     <Table className="mainTable">
      <thead>
          <tr>
            {/* th is header--table heading*/}
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>MarketCap</th>
            <th>Change(24Hr)</th>
      
          </tr>
        </thead >
        <tbody>
          {/* Conditional Rendring */}
          {data && data.map((val)=>{
            const percent = parseFloat(val.changePercent24Hr).toFixed(2);
            return(
              <tr>
                <td>{val.rank}</td>
                <td>{val.name}</td>
                <td>{parseFloat(val.priceUsd).toFixed(2)}</td>
                {/* this parseFloat .toFixed(2) help with to show price at 2 decimal */}
                {/* <td>{val.priceUsd.toFixed(2)}</td> */}      
                <td>{parseFloat(val.marketCapUsd).toFixed(2)}</td> 
                <td className={percent>0?'success':'danger'}>{percent}%</td> 
              </tr>
            )})}
        </tbody>
        </Table>
    </div>
  )
}

export default Test
