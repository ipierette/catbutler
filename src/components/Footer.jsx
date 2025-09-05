import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
  <footer className="w-full glass-effect shadow-lg py-1.5 px-3 sm:px-4 flex items-center fixed bottom-0 left-0 right-0 z-10 text-xs sm:text-sm">
      {/* Logo e versão à esquerda */}
      <div className="flex items-center gap-2 absolute left-3 sm:left-4">
        <span className="font-bold text-sm sm:text-base catbutler-title">CatButler</span>
        <span className="text-xs sm:text-sm bg-blue-900 text-white px-1.5 py-0.5 rounded-full animate-pulse">v1.0</span>
      </div>

      {/* Frase centralizada */}
      <div className="flex-1 flex justify-center">
        <div className="text-xs sm:text-sm text-gray-800 dark:text-gray-300 text-center flex items-center gap-2">
          <span>
            © {new Date().getFullYear()} Izadora — Curtiu?{' '}
            <a className="link text-blue-600 hover:underline font-bold" href="https://catbytes.netlify.app" target="_blank">Conheça meu trabalho</a> ou{' '}
            <a className="link text-pink-600 hover:underline font-bold" href="https://ko-fi.com" target="_blank">apoie no Ko‑fi</a>.
          </span>
          <div className="flex gap-2 ml-2">
            <a className="icon-link" href="https://github.com/ipierette" target="_blank" title="GitHub">
              <FaGithub className="text-lg sm:text-xl icon-social" />
            </a>
            <a className="icon-link" href="https://www.linkedin.com" target="_blank" title="LinkedIn">
              <FaLinkedin className="text-lg sm:text-xl icon-social" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
