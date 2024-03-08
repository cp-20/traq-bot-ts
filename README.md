# traq-bot-ts

TypeScript で traQ Bot を作りたい人向けのライブラリです。JavaScriptでも多分使えます。

強力に型が整備されていることと、使いやすいAPIを備えていることが特徴です。

## 使い方

```ts
import { Client } from 'traq-bot-ts';

const client = new Client({ token: 'WRITE_YOUR_TOKEN_HERE' });

client.on('MESSAGE_CREATED', ({ message }) => {
   console.log(message.text);
});

await client.listen(() => console.log('connected'));
```

`new Client()`でクライアントを生成して、各種イベントを`client.on()`でリッスンできます。

最後に`await client.listen()`で実際にサーバーに接続して稼働を開始します。

具体的なイベントについてはBOT Consoleのイベントリファレンスを参照してください。

どのようなイベント

## コントリビューター向け

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
