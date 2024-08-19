"use client";

import { ThisUser } from '@/redux/auth/auth.reducer';
import { removeFromCart, addToCart, getCart} from '@/redux/cart/cart.slice';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

export default function ProductCard({ product }) {
  const { id, tag, href, name, price } = product;

  
  const dispatch = useDispatch();
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  
  const {items} = useSelector((state) => state.cart)
  const {user} = useSelector((state) => state.auth)
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(!!items?.find((item) => item.product.id === product.id));

  useEffect(() => {
    if (token) {
      dispatch(ThisUser(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token && user && user.cartId) {
      dispatch(getCart({ token, cartId: user.cartId }));
    }
  }, [dispatch, token, user]);


  

  const [cartPayload, setCartPayload] = useState({
    productId: +id,
    quantity: 1,
    price: +price
  });
  
  const handleAddToCart = () => {
    if(user.cartId && token){
      dispatch(addToCart({ token, productData:{cartId: user && user.cartId,...cartPayload }}));
      setIsAddedToCart(true);
    }

  };    

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
          <p className="text-md text-gray-900/70">${price.toFixed(2)}</p>
        </div>

        <div className="flex gap-1">
          <button type="button" onClick={() => handleAddToCart()} aria-label={isAddedToCart ? "Remove from cart" : "Add to cart"}>
            <Image
              src={isAddedToCart ? "/assets/icons/tick1.png" : "/assets/icons/cart.png"}
              alt={isAddedToCart ? "Added to cart" : "Add to cart"}
              width={isAddedToCart ? 40 : 20}
              height={isAddedToCart ? 40 : 20}
            />
          </button>
          <button onClick={() => handleToggleFavorite()} aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}>
            {isFavorite ? (
              <Image
                src="/assets/icons/star.png"
                alt="Favorite"
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
