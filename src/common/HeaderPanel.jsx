import DarkModeToggle from "./DarkModeToggle";

function HeaderPanel({ children }) {
  return (
    <div className="shadow-md sticky top-0 py-1 bg-secondary-50">
      <div className="flex items-center justify-between py-2 container xl:max-w-screen-xl">
        <p className="font-bold">{children}</p>
        <DarkModeToggle />
      </div>
    </div>
  );
}
export default HeaderPanel;
