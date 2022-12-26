export const appRoutes = {
  converter: '/',
  history: '/history',
};

export const navigationLinks = [
  { description: 'Converter', link: appRoutes.converter },
  { description: 'History', link: appRoutes.history },
];

export const apiRoutes = {
  getRates: '/api/latest.json/?app_id=:app_id',
  getCurrencies: '/api/currencies.json/?app_id=:app_id',
  getUsage: '/api/usage.json/?app_id=:app_id',
  getHistoricalByDate: '/api/historical/:date.json/?app_id=:app_id',
  convert: '/api/convert.json/?app_id=:app_id',
};
