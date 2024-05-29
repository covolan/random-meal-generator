# Static Job Listing

![image](https://i.imgur.com/8FOUBX9.jpg)

- Linguagens / Languages:
  - [:brazil:](#introdução) Português.
  - [:us:](#introduction) English.


## Introdução

Esta aplicação web foi desenvolvida para colocar em prática os estudos realizados sobre React, Tailwind, Clean Code e UI/UX Design. Durante o desenvolvimento, foram encontrados alguns desafios, como: utilizar o React para obter dados a partir de uma API e, com esses dados, renderizar uma interface dinâmica; criar uma página do zero com base apenas em algumas inspirações para o design; utilizar corretamente a estrutura de pastas do React, entre outros desafios. A inspiração inicial do projeto foi a página de app ideas do github: https://github.com/florinpop17/app-ideas

## Objetivo

Este projeto tem o intuito de utilizar uma API open source para criar uma aplicação web, usando os dados fornecidos. Neste caso, trata-se de um seletor aleatório de receitas a partir da API: https://www.themealdb.com/api.php.

## Conceitos

Neste projeto, abordamos e aplicamos alguns conceitos básicos de JavaScript, como métodos de arrays, funções assíncronas, importação de módulos, construtores, arrays, estruturas de lógica, objetos, depuração, entre outros. Utilizamos hooks como useState, passagem de propriedades para componentes filhos, setState, além de seguir práticas de programação limpa e adicionar comentários sempre que necessário.

## Utilização

Para utilizar o aplicativo, comece clonando o repositório da forma que preferir. Dentro do diretório do repositório, com o terminal aberto no caminho */random-meal-generator*, execute o comando:

```npm install```

para instalar os pacotes necessários para o desenvolvimento do projeto. 

Para iniciar o projeto, utilize o comando:

```npm run dev```

no terminal. 

Isso abrirá o site localmente no localhost. Para realizar o deploy do projeto, edite o arquivo ```vite.config.js```. Nele, você encontrará uma propriedade da função defineConfig chamada ```base: "/random-meal-generator"```; esta deve conter o **nome do repositório** para o qual está sendo realizado o deploy. Após isso, execute o comando:

```npm run deploy```

e o deploy será realizado automaticamente para o GitHub Pages. Você poderá acessá-lo por meio das configurações do repositório.

---

## Introduction

This web application was developed to put into practice the studies conducted on React, Tailwind, Clean Code, and UI/UX Design. During the development, several challenges were encountered, such as using React to fetch data from an API and render a dynamic interface with that data; creating a page from scratch based solely on some design inspirations; correctly using React's folder structure, among other challenges. The initial inspiration for the project was the app ideas page on GitHub: https://github.com/florinpop17/app-ideas

## Objective

This project aims to use an open source API to create a web application using the provided data. In this case, it is a random recipe selector from the API: https://www.themealdb.com/api.php.

## Concepts

In this project, we addressed and applied some basic JavaScript concepts such as array methods, asynchronous functions, module imports, constructors, arrays, logic structures, objects, debugging, among others. We used hooks like useState, passing props to child components, setState, as well as following clean code practices and adding comments whenever necessary.

## Usage: 

To use the application, begin by cloning the repository in your preferred manner. Within the repository directory, with the terminal open at the path */random-meal-generator*, execute the command:

```npm install```

to install the necessary packages for project development.

To start the project, use the command: 

```npm run dev```

in the terminal. 

This will open the website locally at localhost. To deploy the project, edit the ```vite.config.js``` file. In it, you will find a property of the defineConfig function called base: ```"/random-meal-generator"```; this should contain the name of the repository to which the deployment is being made. After that, execute the command:

```npm run deploy```

and the deployment will be automatically carried out to GitHub Pages. You can access it through the repository settings.

---