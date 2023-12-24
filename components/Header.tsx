"use client";
import Link from "next/link";
import React, { useState, Fragment } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftIcon,
  PlayCircleIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import { Popover, Dialog, Disclosure, Transition } from "@headlessui/react";
import { cn } from "../lib/utils";

const products = [
  {
    name: "Book a stay",
    description: "Get a better understanding of our traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a flight",
    description: "Speak directly with customers",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Contact our support team",
    description: "Get quick and easy response",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

const callToAction = [
  { name: "See Demo booking", href: "#", icon: PlayCircleIcon },
  { name: "Customer support", href: "#", icon: PhoneIcon },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="w-full shadow-md sticky top-0 left-0">
      <nav className="mx-auto flex max-w-7xl justify-between items-center p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-[16px] font-bold cursor-pointer text-blue-400">
              BUKER.COM
            </span>
          </Link>
        </div>

        <div className=" flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center p-2.5 rounded-md text-blue-400"
            onClick={() => {
              setMobileMenuOpen(true);
            }}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex gap-x-1 text-sm font-semibold leading-6 text-blue-300">
              Stay
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-blue-300"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full mt-x w-screen max-w-md overflow-hidden rounded-3xl ring-1 ring-gray-900/5 shadow-lg">
                <div className="p-4">
                  {products.map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-x-6 rounded-lg leading-6 hover:bg-gray-50 p-4 text-sm"
                    >
                      <div className="flex h-11 w-11 flex-none justify-center items-center bg-gray-50 rounded-lg group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6 text-blue-500 group-hover:text-blue-700"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-blue-500"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-x-4 mt-1 flex gap-x-4 items-center justify-center">
                  {callToAction.map((items) => (
                    <div
                      key={items.name}
                      className="flex gap-x-2 items-center hover:bg-blue-50 rounded-lg p-2"
                    >
                      <div className="flex h-11 w-11 flex-none justify-center items-center bg-gray-50 rounded-lg group-hover:bg-gray-200">
                        <items.icon
                          className="h-6 w-6 text-blue-500 group-hover:text-blue-700"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <a
                          href={items.href}
                          className="text-blue-500 font-semibold"
                        >
                          {items.name}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm text-blue-300 leading-6 font-semibold">
            Flight
          </a>
          <a href="#" className="text-sm text-blue-300 leading-6 font-semibold">
            Car Renals
          </a>
          <a href="#" className="text-sm text-blue-300 leading-6 font-semibold">
            Attractions
          </a>
          <a href="#" className="text-sm text-blue-300 leading-6 font-semibold">
            Flight + Hotels
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <a href="#" className="text-sm font-semibold leading-6 text-blue-300">
            Login <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 w-full z-10 overflow-y-auto bg-blue-700 p-6 sm:max-w-sm ring-1 ring-gray-800/5">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">BUKER.COM</span>
              <span className="text-[16px] font-bold cursor-pointer text-white md:hidden">
                BUKER.COM
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 p-2.5 rounded-md text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-m-6 divide-y divide-y-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center justify-between w-full rounded-lg py-2 pl-3 pr-3.5 text-white font-semibold hover:bg-blue-900 text-base leading-7">
                        <span className="sr-only">Open</span>
                        <span className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                          Stay
                        </span>
                        <ChevronDownIcon
                          className={cn(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callToAction].map((item) => (
                          <Disclosure.Button
                            as="a"
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg py-2 pl-10 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <div className="">
                  <a
                    href="#"
                    className="text-sm text-white block leading-6 font-semibold hover:bg-blue-800 p-3"
                  >
                    Flight
                  </a>
                  <a
                    href="#"
                    className="text-sm text-white block leading-6 font-semibold hover:bg-blue-800 p-3"
                  >
                    Car Renals
                  </a>
                  <a
                    href="#"
                    className="text-sm text-white block leading-6 font-semibold hover:bg-blue-800 p-3"
                  >
                    Attractions
                  </a>
                  <a
                    href="#"
                    className="text-sm text-white block leading-6 font-semibold hover:bg-blue-800 p-3"
                  >
                    Flight + Hotels
                  </a>
                </div>

                <div className="block hover:bg-blue-800 p-3 mt-6">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Login <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
