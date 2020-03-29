# react_todo_list
Reactのfluxを用いたtodoリストのチュートリアル

## 使い方
```
$ mkdir todolist
$ cd todolist
$ npm init -y
$ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader \
        babel-plugin-react-html-attrs babel-plugin-add-module-exports \
        babel-plugin-transform-class-properties babel-plugin-transform-decorators-legacy \
$ npm install --save-dev react react-dom react-router react-router-dom webpack webpack-cli webpack-dev-server
$ npm install --save-dev flux
```
で必要なライブラリとfluxをインストール
```
npm start
```
でサーバを開きVSCodeでRun

## 参考文献
[今から始めるReact入門〜flux編](https://qiita.com/TsutomuNakamura/items/cb3b6109fb21730cd73f)
