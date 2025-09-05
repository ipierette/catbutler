import React, { useState } from "react";

export default function Config() {
  const [formData, setFormData] = useState({
    nome: "Usuário CatButler",
    email: "usuario@catbutler.com",
    senhaAtual: "",
    novaSenha: "",
    confirmarSenha: "",
    localidade: "São Paulo, SP",
    contaFamiliar: false,
    notificacoes: true,
    tema: "light"
  });

  const [activeTab, setActiveTab] = useState("perfil");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de salvamento
    alert("Configurações salvas com sucesso!");
  };

  const tabs = [
    { id: "perfil", label: "Perfil", icon: "👤" },
    { id: "seguranca", label: "Segurança", icon: "🔒" },
    { id: "preferencias", label: "Preferências", icon: "⚙️" },
    { id: "familia", label: "Conta Familiar", icon: "👨‍👩‍👧‍👦" }
  ];

  return (
    <main className="min-h-screen p-2 sm:p-3 md:p-4 max-w-7xl mx-auto pb-20">
      {/* Hero Section - Estilo Home */}
      <section className="relative flex flex-col items-center justify-center gap-3 lg:gap-6 w-full mx-auto glass-effect rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 fade-in-up bg-white/95 dark:bg-gray-700 border border-gray-200 dark:border-gray-500 min-h-[200px] lg:min-h-[240px]">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
              <span className="visitante-span">Configurações</span>
            </h1>
            <span className="text-2xl" aria-label="configurações">⚙️</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-800 dark:text-white max-w-xl font-medium leading-relaxed mb-3">
            Gerencie sua conta e preferências do CatButler
          </p>
        </div>
      </section>

      {/* Tabs - Estilo Cards Home */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full mx-auto mb-4 sm:mb-6">
        {tabs.map((tab, index) => {
          const colors = [
            { bg: 'bg-gradient-to-r from-blue-500 to-blue-600', text: 'text-white', hover: 'hover:from-blue-600 hover:to-blue-700' },
            { bg: 'bg-gradient-to-r from-green-500 to-green-600', text: 'text-white', hover: 'hover:from-green-600 hover:to-green-700' },
            { bg: 'bg-gradient-to-r from-purple-500 to-purple-600', text: 'text-white', hover: 'hover:from-purple-600 hover:to-purple-700' },
            { bg: 'bg-gradient-to-r from-orange-500 to-orange-600', text: 'text-white', hover: 'hover:from-orange-600 hover:to-orange-700' }
          ];
          const colorScheme = colors[index % colors.length];
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${isActive ? colorScheme.bg : 'bg-white dark:bg-gray-800'} ${isActive ? colorScheme.text : 'text-gray-900 dark:text-white'} ${isActive ? '' : 'hover:bg-gray-50 dark:hover:bg-gray-700'} p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex flex-col items-center gap-2 border border-gray-200 dark:border-gray-600`}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span className="font-semibold text-sm">{tab.label}</span>
            </button>
          );
        })}
      </section>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Tab Perfil */}
        {activeTab === "perfil" && (
          <div className="glass-effect rounded-xl shadow-lg p-4 sm:p-6 fade-in-up bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
            <header className="flex items-center gap-2 mb-4">
              <i className="fa-solid fa-user text-blue-500 dark:text-blue-400 text-sm" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Informações do Perfil</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Nome Completo
                </label>
                <input
                  id="nome"
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab Segurança */}
        {activeTab === "seguranca" && (
          <div className="glass-effect rounded-xl shadow-lg p-4 sm:p-6 fade-in-up bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
            <header className="flex items-center gap-2 mb-4">
              <i className="fa-solid fa-lock text-green-500 dark:text-green-400 text-sm" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Segurança da Conta</h2>
            </header>
            <div className="space-y-6">
              <div>
                <label htmlFor="senhaAtual" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Senha Atual
                </label>
                <input
                  id="senhaAtual"
                  type="password"
                  name="senhaAtual"
                  value={formData.senhaAtual}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="Digite sua senha atual"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="novaSenha" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Nova Senha
                  </label>
                  <input
                    id="novaSenha"
                    type="password"
                    name="novaSenha"
                    value={formData.novaSenha}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    placeholder="Digite a nova senha"
                  />
                </div>
                <div>
                  <label htmlFor="confirmarSenha" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Confirmar Nova Senha
                  </label>
                  <input
                    id="confirmarSenha"
                    type="password"
                    name="confirmarSenha"
                    value={formData.confirmarSenha}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    placeholder="Confirme a nova senha"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Preferências */}
        {activeTab === "preferencias" && (
          <div className="glass-effect rounded-xl shadow-lg p-4 sm:p-6 fade-in-up bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
            <header className="flex items-center gap-2 mb-4">
              <i className="fa-solid fa-cog text-purple-500 dark:text-purple-400 text-sm" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Preferências do Sistema</h2>
            </header>
            <div className="space-y-6">
              <div>
                <label htmlFor="localidade" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Localidade Padrão para Busca de Preços
                </label>
                <select
                  id="localidade"
                  name="localidade"
                  value={formData.localidade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                >
                  <option value="São Paulo, SP">São Paulo, SP</option>
                  <option value="Rio de Janeiro, RJ">Rio de Janeiro, RJ</option>
                  <option value="Belo Horizonte, MG">Belo Horizonte, MG</option>
                  <option value="Brasília, DF">Brasília, DF</option>
                  <option value="Salvador, BA">Salvador, BA</option>
                  <option value="Fortaleza, CE">Fortaleza, CE</option>
                  <option value="Manaus, AM">Manaus, AM</option>
                  <option value="Curitiba, PR">Curitiba, PR</option>
                  <option value="Recife, PE">Recife, PE</option>
                  <option value="Porto Alegre, RS">Porto Alegre, RS</option>
                </select>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Esta localidade será usada para buscar preços de produtos no Mercado IA
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Notificações</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Receber notificações sobre sugestões e lembretes</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="notificacoes"
                    checked={formData.notificacoes}
                    onChange={handleInputChange}
                    className="sr-only peer"
                    aria-label="Ativar notificações"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Tab Conta Familiar */}
        {activeTab === "familia" && (
          <div className="glass-effect rounded-xl shadow-lg p-4 sm:p-6 fade-in-up bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
            <header className="flex items-center gap-2 mb-4">
              <i className="fa-solid fa-users text-orange-500 dark:text-orange-400 text-sm" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Conta Familiar</h2>
            </header>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-sm">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Ativar Conta Familiar</h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Compartilhe receitas e listas de compras com sua família
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-4">
                  <input
                    type="checkbox"
                    name="contaFamiliar"
                    checked={formData.contaFamiliar}
                    onChange={handleInputChange}
                    className="sr-only peer"
                    aria-label="Ativar conta familiar"
                  />
                  <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                </label>
              </div>
              {formData.contaFamiliar && (
                <div className="space-y-6 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                  <div>
                    <label htmlFor="nomeFamilia" className="block text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">
                      Nome da Família
                    </label>
                    <input
                      id="nomeFamilia"
                      type="text"
                      placeholder="Ex: Família Silva"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-400 focus:border-transparent font-medium"
                    />
                  </div>
                  <div>
                    <label htmlFor="emailFamilia" className="block text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">
                      Convidar Membros da Família
                    </label>
                    <div className="flex gap-3">
                      <input
                        id="emailFamilia"
                        type="email"
                        placeholder="email@exemplo.com"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-400 focus:border-transparent font-medium"
                      />
                      <button
                        type="button"
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition shadow-lg hover:shadow-xl"
                      >
                        Convidar
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Enviaremos um convite por email para o membro da família
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Botões de Ação - Estilo Home */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-3 sm:gap-4">
          <button
            type="button"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-all duration-200 hover:scale-105 transform"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center gap-2"
          >
            <i className="fa-solid fa-save text-sm"></i>
            Salvar Configurações
          </button>
        </div>
      </form>
    </main>
  );
}
