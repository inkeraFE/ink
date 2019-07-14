function setHash() {
  window._popupHash = Date.now()
}

function getHash() {
  return window._popupHash
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

export { setHash, getHash, isObject }
