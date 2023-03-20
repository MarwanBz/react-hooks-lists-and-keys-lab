import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {/* {links.map(link=> (
        <a href={`# ${link}`}>{link}</a>
      ))} */}
      <a href={"#" + links[0]}>home</a>
      <a href={"#" + links[1]}>about</a>
      <a href={"#" + links[2]}>projects</a>
    </nav>
  );
}

export default NavBar;
