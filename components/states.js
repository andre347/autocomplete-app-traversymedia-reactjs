import { useState } from "react";
import Card from "./card";

const states = () => {
  const [findState, setfindState] = useState([]);
  const [show, setShow] = useState(true);

  const searchStates = async searchText => {
    console.log(searchText);
    const res = await fetch("../static/states.json");
    const states = await res.json();
    // Get matches to current textinput
    let matches = states.filter(state => {
      // matches start of sentence based on the input, also contains the global and the case insensitive flags
      const regex = new RegExp(`^${searchText}`, "gi");
      // return array that matches those
      return state.name.match(regex) || state.abbr.match(regex);
    });
    if (searchText.length === 0) {
      matches = [];
    }
    setShow(true);
    setfindState(matches);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 m-auto">
          <h3 className="text-center mb-3">
            <i className="fas fa-flag-usa" /> State Capital Lookup
          </h3>
          <div className="form-group">
            <input
              type="text"
              id="search"
              placeholder="Enter state name or abbreviation"
              className="form-control form-control-lg"
              onChange={e => {
                searchStates(e.target.value);
              }}
            />
          </div>
          {show ? findState.map((match, i) => <Card result={match} />) : <p>Bye</p>}
        </div>
      </div>
    </div>
  );
};

export default states;
