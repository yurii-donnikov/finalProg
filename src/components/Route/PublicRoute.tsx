import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../../redux/auth/authSelectors';
import { Path } from '../../constants/path';

interface IProps {
  component: React.ComponentType;
}

function PublicRoute({ component: Component }: IProps) {
  const isRegistred = useSelector(isAuthenticated);

  return isRegistred ? <Navigate replace to={Path.USERS} /> : <Component />;
}

export default PublicRoute;
