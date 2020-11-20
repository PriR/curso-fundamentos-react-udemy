import React from "react";
import alunos from "../../data/alunos";

const ListaAlunos = () => {
  const alunosLI = alunos.map((aluno) => (
    <li key={aluno.id}>
      {aluno.id} - {aluno.nome} - {aluno.nota}
    </li>
  ));

  return (
    <div>
      <ul style={{listStyle: 'none'}}>{alunosLI}</ul> {/*listStyle: 'none' tira a bolinha dos itens da lista*/}
    </div>
  );
};

export default ListaAlunos;

// importante usar a chave pq o react será capaz de detectar as eventuais mudanças. Ele busca esse índice key
