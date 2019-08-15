const saveInSessionStorage = (store) => (next) => (action) => {
  const resultValue = next(action);
  sessionStorage.setItem('HARDWARE_STORE_CARTS', JSON.stringify(store.getState().carts));
  return resultValue;
}

export default saveInSessionStorage;