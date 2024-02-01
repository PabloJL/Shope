// import React from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { useContext } from "react";
import ProductDetail from "../../Components/ProductDetail";
import { CartContext } from "../../Context";
import { IoSearch } from "react-icons/io5";

function Home() {
  const context = useContext(CartContext);
  const items = context.items;

  const renderView = () => {
    const itemsToRender =
      context.search?.length > 0 ? context.filteredItems : items;

    if (itemsToRender?.length > 0) {
      return itemsToRender.map((item) => <Card key={item.id} data={item} />);
    } else {
      return <p>Product not Found</p>;
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Home</h1>
      </div>
      <div className=" bg-bk rounded-lg w-96 p-4 mb-6 drop-shadow-sm flex justify-between items-center ">
        <input
          type="text"
          placeholder="Search a product"
          className="focus:outline-none bg-inherit w-3/4 "
          onChange={(e) => context.setSearch(e.target.value)}
        />
        <IoSearch className=" text-xl" />
      </div>
      <section className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl">
        {renderView()}
      </section>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
