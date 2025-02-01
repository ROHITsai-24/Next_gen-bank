export const environment = {
  production: true,
  apiUrl: (window as any)['env']?.API_url || 'https://bank-backend-h57o.onrender.com'
};
