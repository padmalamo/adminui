export const STORAGE = {
  set: (name, value, options = { parsed: false }) => {
    try {
      const { parsed } = options;
      if (parsed) localStorage.setItem(name, JSON.stringify(value));
      localStorage.setItem(name, value);
      return true;
    } catch (error) {
      console.error(error);
    }
  },
  get: (name, options = { parse: false }) => {
    try {
      const { parsed } = options;
      let value = localStorage.getItem(name);
      if (parsed) return JSON.parse(value);
      return value;
    } catch (error) {
      console.error(error);
    }
  }
};
