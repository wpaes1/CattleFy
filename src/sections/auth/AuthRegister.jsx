import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link} from 'react-router-dom';


// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// third-party
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import NotificationColored from 'sections/components/advance/notification/ColoredNotification';
import Img3 from 'assets/images/notification/ok-48.png';


// third-party
import { useForm } from 'react-hook-form';

// project-imports
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';
import { confirmPasswordSchema, emailSchema, firstNameSchema, farmNameSchema, passwordSchema } from 'utils/validationSchema';
import { ThemeMode } from 'config';
import { getResolvedTheme, setResolvedTheme } from 'components/setResolvedTheme';
import useLocalStorage from 'hooks/useLocalStorage';


//utils
import { fetcherPost } from '../../utils/axiosUserRegister';

// assets
import LightLogo from 'assets/images/logo-white.png';
import DarkLogo from 'assets/images/logo-dark.png';

// ==============================|| AUTH REGISTER FORM ||============================== //

export default function AuthRegisterForm({ className, link }) {
  const { themeDirection, mode } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);
  const logo = resolvedTheme === ThemeMode.DARK ? LightLogo : window.location.pathname.includes('v3') ? LightLogo : DarkLogo;

  const [accessToken, setAccessToken] = useLocalStorage('api-authorization', {access_token: '', token_type:''});

  const [showPassword, setShowPassword] = useState(false);
  const [newRegister, setNewRegister] = useState({
    name: '',
    email: '',
    farm_name: '',
    password: '',
    password_confirmation: ''
  });

  const {
    register,
    reset,
    formState: { errors },
    setError,
    clearErrors
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


    if (data.password.value !== data.confirmPassword.value) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Both Password must be match!'
      });
    } else {
      clearErrors('confirmPassword');
      //reset();
    }

    setNewRegister({
      name: data.firstName.value,
      email: data.email.value,
      farm_name: data.farmName.value,
      password: data.password.value,
      password_confirmation: data.confirmPassword.value
    });


    try {

      const response = await fetcherPost(['register', {
        name: data.firstName.value,
        email: data.email.value,
        farm_name: data.farmName.value,
        password: data.password.value,
        password_confirmation: data.confirmPassword.value
      }]);

      setAccessToken({access_token: response.access_token, token_type: response.token_type});

      const email = await fetcherPost(['email/verify', {}], {access_token: response.access_token, token_type: response.token_type});

      //console.log('Email Verification Response:', responseEmail);

     
      toast.success('Check your email inbox to confirm your registration. '+data.email.value, {
        rtl: themeDirection === 'rtl' ? true : false,
        icon: <Image src={Img3} fluid />,
        position: themeDirection === 'rtl' ? 'top-left' : 'top-right',
        theme: 'colored'
      });

 
      const timer = setTimeout(() => {
         window.location.replace(link); // Change this to your desired route
      }, 7000);
      

    }
    catch (error) {

      //console.log('Registration Error:', error);

      toast.error(error.response.data.message, {
        rtl: themeDirection === 'rtl' ? true : false,
        icon: false,
        position: themeDirection === 'rtl' ? 'top-left' : 'top-right',
        theme: 'colored'
      });



    }

  };


  return (
    <MainCard className="mb-0">

      <ToastContainer />
      

      <div className="text-center">
        <a>
          <Image src={logo} alt="img" />
        </a>
      </div>
      <Form onSubmit={handleSubmit}>
        <h4 className={`text-center f-w-500 mt-4 mb-3 ${className}`}>Sign up</h4>

        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Control
            type="text"
            placeholder="First Name"
            {...register('firstName', firstNameSchema)}
            isInvalid={!!errors.firstName}
            className={className && 'bg-transparent border-white text-white border-opacity-25 '}
            onChange={(e) => setNewRegister({ ...newRegister, name: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">{errors.firstName?.message}</Form.Control.Feedback>
        </Form.Group>


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

        <Form.Group className="mb-3" controlId="formFarmName">
          <Form.Control
            type="text"
            placeholder="Farm Name"
            {...register('farmName', farmNameSchema)}
            isInvalid={!!errors.farmName}
            className={className && 'bg-transparent border-white text-white border-opacity-25 '}
          />
          <Form.Control.Feedback type="invalid">{errors.farmName?.message}</Form.Control.Feedback>
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
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            {...register('confirmPassword', confirmPasswordSchema)}
            isInvalid={!!errors.confirmPassword}
            className={className && 'bg-transparent border-white text-white border-opacity-25 '}
          />
          <Form.Control.Feedback type="invalid">{errors.confirmPassword?.message}</Form.Control.Feedback>
        </Form.Group>
        <Stack direction="horizontal" className="mt-1 justify-content-between">
          <Form.Group controlId="customCheckc1">
            <Form.Check
              type="checkbox"
              label="I agree to all the Terms & Condition"
              defaultChecked
              className={`input-primary ${className ? className : 'text-muted'} `}
            />
          </Form.Group>
        </Stack>
        <div className="text-center mt-4">
          <Button type="submit" className="shadow px-sm-4">
            Sign up
          </Button>
        </div>
        <Stack direction="horizontal" className="justify-content-between align-items-end mt-4">
          <h6 className={`f-w-500 mb-0 ${className}`}>Already have an Account?</h6>
          <Link to={link} className="link-primary">
            Login
          </Link>
        </Stack>
      </Form>
    </MainCard>
  );
}

AuthRegisterForm.propTypes = { className: PropTypes.string, link: PropTypes.string };
