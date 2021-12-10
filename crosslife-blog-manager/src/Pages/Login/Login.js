import React from 'react';
import styles from './Login.module.css';
import { AuthContext } from '../../Hooks/useAuth';
import useForm from '../../Hooks/useForm';
import ErrorSecondary from '../../Helper/Error/ErrorSecondary';
import Input from '../../Components/Input/Input';
import ButtonSecondary from '../../Components/Button/ButtonSecondary';
import Logo from '../../Components/Logo/Logo';

const Login = () => {
  const username = useForm();
  const password = useForm();
  const {signIn, loading, error, autoLogin} = React.useContext(AuthContext);

  React.useEffect(()=>{autoLogin()}, [autoLogin])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(username.validate() && password.validate()){
      signIn(username.value, password.value);
    }
  }

  return (
    <div className={styles.wrapper}>
      <Logo/>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" id="username" type="text" {...username}/>
        <Input label="Senha" id="password" type="password" {...password}/>
        {
          loading ?
          <ButtonSecondary disabled>Carregando...</ButtonSecondary> :
          <ButtonSecondary>Entrar</ButtonSecondary>
        }
      </form>
      <ErrorSecondary error={error} />
    </div>
  )
}

export default Login
