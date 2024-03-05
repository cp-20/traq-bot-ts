[テンプレートの解説](https://qiita.com/totto2727/items/bf6fa2787a8ede5f56c1)

# テンプレートコピー後にやるべきこと

完了次第削除してください。

## リポジトリの設定

- [ ] stagingブランチをベースブランチにする
- [ ] Branch Protectionの設定を行う
  - TODO: 設定
- [ ] Renovate Botの対象に含める

## パッケージの設定

- [ ] README.mdを修正する
- [ ] pakcage.jsonのメタ情報を修正する

# esm-package

# 概要

## 他のパッケージとの差別点

# インストール

## 前提

## Node.js or Bun

```bash
npm add @totto2727/result
```

```bash
yarn add @totto2727/result
```

```bash
pnpm add @totto2727/result
```

```bash
bun add @totto2727/result
```

```ts
import * as r from "esm-package"
```

## ブラウザ or Deno

```bash
import * as r from "https://esm.sh/esm-package"
```

# Example

# 基本の型

# 基本の関数

# 応用の型

# 応用の関数

# 影響を受けた言語及びライブラリ

## 開発者向け

### 開発環境

- 実行環境
    - Bun >1.0.0
- エディタ
    - 現時点ではJetbrains IDEの設定のみ用意されています。
    - 今後、VSCodeの設定ファイルを追加する予定です。

### Jetbrains

- Plugin
    - [Biome](https://plugins.jetbrains.com/plugin/22761-biome)

### VSCode

TODO

### 開発手順

1. このリポジトリをフォークする
2. フォークしたリポジトリをローカルにクローンしてプロジェクトルートに移動する
3. パッケージのインストール
   ```bash
   bun i
   ```
4. 開発する
5. 変更内容を記述する
   ```bash
   bun changeset
   ```
6. コミット前
   ```bash
   bun precommit
   ```
7. コミット＆プッシュ
8. フォークしたリポジトリからプルリクエストを作成する
9. 以下は管理者がバージョンアップする場合のみ
10. バージョンの変更とプッシュ
    ```bash
    bun changeset version
    ```
11. mainブランチにマージする
12. タグをつけてプッシュ
    ```bash
    bun changeset tag
    ```
13. CI/CDが自動でNPMに公開する
