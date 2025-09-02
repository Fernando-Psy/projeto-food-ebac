# Projeto Food EBAC

Este projeto é uma aplicação front-end desenvolvida em React para um sistema de pedidos de comida online. O objetivo é permitir que usuários naveguem por restaurantes, visualizem cardápios, adicionem itens ao carrinho e finalizem pedidos.

## Estrutura do Projeto

```
public/           # Arquivos públicos e estáticos
src/              # Código-fonte principal
	assets/         # Imagens e ícones
	components/     # Componentes reutilizáveis
		Cart/         # Carrinho de compras
		CheckoutSteps/# Etapas do checkout
		DeliveryForm/ # Formulário de entrega
		FoodCard/     # Cardápio dos restaurantes
		Footer/       # Rodapé
		Header/       # Cabeçalho
		HeaderInternal/# Cabeçalho interno
		pages/        # Páginas principais
			Home/       # Página inicial
			RestaurantDetail/ # Detalhes do restaurante
		PaymentForm/  # Formulário de pagamento
	contexts/       # Contextos globais (ex: carrinho)
	hooks/          # Hooks customizados
	services/       # Serviços de API e utilitários
	styles/         # Estilos globais e temas
	types/          # Tipos TypeScript
	utils/          # Funções utilitárias
```

## Tecnologias Utilizadas

- React
- TypeScript
- Styled-components
- Axios

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Fernando-Psy/projeto-food-ebac.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd projeto-food-ebac
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Executando o Projeto

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## Funcionalidades

- Listagem de restaurantes
- Visualização de cardápio
- Adição de itens ao carrinho
- Checkout com etapas (entrega, pagamento, confirmação)
- Integração com API para busca de restaurantes e cálculo de frete

## Como Contribuir

1. Fork este repositório
2. Crie uma branch: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'Minha feature'`
4. Envie para o repositório remoto: `git push origin minha-feature`
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.
