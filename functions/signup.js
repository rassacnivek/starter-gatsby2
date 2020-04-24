const axios = require('axios');
const dotenv = (require('dotenv')).config

module.exports.handler = function (event, context, callback) {
  const mailChimpApi = process.env.MAILCHIMP_API_KEY;
  const memberListId = 'fa15db727f';

  const formData = JSON.parse(event.body);

  const data = {
    email_address: formData.email,
    statut: "subscribed"
  }

  axios
    .post(`https://us8.api.mailchimp.com/3.0/lists/${memberListId}/members`, data, {
      headers: {
        "Content-Type": "application-json",
        "Authorization": `apikey ${mailChimpApi}`
      }
    })
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          status: "Member successfully subscribed."
        })
      })
    })
    .catch((err) => {
      callback(null, {
        statusCode: err.status,
        body: JSON.stringify({
          error: err.response.data
        })
      })
    })
}