export const menuOutsideClose = (ref, closer) => {
  const handleClickOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      closer(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("touchstart", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("touchstart", handleClickOutside);
  };
};
