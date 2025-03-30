import React from "react";

function Footer() {
  return (
    <div className="mt-10">
      <footer className="footer footer-horizontal footer-center text-base-content rounded-lg p-6 shadow-lg dark:bg-gray-900 dark:text-white transition-all duration-300 dark:shadow-xl dark:border-t border-gray-700">
        {/* Navigation Links */}
        <nav className="grid grid-flow-col gap-6 text-lg font-medium">
          {["About us", "Contact", "Jobs", "Press kit"].map((item, index) => (
            <a
              key={index}
              className="link link-hover hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Media Icons */}
        <nav className="mt-4">
          <div className="grid grid-flow-col gap-6">
            {[
              { href: "#", icon: "twitter", color: "text-blue-400" },
              { href: "#", icon: "youtube", color: "text-red-500" },
              { href: "#", icon: "facebook", color: "text-blue-600" },
            ].map(({ href, icon, color }, index) => (
              <a key={index} href={href} className={`group ${color}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="transition-all duration-300 group-hover:scale-110"
                >
                  {icon === "twitter" && (
                    <path d="M24 4.5a9.9 9.9 0 01-2.8.8 4.9 4.9 0 002.2-2.7c-1 .6-2 1-3.1 1.2a5 5 0 00-8.5 4.5A14 14 0 011.7 3a5 5 0 001.5 6.7A5 5 0 01.9 9v.1a5 5 0 004 4.8 5 5 0 01-2.3.1 5 5 0 004.6 3.4A10 10 0 010 19.5a14 14 0 007.6 2.3A14 14 0 0022 7.5c1-.7 1.8-1.5 2.5-2.5z" />
                  )}
                  {icon === "youtube" && (
                    <path d="M19.6 3.2c-3.6-.2-11.6-.2-15.2 0-3.9.3-4.3 2.6-4.4 8.8.1 6.2.5 8.5 4.4 8.8 3.6.2 11.6.2 15.2 0 3.9-.3 4.3-2.6 4.4-8.8-.1-6.2-.5-8.5-4.4-8.8zm-10.6 12.8v-8l8 4-8 4z" />
                  )}
                  {icon === "facebook" && (
                    <path d="M9 8H6v4h3v12h5V12h3.6l.4-4h-4V7c0-1 0-1.3 1.1-1.3h2.9v-5h-3.8C10.4 0 9 1.6 9 4.6V8z" />
                  )}
                </svg>
              </a>
            ))}
          </div>
        </nav>

        {/* Copyright Section */}
        <aside className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p className="hover:scale-105 transition-transform duration-300">
            © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="font-semibold text-blue-500 dark:text-cyan-400">
              ACME Industries Ltd
            </span>
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
