-- tabela para armazenar as mensagens do formulário de contato do portfólio
create table mensagens_contato (
  id bigint generated always as identity primary key,
  nome text not null,
  email text not null,
  mensagem text not null,
  criado_em timestamp with time zone default now()
);

-- habilita RLS pra segurança
alter table mensagens_contato enable row level security;

-- política que permite apenas inserção (visitantes podem enviar, mas não ler)
create policy "permitir_insert_publico"
  on mensagens_contato
  for insert
  to anon
  with check (true);
