const API_BASE = 'https://rapeme-lol-backend.onrender.com';

document.getElementById('login').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (data.success) {
      alert('You’re in!');
      window.location.href = '/profile.html';
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(err);
    alert("Error connecting to server");
  }
});