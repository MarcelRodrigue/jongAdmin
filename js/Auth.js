function registerUser() {
  const username = document.getElementById('usernameInput').value;
  const email = document.getElementById('emailInput').value;
  const gender = document.getElementById('userGender').value;
  const phone = document.getElementById('phoneInput').value;
  const password = document.getElementById('passwordInput').value;

  const userData = {
      username,
      email,
      gender,
      phone,
      password
  };

  fetch('http://85.31.232.97:8000/api/registeradmin/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Registration successful:', data);
      // You can handle successful registration here, like redirecting to login page
      redirectToLogin();
  })
  .catch(error => {
      console.error('Error registering user:', error);
      // Handle error appropriately, e.g., show error message to user
  });
}



function loginUser() {
  const loginData = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  };

  fetch('http://85.31.232.97:8000/api/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Invalid username or password');
    }
    return response.json();
  })
  .then(data => {
    console.log('Login successful:', data);
    // Store token in localStorage
    localStorage.setItem('token', data.token);
    // Redirect to dashboard or any other protected route
    window.location.href = 'dashboard.html';
  })
  .catch(error => {
    console.error('Error logging in:', error);
    // Handle error appropriately, e.g., show error message to user
  });
}


// Function to check if user is authenticated
function isAuthenticated() {
  // Check if a token exists in localStorage
  return localStorage.getItem('token') !== null;
}

// Function to navigate to the login page
function redirectToLogin() {
  // Redirect the user to the login page
  window.location.href = 'login.html'; // Replace 'login.html' with your actual login page
}

// Function to protect routes
function protectRoute() {
  if (!isAuthenticated()) {
      redirectToLogin();
  }
}


document.getElementById("myregisterUser").addEventListener("click", registerUser )
