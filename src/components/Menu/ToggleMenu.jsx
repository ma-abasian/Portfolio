
const ToggleMenu = ({onClick}) => {
  return (
      <button className="mobile__menu-toggle" onClick={onClick}>
        <span className="material-symbols-outlined">
          menu
        </span>
      </button>
  );
};

export default ToggleMenu;