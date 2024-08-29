import React from 'react';

const Details = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800">Como Funciona</h2>
        <p className="mt-4 text-gray-600">
          Utilizamos Python para criar scripts que automatizam tarefas repetitivas e propensas a erros, como:
        </p>
        <ul className="mt-4 text-gray-600 list-disc list-inside">
          <li><strong>Lançamentos Contábeis:</strong> Automatize o registro de receitas, despesas e movimentação bancária.</li>
          <li><strong>Guias Fiscais:</strong> Gere automaticamente DARF, DAS e GPS.</li>
          <li><strong>Folha de Pagamento:</strong> Automatize o cálculo de salários e controle de ponto.</li>
        </ul>
      </div>
    </section>
  );
};

export default Details;