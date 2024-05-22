```markdown
# Portal de Notícias

Este é um portal de notícias desenvolvido com Angular e TypeScript que exibe as principais manchetes de notícias de várias categorias. Os usuários podem pesquisar notícias por palavras-chave e visualizar detalhes completos das notícias.

## Funcionalidades

- Exibição das principais manchetes de notícias.
- Pesquisa de notícias por palavras-chave.
- Exibição de detalhes completos das notícias.
- Design responsivo e atraente utilizando Angular Material.

## Tecnologias Utilizadas

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Angular Material](https://material.angular.io/)
- [NewsAPI](https://newsapi.org/) (API de notícias)

## Estrutura do Projeto

```
src/
|-- app/
|   |-- components/
|   |   |-- news-dashboard/
|   |   |   |-- news-dashboard.component.html
|   |   |   |-- news-dashboard.component.scss
|   |   |   |-- news-dashboard.component.ts
|   |   |-- news-details/
|   |   |   |-- news-details.component.html
|   |   |   |-- news-details.component.scss
|   |   |   |-- news-details.component.ts
|   |-- services/
|   |   |-- news.service.ts
|   |-- models/
|   |   |-- news.model.ts
|   |-- app.component.html
|   |-- app.component.scss
|   |-- app.component.ts
|   |-- app.module.ts
|-- assets/
|-- environments/
|-- styles.scss
|-- index.html
```

## Instalação

1. Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.
2. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/portal-de-noticias.git
   ```
3. Navegue até o diretório do projeto:
   ```bash
   cd portal-de-noticias
   ```
4. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Configuração

1. Obtenha uma chave de API da [NewsAPI](https://newsapi.org/).
2. Crie um arquivo `src/environments/environment.ts` e adicione a chave da API:
   ```typescript
   export const environment = {
     production: false,
     newsApiKey: 'SUA_CHAVE_API_AQUI'
   };
   ```
3. Atualize o serviço de notícias (`news.service.ts`) para usar a chave de API do ambiente:
   ```typescript
   import { environment } from '../../environments/environment';
   ...
   private apiKey = environment.newsApiKey;
   ```

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
2. Abra seu navegador e acesse `http://localhost:4200`.

## Estrutura de Componentes

- `NewsDashboardComponent`: Componente que exibe as principais manchetes de notícias.
- `NewsDetailsComponent`: Componente que exibe os detalhes completos de uma notícia selecionada.

## Serviço de Notícias

- `NewsService`: Serviço que se comunica com a API de notícias para buscar dados.

## Modelo de Dados

- `News`: Interface que define a estrutura dos dados de uma notícia.

## Deploy

1. Compile o projeto para produção:
   ```bash
   ng build --prod
   ```
2. Faça o deploy do conteúdo da pasta `dist/` em um serviço de hospedagem como Netlify, Vercel ou GitHub Pages.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações, entre em contato com [seu-email@dominio.com](mailto:seu-email@dominio.com).
```

Certifique-se de personalizar as informações de contato e o link do repositório conforme necessário. Este README deve fornecer uma boa visão geral do projeto e instruções claras para instalação, configuração e execução.
