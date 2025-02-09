export default function UseGetLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
