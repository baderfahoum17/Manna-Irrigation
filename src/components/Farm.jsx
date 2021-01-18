/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import "./Farm.css";

function Farm(props) {
  const [toggle, setToggle] = useState(false);
  const [fields, setFields] = useState([]);

  const URL = `https://qa.manna-irrigation.com:8443/omer/api/v2/fields?farm_id=${props.farmid}`;
  const fetchFields = async () => {
    try {
      const myHeaders = new Headers({
        "Content-Type": "application/json",
        "X-User-Api-Token": props.token,
      });
      let response = await fetch(URL, {
        method: "GET",
        headers: myHeaders,
      });

      if (response.status === 200) {
        let data = await response.json();
        setFields(data);
      }
    } catch (e) {
      console.log("error with fetching phase at Farm");
    }
  };

  useEffect(() => {
    fetchFields(props.token);
  }, []);

  return (
    <div>
      <div className="farmBox">
        <button
          className="accordion-btn"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {props.name}
          <span className="accent"> # Of Fields: {fields.length}</span>
        </button>
        <div className={toggle ? `accordionContent show` : `accordionContent`}>
          {fields.map((field) => (
            <ul className="list">
              <li>{field.name}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Farm;
