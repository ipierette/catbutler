import React from "react";

export default function Tarefas() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Minhas Tarefas</h2>
      {/* Aqui vai a lista de tarefas, filtros, botões de adicionar/editar/excluir */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-gray-600 dark:text-gray-300">Nenhuma tarefa cadastrada ainda.</p>
      </div>
    </main>
  );
}
