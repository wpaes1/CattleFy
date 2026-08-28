import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import FormCheck from 'react-bootstrap/FormCheck';


// third-party
import { useForm } from 'react-hook-form';
  import useConfig from 'hooks/useConfig';

// third-party
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import NotificationColored from 'sections/components/advance/notification/ColoredNotification';
import Img3 from 'assets/images/notification/ok-48.png';
import Img2 from 'assets/images/notification/medium_priority-48.png'

// project-imports
import MainCard from 'components/MainCard';
import { farmNameSchema} from 'utils/validationSchema';
import { ThemeMode } from 'config';
import { getResolvedTheme, setResolvedTheme } from 'components/setResolvedTheme';
import useLocalStorage from 'hooks/useLocalStorage';


// utils
import { fetcherPost, fetcher, fetcherPut } from '../../utils/axios';

// assets
import LightLogo from 'assets/images/logo-white.png';
import DarkLogo from 'assets/images/logo-dark.png';

// CNAE
import FarmDataCnae from '../components/cnae';

// Components
import CountrySelect from '../components/country';



// ==============================|| FORM FLOATING - LABELS ||============================== //

export default function FarmForm() {
  const { themeDirection, mode } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);
  const logo = resolvedTheme === ThemeMode.DARK ? LightLogo : window.location.pathname.includes('v3') ? LightLogo : DarkLogo;
  const [validated, setValidated] = useState(false);
  const [disableSave, setDisablesave] = useState(false);
  const [country, setCountry] = useState('');
  const [submitted, setSubmitted] = useState(false);
  //const [creationSystem, setCreationSystem] = useState('');




  const { id } = useParams();

  const {
    register,
    reset,
    formState: { errors },
    setError,
    clearErrors,
    setValue
  } = useForm();


