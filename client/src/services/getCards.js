export default function getCards() {
  return fetch('/cards').then(res =>
    res.ok ? res.json() : Promise.reject(`HTTP Error: ${res.status}`)
  )
}
