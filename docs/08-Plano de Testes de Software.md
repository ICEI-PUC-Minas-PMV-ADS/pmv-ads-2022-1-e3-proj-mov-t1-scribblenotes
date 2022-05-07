# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

## Plano de Testes de Software

Aqui está descrito os planos de testes elaborados especificamente para a aplicação Scribblenotes.

**Caso de teste CT01**

Objetivo do teste: Visualizar as informações sobre o clima e a página da agenda.

Requisitos Associados: RF-008 A aplicação deve permitir ao usuário visualizar a agenda e o clima.

Passos:

1- Acessar o site que hospeda o aplicativo na internet.

2- Baixar o aplicativo no dispositivo móvel.

3- Acessar a aplicação instalada.

4- Navegar ao longo da página de criar tasks e de visualizar as tasks já criadas.

5- Visualizar a agenda e o clima.

Critérios de Êxito: O usuário conseguiu visualizar ambas as informações requisitadas em suas respectivas áreas da aplicação.

---

**Caso de teste CT02**

Objetivo do teste: Na tela de adicionar tasks, o usuário deve ser capaz de selecionar personalizar uma anotação criada pelo mesmo.

Requisitos Associados: RF-002 	A aplicação deve permitir ao usuário adicionar suas anotações.

Passos:

1- Acessar o site que hospeda o aplicativo na internet.

2- Baixar o aplicativo no dispositivo móvel.

3- Acessar a aplicação instalada.

4- Selecionar a página de criar tasks.

5- Preencher os campos requisitados.

Critérios de Êxito: O usuário deve conseguir criar e personalizar uma anotação própria, a mesma deve aparecer na página principal (home page) do aplicativo.

---

**Caso de teste CT03**

Objetivo do teste: Na tela principal e após criar uma anotação, os dados relativos ao clima devem aparecer na anotação.

Requisitos Associados: RF-003 	A aplicação deve permitir visualizar o clima em tempo real.

Passos:

1- Acessar o site que hospeda o aplicativo na internet.

2- Baixar o aplicativo no dispositivo móvel.

3- Acessar a aplicação instalada.

4- Selecionar a página de criar tasks.

5- Preencher os campos requisitados.

6- Visualizar o campo da API de clima e geolocalização.

Critérios de Êxito: O usuário deve ser capaz de visualizar os dados referentes ao clima da região escolhida na área dessa função na aplicação.

---

**Caso de teste CT04**

Objetivo do teste: Na tela principal e após criar uma anotação, os dados relativos à API de geolocalização devem aparecer na anotação.

Requisitos Associados: RF-004 A aplicação deverá permitir fazer o acompanhamento do local escolhido através de uma API de Geolocalização.

Passos:

1- Acessar o site que hospeda o aplicativo na internet.

2- Baixar o aplicativo no dispositivo móvel.

3- Acessar a aplicação instalada.

4- Selecionar a página de criar tasks.

5- Preencher os campos requisitados.

6- Visualizar o campo da API de clima e geolocalização.

Critérios de Êxito: O usuário conseguir visualizar os dados referentes ao clima da região escolhida na área dessa função na aplicação.

---

**Caso de teste CT05**

Objetivo do teste: O usuário deve ser capaz de visualizar o que ele selecionou para a semana ou mês na página principal da aplicação (homepage).

Requisitos Associados: RF-006 	A aplicação deverá permitir ao usuário visualizar seus compromissos na semana ou mês.

Passos:

1- Acessar o site que hospeda o aplicativo na internet.

2- Baixar o aplicativo no dispositivo móvel.

3- Acessar a aplicação instalada.

4- Alternar entre as tasks específicas da semana e mês.

Critérios de Êxito: A aplicação disponibilizou as anotações criadas pelo usuário na página principal e o mesmo conseguiu acessá-las e visualizá-las com êxito.

---

**Caso de teste CT06**

Objetivo do teste: O usuário deve conseguir fazer login, se cadastrar ou alterar a senha com a ajuda do banco de dados da aplicação

Requisitos Associados: RF-001 	A página inicial da aplicação deve possibilitar ao usuário fazer login, se cadastrar ou alterar sua senha;

Passos:

1- Acessar o site que hospeda o aplicativo na internet.

2- Baixar o aplicativo no dispositivo móvel.

3- Acessar a aplicação instalada.

4- Acessar a página de cadastro.

5- Colocar os dados relativos ao usuário

6- Acessar a aplicação

7- Sair da conta

8- Retornar a aplicação

9- Fazer o login do usuário já cadastrado

10- Alterar a senha colocada previamente.

Critérios de Êxito: O usuário foi capaz de criar uma conta, fazer o login e mudar a senha da conta previamente criada com êxito.

---

**Caso de teste CT07**

-> Objetivo do testes: Verificar se os links do BottomNavigation estão redirecionando para as devidas telas.

Requisitos Associados: RF-007 	A aplicação deverá ter como itens de menu: Home, agenda, clima, sobre e Contato.

Passos: 1) Acessar o aplicativo 2) Clicar no botão Home 3) Clicar no botão criar tarefa 4)Clicar no botão clima 5) Clicar no botão contato 6) Clicar no botão adicionar tarefa.

Critérios de Exito: Redirecionado para a página selecionada.

---

**Caso de teste CT08**

-> Objetivo do teste:

Requisitos Associados:

Passos:

Critérios de Exito:

---

**Caso de teste CT09**

-> Objetivo do teste:

Requisitos Associados:

Passos:

Critérios de Exito:

---

**Caso de teste CT10**

-> Objetivo do teste:

Requisitos Associados:

Passos:

Critérios de Exito:

---
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
