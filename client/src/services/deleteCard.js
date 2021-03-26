export default function deleteCard(id) {
  return fetch(`/cards/${id}`, {
    method: 'Delete',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => (data.error ? Promise.reject(data) : data))
}
