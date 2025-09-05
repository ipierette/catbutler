import React, { useState } from "react";
import { sanitizeInput, processTextInput } from "../utils/security";

export default function CozinhaIA() {
  const [ingredientes, setIngredientes] = useState([]);
  const [novoIngrediente, setNovoIngrediente] = useState("");
  const [filtros, setFiltros] = useState({
    tempo: "Qualquer",
    dificuldade: "Qualquer",
    tipo: "Qualquer"
  });
  const [receitas, setReceitas] = useState([]);
  const [chatAberto, setChatAberto] = useState(false);
  const [mensagemChat, setMensagemChat] = useState("");
  const [conversa, setConversa] = useState([]);
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  const ingredientesSugeridos = [
    "Arroz", "Feijão", "Frango", "Carne", "Peixe", "Ovos", "Leite", "Queijo",
    "Tomate", "Cebola", "Alho", "Batata", "Cenoura", "Pimentão", "Abobrinha",
    "Macarrão", "Pão", "Azeite", "Sal", "Pimenta", "Orégano", "Manjericão"
  ];

  const tiposRefeicao = ["Qualquer", "Café da manhã", "Almoço", "Jantar", "Lanche", "Sobremesa"];
  const niveisDificuldade = ["Qualquer", "Fácil", "Médio", "Difícil"];
  const temposPreparo = ["Qualquer", "Até 15 min", "15-30 min", "30-60 min", "Mais de 1h"];

  const receitasExemplo = [
    {
      id: 1,
      nome: "Risotto de Frango com Legumes",
      tempo: "45 min",
      dificuldade: "Médio",
      porcoes: 4,
      ingredientes: ["Arroz", "Frango", "Cebola", "Alho", "Queijo", "Azeite"],
      instrucoes: [
        "Refogue a cebola e alho no azeite",
        "Adicione o frango cortado em cubos",
        "Acrescente o arroz e mexa até ficar translúcido",
        "Adicione caldo quente aos poucos",
        "Finalize com queijo ralado"
      ],
      dicas: "Mantenha o caldo sempre quente para o risotto ficar cremoso"
    },
    {
      id: 2,
      nome: "Omelete de Queijo com Tomate",
      tempo: "10 min",
      dificuldade: "Fácil",
      porcoes: 2,
      ingredientes: ["Ovos", "Queijo", "Tomate", "Sal", "Pimenta"],
      instrucoes: [
        "Bata os ovos com sal e pimenta",
        "Aqueça uma frigideira com azeite",
        "Despeje os ovos batidos",
        "Adicione queijo e tomate picado",
        "Dobre ao meio quando estiver firme"
      ],
      dicas: "Use fogo médio para não queimar a parte de baixo"
    },
    {
      id: 3,
      nome: "Macarrão com Molho de Tomate",
      tempo: "25 min",
      dificuldade: "Fácil",
      porcoes: 3,
      ingredientes: ["Macarrão", "Tomate", "Cebola", "Alho", "Azeite", "Orégano"],
      instrucoes: [
        "Cozinhe o macarrão conforme instruções",
        "Refogue cebola e alho no azeite",
        "Adicione tomates picados",
        "Tempere com sal, pimenta e orégano",
        "Misture com o macarrão cozido"
      ],
      dicas: "Reserve um pouco da água do macarrão para o molho"
    }
  ];

  const adicionarIngrediente = () => {
    if (novoIngrediente.trim()) {
      const processed = processTextInput(novoIngrediente, { maxLength: 50, required: true });
      if (processed.isValid && !ingredientes.includes(processed.sanitized)) {
        setIngredientes([...ingredientes, processed.sanitized]);
        setNovoIngrediente("");
      } else if (!processed.isValid) {
        alert(processed.errors[0]);
      }
    }
  };

  const removerIngrediente = (ingrediente) => {
    setIngredientes(ingredientes.filter(i => i !== ingrediente));
  };

  const temIngredienteCombinado = (ingredienteReceita, ingredientesDisponiveis) => {
    return ingredientesDisponiveis.some(ingDisponivel => 
      ingDisponivel.toLowerCase().includes(ingredienteReceita.toLowerCase()) || 
      ingredienteReceita.toLowerCase().includes(ingDisponivel.toLowerCase())
    );
  };

  const gerarReceitas = () => {
    // Simulação de geração de receitas baseada nos ingredientes
    const receitasFiltradas = receitasExemplo.filter(receita => {
      const temIngredientes = receita.ingredientes.some(ing => 
        temIngredienteCombinado(ing, ingredientes)
      );
      return temIngredientes;
    });
    
    setReceitas(receitasFiltradas.slice(0, 3));
  };

  const enviarMensagem = () => {
    if (mensagemChat.trim()) {
      const novaMensagem = {
        id: Date.now(),
        texto: mensagemChat,
        isUser: true,
        timestamp: new Date()
      };
      
      setConversa([...conversa, novaMensagem]);
      setMensagemChat("");
      
      // Simulação de resposta da IA
      setTimeout(() => {
        const respostaIA = {
          id: Date.now() + 1,
          texto: "Ótima pergunta! Posso te ajudar com dicas culinárias, substituições de ingredientes ou técnicas de preparo. O que você gostaria de saber?",
          isUser: false,
          timestamp: new Date()
        };
        setConversa(prev => [...prev, respostaIA]);
      }, 1000);
    }
  };

  return (
    <main className="min-h-screen p-2 sm:p-3 md:p-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative flex items-center justify-between w-full mx-auto glass-effect rounded-xl shadow-lg p-3 sm:p-4 mb-3 sm:mb-4 fade-in-up bg-white/95 dark:bg-gray-700 border border-gray-200 dark:border-gray-500 h-16 sm:h-18">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
            <span className="text-xl sm:text-2xl" aria-label="cozinha">👨‍🍳</span>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              <span className="visitante-span">Cozinha IA</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              Receitas inteligentes com ingredientes disponíveis
            </p>
          </div>
        </div>
        <div className="hidden sm:block text-right">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {ingredientes.length} ingrediente(s) adicionado(s)
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Coluna 1: Input de Ingredientes */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Input de Ingredientes */}
          <section className="glass-effect rounded-xl shadow-lg p-4 sm:p-6 fade-in-up bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span>🥘</span>
              {' '}Ingredientes Disponíveis
            </h2>
            
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={novoIngrediente}
                onChange={(e) => setNovoIngrediente(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && adicionarIngrediente()}
                placeholder="Digite um ingrediente..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button
                onClick={adicionarIngrediente}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200"
              >
                Adicionar
              </button>
            </div>

            {/* Ingredientes Adicionados */}
            <div className="flex flex-wrap gap-2 mb-4">
              {ingredientes.map((ingrediente) => (
                <span
                  key={ingrediente}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm"
                >
                  {ingrediente}
                  <button
                    onClick={() => removerIngrediente(ingrediente)}
                    className="ml-1 text-orange-600 hover:text-orange-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            {/* Ingredientes Sugeridos */}
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Sugestões:</p>
              <div className="flex flex-wrap gap-1">
                {ingredientesSugeridos.map((ingrediente) => (
                  <button
                    key={ingrediente}
                    onClick={() => {
                      if (!ingredientes.includes(ingrediente)) {
                        setIngredientes([...ingredientes, ingrediente]);
                      }
                    }}
                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {ingrediente}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Filtros */}
          <section className="glass-effect rounded-xl shadow-lg p-4 sm:p-6 fade-in-up bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span>⚙️</span>
              {' '}Filtros
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="tempo-preparo" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Tempo de Preparo
                </label>
                <select
                  id="tempo-preparo"
                  value={filtros.tempo}
                  onChange={(e) => setFiltros({...filtros, tempo: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {temposPreparo.map(tempo => (
                    <option key={tempo} value={tempo}>{tempo}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="dificuldade" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Dificuldade
                </label>
                <select
                  id="dificuldade"
                  value={filtros.dificuldade}
                  onChange={(e) => setFiltros({...filtros, dificuldade: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {niveisDificuldade.map(nivel => (
                    <option key={nivel} value={nivel}>{nivel}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="tipo-refeicao" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Tipo de Refeição
                </label>
                <select
                  id="tipo-refeicao"
                  value={filtros.tipo}
                  onChange={(e) => setFiltros({...filtros, tipo: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {tiposRefeicao.map(tipo => (
                    <option key={tipo} value={tipo}>{tipo}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <button
              onClick={gerarReceitas}
              disabled={ingredientes.length === 0}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
            >
              🍳 Gerar Receitas com IA
            </button>
          </section>
        </div>

        {/* Coluna 2: Chat com IA */}
        <div className="space-y-4 sm:space-y-6">
          <section className="glass-effect rounded-xl shadow-lg p-4 sm:p-6 fade-in-up bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span>🤖</span>
                {' '}Assistente Culinário
              </h3>
              <button
                onClick={() => setChatAberto(!chatAberto)}
                className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
              >
                {chatAberto ? "✕" : "💬"}
              </button>
            </div>
            
            {chatAberto && (
              <div className="space-y-4">
                <div className="h-48 overflow-y-auto border border-gray-200 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-900 chat-container">
                  {conversa.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
                      Olá! Sou seu assistente culinário. Como posso ajudar?
                    </p>
                  ) : (
                    conversa.map((msg) => (
                      <div
                        key={msg.id}
                        className={`mb-3 ${msg.isUser ? 'text-right' : 'text-left'}`}
                      >
                        <div
                          className={`inline-block p-2 rounded-lg text-sm ${
                            msg.isUser
                              ? 'bg-orange-500 text-white'
                              : 'bg-gray-200 dark:bg-blue-800 text-gray-900 dark:text-white bot-message'
                          }`}
                        >
                          {msg.texto}
                        </div>
                      </div>
                    ))
                  )}
                </div>
                
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={mensagemChat}
                    onChange={(e) => setMensagemChat(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && enviarMensagem()}
                    placeholder="Pergunte sobre culinária..."
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm chat-input"
                  />
                  <button
                    onClick={enviarMensagem}
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            )}
          </section>

          {/* Dicas Rápidas */}
          <section className="glass-effect rounded-xl shadow-lg p-4 sm:p-6 fade-in-up bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span>💡</span>
              {' '}Dicas Rápidas
            </h3>
            
            <div className="space-y-3 text-sm">
              <div className="border border-blue-200 dark:border-blue-500/30 rounded-xl p-3">
                <p className="text-blue-800 dark:text-blue-100 font-medium leading-relaxed">
                  <strong>Substituição:</strong> Sem leite? Use água de coco ou leite de amêndoa.
                </p>
              </div>
              <div className="border border-green-200 dark:border-green-500/30 rounded-xl p-3">
                <p className="text-green-800 dark:text-green-100 font-medium leading-relaxed">
                  <strong>Técnica:</strong> Para arroz soltinho, lave antes de cozinhar.
                </p>
              </div>
              <div className="border border-yellow-200 dark:border-yellow-500/30 rounded-xl p-3">
                <p className="text-yellow-800 dark:text-yellow-100 font-medium leading-relaxed">
                  <strong>Tempero:</strong> Prove sempre antes de servir e ajuste o sal.
                </p>
              </div>
            </div>
          </section>

          {/* Receitas Geradas */}
          {receitas.length > 0 && (
            <section className="glass-effect rounded-xl shadow-lg p-4 sm:p-6 fade-in-up bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span>📋</span>
                {' '}Receitas Sugeridas
              </h3>
              
              <div className="space-y-4">
                {receitas.map((receita) => (
                  <button
                    key={receita.id}
                    className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer text-left"
                    onClick={() => setReceitaSelecionada(receita)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">{receita.nome}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <span>⏱️ {receita.tempo}</span>
                          <span>📊 {receita.dificuldade}</span>
                          <span>👥 {receita.porcoes} porções</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Ingredientes: {receita.ingredientes.join(", ")}
                        </p>
                      </div>
                      <span className="ml-4 px-3 py-1 bg-orange-500 text-white text-sm rounded-lg">
                        Ver Receita
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Modal da Receita */}
      {receitaSelecionada && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="glass-effect rounded-xl shadow-lg max-w-2xl w-full mx-4 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {receitaSelecionada.nome}
              </h2>
              <button
                onClick={() => setReceitaSelecionada(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <p className="text-orange-600 dark:text-orange-400 font-semibold">Tempo</p>
                <p className="text-orange-800 dark:text-orange-200">{receitaSelecionada.tempo}</p>
              </div>
              <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-blue-600 dark:text-blue-400 font-semibold">Dificuldade</p>
                <p className="text-blue-800 dark:text-blue-200">{receitaSelecionada.dificuldade}</p>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-600 dark:text-green-400 font-semibold">Porções</p>
                <p className="text-green-800 dark:text-green-200">{receitaSelecionada.porcoes}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Ingredientes:</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {receitaSelecionada.ingredientes.map((ingrediente) => (
                  <li key={ingrediente}>{ingrediente}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Modo de Preparo:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {receitaSelecionada.instrucoes.map((instrucao, index) => (
                  <li key={`instrucao-${index}`}>{instrucao}</li>
                ))}
              </ol>
            </div>
            
            {receitaSelecionada.dicas && (
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">💡 Dica:</h4>
                <p className="text-yellow-700 dark:text-yellow-300">{receitaSelecionada.dicas}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
