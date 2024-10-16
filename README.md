
# My React App

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

## Sumário

- [Sobre](#sobre)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Instalação](#instalação)
- [Uso](#uso)
- [Construção para Produção](#construção-para-produção)
- [Customização](#customização)
- [Funções](#funções)
- [Contexto](#contexto)
- [Métodos](#métodos)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Sobre

Este é um aplicativo React simples, desenvolvido com o objetivo de aprender os conceitos básicos do React, como componentes, estado, e gerenciamento de temas. O projeto foi iniciado com o **Create React App**, que oferece um ambiente de desenvolvimento rápido e simplificado.

## Scripts Disponíveis

No diretório do projeto, você pode rodar os seguintes scripts:

### `npm start`

Este comando inicia o aplicativo em modo de desenvolvimento.

- Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.
- A página será recarregada automaticamente quando você fizer alterações no código.
- Erros e avisos do **linting** serão mostrados no console.

### `npm test`

Inicia o **test runner** no modo interativo.Consulte a seção sobre [testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Cria o aplicativo em modo de produção na pasta `build`.

- O código será minificado e otimizado para melhor desempenho.
- A compilação é adequada para deploys.

### `npm run eject`

Este comando expõe a configuração interna do **Create React App**, como `webpack`, `Babel`, `ESLint`, etc., e permite personalizar o ambiente de build manualmente. **Atenção:** esta ação não pode ser revertida!

## Instalação

Para começar a trabalhar no projeto, siga estas etapas:

1. Clone este repositório:

   ```bash
   git clone https://github.com/username/my-react-app.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd my-react-app
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

Para iniciar o aplicativo no ambiente de desenvolvimento, execute:

```bash
npm start
```

Agora, abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o aplicativo.

## Construção para Produção

Para construir a versão de produção do aplicativo, execute:

```bash
npm run build
```

Isso irá gerar uma pasta `build` contendo os arquivos otimizados prontos para deploy.

## Customização

Se você precisar ajustar a configuração do ambiente (como **Webpack**, **Babel**, ou **ESLint**), poderá rodar o comando `npm run eject` para expor os arquivos de configuração.

## Funções

### 1. Tema Escuro/Claro
O aplicativo inclui funcionalidade de alternância entre tema escuro e claro. O estado do tema é gerenciado globalmente através do Context API, e a escolha do usuário é salva no `localStorage` para persistir entre sessões.

### 2. Gerenciamento de Itens
O aplicativo permite adicionar, editar e excluir itens. Esses itens são armazenados localmente no navegador do usuário usando `localStorage`, garantindo que eles sejam persistidos após o recarregamento da página.

### 3. Pesquisa e Ordenação
O usuário pode pesquisar itens com base em nome ou descrição, e também pode ordená-los por essas propriedades. As opções de ordenação incluem ordem crescente e decrescente.

## Contexto

O aplicativo usa o **Context API** do React para gerenciar o estado global do tema. Isso permite que todos os componentes acessem o estado do tema (escuro ou claro) sem precisar passar props manualmente. O `ThemeProvider` fornece esse contexto, enquanto os componentes individuais utilizam o hook `useContext` para acessar e manipular o tema.

## Métodos

- **toggleTheme**: Método utilizado para alternar entre o tema escuro e claro. Ele modifica o estado `isDark` no contexto global e salva a preferência do usuário no `localStorage`.
- **handleAddItem**: Método que adiciona um novo item à lista. Ele atualiza o estado dos itens e salva a lista atualizada no `localStorage`.
- **handleEditItem**: Método que edita um item existente na lista. Ele encontra o item correspondente pelo ID, atualiza seus valores e salva a lista atualizada.
- **handleDeleteItem**: Método que remove um item da lista com base no ID fornecido.
- **handleSort**: Método utilizado para ordenar a lista de itens com base em nome ou descrição, em ordem crescente ou decrescente.
- **handleSearch**: Método que filtra a lista de itens com base no termo de pesquisa fornecido (nome ou descrição).

## Contribuições

Contribuições são bem-vindas! Se você deseja melhorar este projeto, siga estas etapas:

1. **Fork** este repositório.
2. Crie um **branch** para sua feature ou correção: `git checkout -b minha-feature`.
3. Faça **commit** das suas alterações: `git commit -m 'Adiciona uma nova feature'`.
4. Faça **push** para o branch: `git push origin minha-feature`.
5. Envie uma **Pull Request**.

## Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
