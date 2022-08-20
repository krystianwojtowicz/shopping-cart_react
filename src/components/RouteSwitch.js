// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Shop from "./Shop";

// const RouteSwitch = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/shopping-cart_react" element={<Shop />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default RouteSwitch;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Shop from "./Shop";

function RouteSwitch() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/shopping-cart_react" element={<Shop />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default RouteSwitch;
