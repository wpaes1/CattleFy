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


//utils
import { fetcherPost, fetcher, fetcherPut } from '../../utils/axios';

// assets
import LightLogo from 'assets/images/logo-white.png';
import DarkLogo from 'assets/images/logo-dark.png';




// ==============================|| FORM FLOATING - LABELS ||============================== //

export default function PicketForm() {


  const { themeDirection, mode } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);
  const logo = resolvedTheme === ThemeMode.DARK ? LightLogo : window.location.pathname.includes('v3') ? LightLogo : DarkLogo;
  const [validated, setValidated] = useState(false);
  const [disableSave, setDisablesave] = useState(false);
  const [farmList, setFarmList] = useState([]);
  const [farmId, setFarmId] =  useState('');


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

  const handleSubmit = async (event) => {
    event.preventDefault();  
    clearErrors();
    setDisablesave(true);

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

      if(farmId === ''){
        setError('id_farm', { type: 'manual', message: 'Farm Name is required'});
        error = true;
      }

      if(data.picket_description.value === ''){
        setError('picket_description', { type: 'manual', message: 'Picket description is required' });
        error = true;
      }
      if(data.width.value === ''){
        setError('width', { type: 'manual', message: 'Picket width is required' });
        error = true;
      }

      if(data.depth.value === ''){
        setError('depth', { type: 'manual', message: 'Picket depth is required' });
        error = true;
      }

      if(data.area.value === ''){
        setError('area', { type: 'manual', message: 'Picket area is required' });
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
          const response = await fetcherPut(['pickets/' + id, {
            id_farm: farmId,
            picket_description: data.picket_description.value,
            width: data.width.value,
            depth: data.depth.value,
            area: data.area.value,                        
          }]);
        }
        else{
          const response = await fetcherPost(['pickets', {
            id_farm: farmId,
            picket_description: data.picket_description.value,
            width: data.width.value,
            depth: data.depth.value,
            area: data.area.value,
          }]);  

          //console.log('Registration Response:', response);
        }


        toast.success('Picket registered successfully. ', {
          rtl: themeDirection === 'rtl' ? true : false,
          icon: <Image src={Img3} fluid />,
          position: themeDirection === 'rtl' ? 'top-left' : 'top-right',
          theme: 'colored'
        });

        
        setDisablesave(true);
        reset();
        window.location.href = "/farms/picket";
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
    window.location.href = "/farms/picket";
  };  

   useEffect(() => {

   // console.log('ID PARAM', id);

    if (id) {
      // Fetch data and set values
      const fetchData = async () => {
      try {
        const response = await fetcher(['pickets/' + id, {}]);   
        setFarmId(response.id_farm); 
        setValue('farm_name', response.farm_name);
        setValue('picket_description', response.picket_description);
        setValue('width', response.width);
        setValue('depth', response.depth );
        setValue('area', response.area );
        } catch (err) {
          console.log(err.message);
        } 
      };
      fetchData();      
    }//end id ID
    
      const farmOption = async () => {
        const farm = await fetcher(['farms', {}]);
        setFarmList(farm.data);
      };
      farmOption();
    
  }, [id, setFarmList]);

 

  
  return (
    <MainCard title="Pickets">
      <ToastContainer />
      {/* --- Form Controls --- */}
      <Form onSubmit={handleSubmit} noValidate validated={validated} >
        

        {/* Select farm*/}
        <Row className="g-4">          
          <Col md={12}>

            <FloatingLabel controlId="idfarm" label="Farm name">
              { id ?
              <Form.Control               
                type="text"
                placeholder="Farm Name"
                {...register('farm_name')}
                
                readOnly
                />
                : 
                <>
                <Form.Select required onChange={(e) => setFarmId(e.target.value)}
                  value={`${farmId}`}
                  > 
                  <option value="">Select a Fram</option>
                               
                    {farmList.map((row) => (
                      <option 
                        key={row.id}
                        value={`${row.id}`}
                      >
                        {row.farm_name}
                      </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errors.id_farm?.message}</Form.Control.Feedback>
                </>
                }

            </FloatingLabel>
          </Col>
        </Row>
        <br/>
        
        <Row className="g-4">
          <Col md={6}> 
            <FloatingLabel controlId="idPicketDescription" label="Picket Description" className="mb-3">
                <Form.Control               
                type="text"
                placeholder="Pickect Description"
                {...register('picket_description')}
                isInvalid={!!errors.pickect_description}              
                required                
                />
                <Form.Control.Feedback type="invalid">{errors.picket_description?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>


          <Col md={3}> 
            <FloatingLabel controlId="idWidth" label="Picket Width" className="mb-3">
                <Form.Control               
                type="number"
                placeholder=""
                {...register('width')}
                isInvalid={!!errors.whidth}              
                required                
                />
                <Form.Control.Feedback type="invalid">{errors.width?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>

          <Col md={3}> 
          <FloatingLabel controlId="idDepth" label="Picket depth" className="mb-3">
                <Form.Control               
                type="number"
                placeholder=""
                {...register('depth')}
                isInvalid={!!errors.depth}              
                required                
                />
                <Form.Control.Feedback type="invalid">{errors.depth?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>

          <Col md={3}> 
          <FloatingLabel controlId="idArea" label="Picket area" className="mb-3">
                <Form.Control               
                type="number"
                placeholder=""
                {...register('area')}
                isInvalid={!!errors.area}              
                required                
                />
                <Form.Control.Feedback type="invalid">{errors.area?.message}</Form.Control.Feedback>
            </FloatingLabel>
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
}
