export const setDisplay = (value, refs) => {
  refs.forEach((ref) => {
    if (ref && ref.current) {
      ref.current.style.display = value;
    }
  });
};
