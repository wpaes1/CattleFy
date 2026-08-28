import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';

// third-party
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import NotificationColored from 'sections/components/advance/notification/ColoredNotification';

// third-party
import { useForm } from 'react-hook-form';

// project-imports
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';
import { getResolvedTheme, setResolvedTheme } from 'components/setResolvedTheme';

//utils
import { fetcherPost, fetcher } from '../../utils/axios';
import { useAuth } from "../../contexts/AuthContext"; // Importa o hook do contexto
import { emailSchema, passwordSchema } from 'utils/validationSchema';

// assets
import LightLogo from 'assets/images/logo-white.png';
import DarkLogo from 'assets/images/logo-dark.png';

// ==============================|| AUTH LOGIN FORM ||============================== //

export default function AuthLoginForm({ className, link, resetLink }) {
  const [showPassword, setShowPassword] = useState(false);
  const { themeDirection, mode } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const logo = resolvedTheme === ThemeMode.DARK ? LightLogo : window.location.pathname.includes('v3') ? LightLogo : DarkLogo;

  const {
    register,   
    reset,
    formState: { errors }
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [show, setShow] = useState({
    primary: true,
    secondary: true,
    success: true,
    warning: true,
    danger: true,
    info: true,
    dark: true
  });

  // Acessa a função login do contexto e o mecanismo de navegação
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = event.currentTarget.elements;

    /*** TOAST  */
    const handleClose = (toastType) => {
      setShow((prevShow) => ({
        ...prevShow,
        [toastType]: false
      }));
    };

    handleClose('error');
    
    try {

      await login(data.email.value, data.password.value);
      // Redireciona para a página protegida após o sucesso
      navigate("/dashboard/default"); 



    } catch (error) { 

      if(error.response)
      toast.error(error.response.data.message, {
        rtl: themeDirection === 'rtl' ? true : false,
        icon: false,
        position: themeDirection === 'rtl' ? 'top-left' : 'top-right',
        theme: 'colored'
      });
      else
      toast.error(error.message, {
        rtl: themeDirection === 'rtl' ? true : false,
        icon: false,
        position: themeDirection === 'rtl' ? 'top-left' : 'top-right',
        theme: 'colored'
      });      
    }


  
  }//end handleSubmit
 

  return (
    <MainCard className="mb-0">
      <ToastContainer />
      <div className="text-center">
        <a>
          <Image src={logo} alt="img" /> 
        </a>
      </div>
      <Form onSubmit={handleSubmit}>
        <h4 className={`text-center f-w-500 mt-4 mb-3 ${className}`}>Login</h4>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Email Address"
            {...register('email', emailSchema)}
            isInvalid={!!errors.email}
            className={className && 'bg-transparent border-white text-white border-opacity-25 '}
          />
          <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <InputGroup>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password', passwordSchema)}
              isInvalid={!!errors.password}
              className={className && 'bg-transparent border-white text-white border-opacity-25 '}
            />
            <Button onClick={togglePasswordVisibility}>
              {showPassword ? <i className="ti ti-eye" /> : <i className="ti ti-eye-off" />}
            </Button>
            <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Stack direction="horizontal" className="mt-1 justify-content-between align-items-center">
          <Form.Group controlId="customCheckc1">
            <Form.Check
              type="checkbox"
              label="Remember me?"
              defaultChecked
              className={`input-primary ${className ? className : 'text-muted'} `}
            />
          </Form.Group>
          <Link to={resetLink ?? '/'} className={`text-secondary f-w-400 mb-0  ${className}`}>
            Forgot Password?
          </Link>
        </Stack>
        <div className="text-center mt-4">
          <Button type="submit" className="shadow px-sm-4">
            Login
          </Button>
        </div>
        <Stack direction="horizontal" className="justify-content-between align-items-end mt-4">
          <h6 className={`f-w-500 mb-0 ${className}`}>Don't have an Account?</h6>
          <Link to={link} className="link-primary">
            Create Account
          </Link>
        </Stack>
      </Form>
    </MainCard>
  );
}

AuthLoginForm.propTypes = { className: PropTypes.string, link: PropTypes.string, resetLink: PropTypes.string };
