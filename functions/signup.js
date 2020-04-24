const axios = require('axios');

module.exports.handler = function (event, context, callback) {
  const mailChimpApi = 'e17845ab44bea1afb192716d9bf39390-us8';
  const memberListId = '';

  const formData = JSON.parse(event.body);

  const data = {
    email_address: formData.email,
    statut: "subscribed"
  }

  axios
    .post(`https://us8.admin.mailchimp.com/3.0/lists/${memberListId}/members`, data, {
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
          error: err
        })
      })
    })
}