
import { pageSettings } from "../../settings/settings.js";
import { ListItem } from "../shared/listitem.comp.jsx";
export function NavbarPublic() {

    const { publicNavbar } = pageSettings.navbars;
    return (
        <div class="navbar bg-base-200 shadow-sm ">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {publicNavbar.map((item) => {
  return (
    <ListItem
      key={item.id}
      content={item.label}
      link={item.href}
    />
  );
})}
      </ul>
    </div>
  </div>
 <div className="navbar-center">
  <a className="btn btn-ghost text-xl">
    {pageSettings.misc.brand}
  </a>
</div>
  <div class="navbar-end">
   <input
  type="text"
  placeholder= "dein Lieblingsnaschwerk …"
  className="input input-xs w-40"
/>
  </div>

  
</div>
    )
}