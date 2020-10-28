import React, {useState, ueEffect} from 'react';
import Typed from 'react-typed';
import './App.css';

function App() {

  const [affirmations, setAffirmations] = useState('')

  const affirmationStyles = {
    fontSize: '5vh',
  }
  
// The url and APIKey are correct
  const fetchResults = (e) => {
    const url = 'https://quotes.rest/qod/inspire'
    const APIKey = 'Cm_985948'

    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-TheySaidSo-Api-Secret': APIKey,
      },
    
    })
    .then((data) => data.json())
    .then(data => setAffirmations(data.contents.quotes[0].quote))
  }
 
    useEffect(() => {
      fetchResults()
    }, []);


  

  return (
    <div className="App">
      <br>
      </br>
       <Typed
          style={affirmationStyles}
          strings{['Good Morning!!', 'Are you inspired?']}
          typeSpeed={100}
          />
          <br>
          </br>
          <br>
          </br>
    
        <h1 style={{
        fontSize: '3vh', 
        padding: '10%', 
        backgroundColor: 'rgba(25, 25, 25, 0.7)', 
        width: '75vw, 
        marginLeft: '2%',
        color: 'white',
        fontFamily: 'Quicksand, sans-serif',
        }} >{affirmations}</h1>
        
    </div>
  );
}


