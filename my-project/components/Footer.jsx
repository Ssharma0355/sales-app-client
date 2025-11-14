// components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" className="h-8 w-auto" />
              <span className="text-xl font-semibold">LeadFlow</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 LeadFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }