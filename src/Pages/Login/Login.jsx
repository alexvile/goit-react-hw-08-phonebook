import { useSelector } from 'react-redux';

import { LoginForm } from 'components/LoginForm/LoginForm';
import { errorMessageAuth } from 'redux/authSlice';
import { Error } from 'components/Error/Error';

const Login = () => {
  const error = useSelector(errorMessageAuth);
  return <>{error ? <Error>{error}</Error> : <LoginForm />}</>;
};

export default Login;
