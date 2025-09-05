import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
      <footer className="fixed bottom-0 left-0 right-0 w-full glass-effect shadow-lg py-2 px-3 sm:px-4 z-50">
        {/* Layout para telas maiores que 926px */}
        <div className="footer-desktop items-center">
          {/* Logo e versão à esquerda */}
          <div className="flex items-center gap-2 absolute left-3 sm:left-4">
            <span className="font-bold text-base sm:text-lg catbutler-title">CatButler</span>
            <span className="text-sm sm:text-base bg-blue-900 text-white px-2 py-1 rounded-full animate-pulse">v2.0.0</span>
          </div>

          {/* Frase centralizada */}
          <div className="flex-1 flex justify-center">
            <div className="text-sm sm:text-base text-gray-800 dark:text-gray-300 text-center flex items-center gap-3">
              <span>
                © {new Date().getFullYear()} Izadora — Curtiu?{' '}
                <a className="link text-blue-600 hover:underline font-bold" href="https://catbytes.netlify.app" target="_blank">Conheça meu trabalho</a> ou{' '}
                <a className="link text-pink-600 hover:underline font-bold" href="https://ko-fi.com/ipierette" target="_blank">apoie no Ko‑fi</a>.
              </span>
              <div className="flex gap-3 ml-3">
                <a className="icon-link" href="https://github.com/ipierette" target="_blank" title="GitHub">
                  <FaGithub className="text-xl sm:text-2xl icon-social" />
                </a>
                <a className="icon-link" href="https://www.linkedin.com" target="_blank" title="LinkedIn">
                  <FaLinkedin className="text-xl sm:text-2xl icon-social" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Layout para telas menores que 926px - reorganizado */}
        <div className="footer-mobile flex-col gap-2 py-1">
          {/* Primeira linha: Logo e versão */}
          <div className="flex items-center justify-center gap-2">
            <span className="font-bold text-sm catbutler-title">CatButler</span>
            <span className="text-xs bg-blue-900 text-white px-2 py-1 rounded-full animate-pulse">v2.0.0</span>
          </div>

          {/* Segunda linha: Frase e ícones */}
          <div className="flex flex-col items-center gap-2">
            <div className="text-xs text-gray-800 dark:text-gray-300 text-center">
              © {new Date().getFullYear()} Izadora — Curtiu?{' '}
              <a className="link text-blue-600 hover:underline font-bold" href="https://catbytes.netlify.app" target="_blank">Conheça meu trabalho</a> ou{' '}
              <a className="link text-pink-600 hover:underline font-bold" href="https://ko-fi.com/ipierette" target="_blank">apoie no Ko‑fi</a>.
            </div>
            <div className="flex gap-3">
              <a className="icon-link" href="https://github.com/ipierette" target="_blank" title="GitHub">
                <FaGithub className="text-lg icon-social" />
              </a>
              <a className="icon-link" href="https://www.linkedin.com" target="_blank" title="LinkedIn">
                <FaLinkedin className="text-lg icon-social" />
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
}
