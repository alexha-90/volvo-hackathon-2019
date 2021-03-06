export const loginUser = (email, password) => {
  return fetch(
    `https://smartfleet.ngrok.io/portal/login`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + btoa(email + ":" + password)
      }
    }
  )
};

export const getVehicles = () => {
  return fetch(
    `https://smartfleet.ngrok.io/portal/vehicles`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Basic ' + btoa('ccs.testcars@gmail.com:!Hse123#')
      }
    }
  )
};

export const getBookings = () => {
  return fetch(
    `https://smartfleet.ngrok.io/portal/bookings`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Basic ' + btoa('ccs.testcars@gmail.com:!Hse123#')
      }
    }
  )
};

// export const submitReservationForReview = (obj) => {
//   return fetch(
//     `http://localhost:1337/testcontents`,
//     {
//       method: 'POST',
//       body: {
//         name: "from code"
//       }
//     }
//   )
// };

export const submitReservationForReview = (obj) => {
  return fetch(
    `http://localhost:1337/reservations`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    }
  )
};

export const submitApprovedReservation = (submitObj) => {
  return fetch(
    `https://smartfleet.ngrok.io/portal/bookings`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('ccs.testcars@gmail.com:!Hse123#')
      },
      body: JSON.stringify(submitObj)
    }
  )
};

//================ ADMIN PANEL API CALLS ====================//

export const getUsers = () => {
  return fetch(
    `https://smartfleet.ngrok.io/portal/users`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Basic ' + btoa('ccs.testcars@gmail.com:!Hse123#')
      }
    }
  )
};
