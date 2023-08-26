import { Route } from 'react-router-dom';

export default function PublickRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  <Route {...routeProps}>{children} </Route>;
}
