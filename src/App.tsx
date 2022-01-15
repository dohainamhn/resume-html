import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import { Profile } from "./components/Profile";
import SlideNavigation  from "./components/SlideNavigation";
function App({ t }: any) {  
  const [nav, setNav] = useState(false);
  const onClick = () => {
    setNav(!nav);
  };
  return (
    <div className="App">
      <SlideNavigation nav={nav} t={t}/>
      <Profile onClick={onClick} nav={nav} t={t}/>
    </div>
  );
}

export default withNamespaces()(App);
