import { lazy } from 'react';

// project-imports
import DashboardLayout from 'layout/Dashboard';
import Loadable from 'components/Loadable';

// render - farms element pages
const Farm = Loadable(lazy(() => import('views/farms/Farm')));
const FarmAdd = Loadable(lazy(() => import('views/farms/FarmForm')));
const Picket = Loadable(lazy(() => import('views/farms/Picket')));
const PicketAdd = Loadable(lazy(() => import('views/farms/PicketForm')));
const LotAnimal = Loadable(lazy(() => import('views/farms/LotAnimal')));
const LotAnimalAdd = Loadable(lazy(() => import('views/farms/LotAnimalForm')));

const Animal = Loadable(lazy(() => import('views/animals/Animal')));
const AnimalAdd = Loadable(lazy(() => import('views/animals/AnimalForm')));

// ==============================|| FARMS ROUTING ||============================== //

const FarmsRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'farms',
          children: [            
                { path: 'farm', element: <Farm /> },
                { path: 'farmadd', element: <FarmAdd /> },
                { path: 'farmadd/:id', element: <FarmAdd /> },

                { path: 'picket', element: <Picket /> },
                { path: 'picketadd', element: <PicketAdd /> },
                { path: 'picketadd/:id', element: <PicketAdd /> },
                
                { path: 'lotanimal', element: <LotAnimal /> },
                { path: 'lotanimaladd', element: <LotAnimalAdd /> },
                { path: 'lotanimaladd/:id', element: <LotAnimalAdd /> }
          ]
        },
        {
          path: 'animals',
          children: [ 
            { path: 'animal', element: <Animal /> },
            { path: 'animaladd', element: <AnimalAdd /> },
            { path: 'animaladd/:id', element: <AnimalAdd /> }
          ]
        }
      ]
    }
  ]
};

export default FarmsRoutes;
