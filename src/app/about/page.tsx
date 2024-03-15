import Image from "next/image";
import React from "react";

const AboutPage = async () => {
  const response = await fetch("http://localhost:4000/companyInfo", {
    cache: "force-cache",
  });

  const data = await response.json();

  return (
    <main className="flex flex-col">
      <h1 className="mb-5">About Page</h1>
      <p>회사 이름: {data.name}</p>
      <p>소개: {data.description}</p>
      <img src={data.image} alt="회사 로고" />
    </main>
  );
};

export default AboutPage;
