import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Path } from '../../constants/path';
import { isAuthenticated } from '../../redux/auth/authSelectors';

interface IProps {
  component: React.ComponentType;
  path?: string;
}

function PrivateRoute({ component: Component, path }: IProps) {
  const isRegistred = useSelector(isAuthenticated);
  path = path || Path.LOGIN;
  return isRegistred ? <Component /> : <Navigate to={path} />;
}

export default PrivateRoute;
