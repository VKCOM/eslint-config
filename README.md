# @vkontakte/eslint-plugin

Правила линтинга ECMAScript, JSX и TypeScript модулей от [VK](https://vk.com/).

## Установка

`yarn add @vkontakte/eslint-plugin` или `npm i @vkontakte/eslint-plugin`

Учтите, что помимо основого пакета, вам нужно установить его peerDependencies. Выполните команду
`npm info "@vkontakte/eslint-plugin" peerDependencies`, чтобы увидеть требуемые версии зависимостей.

## Использование

В вашем .eslintrc добавьте extends:

```js
// .eslintrc.js

module.exports = {
  "extends": ["plugin:@vkontakte/eslint-plugin/default"]
}
```

Конфиг для typescript-файлов лежит отдельно. Он подключается так же через extends:

```js
// .eslintrc.js

module.exports = {
  "extends": ["plugin:@vkontakte/eslint-plugin/typescript"]
}
```
