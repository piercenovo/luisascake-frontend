export const routes = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Nosotros',
    link: 'nosotros'
  },
  {
    name: 'Tienda',
    link: 'tienda',

    subRoutes: [
      {
        name: 'Tortas',
        link: 'tienda/tortas'
      },
      {
        name: 'Postres',
        link: 'tienda/postres'
      },
      {
        name: 'Cheesecakes',
        link: 'tienda/cheesecakes'
      },
      {
        name: 'Bocaditos',
        link: 'tienda/bocaditos'
      },
      {
        name: 'Packs',
        link: 'tienda/packs'
      }
    ]
  },
  {
    name: 'Regala con amor',
    link: 'regala-con-amor'
  },
  {
    name: 'Pedidos especiales',
    link: 'pedidos-especiales'
  },
  {
    name: 'Contactanos',
    link: 'contactanos'
  }
]

export const categories = [
  {
    id_category: 1,
    name_category: 'Tortas',
    link: 'tortas',
    picture: 'categoryImage-1656039651518.png',
    code_category: 'CATUJ14',
    status: 1
  },
  {
    id_category: 2,
    name_category: 'Postres',
    link: 'postres',
    picture: 'categoryImage-1656039966181.png',
    code_category: 'CATFD01',
    status: 1
  },
  {
    id_category: 3,
    name_category: 'Cheesecakes',
    link: 'cheesecakes',
    picture: 'categoryImage-1656039986931.png',
    code_category: 'CATPPA5',
    status: 1
  },
  {
    id_category: 4,
    name_category: 'Bocaditos',
    link: 'bocaditos',
    picture: 'categoryImage-1656040026662.png',
    code_category: 'CATLP21',
    status: 1
  },
  {
    id_category: 5,
    name_category: 'Packs',
    link: 'packs',
    picture: 'categoryImage-1656040219856.png',
    code_category: 'CATP17I',
    status: 1
  }
]

export const routesClient = [
  {
    name: 'Servicio al cliente',
    link: 'servicio-al-cliente'
  },
  {
    name: 'Políticas de privacidad',
    link: 'politicas-y-privacidad'
  },
  {
    name: 'Términos y condiciones',
    link: 'terminos-y-condiciones'
  },
  {
    name: 'Libro de Reclamaciones',
    link: 'libro-de-reclamaciones'
  }
]

export const routesContact = [
  {
    name: '+51 981073159',
    link: 'tel:+51981073159',
    target: '_blank'
  },
  {
    name: 'pastelerialuisascake@gmail.com',
    link: 'mailto:pastelerialuisascake@gmail.com',
    target: '_blank'
  },
  {
    name: 'Jr. Colón #791',
    link: 'https://goo.gl/maps/jTChaKc6tj1fDgR19',
    target: '_blank'
  }
]
