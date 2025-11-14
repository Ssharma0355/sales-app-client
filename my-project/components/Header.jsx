'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
  PlayCircleIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels', icon: ArrowPathIcon },
];

const callsToAction = [
  { name: 'Watch demo', icon: PlayCircleIcon, href: '#' },
  { name: 'Contact sales', icon: PhoneIcon, href: '#' },
];

const navigation = [
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-10">
          {/* Features Dropdown */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 hover:text-indigo-600 transition">
              Features
              <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-64 -translate-x-1/2 transform rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-200 transition">
              <div className="space-y-1">
                {products.map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    className="flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 transition"
                  >
                    <item.icon className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-2 border-t border-gray-100 pt-2">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 rounded-lg p-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* Other Links */}
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Login (Desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Logo"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {/* Features in Mobile */}
                <div className="-mx-3">
                  <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    Features
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  </button>
                  <div className="mt-1 space-y-1 px-3">
                    {products.map((item) => (
                      <a
                        key={item.name}
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <item.icon className="h-5 w-5 text-indigo-600" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-indigo-600 hover:bg-indigo-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}