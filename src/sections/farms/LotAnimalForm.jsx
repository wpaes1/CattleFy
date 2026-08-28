import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';


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
//import Choices from 'choices.js';

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
import LotAnimalFormFarm from './LotAnimalFormFarm';


//utils
import { fetcherPost, fetcher, fetcherPut } from '../../utils/axios';

// assets
import LightLogo from 'assets/images/logo-white.png';
import DarkLogo from 'assets/images/logo-dark.png';
import PicketForm from './PicketForm';




// ==============================|| FORM FLOATING - LABELS ||============================== //

export default function LotAnimalForm() {


  const { themeDirection, mode } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);
  const logo = resolvedTheme === ThemeMode.DARK ? LightLogo : window.location.pathname.includes('v3') ? LightLogo : DarkLogo;
  const [validated, setValidated] = useState(false);
  const [disableSave, setDisablesave] = useState(false);
  const [picketList, setPicketList]   = useState([]);
  const [picketId, setPicketId]       =  useState('');
   const [farmName, setFarmName]       =  useState('');

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

      if(picketId === ''){
        setError('id_picket', { type: 'manual', message: 'Picket is required'});
        error = true;
      }

      if(data.lot_number.value === ''){
        setError('lot_number', { type: 'manual', message: 'Lot number is required' });
        error = true;
      }
      if(data.lot_description.value === ''){
        setError('lot_description', { type: 'manual', message: 'Lot description is required' });
        error = true;
      }

      if(data.origin.value === ''){
        setError('origin', { type: 'manual', message: 'Origin is required' });
        error = true;
      }
      if(data.entry_date.value === ''){
        setError('entry_date', { type: 'manual', message: 'Entry date is required' });
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
          const response = await fetcherPut(['lotanimals/' + id, {
            id_picket: picketId,
            lot_description: data.lot_description.value,
            lot_number: data.lot_number.value,
            entry_date: data.entry_date.value,
            destination: data.destination.value,
            exit_date: data.exit_date.value,  
            origin:data.origin.value                 
          }]);
        }
        else{
          const response = await fetcherPost(['lotanimals', {
            id_picket: picketId,
            lot_description: data.lot_description.value,
            lot_number: data.lot_number.value,
            entry_date: data.entry_date.value,
            destination: data.destination.value,
            exit_date: data.exit_date.value, 
            origin:data.origin.value              
          }]);  

          //console.log('Registration Response:', response);
        }


        toast.success('Lot registered successfully. ', {
          rtl: themeDirection === 'rtl' ? true : false,
          icon: <Image src={Img3} fluid />,
          position: themeDirection === 'rtl' ? 'top-left' : 'top-right',
          theme: 'colored'
        });

        
        setDisablesave(true);
        reset();
        window.location.href = `/farms/lotanimal`;
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
            Navigate("/auth/login");   
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
      window.location.href = `/farms/lotanimal`;
    };  

   useEffect(() => {
    const controller = new AbortController();
    const selectOption = async () => {
        try {
            //const listOptions = await fetcherPost(['showPickcetsBydFarm', {}]);
            await fetcherPost(['showPickcetsBydFarm', {}])
            .then((response)=> {              
              setPicketList(response);            
            });
            
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
    };

    selectOption();

    // Cleanup: Abort request on unmount
    return () => {
        controller.abort();
  };    
  }, []);

useEffect(() => {
   // console.log('ID PARAM', id);
    if (id) {
      // Fetch data and set values
      
      const fetchData = async () => {
      try {
        const response = await fetcher(['lotanimals/' + id, {}]);   
        setPicketId(response.id_picket); 
        setValue('id_picket',response.id_picket+'|'+response.id_farm);
        setValue('lot_number', response.lot_number);
        setValue('lot_description', response.lot_description);
        setValue('origin', response.origin);
        setValue('entry_date', response.entry_date );
        setValue('destination', response.destination );
        setValue('exit_date', response.exit_date );


        const farmPicket = await fetcher(['showFarmByPickcet/'+response.id_picket, {}]);
        setFarmName(farmPicket);

        //console.log('farmPicket: ', farmPicket);

        } catch (err) {
          console.log(err.message);
        } 
      };
      fetchData();      
    }//end id ID
  }, [id]);

  useEffect(() => {
    if(!(picketId=='')){

      fetcher(['showFarmByPickcet/'+picketId, {}])
      .then((response)=>{
          setFarmName(response);
      });  
    }
 }, [picketId]);



  return (   
    <MainCard title="Pickets">
      <ToastContainer />
      {/* --- Form Controls --- */}
      <Form onSubmit={handleSubmit} noValidate validated={validated} >
        

        {/* Select Picket*/}
        <Row className="g-4">          
          <Col md={7}>
             
                <FloatingLabel label="Lot"> 
                  <Form.Control 
                    as="select" 
                    id="id_picket" 
                    required 
                    onChange={(e) => { 
                      setPicketId(e.currentTarget.value);   
                    }}
                    value={picketId}
                  >
                  <option value="" >This is a placeholder set in the config</option>  
                  { 
                    picketList.map((row) => (
                      <optgroup 
                        key={row.id}
                        label={`${row.farm_name}`}
                      >
                      {  
                        row.pickets.map((picket) => (
                          <option key={`${picket.id}`} value={ `${picket.id}`}>{picket.picket_description}</option>
                        ))
                      }                    
                      </optgroup>
                    ))
                  } 
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">{errors.id_picket?.message}</Form.Control.Feedback>
                </FloatingLabel>  
              <br/>

              <Row>
                <Col md={6}> 
                  <FloatingLabel controlId="idLotNumber" label="Lot number" className="mb-3">
                      <Form.Control               
                      type="number"
                      placeholder=""
                      {...register('lot_number')}
                      isInvalid={!!errors.lot_number}              
                      required                
                      />
                      <Form.Control.Feedback type="invalid">{errors.lot_number?.message}</Form.Control.Feedback>
                  </FloatingLabel>
                </Col>

                <Col md={6}> 
                <FloatingLabel controlId="idLotDescription" label="Lot description" className="mb-3">
                      <Form.Control               
                      type="text"
                      placeholder=""
                      {...register('lot_description')}
                      isInvalid={!!errors.lot_description}              
                      required                
                      />
                      <Form.Control.Feedback type="invalid">{errors.lot_description?.message}</Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
              </Row>


              <Row>
                <Col md={6}> 
                  <FloatingLabel controlId="idOrigin" label="Origin" className="mb-3">
                      <Form.Control               
                      type="text"
                      placeholder=""
                      {...register('origin')}
                      isInvalid={!!errors.origin}              
                      required                
                      />
                      <Form.Control.Feedback type="invalid">{errors.origin?.message}</Form.Control.Feedback>
                  </FloatingLabel>
                </Col>

                <Col md={6}> 
                <FloatingLabel controlId="idEntryDate" label="Entry Date" className="mb-3">
                      <Form.Control               
                      type="text"
                      placeholder=""
                      {...register('entry_date')}
                      isInvalid={!!errors.entry_date}              
                      required                
                      />
                      <Form.Control.Feedback type="invalid">{errors.entry_date?.message}</Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
              </Row>


          </Col>
          <Col md={5}>
            <LotAnimalFormFarm data={farmName} />
          </Col>
        </Row>

        <h6 className="mt-3">Output data</h6>
        <hr />
<       Row className="g-4">
          <Col md={6}> 
            <FloatingLabel controlId="idDestination" label="Destination" className="mb-3">
                <Form.Control               
                type="text"
                placeholder="Destination"
                {...register('destination')}
                />
                
            </FloatingLabel>
          </Col>


          <Col md={6}> 
            <FloatingLabel controlId="idExitDate" label="Outout date" className="mb-3">
                <Form.Control               
                type="text"
                placeholder=""
                {...register('exit_date')}
                />
                
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
