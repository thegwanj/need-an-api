import './App.css';
import './Stylesheet.css';
import {useEffect, useState} from "react";
import Card from './components/Card';

function App() {
  const [apis, setApis] = useState([]);
  const [likes, setLikes] = useState([]);
  const [apiId, setApiId] = useState("");
  const [limit, setLimit] = useState(6);
  const [filter, setFilter] = useState("best");

  //On page load, will fetch the 6 top APIs in the Best category
  useEffect(() => {
    fetchSortedApi(6, 'best');
  }, []);

  //Fetching just one API based off of its ID
  const fetchOneApi = async () => {
    if (!apiId) return; // Prevent empty requests
    let response = await fetch(`https://www.freepublicapis.com/api/apis/${apiId}`);
    let data = await response.json();
    setApis([data]);
  };

  //Fetching just one API based off of a random number
  const fetchRandomApi = async () => {
    const randomId = Math.floor(Math.random() * 423) + 1; // Generate random ID (1-423)
    let response = await fetch(`https://www.freepublicapis.com/api/apis/${randomId}`);
    let data = await response.json();
    setApis([data]);
  };

  //Fetching multiple APIs based off limit and filter
  const fetchSortedApi = async () => {
    let response = await fetch(`https://www.freepublicapis.com/api/apis?limit=${limit}&sort=${filter}`);
    let data = await response.json();
    setApis(data);
  };

  return (
    <div className="App">
      <header>
        <h1>I Need An API!</h1>
        <hr></hr>
      </header>

      <h2>Liked List</h2>
      {likes.length > 0 ? <div className="likedList"> {likes.map(api => <Card api={api} setLikes={setLikes} likedList={likes}/>)} </div>: <h3>- No liked items -</h3>}

      <hr></hr>

      <div className="controls">
        <button className="fetchButton" onClick={fetchRandomApi}>Get Random API</button>
        
        <div className="searchById">
          <input 
            type="number" 
            placeholder="Enter API ID" 
            value={apiId} 
            onChange={(e) => setApiId(e.target.value)} 
          />
          <button className="fetchButton" onClick={fetchOneApi}>Search by ID</button>
        </div>

        <div className="sortOptions">
          <input 
            type="number" 
            placeholder="Limit (max 12)" 
            value={limit} 
            min="1" 
            max="12"
            onChange={(e) => setLimit(Math.min(12, Math.max(1, parseInt(e.target.value) || 1)))} 
          />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="best">Best</option>
            <option value="new">New</option>
            <option value="fast">Fast</option>
            <option value="popular">Popular</option>
            <option value="noerror">No Error</option>
            <option value="reliable">Reliable</option>
            <option value="all">All</option>
          </select>
          <button className="fetchButton" onClick={fetchSortedApi}>Filter APIs</button>
        </div>
      </div>
      
      <div className="cardContainer">
        {apis.map(api => <Card api={api} setLikes={setLikes} likedList={likes}/>)}
      </div>
    </div>
  );
}

export default App;
