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
    <nav className="flex flex-col p-2 m-2 h-fit border border-sky-500 rounded-md">
      {link.map((path) => (
        <Link key={path.name} href={path.href}>
          {path.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
