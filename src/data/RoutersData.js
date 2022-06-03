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
    name: 'De Lunes a Domingo de 8:00 am a 7:00 pm',
    link: '',
    target: ''
  },
  {
    name: 'Jr. Colón #791',
    link: 'https://goo.gl/maps/jTChaKc6tj1fDgR19',
    target: '_blank'
  }
]
