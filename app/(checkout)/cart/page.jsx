"use client";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid';
import { getCart, removeFromCart } from '../../../redux/cart/cart.slice';
import { ThisUser } from '@/redux/auth/auth.reducer';

const CartItem = ({ product, onRemove }) => (
  <li key={product?.id} className="flex py-6 sm:py-10">
    <div className="flex-shrink-0">
      <img
        alt={product?.product?.name}
        src={product?.product?.href}
        className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
      />
    </div>
    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
        <div>
          <div className="flex justify-between">
            <h3 className="text-sm">
              <a href="#" className="font-medium text-gray-700 hover:text-gray-800">
                {product?.product?.name}
              </a>
            </h3>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{product?.color}</p>
            {product?.size && (
              <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product?.size}</p>
            )}
          </div>
          <p className="mt-1 text-sm font-medium text-gray-900">${product?.price}</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:pr-9">
          <label htmlFor={`quantity-${product?.id}`} className="sr-only">
            Quantity, {product?.product?.name}
          </label>
          <select
            id={`quantity-${product?.id}`}
            name={`quantity-${product?.id}`}
            className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          >
            {[...Array(8).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
          <div className="absolute right-0 top-0">
            <button
              onClick={() => onRemove(product?.product?.id)}
              type='button'
              className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Remove</span>
              <XMarkIconMini aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <p className="mt-4 flex space-x-2 text-sm text-gray-700">
        {product?.inStock ? (
          <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />
        ) : (
          <ClockIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-300" />
        )}
        <span>{product?.inStock ? 'In stock' : `Delivers in 12 hours`}</span>
      </p>
    </div>
  </li>
);

const OrderSummary = ({ subTotal }) => (
  <section
    aria-labelledby="summary-heading"
    className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
  >
    <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
      Order summary
    </h2>
    <dl className="mt-6 space-y-4">
      <div className="flex items-center justify-between">
        <dt className="text-sm text-gray-600">Subtotal</dt>
        <dd className="text-sm font-medium text-gray-900">${subTotal.toFixed(2)}</dd>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt className="flex items-center text-sm text-gray-600">
          <span>Shipping estimate</span>
          <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Learn more about how shipping is calculated</span>
            <QuestionMarkCircleIcon aria-hidden="true" className="h-5 w-5" />
          </a>
        </dt>
        <dd className="text-sm font-medium text-gray-900">${(0.05 * subTotal).toFixed(2)}</dd>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt className="flex text-sm text-gray-600">
          <span>Tax estimate</span>
          <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Learn more about how tax is calculated</span>
            <QuestionMarkCircleIcon aria-hidden="true" className="h-5 w-5" />
          </a>
        </dt>
        <dd className="text-sm font-medium text-gray-900">${(0.07 * subTotal).toFixed(2)}</dd>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt className="text-base font-medium text-gray-900">Order total</dt>
        <dd className="text-base font-medium text-gray-900">${(0.12 * subTotal + subTotal).toFixed(2)}</dd>
      </div>
    </dl>
    <div className="mt-6">
      <button
        type="submit"
        className="w-full rounded-md border border-transparent bg-green/80 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-green focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Checkout
      </button>
    </div>
  </section>
);

export default function Cart() {
  const dispatch = useDispatch();
  const { items: products } = useSelector((state) => state.cart);
  const { user: { cartId: id } } = useSelector((state) => state.auth);
  
  // Safely access token within useEffect
  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
    
    if (token && id) {
      dispatch(ThisUser(token));
      dispatch(getCart({ token, cartId: id }));
    }
  }, [dispatch, id]);

  const handleRemoveFromCart = async (productId) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

    if (token && id) {
      try {
        await dispatch(removeFromCart({ token, cartId: id, productId }));
        await dispatch(getCart({ token, cartId: id }));
      } catch (error) {
        console.error('Error removing item from cart:', error);
      }
    }
  };

  const subTotal = Array.isArray(products) 
    ? products.reduce((acc, product) => acc + (product?.product?.price || 0), 0) 
    : 0;
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

        {products?.length > 0 ? (
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>
              <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                {products?.map(product => (
                  <CartItem key={product?.id} product={product} onRemove={handleRemoveFromCart} />
                ))}
              </ul>
            </section>

            <OrderSummary subTotal={subTotal} />
          </form>
        ) : (
          <h1 className="text-xl text-center my-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            No products added to Cart
          </h1>
        )}
      </main>
    </div>
  );
}
