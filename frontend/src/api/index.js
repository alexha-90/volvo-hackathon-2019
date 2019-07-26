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


export const submitReservation = () => {
  return fetch(
    `https://smartfleet.ngrok.io/portal/vehicles`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + btoa('ccs.testcars@gmail.com:!Hse123#')
      }
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