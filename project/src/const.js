export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const AppRoute = {
  LOGIN: '/login',
  FAVORITES: '/favorites',
  PROPERTY: '/offer/',
  ROOT: '/',
};

export const ApartType = [
  'hostel',
  'apartment',
  'hotel',
  'room',
  'house',
];

export const Cities = [
  {
    name: 'Paris',
    lat: 48.85792,
    lng: 2.35126,
    zoom: 12,
  },
  {
    name: 'Cologne',
    lat: 50.93638,
    lng: 6.96008,
    zoom: 12,
  },
  {
    name: 'Brussels',
    lat: 50.84639,
    lng: 4.35238,
    zoom: 12,
  },
  {
    name: 'Amsterdam',
    lat: 52.366667,
    lng: 4.9,
    zoom: 12,
  },
  {
    name: 'Hamburg',
    lat: 53.54315,
    lng: 9.98135,
    zoom: 12,
  },
  {
    name: 'Dusseldorf',
    lat: 51.23299,
    lng: 6.77314,
    zoom: 12,
  },
];

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  OFFERS: '/hotels',
  COMMENTS: '/comments/',
};

export const SortTypes = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
]
