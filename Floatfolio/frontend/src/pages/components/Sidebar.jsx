import { useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();
  if (location.pathname === '/signup'||location.pathname === '/signin') {
    return null;
  }

  return (
    <>
      <section className="sidebar">
<h1>sidebar</h1>
      </section>
    </>
  );
}
export default Sidebar;
