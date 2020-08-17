import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Home = React.lazy(() => import('./pages/home/Home'));
const SearchLetter = React.lazy(() => import('./pages/searchLetter/SearchLetter'));

function App() {
    return (
      <Suspense fallback={<span>Loading</span>}>
          <Header />
        <Switch>
          <Route
                    path="/"
                    component={Home}
          />
          <Route
                    path="/search-letter"
                    component={SearchLetter}
          />
        </Switch>
          <Footer />
      </Suspense>
    );
}
export default withRouter(App);