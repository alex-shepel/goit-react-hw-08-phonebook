const set = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return null;
  }
};

const get = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
};

const del = key => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    return null;
  }
};

export { get, set, del };
