export const appRoutes = {
  converter: '/',
  history: '/history',
};

export const navigationLinks = [
  { description: 'Converter', link: appRoutes.converter },
  { description: 'History', link: appRoutes.history },
];

// not in use for now
export const apiRoutes = {
  getRates: '/api/latest.json/:app_id',
  getCurrencies: '/api/currencies.json',
  getUsage: '/api/usage.json/:app_id',
  getHistoricalByDate: '/api/historical/:date.json/:app_id',
  convert: '/api/convert.json/:app_id',
};
