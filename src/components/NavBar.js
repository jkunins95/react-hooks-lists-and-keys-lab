import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {/* Map over the `links` array and create an "a" element for each item */}
      {links.map((link, index) => (
        // set `href` attribute dynamically based on the value of `link`
        <a key={index} href={`#${link}`}>{link}</a>
      ))}
    </nav>
  )
}

export default NavBar;