const [show, setShow] = useState({
    primary: true,
    secondary: true,
    success: true,
    warning: true,
    danger: true,
    info: true,
    dark: true
  });

  const [newRegister, setNewRegister] = useState({
    farm_name: '',
    registration_number: '',
    owner_name: '',
    location: '',
    city: '',
    state_registration: '',
    country: '',
    total_area: ''
  });

  const creationSystem = [
    {id:'ES', description:'Extensive system'},
    {id:'IS', description:'Intensive system'},
    {id:'SS', description:'Semi-intensive system'}
  ];


  const handleSubmit = async (event) => {
    event.preventDefault();  
    clearErrors();
    setDisablesave(true);
    setSubmitted(true);

    const data = event.currentTarget.elements;


    /*** TOAST  */
    const handleClose = (toastType) => {
      setShow((prevShow) => ({
        ...prevShow,
        [toastType]: false
      }));
    };

    handleClose('error');


    try{

      let error = false;

      if(data.farm_name.value === ''){
        setError('farm_name', { type: 'manual', message: 'Farm Name is required' });
        error = true;
      }

      if(data.owner_name.value === ''){
        setError('owner_name', { type: 'manual', message: 'Owner  Name is required' });
        error = true;
      }
      if(data.registration_number.value === ''){
        setError('registration_number', { type: 'manual', message: 'Registration Number is required' });
        error = true;
      }
      if(data.state_registration.value   === ''){
        setError('state_registration', { type: 'manual', message: 'State Registration is required' });
        error = true; 
      }
      if(data.total_area.value === ''){
        setError('total_area', { type: 'manual', message: 'Total Area is required' });
        error = true;
      }


      if(data.location.value  === ''){
        setError('location', { type: 'manual', message: 'Location is required' });
        error = true;
      }
      if(data.city.value === ''){
        setError('city', { type: 'manual', message: 'City is required' });
        error = true;
      }      

      if(data.country.value === ''){
        setError('country', { type: 'manual', message: 'Country is required' });
        error = true;
      }


      if (!country) {
        setError('country', { type: 'manual', message: 'Country is required' });
        error = true;        
      }

      if(error){
        toast.warning('Please fill in the required fields.', {
          rtl: themeDirection === 'rtl' ? true : false,
          icon: <Image src={Img2} fluid />,
          position: themeDirection === 'rtl' ? 'top-left' : 'top-right',
          theme: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light'
        });
        setDisablesave(false);       
      } 
      else {


        if(id){
          // Update existing farm
          const response = await fetcherPut(['farms/' + id, {
            farm_name: data.farm_name.value,
            registration_number: data.registration_number.value,
            owner_name: data.owner_name.value,
            location: data.location.value,
            city: data.city.value,
            state_registration: data.state_registration.value,
            country: data.country.value,
            total_area: data.total_area.value
          }]);
        }
        else{

          const response = await fetcherPost(['farms', {
            farm_name: data.farm_name.value,
            registration_number: data.registration_number.value,
            owner_name: data.owner_name.value,
            location: data.location.value,
            city: data.city.value,
            state_registration: data.state_registration.value,
            country: data.country.value,
            total_area: data.total_area.value
          }]);  

          //console.log('Registration Response:', response);
        }


        toast.success('Farm '+ data.farm_name.value +' registered successfully. ', {
          rtl: themeDirection === 'rtl' ? true : false,
          icon: <Image src={Img3} fluid />,
          position: themeDirection === 'rtl' ? 'top-left' : 'top-right',
          theme: 'colored'
        });

        setDisablesave(true);
        reset();
        window.location.href = "/farms/farm";
      }
      
        setValidated(true);
    }
    catch(error){
      event.stopPropagation();
      setValidated(false);  
      setDisablesave(false);

     // console.error('Error submitting form:', error.response.status);

      
      if(error.response){
        toast.error(error.response.data.message, {
          rtl: themeDirection === 'rtl' ? true : false,
          icon: false,
          position: themeDirection === 'rtl' ? 'top-left' : 'top-right',
          theme: 'colored'
        });


        if(error.response.status === 401){
          // Handle unauthorized error, e.g., redirect to login page
          const timer = setTimeout(() => {
            window.location.replace('/auth/login'); // Change this to your desired route
             return () => clearTimeout(timer);
          }, 5000);
         
         
        }


      }
      else{
        toast.error(error.message, {
          rtl: themeDirection === 'rtl' ? true : false,
          icon: false,
          position: themeDirection === 'rtl' ? 'top-left' : 'top-right',
          theme: 'colored'
        });
      
        
      }


    }

  }//end handleSubmit

  const abortForm = () => {
    reset();
    window.location.href = "/farms/farm";
  };  

   useEffect(() => {
    if (id) {
      // Fetch data and set values
      const fetchData = async () => {
      try {
        const response = await fetcher(['farms/' + id, {}]);    
        setValue('farm_name', response.farm_name);
        setValue('registration_number', response.registration_number);
        setValue('owner_name', response.owner_name );
        setValue('location', response.location);
        setValue('city', response.city);
        setValue('state_registration', response.state_registration);
        setValue('country', response.country);
        setValue('total_area', response.total_area);
        
        } catch (err) {
          console.log(err.message);
        } 
      };
      fetchData();
      
    }
  }, [id]);


  useEffect(()=>{

  },[]);

  return (
    <MainCard title="Farm Registration">
      <ToastContainer />
      {/* --- Form Controls --- */}
      <Form onSubmit={handleSubmit} noValidate validated={validated} enctype="multipart/form-data">
        
        <Row className="g-4">
          <Col md={6}> 
            <FloatingLabel controlId="idFarmName" label="Farm Name" className="mb-3">
                <Form.Control               
                type="text"
                placeholder="Farm Name"
                {...register('farm_name')}
                isInvalid={!!errors.farm_name}              
                //onChange={(e) => setNewRegister({ ...newRegister, farm_name: e.target.value })}
                required                
                />
                <Form.Control.Feedback type="invalid">{errors.farm_name?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>

          <Col md={6}>
            <FloatingLabel controlId="idRegistrationNumber" label="Registration Number" className="mb-3">
              <Form.Control type="text" placeholder="Registration Number" 
               {...register('registration_number')}
               isInvalid={!!errors.registration_number}              
                //  onChange={(e) => setNewRegister({ ...newRegister, registration_number: e.target.value })}
                required                
                />
                <Form.Control.Feedback type="invalid">{errors.registration_number?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>
      

        <Row className="g-4">
          <Col md={6}>
            <FloatingLabel controlId="idOwerName" label="Owner Name" className="mb-3">
              <Form.Control type="text" placeholder="Owner Name" defaultValue="" 
                {...register('owner_name')}
               isInvalid={!!errors.owner_name}              
                //onChange={(e) => setNewRegister({ ...newRegister, owner_name: e.target.value })}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.owner_name?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>

          <Col md={6}>
            <FloatingLabel controlId="idLocation" label="Location" className="mb-3">
              <Form.Control type="text" placeholder="Location" defaultValue="" 
                {...register('location')}
                isInvalid={!!errors.location}              
                //onChange={(e) => setNewRegister({ ...newRegister, location: e.target.value })}
                required                
                />
                <Form.Control.Feedback type="invalid">{errors.location?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6}>
            <FloatingLabel controlId="idCity" label="City" className="mb-3">
              <Form.Control type="text" placeholder="City" defaultValue="" 
                {...register('city')}
                isInvalid={!!errors.city}              
                //onChange={(e) => setNewRegister({ ...newRegister, city: e.target.value })}
                required                
                />
                <Form.Control.Feedback type="invalid">{errors.city?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>

          <Col md={6}>
            <FloatingLabel controlId="idStateRegistration" label="State/Registration" className="mb-3">
              <Form.Control type="text" placeholder="State/Registration" defaultValue="" 
                {...register('state_registration')}
                isInvalid={!!errors.state_registration}              
                //onChange={(e) => setNewRegister({ ...newRegister, state_registration: e.target.value })}
                required                
                />
                <Form.Control.Feedback type="invalid">{errors.state_registration?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6}>            
            <Form.Group className="mb-3">
                <Form.Control type="file" className='form-control-lg' />
            </Form.Group>
          </Col>
          <Col md={6}>
              
            <CountrySelect
              value={country}
              onChange={setCountry}
              required                 
              error={
                (submitted && !country)
                  ? errors.country?.message
                  : ''  
              }
              className="form-control form-control-lg"
            />                
          </Col>

        </Row>
        <Row className='g-4'>
          <Col md={6}>
            <FloatingLabel controlId="idTotalArea" label="Total Area" >
              <Form.Control type="number" placeholder="Total Area" defaultValue="" 
              {...register('total_area')}
              isInvalid={!!errors.total_area}
              //onChange={(e) => setNewRegister({ ...newRegister, total_area: e.target.value })}
              required
              />
              <Form.Control.Feedback type="invalid">{errors.total_area?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
      
          {/* Create system  */}
          <Col md={6}>
            {creationSystem.map((item) => (
              <FormCheck key={item.id} className="mb-2">
                  <FormCheck.Input
                      className="input-primary"
                      type="checkbox"
                      value={item.id}
                      id={item.id}
                      inline
                  />
                  <FormCheck.Label htmlFor={item.id}>
                    {item.description}
                  </FormCheck.Label>
              </FormCheck>
            ))}
            
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={12} className="col-form-label pt-0">
            <FarmDataCnae country={country}/>
          </Col>     
        </Row>



        <Stack gap={2}>
          <Stack direction="horizontal" gap={2} className="flex-wrap">
            <Button type="submit" className="shadow px-sm-4" disabled={ disableSave}> SAVE </Button>            
            <Button onClick={abortForm} variant="light">{id ? 'LIST' : 'CANCEL'} </Button>
          </Stack>
        </Stack>


      </Form>
    </MainCard>
  );

function TableDataAnimals(){
  return(
     <div className="p-4">
      <Form.Check id="key1" label="Beef" className="mb-2" />
      <Form.Check id="key2" label="Swine" className="mb-2" />
      <Form.Check id="key3" label="Brids" className="mb-2" />
      <Form.Check id="key4" label="Goat"  className="mb-2"/>
      <Form.Check id="key5" label="Sheep"  className="mb-2"/>
      <Form.Check id="key6" label="Fish"  className="mb-2"/>
    </div>  
  );
}

}
