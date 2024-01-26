// import React from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { useState, useEffect } from "react";
import { apiUrl } from "../../Api";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`Ha ocurrido un problema: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      Home
      <section className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </section>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
