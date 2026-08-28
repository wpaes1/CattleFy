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
import { upperCase } from 'lodash-es';
import LotAnimalFormFarm from '../farms/LotAnimalFormFarm';




// ==============================|| FORM FLOATING - LABELS ||============================== //

export default function AnimalForm() {


  const { themeDirection, mode } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);
  const logo = resolvedTheme === ThemeMode.DARK ? LightLogo : window.location.pathname.includes('v3') ? LightLogo : DarkLogo;
  const [validated, setValidated] = useState(false);
  const [disableSave, setDisablesave] = useState(false);
  const [lotAnimalList, setLotAnimalList] = useState([]);
  const [idLotAnimal, setIdLotAnimal] =  useState('');

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

      if(idLotAnimal === ''){
        setError('id_lot_animal', { type: 'manual', message: 'Lot Animal is required' });
        error = true;
      }

      if(data.earring_number.value === ''){
        setError('earring_number', { type: 'manual', message: 'Earring number  Name is required' });
        error = true;
      }
      if(data.age.value === ''){
        setError('age', { type: 'manual', message: 'Age animal Number is required' });
        error = true;
      }
      if(data.sex.value   === ''){
        setError('sex', { type: 'manual', message: 'Sex is required' });
        error = true; 
      }
      if(data.entry_date.value === ''){
        setError('entry_date', { type: 'manual', message: 'Entry date is required' });
        error = true;
      }
      if(data.breed.value === ''){
        setErrros('breed', { type: 'manual', message: 'Breed is required' });
        error = true;
      }
      if(data.status.value === ''){
        setErrros('status', { type: 'manual', message: 'Status is required' });
        error = true;
      }
      if(data.entry_weight.value === ''){
        setErrros('entry_weigth', { type: 'manual', message: 'Entry weight is required' });
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
          const response = await fetcherPut(['animals/' + id, {
            id_lot_animal: idLotAnimal,
            earring_number: data.earring_number.value,
            age: data.age.value,
            sex: data.sex.value,
            entry_date: data.entry_date.value,
            entry_weight: data.entry_weight.value,
            breed: data.breed.value,
            sisbov_mapa_br:data.sisbov_mapa_br.value,
            status: data.status.value            
          }]);
        }
        else{

          const response = await fetcherPost(['animals', {
            id_lot_animal: idLotAnimal,
            earring_number: data.earring_number.value,
            age: data.age.value,
            sex: data.sex.value,
            entry_date: data.entry_date.value,
            entry_weight: data.entry_weight.value,
            breed: data.breed.value,
            sisbov_mapa_br:data.sisbov_mapa_br.value,
            status: data.status.value
          }]);  

          //console.log('Registration Response:', response);
        }


        toast.success('Animal '+ data.earring_number.value +' registered successfully. ', {
          rtl: themeDirection === 'rtl' ? true : false,
          icon: <Image src={Img3} fluid />,
          position: themeDirection === 'rtl' ? 'top-left' : 'top-right',
          theme: 'colored'
        });

        setDisablesave(true);
        reset();
        window.location.href = "/animals/animal";
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
    window.location.href = "/animals/animal";
  };  

   useEffect(() => {
   // console.log('ID PARAM', id);
    if (id) {
      // Fetch data and set values
      const fetchData = async () => {
      try {
        const response = await fetcher(['animals/' + id, {}]);    
        setIdLotAnimal(response.id_lot_animal);
        setValue('earring_number', response.earring_number);
        setValue('age', response.age);
        setValue('sex', response.sex);
        setValue('entry_date', response.entry_date);
        setValue('entry_weight', response.entry_weight);
        setValue('breed', response.breed);
        setValue('sisbov_mapa_br', response.sisbov_mapa_br);
        setValue('status',upperCase(response.status));
        } catch (err) {
          console.log(err.message);
        } 
      };
      fetchData();      
    }
  }, [id]);

  /* Search Picket */
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




 
/* Search Farm detail */
  useEffect(() => {
  if(!(picketId=='')){
    fetcher(['showFarmByPickcet/'+picketId, {}])
    .then((response)=>{
        setFarmName(response);
    });  

    const controller = new AbortController(); 
    const farmOption = async () => {
        const option = await fetcher(['showByPicket/'+picketId, { signal: controller.signal }]);
        if(option.data.length == 1)
            setIdLotAnimal(option.data[0].id);

        setLotAnimalList(option.data);
    };
    farmOption();
    return () => controller.abort();
  }
 }, [picketId]);



  return (
    <MainCard title="Farm Registration">
      <ToastContainer />
      {/* --- Form Controls --- */}
      <Form onSubmit={handleSubmit} noValidate validated={validated} >
        
        {/* Select Picket*/}
        <Row className="g-4">          
          <Col md={7}>
            <FloatingLabel label="Picket"> 
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

            {/* Select Lot*/}
            <Row className="g-4">          
              <Col md={12}>
                <FloatingLabel controlId="ctrIdLotAnimal" label="Lot Animal">
                    <Form.Select required onChange={(e) => setIdLotAnimal(e.target.value)}
                      value={`${idLotAnimal}`}
                      > 
                      <option value="">Select a Lot</option>
                                    
                        {lotAnimalList.map((row) => (
                          <option 
                            key={row.id}
                            value={`${row.id}`}
                          >
                            {row.lot_description}
                          </option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.id_lot_animal?.message}</Form.Control.Feedback>
                  </FloatingLabel>
              </Col>
            </Row>
            <br/>

            <Row className="g-4">
              <Col md={6}>
              <FloatingLabel controlId="idEntryWeight" label="Entry Weight" className="mb-3">
                  <Form.Control type="text" placeholder="Entry Weight" 
                  {...register('entry_weight')}
                  isInvalid={!!errors.entry_weight}              
                    //  onChange={(e) => setNewRegister({ ...newRegister, registration_number: e.target.value })}
                    required                
                    />
                    <Form.Control.Feedback type="invalid">{errors.entry_weight?.message}</Form.Control.Feedback>
                </FloatingLabel>                    
              </Col>

              <Col md={6}>
                <FloatingLabel controlId="idEarringNumber" label="Earring Number" className="mb-3">
                  <Form.Control type="text" placeholder="Earring Number" 
                  {...register('earring_number')}
                  isInvalid={!!errors.earring_number}              
                    //  onChange={(e) => setNewRegister({ ...newRegister, registration_number: e.target.value })}
                    required                
                    />
                    <Form.Control.Feedback type="invalid">{errors.earring_number?.message}</Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <LotAnimalFormFarm data={farmName} />
          </Col>
        </Row>
    
        <Row className="g-4">
          <Col md={6}>
            <FloatingLabel controlId="idAge" label="Age" className="mb-3">
              <Form.Control type="text" placeholder="Age" defaultValue="" 
                {...register('age')}
                isInvalid={!!errors.age}              
                //onChange={(e) => setNewRegister({ ...newRegister, owner_name: e.target.value })}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.age?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>

          <Col md={6}>
            <FloatingLabel controlId="idSex" label="Sex" className="mb-3">
              <Form.Control type="text" placeholder="Sex" defaultValue="" 
                {...register('sex')}
                isInvalid={!!errors.ex}              
                //onChange={(e) => setNewRegister({ ...newRegister, location: e.target.value })}
                required                
                />
                <Form.Control.Feedback type="invalid">{errors.sex?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6}>
            <FloatingLabel controlId="idEntryDate" label="Entry Date" className="mb-3">
              <Form.Control type="text" placeholder="Entry Date" defaultValue="" 
                {...register('entry_date')}
                isInvalid={!!errors.entry_date}              
                //onChange={(e) => setNewRegister({ ...newRegister, city: e.target.value })}
                required                
                />
                <Form.Control.Feedback type="invalid">{errors.entry_date?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>

          <Col md={6}>
            <FloatingLabel controlId="idBreed" label="Breed" className="mb-3">
              <Form.Control type="text" placeholder="Breed" defaultValue="" 
                {...register('breed')}
                isInvalid={!!errors.breed}              
                //onChange={(e) => setNewRegister({ ...newRegister, state_registration: e.target.value })}
                required                
                />
                <Form.Control.Feedback type="invalid">{errors.breed?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6}>
            <FloatingLabel controlId="idSisbovMapaBr" label="SISBOV BRA" className="mb-3">
              <Form.Control type="text" placeholder="SISBOV BRA" defaultValue="" 
                {...register('sisbov_mapa_br')}
                //onChange={(e) => setNewRegister({ ...newRegister, country: e.target.value })}
                />

            </FloatingLabel>
          </Col>

          <Col md={6}>
            <FloatingLabel controlId="idStatus" label="Status" className="mb-3">
              <Form.Control type="text" placeholder="Status" defaultValue="" 
              {...register('status')}
              isInvalid={!!errors.status}
              //onChange={(e) => setNewRegister({ ...newRegister, total_area: e.target.value })}
              required
              />
              <Form.Control.Feedback type="invalid">{errors.status?.message}</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>
      
        <h6>Aditional data</h6>
        <hr/>

        <Row>
          <Col md={3}>
            Animal or vegetable
          </Col>

          <Col md={3}>
              Folhas (Verduras): Alface, couve, rúcula, agrião, espinafre e acelga.
              Frutos (Legumes botânicos): Tomate, pimentão, berinjela, abóbora, chuchu, pepino e quiabo.
              Raízes e Tubérculos (Legumes subterrâneos): Cenoura, beterraba, rabanete, batata, batata-doce e mandioca.
              Flores e Hastes comestíveis: Brócolis, couve-flor e alcachofra.
              Bulbos e Talos: Cebola, alho, alho-poró e aipo
              Leguminosa: Soja, feijão...
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
