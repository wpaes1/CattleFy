// ==============================|| MENU ITEMS - FARM ||============================== //

const farmComponents = {
  id: 'farms',
  title: 'farms management',
  type: 'group',
  children: [
    {
      id: 'farm-elements',
      title: 'farm elements',
      type: 'collapse',
      icon: 'ph ph-barn',
      children: [
        {
          id: 'farm',
          title: 'farm',
          type: 'item',
          url: '/farms/farm'
        },
        {
          id: 'farmadd',
          title: 'add farm',
          type: 'item',
          url: '/farms/farmadd',
          link: '/farms/farmadd/:id'
        },
        {
          id: 'picket',
          title: 'picket',
          type: 'item',
          url: '/farms/picket'
        },
        {
          id: 'picketadd',
          title: 'add picket',
          type: 'item',
          url: '/farms/picketadd',
          link: '/farms/picketadd/:id'
        },
        {
          id: 'lot',
          title: 'lot',
          type: 'item',
          url: '/farms/lotanimal'
        },
        {
          id: 'lotadd',
          title: 'add lot',
          type: 'item',
          url: '/farms/lotanimaladd',
          link: '/farms/lotanimaladd/:id'
        },
      ]
    },
    {
      id: 'animal-elements',
      title: 'animal elements',
      type: 'collapse',
      icon: 'ph ph-cow',
      children: [
        {
          id: 'animal',
          title: 'animal',
          type: 'item',
          url: '/animals/animal'
        },
        {
          id: 'animaladd',
          title: 'add animal',
          type: 'item',
          url: '/animals/animaladd',
          link: '/animals/animaladd/:id'
        }
      ]
    }
  ]
};

export default farmComponents;
