import './App.css';
import {useState} from "react"
import Coviddisplay from './Coviddisplay';


function App() {
 const [data, setData] = useState([])
 
  function covidapi(){
    fetch('https://api.rootnet.in/covid19-in/stats/latest')
    .then(response=>{
      return response.json();
    }).then (data =>{
      setData(data.data.regional)
      console.log(data.data.regional)
    })
  }
  covidapi()
  return (
    <div className="App">
      {
        // data.map(covidcard=>{
        //   return(
        //     <h1>{covidcard.loc}</h1>
        //   )
        // })
        data.map(covidcard=>{
          return(
            <Coviddisplay  stateName={covidcard.loc} Deaths={covidcard.deaths}  />
          )
        })
      }
     
    </div>
  );
}

export default App;
