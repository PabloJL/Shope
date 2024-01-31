// import React from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { useContext } from "react";
import ProductDetail from "../../Components/ProductDetail";
import { CartContext } from "../../Context";

function Home() {
  const context = useContext(CartContext);
  const items = context.items;

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Home</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className=" bg-bk rounded-lg w-80 p-4 mb-6 focus:outline-none drop-shadow-sm"
        onChange={(e) => context.setSearch(e.target.value)}
      />
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
