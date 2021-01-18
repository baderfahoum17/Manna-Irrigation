import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import "./FarmList.css";
import Farm from "./Farm";
import loadingGif from "../assets/loadingGif.gif";
function FarmList(props) {
  const [farmsList, setFarmsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiToken = props.location.state || null;
  const URL = "https://qa.manna-irrigation.com:8443/omer/api/v2/farms";

  useEffect(() => {
    if (!apiToken) {
      props.history.push("/");
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 500);
      fetchFarms(apiToken.apiToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchFarms = async (token) => {
    try {
      const myHeaders = new Headers({
        "Content-Type": "application/json",
        "X-User-Api-Token": token,
      });
      let response = await fetch(URL, {
        method: "GET",
        headers: myHeaders,
      });
      if (response.status === 200) {
        let data = await response.json();
        setFarmsList(data);
      }
    } catch (e) {
      console.log(e);
      console.log("error at FarmList while attempting to fetch");
    }
  };

  return (
    <div className="farmList">
      <Navbar />
      <h2>List of Farms</h2>
      {!loading && farmsList.length ? (
        <div className="farmList-list">
          {farmsList.map((farm, i) => (
            <div>
              <Farm
                farmid={farm.id}
                key={farm.id}
                token={apiToken.apiToken}
                name={farm.name}
                area={farm.area}
                creationDate={farm.creation_date}
              />
              <br />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <span className="loading"> Fetching...</span>
          <img className="loadingGif" src={loadingGif} alt="loading..." />
        </div>
      )}
    </div>
  );
}

export default FarmList;
