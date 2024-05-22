import AddToCart from "@/components/cart/place-order/place-order";
import Cart from "@/components/cart/cart";
import getCartData from "@/util/database/cart/get-cart-data";
import React from "react";

export default function CartPage({ data }) {
  console.log(data);

  return (
    <div className="md:pl-20 md:pr-20 mt-10">
      <div>
        {data?.map((item) => {
          return <Cart {...item} />;
        })}
      </div>

      <div className="flex justify-center">
        <AddToCart />
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const user = query.user;
  const data = await getCartData(user);

  return {
    props: {
      data,
    },
  };
}
