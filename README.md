# @vkontakte/eslint-config

Правила линтинга для .js, .jsx, .ts и .tsx файлов от [VK](https://vk.com/).

## Установка

`yarn add @vkontakte/eslint-config` или `npm i @vkontakte/eslint-config`

Учтите, что помимо основого пакета, вам нужно установить его peerDependencies. Выполните команду
`npm info "@vkontakte/eslint-config" peerDependencies`, чтобы увидеть требуемые версии зависимостей.

## Использование

В вашем .eslintrc добавьте extend:

```js
// .eslintrc.js
modules.exports = {
  "extends": ["@vkontakte"]
}
```

Конфиг для typescript-файлов лежит отдельно. Он подключается так же через extend:

```js
// .eslintrc.js
modules.exports = {
  "extends": ["@vkontakte/eslint-config/typescript"]
}
```
