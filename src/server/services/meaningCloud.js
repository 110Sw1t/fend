const axios = require('axios');
const FormData = require('form-data');

const meaningCloudClient = axios.create({
   baseURL: 'https://api.meaningcloud.com',
   timeout: 30000,
   headers: { 'Content-Type': 'multipart/form-data' }
});

meaningCloudClient.interceptors.request.use(request => {
   console.log('Starting Request', request)
   return request
 })
 
 meaningCloudClient.interceptors.response.use(response => {
   console.log('Response:', response)
   return response
 })


function getSentimentAnalysis(url) {
   const lang = 'en'
   const key = process.env.API_KEY

   return meaningCloudClient.post('/sentiment-2.1', null, {
      params: {
         key,
         lang,
         url
      },
   })
}

module.exports = { getSentimentAnalysis }