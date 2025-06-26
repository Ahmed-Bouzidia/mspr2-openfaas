// totp.js
// 👉 Gère la génération et la vérification TOTP + renouvellement

// Générer le secret
document.getElementById('totp-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('totp-username').value;

  const res = await fetch(`${endpoint}/generate-2fa-secret`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username })
  });

  const data = await res.text();
  document.getElementById('response').textContent = data;
});

// Vérifier code TOTP
document.getElementById('verify-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('verify-username').value;
  const code = document.getElementById('verify-code').value;

  const res = await fetch(`${endpoint}/verify-2fa`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, code })
  });

  const data = await res.text();
  document.getElementById('response').textContent = data;
});
