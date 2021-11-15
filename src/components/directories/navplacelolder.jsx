import React from "react";
import "./navplaceholder.css";

function NavBarPlaceholder() {
  return (
    <div class="nav">
      <div>
        <ul>
          <li>
            <h1>PLACEHOLDER</h1>
            <button id="a">LINK</button>
            <button id="b">LINK</button>
            <button id="c">LINK</button>
            <button id="d">LINK</button>
          </li>
        </ul>
      </div>

      {/* <button id="a">LINK</button>
      <button id="b">LINK</button>
      <button id="c">LINK</button>
      <button id="d">LINK</button> */}

      <div className="search">
        <input type="text" name="search" placeholder="search" />
      </div>
      <div className="buttondiv">
        <button>SEARCH</button>
        <button>SIGN IN</button>
      </div>
    </div>
  );
}

export default NavBarPlaceholder;
