import renderApi from '@api/render-api';

renderApi.auth('rnd_oc5kYr8jicSq7gawyKHvHa3HTvjY');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));