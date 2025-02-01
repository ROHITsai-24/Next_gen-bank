export const environment = {
  production: false,
  apiUrl: (window as any)['env']?.API_url || 'https://bank-backend-h57o.onrender.com'
};
