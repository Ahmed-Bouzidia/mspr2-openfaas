// register.js
// 👉 Gère la création de compte

document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;

  const res = await fetch(`${endpoint}/create-account-secure`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await res.text(); // On utilise .text() pour afficher toutes réponses
  document.getElementById('response').textContent = data;
});
