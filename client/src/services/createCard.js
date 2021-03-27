export default function createCard(card) {
  return fetch('/cards', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(card),
  })
    .then(res =>
      res.ok ? res.json() : Promise.reject(`HTTP Error: ${res.status}`)
    )
    .then(data => (data.error ? Promise.reject(data) : data))
}
