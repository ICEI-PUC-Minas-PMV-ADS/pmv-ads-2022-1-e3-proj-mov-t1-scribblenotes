<h1>Scribblenotes React Native</h1>
<h3>Configurar Ambiente Expo CLI para rodar o Peojeto</h1>
<p>Video utilizado como guia para realizar a <a href="https://youtu.be/ApSHnjXeAq0?t=294">criação do ambiente de desenvolvimento</a></p>
<p>Utilizando CLI a partir do tempo: <strong>4:55</strong></p>

<h2>Problemas que podem se encontrados ao configurar o ambiente:</h2>

<h3>Você não consegue instalar o Expo CLI na sua maquina pelo NPM</h3>
<p>Eu não estava conseguindo instalar o Expo com o comando utilizando o NPM, assim como informa na Doc do Expo, então eu tive que utilizar o <a href="https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable">Yarn</a> para instalar globalmente e funcionou.</p>

<h3>Eu não conseguia rodar os comandos EXPO no meu terminal</h3>
<p>Eu rodei esse comando no terminal antes de rodar o expo, e consegui, parecia ser algo com assinatura digital <i>“.ps1 is not digitally signed. The script will not execute on the system.”</i></p>
<p>Rodei esse comando no terminal <strong>Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass</strong> e selecionei a opção A para aceitar tudo, como demonstrado <a href="https://caiomsouza.medium.com/fix-for-powershell-script-not-digitally-signed-69f0ed518715">nessa doc.</a></p>

<h3>Ao inicializar o dispositivo virtual pelo Android Studio tive algum problema na instalação da ferramenta HAXM necessaria para realizar a emulação.</h3>
<p>Segui os passos <a href="https://mashtips.com/enable-virtualization-windows-10/">desse artigo</a> e tentei novamente, e funcionou normal.</p>

<h2>Inicializando o projeto</h2>
<strong>expo start</strong>