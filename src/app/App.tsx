import { FunctionComponent, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import Layout from './components/Layout/Layout';

const BurgerBuilder = lazy(() => import('./containers/BurgerBuilder/BurgerBuilder'));

const App: FunctionComponent = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Switch>
          {/*<Route path="/home" component={Home} />*/}
          <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default App;
