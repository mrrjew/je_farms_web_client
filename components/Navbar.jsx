
"use client"
import React,{useState,useEffect} from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon,ShoppingCartIcon } from '@heroicons/react/24/outline'
import { usePathname,useRouter } from 'next/navigation'
import { useDispatch,useSelector } from 'react-redux'
import { getCart } from '@/redux/cart/cart.slice'
import Link from "next/link"

export default function Navbar() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem("token");
      setIsLoggedIn(!!token);
    }
  }, []);

  const logout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem("token"); 
      setIsLoggedIn(false);
      typeof window !== 'undefined' ? window.location.reload(): null; // Remove from localStorage
    }
  };

  const { items: products } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const id = typeof window !== 'undefined' ? localStorage.getItem("cartId") : null;
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (token && id) {
      dispatch(getCart({ token, id }));
    }
  }, [dispatch, token, id]);

  const router = useRouter();

  const [regex,setRegex] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    router.push(`/products?search=${regex}`); // Redirect to the /products page
  };

  const handleChange = (e) => {
    setRegex(e.target.value); // Update the state directly with the new input value
  };

  return (
    <Disclosure as="div" className={`${pathname.includes("auth") ? "hidden" : "block"} bg-green sticky top-0 z-20`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center px-2 lg:px-0">
            <div className="flex-shrink-0">
              <img
                alt="Your Company"
                src="/assets/images/logo.png"
                className="h-8 w-auto mb-2"
              />
            </div>
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-4">
                {/* Current: "bg-green/50 text-white", Default: "text-gray-300 hover:bg-green-700 hover:text-white" */}
                <a href="/" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === "/" ? "text-white rounded-md bg-lime-300/50" : "text-slate-100"} hover:bg-lime-200/50 hover:cursor-pointer hover:text-white`}>
                  Home
                </a>
                <a
                  href="/about_us"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === "/about_us" ? "text-white rounded-md bg-lime-300/50" : "text-slate-100"} hover:bg-lime-200/50 hover:cursor-pointer hover:text-white`}
                >
                  About Us
                </a>
                <a
                  href="/services"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === "/services" ? "text-white rounded-md bg-lime-300/50" : "text-slate-100"} hover:bg-lime-200/50 hover:cursor-pointer hover:text-white`}
                >
                  Services
                </a>
                <a
                  href="/our_team"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === "/our_team" ? "text-white rounded-md bg-lime-300/50" : "text-slate-100"} hover:bg-lime-200/50 hover:cursor-pointer hover:text-white`}
                >
                  Our Team 
                </a>
                <a
                  href="/location"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === "/location" ? "text-white rounded-md bg-lime-300/50" : "text-slate-100"} hover:bg-lime-200/50 hover:cursor-pointer hover:text-white`}
                >
                  Location
                </a>
                
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </div>
                <form onSubmit={() => handleSubmit()} className="block">
                  <input
                    id="search"
                    name="search"
                    onChange={() => handleChange()}
                    type="search"
                    placeholder="Search"
                    className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-slate-100 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          
          {
            isLoggedIn ? (
              <div className="hidden lg:ml-4 lg:block">
            <div className="flex items-center">
              <Link
                href="/notification"
                className="relative flex-shrink-0 rounded-full p-1 text-white hover:text-gray focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <p className="absolute bottom-0 right-0 top-4 px-1 bg-red-500 pb-0 rounded-full text-white text-xs text-center font-bold">{products?.length}</p>
                <BellIcon aria-hidden="true" className="h-6 w-6" />

              </Link>

              <Link
                href="/cart"
                className="relative flex-shrink-0 rounded-full p-1 mx-2 text-white hover:text-gray focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View cart</span>
                <p className="absolute bottom-0 right-0 top-4 px-1 bg-red-500 pb-0 rounded-full text-white text-xs text-center font-bold">{products?.length}</p>
                <ShoppingCartIcon aria-hidden="true" className="h-6 w-6 " />

              </Link>


              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-4 flex-shrink-0">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <button onClick={logout} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
            ):(
              <div className='flex gap-2 max-lg:hidden'>
                <a className="text-slate-50 py-2 px-4" href="/auth/login">Log in</a>
                <a className="text-slate-50 py-2 px-4 bg-lime-300/50 rounded-md" href="/auth/signup">Sign up</a>
              </div>
            )
          }
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-green/50 text-white", Default: "text-gray-300 hover:bg-green-700 hover:text-white" */}
          <DisclosureButton
            as="a"
            href="/"
            className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-green-700 hover:text-white ${pathname === "/about_us" ? "text-white rounded-md bg-lime-300/50" : "text-slate-100"} `}
          >
            Home
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/about_us"
            className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-green-700 hover:text-white ${pathname === "/about_us" ? "text-white rounded-md bg-lime-300/50" : "text-slate-100"} `}
          >
            About Us
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/services"
            className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-green-700 hover:text-white ${pathname === "/about_us" ? "text-white rounded-md bg-lime-300/50" : "text-slate-100"} `}
          >
            Services
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/our_team"
            className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-green-700 hover:text-white ${pathname === "/about_us" ? "text-white rounded-md bg-lime-300/50" : "text-slate-100"} `}
          >
            Our Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/location"
            className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-green-700 hover:text-white ${pathname === "/about_us" ? "text-white rounded-md bg-lime-300/50" : "text-slate-100"} `}
          >
            Location
          </DisclosureButton>
        </div>
         {
          isLoggedIn ? (
            <div className="border-t border-slate-200 pb-3 pt-4">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">{user && user?.userName?.capitalize()}</div>
              <div className="text-sm font-medium text-slate-100">{user && user?.email}</div>
            </div>
            <Link
              href="/notification"
              className="relative ml-auto flex-shrink-0 rounded-full p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <p className="absolute bottom-0 right-0 top-4 px-1 bg-red-500 pb-0 rounded-full text-white text-xs text-center font-bold">{products?.length}</p>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </Link>

            <Link
                href="/cart"
                className="relative flex-shrink-0 rounded-full p-1 mx-2 text-white hover:text-gray focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View cart</span>
                <p className="absolute bottom-0 right-0 top-4 px-1 bg-red-500 pb-0 rounded-full text-white text-xs text-center font-bold">{products?.length}</p>
                <ShoppingCartIcon aria-hidden="true" className="h-6 w-6 " />

              </Link>
          </div>
          <div className="mt-3 space-y-1 px-2">
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-100 hover:bg-green-700 hover:text-white"
            >
              Your Profile
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-100 hover:bg-green-700 hover:text-white"
            >
              Settings
            </DisclosureButton>
            <DisclosureButton
              as="a"
              onClick={logout}
              className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-slate-100 hover:bg-green-700 hover:text-white"
            >
              Sign out
            </DisclosureButton> 
          </div>
        </div>
          ):(
            <div className='flex gap-2 border-t border-slate-200 pb-3 pt-4'>
                <a className="text-slate-50 py-2 px-4" href="/auth/login">Log in</a>
                <a className="text-slate-50 py-2 px-4 bg-lime-300/50 rounded-md" href="/auth/signup">Sign up</a>
            </div>
          )
         }
      </DisclosurePanel>
    </Disclosure>
  )
}
