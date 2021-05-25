import "./App.css";
import { Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignup from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignup} />
      </switch>
    </div>
  );
}

export default App;
