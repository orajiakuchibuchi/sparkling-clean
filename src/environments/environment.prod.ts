
export const environment = {
  production: false,
  domain: 'https://laslasmarketplace.herokuapp.com',
  // domain: 'https://marketplace.laslas.org',
  apiUrl: 'http://127.0.0.1:3000',
  api: 'https://authentication.laslas.org',
  baseapi: 'laslas.org',
  PAYSTACK_PUBLIC_KEY:'pk_test_c5b021a06e30964fb81f372a4fa139dadea37c10',
  PAYSTACK_URL:'https://js.paystack.co/v1/inline.js',
  getapi: (mod:any)=>{
    return `https://${mod}.laslas.org`;
  },
  ngusdrate: 700,
  clientID: 'FhYOhoQSbkbpvKOs6tRIZWHDtId9TEJyFnhff3voaH0ezFUZNtwxYbfgtSX5fx0e6',
  google_client_id: '486410341716-p629m7uu8tab366recm775bcfc3qoihv.apps.googleusercontent.com',
  google_client_secret: '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',
  jsonServer: "https://opensource.herokuapp.com",
  youverify: {
    key: 'c2nLx4Wd.3NBNkHheA9gU08hkyGjnRBof8yxvNnpuPBl3',
    url: 'https://api.youverify.co'
  }
};
