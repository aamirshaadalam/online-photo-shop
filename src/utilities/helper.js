export const setStyle = (property, value, refs) => {
  refs.forEach((ref) => {
    if (ref && ref.current) {
      ref.current.style[property] = value;
    }
  });
};

export const addCSSClass = (className, refs) => {
  refs.forEach((ref) => {
    if (ref && ref.current) {
      ref.current.classList.add(className);
    }
  });
};

export const hideElements = (refs) => {
  refs.forEach((ref) => {
    if (ref && ref.current) {
      ref.current.classList.add('invisible');
    }
  });
};

export const showElements = (refs) => {
  refs.forEach((ref) => {
    if (ref && ref.current) {
      ref.current.classList.remove('invisible');
    }
  });
};
