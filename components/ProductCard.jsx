import { removeFromCart, addToCart } from '@/redux/cart/cart.slice';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductCard({ product }) {
  const { id, tag, href, name, price } = product;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Get cartId from localStorage on mount
  const [cartPayload, setCartPayload] = useState({
    cartId: typeof window !== 'undefined' ? +localStorage.getItem("cartId") : null,
    productId: +id,
    quantity: 1,
    price: +price
  });

  const dispatch = useDispatch();
  const { status } = useSelector(state => state.cart);

  const handleAddToCart = () => {
    setIsAddedToCart(prev => !prev);
    dispatch(addToCart(cartPayload));
  };

  // useEffect(() => {
  //   if (isAddedToCart) {
  //     console.log(cartPayload)
  //   } else {
  //     dispatch(removeFromCart(id));
  //   }
  // }, [isAddedToCart, cartPayload, dispatch, id]);

  const handleToggleFavorite = () => {
    setIsFavorite(prev => !prev);
  };

  return (
    <div className="rounded-lg w-full sm:w-1/5 shadow-lg">
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        <p className="bg-slate-100 z-10 absolute top-0 left-0 rounded-md text-slate-900/90 px-4 py-1">
          {tag || "NEW"}
        </p>
        <Image
          src={href}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="flex justify-between px-2 py-2">
        <div>
          <p className="text-lg">{name}</p>
          <p className="text-md text-gray-900/70">{price}</p>
        </div>

        <div className="flex gap-1">
          <button onClick={handleAddToCart}>
            <Image
              src={isAddedToCart ? "/assets/icons/tick1.png" : "/assets/icons/cart.png"}
              alt="cart"
              width={isAddedToCart ? 40 : 20}
              height={isAddedToCart ? 40 : 20}
            />
          </button>
          <button onClick={handleToggleFavorite}>
            {isFavorite ? (
              <Image
                src="/assets/icons/star.png"
                alt="favorite"
                width={20}
                height={20}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
