import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import gatoGif from "../assets/images/gato-unscreen.gif";

function TermsModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="glass-effect rounded-xl shadow-lg max-w-md w-full p-6 relative fade-in-up">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl transition-colors">&times;</button>
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><i className="fa-solid fa-file-contract text-green-400"></i> Termos de uso</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">Versão resumida dos termos. Ao continuar, você concorda com as condições abaixo.</p>
        <h4 className="font-semibold mt-4 mb-1">Uso do serviço</h4>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-2">
          <li>Conteúdo "como está", sem garantias.</li>
          <li>Não use para atividades ilegais ou que violem direitos de terceiros.</li>
          <li>Funcionalidades e políticas podem mudar a qualquer momento.</li>
        </ul>
        <h4 className="font-semibold mt-4 mb-1">Dados e privacidade</h4>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4">
          <li>Coletamos dados de uso para melhorar a experiência.</li>
          <li>Você pode solicitar remoção de dados identificáveis.</li>
        </ul>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="btn px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold shadow transition">Fechar</button>
          <button onClick={onClose} className="btn px-4 py-2 rounded-lg bg-green-400 hover:bg-green-500 text-white font-semibold shadow transition"><i className="fa-solid fa-check"></i> Aceito</button>
        </div>
      </div>
    </div>
  );
}

TermsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function Home() {
  const [showTerms, setShowTerms] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [recentActivity, setRecentActivity] = useState([]);

  // Atualizar horário a cada minuto
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Obter saudação baseada no horário
  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  // Obter sugestão baseada no horário
  const getTimeBasedSuggestion = () => {
    const hour = currentTime.getHours();
    if (hour >= 6 && hour < 10) {
      return "Que tal preparar um café da manhã nutritivo?";
    }
    if (hour >= 10 && hour < 12) {
      return "Hora de organizar as tarefas do dia!";
    }
    if (hour >= 12 && hour < 14) {
      return "Vamos preparar o almoço com ingredientes frescos?";
    }
    if (hour >= 14 && hour < 16) {
      return "Que tal uma faxina rápida na cozinha?";
    }
    if (hour >= 16 && hour < 18) {
      return "Hora de fazer as compras para o jantar!";
    }
    if (hour >= 18 && hour < 20) {
      return "Vamos preparar um jantar especial?";
    }
    return "Que tal planejar o dia de amanhã?";
  };

  // Simular dados de atividade recente
  useEffect(() => {
    setRecentActivity([
      { id: 1, action: "Receita sugerida", item: "Pasta Carbonara", time: "2h atrás", icon: "🍝" },
      { id: 2, action: "Lista de compras", item: "Mercado Central", time: "Ontem", icon: "🛒" },
      { id: 3, action: "Rotina de faxina", item: "Cozinha", time: "2 dias atrás", icon: "🧹" }
    ]);
  }, []);

  return (
    <main className="min-h-screen p-2 sm:p-3 md:p-4 max-w-7xl mx-auto pb-20">
      {/* Hero Section - Compacta e proporcional */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6 w-full mx-auto glass-effect rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 fade-in-up bg-white/95 dark:bg-gray-700 border border-gray-200 dark:border-gray-500 min-h-[200px] lg:min-h-[240px]">
        <div className="flex flex-col items-center lg:items-start justify-center gap-3 lg:w-2/3 text-center lg:text-left px-2 sm:px-0">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
              {getGreeting()}, <span className="visitante-span">visitante</span>
            </h1>
            <span className="text-2xl" aria-label="paz">✌️</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-800 dark:text-white max-w-xl font-medium leading-relaxed mb-3">
            Organize sua casa com IA — receitas, faxina e compras numa experiência fluida.
          </p>
          <div className="bg-green-100 dark:bg-green-600 border border-green-300 dark:border-green-400 rounded-lg p-2 mb-2 hero-suggestion-box">
            <p className="text-green-900 dark:text-white font-semibold text-xs flex items-center gap-2">
              <i className="fa-solid fa-lightbulb text-green-600 dark:text-white"></i>
              {getTimeBasedSuggestion()}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-2">
            <a href="/cozinha-ia" className="btn px-2.5 py-1.5 rounded-lg bg-green-400 hover:bg-green-500 text-white dark:text-white font-semibold shadow-md transition text-xs flex items-center gap-1 hover:scale-105 transform"><i className="fa-solid fa-bolt"></i> Começar</a>
            <a href="/mercado-ia" className="btn px-2.5 py-1.5 rounded-lg bg-blue-400 hover:bg-blue-500 text-white dark:text-white font-semibold shadow-md transition text-xs flex items-center gap-1 hover:scale-105 transform"><i className="fa-solid fa-tags"></i> Comparar preços</a>
            <button type="button" onClick={() => setShowTerms(true)} className="btn px-2.5 py-1.5 rounded-lg bg-purple-200 hover:bg-purple-300 dark:bg-purple-800 dark:hover:bg-purple-700 text-purple-800 dark:text-purple-200 font-semibold shadow-md transition text-xs flex items-center gap-1 hover:scale-105 transform"><i className="fa-solid fa-file-contract"></i> Termos</button>
          </div>
          <ul className="flex flex-wrap gap-1 sm:gap-2 items-center justify-center lg:justify-start text-center lg:text-left text-gray-700 dark:text-white text-xs font-semibold feature-list">
            <li className="flex items-center gap-1 sm:gap-2 whitespace-nowrap"><i className="fa-solid fa-wand-magic-sparkles text-green-500 dark:text-green-300"></i> Sugestões inteligentes</li>
            <li className="flex items-center gap-1 sm:gap-2 whitespace-nowrap"><i className="fa-solid fa-list-check text-blue-500 dark:text-blue-300"></i> Rotinas realistas</li>
            <li className="flex items-center gap-1 sm:gap-2 whitespace-nowrap"><i className="fa-solid fa-location-dot text-pink-500 dark:text-pink-300"></i> Preços locais</li>
          </ul>
        </div>
        <div className="absolute lg:relative lg:w-1/3 flex items-end justify-center lg:justify-end">
          <img
            src={gatoGif}
            alt="gato-mordomo"
            className="w-[210px] h-[168px] sm:w-[240px] sm:h-[192px] lg:w-[270px] lg:h-[216px] object-contain hover:scale-105 transform transition-transform duration-300"
            style={{ transform: 'translateY(0px)' }}
          />
        </div>
      </section>
      {/* Seção de Ações Rápidas - Melhorada */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full mx-auto mb-6 sm:mb-8">
        <article className="glass-effect rounded-xl shadow-lg p-4 sm:p-5 flex flex-col justify-between gap-3 fade-in-up hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 min-h-[160px] sm:min-h-[180px]" style={{animationDelay: '0.1s'}}>
          <div className="flex-1">
            <header className="flex items-center gap-2 mb-3">
              <i className="fa-solid fa-clock text-blue-500 dark:text-blue-400 text-sm" />
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Agora</h3>
            </header>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 time-display">
                {currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed secondary-text">
                {getTimeBasedSuggestion()}
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <a href="/cozinha-ia" className="btn px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-md transition-all duration-200 flex items-center gap-2 hover:scale-105 transform">
              <i className="fa-solid fa-play text-sm"></i> 
              <span className="text-sm">Começar</span>
            </a>
          </div>
        </article>

        <article className="glass-effect rounded-xl shadow-lg p-4 sm:p-5 flex flex-col justify-between gap-3 fade-in-up hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 min-h-[160px] sm:min-h-[180px]" style={{animationDelay: '0.2s'}}>
          <div className="flex-1">
            <header className="flex items-center gap-2 mb-3">
              <i className="fa-solid fa-chart-line text-green-500 dark:text-green-400 text-sm" />
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Atividade Recente</h3>
            </header>
            <div className="space-y-3">
              {recentActivity.slice(0, 2).map((activity, index) => {
                const colors = [
                  { bg: 'bg-gradient-to-r from-blue-500 to-blue-600', text: 'text-white', time: 'text-blue-100' },
                  { bg: 'bg-gradient-to-r from-green-500 to-green-600', text: 'text-white', time: 'text-green-100' }
                ];
                const colorScheme = colors[index % colors.length];
                
                return (
                  <div key={activity.id} className={`${colorScheme.bg} p-4 rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 cursor-pointer`}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className={`font-semibold text-sm ${colorScheme.text} mb-1`}>{activity.item}</h4>
                        <p className={`text-xs ${colorScheme.time} opacity-90`}>{activity.time}</p>
                      </div>
                      <div className="ml-3">
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <a href="/historico" className="btn px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md transition-all duration-200 flex items-center gap-2 hover:scale-105 transform">
              <i className="fa-solid fa-history text-sm"></i> 
              <span className="text-sm">Ver tudo</span>
            </a>
          </div>
        </article>

        <article className="glass-effect rounded-xl shadow-lg p-4 sm:p-5 flex flex-col justify-between gap-3 fade-in-up hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 min-h-[160px] sm:min-h-[180px]" style={{animationDelay: '0.3s'}}>
          <div className="flex-1">
            <header className="flex items-center gap-2 mb-3">
              <i className="fa-solid fa-star text-yellow-500 dark:text-yellow-400 text-sm" />
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Dicas do Dia</h3>
            </header>
            <div className="flex-1">
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-600/20 dark:to-orange-600/20 border border-yellow-200 dark:border-yellow-500/30 rounded-xl p-3 tip-box h-full flex items-center">
                <div className="flex items-start gap-3">
                  <div className="text-yellow-600 dark:text-yellow-400 text-lg">💡</div>
                  <p className="text-sm text-yellow-800 dark:text-yellow-100 font-medium leading-relaxed">
                    <strong>Dica:</strong> Organize sua geladeira por categorias!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <a href="/dicas" className="btn px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow-md transition-all duration-200 flex items-center gap-2 hover:scale-105 transform">
              <i className="fa-solid fa-lightbulb text-sm"></i> 
              <span className="text-sm">Mais dicas</span>
            </a>
          </div>
        </article>
      </section>

      {/* Seção de Estatísticas - Compacta */}
      <section className="w-full mx-auto mb-4 sm:mb-6">
        <article className="glass-effect rounded-lg shadow-md p-3 sm:p-4 fade-in-up bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600" style={{animationDelay: '0.4s'}}>
          <header className="flex items-center gap-2 text-xs font-bold mb-3 text-gray-900 dark:text-white">
            <i className="fa-solid fa-trophy text-purple-500 dark:text-purple-400 text-xs card-icon-trophy" />
            {' '}Suas Conquistas
          </header>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="text-center p-2 bg-green-100 dark:bg-green-600 border border-green-200 dark:border-green-400 rounded-lg achievement-card-green">
              <div className="text-xs font-bold text-green-700 dark:text-white achievement-number">12</div>
              <div className="text-xs text-green-800 dark:text-white font-semibold achievement-label">Receitas</div>
            </div>
            <div className="text-center p-2 bg-blue-100 dark:bg-blue-600 border border-blue-200 dark:border-blue-400 rounded-lg achievement-card-blue">
              <div className="text-xs font-bold text-blue-700 dark:text-white achievement-number">8</div>
              <div className="text-xs text-blue-800 dark:text-white font-semibold achievement-label">Compras</div>
            </div>
            <div className="text-center p-2 bg-orange-100 dark:bg-orange-600 border border-orange-200 dark:border-orange-400 rounded-lg achievement-card-orange">
              <div className="text-xs font-bold text-orange-700 dark:text-white achievement-number">15</div>
              <div className="text-xs text-orange-800 dark:text-white font-semibold achievement-label">Tarefas</div>
            </div>
            <div className="text-center p-2 bg-purple-100 dark:bg-purple-600 border border-purple-200 dark:border-purple-400 rounded-lg achievement-card-purple">
              <div className="text-xs font-bold text-purple-700 dark:text-white achievement-number">5</div>
              <div className="text-xs text-purple-800 dark:text-white font-semibold achievement-label">Dias</div>
            </div>
          </div>
        </article>
      </section>
      <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
    </main>
  );
}
