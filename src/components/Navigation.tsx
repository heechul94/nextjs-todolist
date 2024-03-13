import Link from "next/link";
import React from "react";

const Navigation = () => {
  const link = [
    { name: "about", href: "/about" },
    { name: "report", href: "/report" },
    { name: "todos-csr", href: "/todos-csr" },
    { name: "todos-ssr", href: "/todos-ssr" },
  ];

  return (
    <nav>
      {link.map((path) => (
        <Link key={path.name} href={path.href}>
          {path.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
