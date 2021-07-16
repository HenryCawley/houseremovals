import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/common/Header/Header.jsx';
import Footer from './components/common/Footer/Footer.jsx';

import Home from './components/routes/Home/Home.jsx';
import AboutUs from './components/routes/AboutUs/AboutUs.jsx';
import HouseClearanceService from './components/routes/HouseClearanceServices/HouseClearanceServices.jsx';
import ProbateValuations from './components/routes/ProbateValuations/ProbateValuations.jsx';
import AreasCovered from './components/routes/AreasCovered/AreasCovered.jsx';
import OurPrices from './components/routes/OurPrices/OurPrices.jsx';
import CustomerReviews from './components/routes/CustomerReviews/CustomerReviews.jsx';
import ContactUs from './components/routes/ContactUs/ContactUs.jsx';

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About-Us' exact component={AboutUs} />
          <Route path='/House-Clearance-Service' exact component={HouseClearanceService} />
          <Route path='/Probate-Valuations' exact component={ProbateValuations} />
          <Route path='/Areas-Covered' exact component={AreasCovered} />
          <Route path='/Our-Prices' exact component={OurPrices} />
          <Route path='/Customer-Reviews' exact component={CustomerReviews} />
          <Route path='/Contact-Us' exact component={ContactUs} />
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
