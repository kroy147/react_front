import React from 'react';

const Navbar = ({ onClickHandler }) => {
   return (
      <div>

         <div class="sidenav" style={{ marginLeft: "20px" }}>
            <div style={{ marginLeft: "25px" }}> <h5>Genres</h5> </div>
            <div style={{ marginLeft: "-20px" }}>
               <ul>
                  <li onClick={() => onClickHandler(1)}><a href="" className="a-tag" style={{ padding: "1px", marginLeft: "16px" }}>Crime</a></li>
                  <li onClick={() => onClickHandler(2)}><a href="" className="a-tag" style={{ padding: "1px", marginLeft: "16px" }}>Horror</a></li>
                  <li onClick={() => onClickHandler(3)}><a href="" className="a-tag" style={{ padding: "1px", marginLeft: "16px" }}>Sci-Fi</a></li>
                  <li onClick={() => onClickHandler(4)}><a href="" className="a-tag" style={{ padding: "1px", marginLeft: "16px" }}>Comedy</a></li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
