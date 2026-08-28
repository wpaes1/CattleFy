// react-bootstrap
import { upperCase } from 'lodash-es';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

// project-imports
import { getImageUrl, ImagePath } from 'utils/getImageUrl';



// ==============================|| SOCIAL PROFILE - MESSAGE LIST ||============================== //

export default function LotAnimalFormFarm(dataFarm = {}) {


const data  = dataFarm.data;


  if(data)
  return (
    <Card className="new-cust-card">
      <Card.Header>
        <h5 className="mb-0">Farm</h5>
      </Card.Header>
     
        <Card.Body>
            <Stack
              key={data.id}
              direction="horizontal"
              className='align-items-center mb-3'
            >             
              <Image
                src={getImageUrl(`${data.trademark}`, ImagePath.TRADEMARK, 'public')}
                alt="Trademark"
                className="rounded-circle avatar avatar-l"
              />

              <Stack direction="horizontal" className="justify-content-between w-100">
                <div>
                  <h6 className="mb-1">{ upperCase(data.farm_name)}</h6>
                  <span className="mb-0">{data.city} | {data.state_registration} | {data.country}</span>                  
                </div>
                <span className="text-muted small">{data.owner_name}</span>
             
              </Stack>
            </Stack>
         
        </Card.Body>
     
    </Card>
  );
  else
    return (
      <Card className="new-cust-card">
        <Card.Header>
          <h5 className="mb-0">Farm</h5>
        </Card.Header>
      </Card>
    );
}
