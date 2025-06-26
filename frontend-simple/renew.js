// renew.js
// 👉 Gère le renouvellement de mot de passe ou de secret TOTP

document.getElementById('renew-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('renew-username').value;

  const res = await fetch(`${endpoint}/renew-credentials`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username })
  });

  const data = await res.text();
  document.getElementById('response').textContent = data;
});
