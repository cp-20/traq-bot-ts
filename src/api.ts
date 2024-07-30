/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Message
 * メッセージ
 */
export default interface Message {
  /**
   * メッセージUUID
   * @format uuid
   */
  id: string;
  /**
   * 投稿者UUID
   * @format uuid
   */
  userId: string;
  /**
   * チャンネルUUID
   * @format uuid
   */
  channelId: string;
  /** メッセージ本文 */
  content: string;
  /**
   * 投稿日時
   * @format date-time
   */
  createdAt: string;
  /**
   * 編集日時
   * @format date-time
   */
  updatedAt: string;
  /** ピン留めされているかどうか */
  pinned: boolean;
  /** 押されているスタンプの配列 */
  stamps: MessageStamp[];
  /**
   * スレッドUUID
   * @format uuid
   */
  threadId: string | null;
}

/**
 * MessageStamp
 * メッセージに押されたスタンプ
 */
export interface MessageStamp {
  /**
   * ユーザーUUID
   * @format uuid
   */
  userId: string;
  /**
   * スタンプUUID
   * @format uuid
   */
  stampId: string;
  /**
   * スタンプ数
   * @format int32
   */
  count: number;
  /**
   * スタンプが最初に押された日時
   * @format date-time
   */
  createdAt: string;
  /**
   * スタンプが最後に押された日時
   * @format date-time
   */
  updatedAt: string;
}

/**
 * StampStats
 * スタンプ統計情報
 */
export interface StampStats {
  /**
   * スタンプ使用総数(同じユーザによって同じメッセージに貼られたものは複数カウントしない)
   * @format int64
   */
  count: number;
  /**
   * スタンプ使用総数(全てカウント)
   * @format int64
   */
  totalCount: number;
}

/**
 * Pin
 * ピン情報(メッセージ本体付き)
 */
export interface Pin {
  /**
   * ピン留めしたユーザーUUID
   * @format uuid
   */
  userId: string;
  /**
   * ピン留めされた日時
   * @format date-time
   */
  pinnedAt: string;
  /** メッセージ */
  message: Message;
}

/**
 * Channel
 * チャンネル
 */
export interface Channel {
  /**
   * チャンネルUUID
   * @format uuid
   */
  id: string;
  /**
   * 親チャンネルUUID
   * @format uuid
   */
  parentId: string | null;
  /** チャンネルがアーカイブされているかどうか */
  archived: boolean;
  /** 強制通知チャンネルかどうか */
  force: boolean;
  /** チャンネルトピック */
  topic: string;
  /**
   * チャンネル名
   * @pattern ^[a-zA-Z0-9-_]{1,20}$
   */
  name: string;
  /** 子チャンネルのUUID配列 */
  children: string[];
}

/**
 * PostMessageRequest
 * メッセージ投稿リクエスト
 */
export interface PostMessageRequest {
  /**
   * メッセージ本文
   * @minLength 1
   * @maxLength 10000
   */
  content: string;
  /**
   * メンション・チャンネルリンクを自動埋め込みするか
   * @default false
   */
  embed?: boolean;
}

/**
 * ChannelStats
 * チャンネル統計情報
 */
export interface ChannelStats {
  /**
   * チャンネルの総投稿メッセージ数(削除されたものも含む)
   * @format int64
   */
  totalMessageCount: number;
  /** チャンネル上のスタンプ統計情報 */
  stamps: ChannelStatsStamp[];
  /** チャンネル上のユーザー統計情報 */
  users: ChannelStatsUser[];
  /**
   * 統計情報日時
   * @format date-time
   */
  datetime: string;
}

/**
 * ChannelStatsStamp
 * チャンネル上の特定スタンプ統計情報
 */
export interface ChannelStatsStamp {
  /**
   * スタンプID
   * @format uuid
   */
  id: string;
  /**
   * スタンプ数(同一メッセージ上のものは複数カウントしない)
   * @format int64
   */
  count: number;
  /**
   * スタンプ数(同一メッセージ上のものも複数カウントする)
   * @format int64
   */
  total: number;
}

/**
 * ChannelStatsUser
 * チャンネル上の特定ユーザー統計情報
 */
export interface ChannelStatsUser {
  /**
   * ユーザーID
   * @format uuid
   */
  id: string;
  /**
   * メッセージ数
   * @format int64
   */
  messageCount: number;
}

/**
 * ChannelTopic
 * チャンネルトピック
 */
export interface ChannelTopic {
  /** トピック */
  topic: string;
}

/**
 * PutChannelTopicRequest
 * チャンネルトピック編集リクエスト
 */
export interface PutChannelTopicRequest {
  /**
   * トピック
   * @maxLength 200
   */
  topic: string;
}

/**
 * ChannelViewer
 * チャンネル閲覧者情報
 */
export interface ChannelViewer {
  /**
   * ユーザーUUID
   * @format uuid
   */
  userId: string;
  /** 閲覧状態 */
  state: ChannelViewState;
  /**
   * 更新日時
   * @format date-time
   */
  updatedAt: string;
}

/**
 * MyChannelViewState
 * 自身のチャンネル閲覧状態
 */
export interface MyChannelViewState {
  /** WSセッションの識別子 */
  key: string;
  /**
   * チャンネルUUID
   * @format uuid
   */
  channelId: string;
  /** 閲覧状態 */
  state: ChannelViewState;
}

/**
 * ChannelViewState
 * 閲覧状態
 */
export enum ChannelViewState {
  None = 'none',
  Monitoring = 'monitoring',
  Editing = 'editing',
}

/**
 * PostFileRequest
 * ファイルアップロードリクエスト
 */
export interface PostFileRequest {
  /**
   * ファイル本体
   * @format binary
   */
  file: File;
  /**
   * アップロード先チャンネルUUID
   * @format uuid
   */
  channelId: string;
}

/**
 * ThumbnailType
 * サムネイル画像のタイプ
 * @default "image"
 */
export enum ThumbnailType {
  Image = 'image',
  Waveform = 'waveform',
}

export interface ThumbnailInfo {
  /** サムネイル画像のタイプ */
  type: ThumbnailType;
  /** MIMEタイプ */
  mime: string;
  /**
   * サムネイル幅
   * @format int32
   */
  width?: number;
  /**
   * サムネイル高さ
   * @format int32
   */
  height?: number;
}

/**
 * FileInfo
 * ファイル情報
 */
export interface FileInfo {
  /**
   * ファイルUUID
   * @format uuid
   */
  id: string;
  /** ファイル名 */
  name: string;
  /** MIMEタイプ */
  mime: string;
  /**
   * ファイルサイズ
   * @format int64
   */
  size: number;
  /** MD5ハッシュ */
  md5: string;
  /** アニメーション画像かどうか */
  isAnimatedImage: boolean;
  /**
   * アップロード日時
   * @format date-time
   */
  createdAt: string;
  thumbnails: ThumbnailInfo[];
  /**
   * サムネイル情報
   * サムネイルが存在しない場合はnullになります
   * Deprecated: thumbnailsを参照してください
   * @deprecated
   */
  thumbnail: {
    /**
     * MIMEタイプ
     * @deprecated
     */
    mime: string;
    /**
     * サムネイル幅
     * @deprecated
     * @format int32
     */
    width?: number;
    /**
     * サムネイル高さ
     * @deprecated
     * @format int32
     */
    height?: number;
  } | null;
  /**
   * 属しているチャンネルUUID
   * @format uuid
   */
  channelId: string | null;
  /**
   * アップロード者UUID
   * @format uuid
   */
  uploaderId: string | null;
}

/**
 * PostMessageStampRequest
 * スタンプを押すリクエスト
 */
export interface PostMessageStampRequest {
  /**
   * 押す数
   * @format int32
   * @min 1
   * @max 100
   */
  count: number;
}

/**
 * Stamp
 * スタンプ情報
 */
export interface Stamp {
  /**
   * スタンプUUID
   * @format uuid
   */
  id: string;
  /**
   * スタンプ名
   * @pattern ^[a-zA-Z0-9_-]{1,32}$
   */
  name: string;
  /**
   * 作成者UUID
   * @format uuid
   */
  creatorId: string;
  /**
   * 作成日時
   * @format date-time
   */
  createdAt: string;
  /**
   * 更新日時
   * @format date-time
   */
  updatedAt: string;
  /**
   * ファイルUUID
   * @format uuid
   */
  fileId: string;
  /** Unicode絵文字か */
  isUnicode: boolean;
}

/**
 * PostStampRequest
 * スタンプ作成リクエスト
 */
export interface PostStampRequest {
  /**
   * スタンプ名
   * @pattern ^[a-zA-Z0-9_-]{1,32}$
   */
  name: string;
  /**
   * スタンプ画像(1MBまでのpng, jpeg, gif)
   * @format binary
   */
  file: File;
}

/**
 * StampHistoryEntry
 * スタンプ履歴の1項目
 */
export interface StampHistoryEntry {
  /**
   * スタンプUUID
   * @format uuid
   */
  stampId: string;
  /**
   * 使用日時
   * @format date-time
   */
  datetime: string;
}

/**
 * StampWithThumbnail
 * スタンプ情報とサムネイルの有無
 */
export interface StampWithThumbnail {
  /**
   * スタンプUUID
   * @format uuid
   */
  id: string;
  /**
   * スタンプ名
   * @pattern ^[a-zA-Z0-9_-]{1,32}$
   */
  name: string;
  /**
   * 作成者UUID
   * @format uuid
   */
  creatorId: string;
  /**
   * 作成日時
   * @format date-time
   */
  createdAt: string;
  /**
   * 更新日時
   * @format date-time
   */
  updatedAt: string;
  /**
   * ファイルUUID
   * @format uuid
   */
  fileId: string;
  /** Unicode絵文字か */
  isUnicode: boolean;
  /** サムネイルの有無 */
  hasThumbnail: boolean;
}

/**
 * User
 * ユーザー情報
 */
export interface User {
  /**
   * ユーザーUUID
   * @format uuid
   */
  id: string;
  /**
   * ユーザー名
   * @pattern ^[a-zA-Z0-9_-]{1,32}$
   */
  name: string;
  /**
   * ユーザー表示名
   * @minLength 0
   * @maxLength 32
   */
  displayName: string;
  /**
   * アイコンファイルUUID
   * @format uuid
   */
  iconFileId: string;
  /** BOTかどうか */
  bot: boolean;
  /**
   * ユーザーアカウント状態
   * 0: 停止
   * 1: 有効
   * 2: 一時停止
   */
  state: UserAccountState;
  /**
   * 更新日時
   * @format date-time
   */
  updatedAt: string;
}

/**
 * UserDetail
 * ユーザー詳細情報
 */
export interface UserDetail {
  /**
   * ユーザーUUID
   * @format uuid
   */
  id: string;
  /**
   * ユーザーアカウント状態
   * 0: 停止
   * 1: 有効
   * 2: 一時停止
   */
  state: UserAccountState;
  /** BOTかどうか */
  bot: boolean;
  /**
   * アイコンファイルUUID
   * @format uuid
   */
  iconFileId: string;
  /**
   * ユーザー表示名
   * @minLength 0
   * @maxLength 32
   */
  displayName: string;
  /**
   * ユーザー名
   * @pattern ^[a-zA-Z0-9_-]{1,32}$
   */
  name: string;
  /**
   * Twitter ID
   * @pattern ^[a-zA-Z0-9_]{0,15}$
   */
  twitterId: string;
  /**
   * 最終オンライン日時
   * @format date-time
   */
  lastOnline: string | null;
  /**
   * 更新日時
   * @format date-time
   */
  updatedAt: string;
  /** タグリスト */
  tags: UserTag[];
  /** 所属グループのUUIDの配列 */
  groups: string[];
  /**
   * 自己紹介(biography)
   * @maxLength 1000
   */
  bio: string;
  /**
   * ホームチャンネル
   * @format uuid
   */
  homeChannel: string | null;
}

/**
 * UserTag
 * ユーザータグ
 */
export interface UserTag {
  /**
   * タグUUID
   * @format uuid
   */
  tagId: string;
  /** タグ文字列 */
  tag: string;
  /** タグがロックされているか */
  isLocked: boolean;
  /**
   * タグ付与日時
   * @format date-time
   */
  createdAt: string;
  /**
   * タグ更新日時
   * @format date-time
   */
  updatedAt: string;
}

/**
 * UserAccountState
 * ユーザーアカウント状態
 * 0: 停止
 * 1: 有効
 * 2: 一時停止
 * @format int32
 */
export enum UserAccountState {
  Deactivated = 0,
  Active = 1,
  Suspended = 2,
}

/**
 * UserGroup
 * ユーザーグループ
 */
export interface UserGroup {
  /**
   * グループUUID
   * @format uuid
   */
  id: string;
  /** グループ名 */
  name: string;
  /** グループ説明 */
  description: string;
  /** グループタイプ */
  type: string;
  /**
   * グループアイコンUUID
   * @format uuid
   */
  icon: string;
  /** グループメンバーの配列 */
  members: UserGroupMember[];
  /**
   * 作成日時
   * @format date-time
   */
  createdAt: string;
  /**
   * 更新日時
   * @format date-time
   */
  updatedAt: string;
  /** グループ管理者のUUIDの配列 */
  admins: string[];
}

/**
 * UserGroupMember
 * ユーザーグループメンバー
 */
export interface UserGroupMember {
  /**
   * ユーザーUUID
   * @format uuid
   */
  id: string;
  /**
   * ユーザーの役割
   * @maxLength 100
   */
  role: string;
}

/**
 * UserStats
 * ユーザー統計情報
 */
export interface UserStats {
  /**
   * ユーザーの総投稿メッセージ数(削除されたものも含む)
   * @format int64
   */
  totalMessageCount: number;
  /** ユーザーのスタンプ統計情報 */
  stamps: UserStatsStamp[];
  /**
   * 統計情報日時
   * @format date-time
   */
  datetime: string;
}

/**
 * UserStatsStamp
 * ユーザーの特定スタンプ統計情報
 */
export interface UserStatsStamp {
  /**
   * スタンプID
   * @format uuid
   */
  id: string;
  /**
   * スタンプ数(同一メッセージ上のものは複数カウントしない)
   * @format int64
   */
  count: number;
  /**
   * スタンプ数(同一メッセージ上のものも複数カウントする)
   * @format int64
   */
  total: number;
}

/**
 * PatchGroupMemberRequest
 * ユーザーグループメンバー編集リクエスト
 */
export interface PatchGroupMemberRequest {
  /**
   * ユーザーの役割
   * @maxLength 100
   */
  role: string;
}

/**
 * PatchUserGroupRequest
 * ユーザーグループ編集リクエスト
 */
export interface PatchUserGroupRequest {
  /** グループ名 */
  name?: string;
  /**
   * グループ説明
   * @maxLength 100
   */
  description?: string;
  /** グループタイプ */
  type?: string;
}

/**
 * PostUserGroupRequest
 * ユーザーグループ作成リクエスト
 */
export interface PostUserGroupRequest {
  /** グループ名 */
  name: string;
  /**
   * 説明
   * @maxLength 100
   */
  description: string;
  /** グループタイプ */
  type: string;
}

/**
 * MyUserDetail
 * 自分のユーザー詳細情報
 */
export interface MyUserDetail {
  /**
   * ユーザーUUID
   * @format uuid
   */
  id: string;
  /**
   * 自己紹介(biography)
   * @maxLength 1000
   */
  bio: string;
  /** 所属グループのUUIDの配列 */
  groups: string[];
  /** タグリスト */
  tags: UserTag[];
  /**
   * 更新日時
   * @format date-time
   */
  updatedAt: string;
  /**
   * 最終オンライン日時
   * @format date-time
   */
  lastOnline: string | null;
  /**
   * Twitter ID
   * @pattern ^[a-zA-Z0-9_]{1,15}$
   */
  twitterId: string;
  /**
   * ユーザー名
   * @pattern ^[a-zA-Z0-9_-]{1,32}$
   */
  name: string;
  /**
   * ユーザー表示名
   * @minLength 0
   * @maxLength 32
   */
  displayName: string;
  /**
   * アイコンファイルUUID
   * @format uuid
   */
  iconFileId: string;
  /** BOTかどうか */
  bot: boolean;
  /**
   * ユーザーアカウント状態
   * 0: 停止
   * 1: 有効
   * 2: 一時停止
   */
  state: UserAccountState;
  /** 所有している権限の配列 */
  permissions: UserPermission[];
  /**
   * ホームチャンネル
   * @format uuid
   */
  homeChannel: string | null;
}

/**
 * OIDCUserInfo
 * 自分のユーザー詳細情報
 */
export interface OIDCUserInfo {
  /**
   * ユーザーUUID
   * @format uuid
   */
  sub: string;
  /**
   * ユーザー名
   * @pattern ^[a-zA-Z0-9_-]{1,32}$
   */
  name: string;
  /**
   * ユーザー名
   * @pattern ^[a-zA-Z0-9_-]{1,32}$
   */
  preferred_username: string;
  /** アイコン画像URL */
  picture: string;
  /**
   * 更新日時
   * @format int64
   */
  updated_at?: number;
  /** traQ特有のユーザー詳細情報 */
  traq?: OIDCTraqUserInfo;
}

/**
 * OIDCTraqUserInfo
 * traQ特有のユーザー詳細情報
 */
export interface OIDCTraqUserInfo {
  /**
   * 自己紹介(biography)
   * @maxLength 1000
   */
  bio: string;
  /** 所属グループのUUIDの配列 */
  groups: string[];
  /** タグリスト */
  tags: UserTag[];
  /**
   * 最終オンライン日時
   * @format date-time
   */
  last_online: string | null;
  /**
   * Twitter ID
   * @pattern ^[a-zA-Z0-9_]{1,15}$
   */
  twitter_id: string;
  /**
   * ユーザー表示名
   * @minLength 0
   * @maxLength 32
   */
  display_name: string;
  /**
   * アイコンファイルUUID
   * @format uuid
   */
  icon_file_id: string;
  /** BOTかどうか */
  bot: boolean;
  /**
   * ユーザーアカウント状態
   * 0: 停止
   * 1: 有効
   * 2: 一時停止
   */
  state: UserAccountState;
  /** 所有している権限の配列 */
  permissions: UserPermission[];
  /**
   * ホームチャンネル
   * @format uuid
   */
  home_channel: string | null;
}

/**
 * PatchChannelSubscribersRequest
 * チャンネル購読者編集リクエスト
 */
export interface PatchChannelSubscribersRequest {
  /** 通知をオンにするユーザーのUUID配列 */
  on?: string[];
  /** 通知をオフにするユーザーのUUID配列 */
  off?: string[];
}

/**
 * PutChannelSubscribersRequest
 * 通知をオンにするユーザーのUUID配列
 */
export interface PutChannelSubscribersRequest {
  /**
   * 通知をオンにするユーザーのUUID配列
   * @format uuid
   */
  on: string[];
}

/**
 * UserSubscribeState
 * ユーザーのチャンネル購読状態
 */
export interface UserSubscribeState {
  /**
   * チャンネルUUID
   * @format uuid
   */
  channelId: string;
  /**
   * チャンネル購読レベル
   * 0：無し
   * 1：未読管理
   * 2：未読管理+通知
   */
  level: ChannelSubscribeLevel;
}

/**
 * ChannelSubscribeLevel
 * チャンネル購読レベル
 * 0：無し
 * 1：未読管理
 * 2：未読管理+通知
 */
export enum ChannelSubscribeLevel {
  None = 0,
  Subscribed = 1,
  Notified = 2,
}

/**
 * PutChannelSubscribeLevelRequest
 * チャンネル購読レベル変更リクエスト
 */
export interface PutChannelSubscribeLevelRequest {
  /**
   * チャンネル購読レベル
   * 0：無し
   * 1：未読管理
   * 2：未読管理+通知
   */
  level: ChannelSubscribeLevel;
}

/**
 * Webhook
 * Webhook情報
 */
export interface Webhook {
  /**
   * WebhookUUID
   * @format uuid
   */
  id: string;
  /**
   * WebhookユーザーUUID
   * @format uuid
   */
  botUserId: string;
  /** Webhookユーザー表示名 */
  displayName: string;
  /** 説明 */
  description: string;
  /** セキュアWebhookかどうか */
  secure: boolean;
  /**
   * デフォルトの投稿先チャンネルUUID
   * @format uuid
   */
  channelId: string;
  /**
   * オーナーUUID
   * @format uuid
   */
  ownerId: string;
  /**
   * 作成日時
   * @format date-time
   */
  createdAt: string;
  /**
   * 更新日時
   * @format date-time
   */
  updatedAt: string;
}

/**
 * PatchWebhookRequest
 * Webhook情報変更リクエスト
 */
export interface PatchWebhookRequest {
  /**
   * Webhookユーザー表示名
   * @minLength 1
   * @maxLength 32
   */
  name?: string;
  /**
   * 説明
   * @maxLength 1000
   */
  description?: string;
  /**
   * デフォルトの投稿先チャンネルUUID
   * @format uuid
   */
  channelId?: string;
  /**
   * Webhookシークレット
   * @maxLength 50
   */
  secret?: string;
  /**
   * 移譲先のユーザーUUID
   * @format uuid
   */
  ownerId?: string;
}

/**
 * PostWebhookRequest
 * Webhook作成リクエスト
 */
export interface PostWebhookRequest {
  /**
   * Webhookユーザーの表示名
   * @minLength 1
   * @maxLength 32
   */
  name: string;
  /**
   * 説明
   * @minLength 1
   * @maxLength 1000
   */
  description: string;
  /**
   * デフォルトの投稿先チャンネルUUID
   * @format uuid
   */
  channelId: string;
  /**
   * Webhookシークレット
   * @maxLength 50
   */
  secret: string;
}

/**
 * PutUserIconRequest
 * アイコン画像変更リクエスト
 */
export interface PutUserIconRequest {
  /**
   * アイコン画像(2MBまでのpng, jpeg, gif)
   * @format binary
   */
  file: File;
}

/**
 * PutMyPasswordRequest
 * パスワード変更リクエスト
 */
export interface PutMyPasswordRequest {
  /**
   * 現在のパスワード
   * @pattern ^[\x20-\x7E]{10,32}$
   */
  password: string;
  /**
   * 新しいパスワード
   * @pattern ^[\x20-\x7E]{10,32}$
   */
  newPassword: string;
}

/**
 * PatchMeRequest
 * 自分のユーザー情報変更リクエスト
 */
export interface PatchMeRequest {
  /**
   * 新しい表示名
   * @minLength 0
   * @maxLength 32
   */
  displayName?: string;
  /**
   * TwitterID
   * @pattern ^[a-zA-Z0-9_]{1,15}$
   */
  twitterId?: string;
  /**
   * 自己紹介(biography)
   * @maxLength 1000
   */
  bio?: string;
  /**
   * ホームチャンネルのUUID
   * `00000000-0000-0000-0000-000000000000`を指定すると、ホームチャンネルが`null`に設定されます
   * @format uuid
   */
  homeChannel?: string;
}

/**
 * PutUserPasswordRequest
 * ユーザーパスワード変更リクエスト
 */
export interface PutUserPasswordRequest {
  /**
   * 新しいパスワード
   * @pattern ^[\x20-\x7E]{10,32}$
   */
  newPassword: string;
}

/**
 * PatchUserRequest
 * ユーザー情報編集リクエスト
 */
export interface PatchUserRequest {
  /**
   * 新しい表示名
   * @maxLength 32
   */
  displayName?: string;
  /**
   * TwitterID
   * @pattern ^[a-zA-Z0-9_]{1,15}$
   */
  twitterId?: string;
  /**
   * ユーザーアカウント状態
   * 0: 停止
   * 1: 有効
   * 2: 一時停止
   */
  state?: UserAccountState;
  /** ユーザーロール */
  role?: string;
}

/**
 * PostMyFCMDeviceRequest
 * FCMデバイス登録リクエスト
 */
export interface PostMyFCMDeviceRequest {
  /**
   * FCMのデバイストークン
   * @example "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1"
   */
  token: string;
}

/**
 * PostUserRequest
 * ユーザー登録リクエスト
 */
export interface PostUserRequest {
  /**
   * ユーザー名
   * @pattern ^[a-zA-Z0-9_-]{1,32}$
   */
  name: string;
  /**
   * パスワード
   * @pattern ^[\x20-\x7E]{10,32}$
   */
  password?: string;
}

/**
 * PostChannelRequest
 * チャンネル作成リクエスト
 */
export interface PostChannelRequest {
  /**
   * チャンネル名
   * @pattern ^[a-zA-Z0-9-_]{1,20}$
   */
  name: string;
  /**
   * 親チャンネルのUUID
   * ルートに作成する場合はnullを指定
   * @format uuid
   */
  parent: string | null;
}

/**
 * PostUserTagRequest
 * ユーザータグ追加リクエスト
 */
export interface PostUserTagRequest {
  /**
   * タグ文字列
   * @minLength 1
   * @maxLength 30
   */
  tag: string;
}

/**
 * PatchUserTagRequest
 * ユーザーのタグの編集リクエスト
 */
export interface PatchUserTagRequest {
  /** タグのロック状態 */
  isLocked: boolean;
}

/**
 * Tag
 * タグ情報
 */
export interface Tag {
  /**
   * タグUUID
   * @format uuid
   */
  id: string;
  /**
   * タグ文字列
   * @minLength 1
   * @maxLength 30
   */
  tag: string;
  /** タグがつけられているユーザーのUUID配列 */
  users: string[];
}

/**
 * PostStarRequest
 * スター追加リクエスト
 */
export interface PostStarRequest {
  /**
   * チャンネルUUID
   * @format uuid
   */
  channelId: string;
}

/**
 * UnreadChannel
 * 未読チャンネル情報
 */
export interface UnreadChannel {
  /**
   * チャンネルUUID
   * @format uuid
   */
  channelId: string;
  /**
   * 未読メッセージ数
   * @format int32
   */
  count: number;
  /** 自分宛てメッセージが含まれているかどうか */
  noticeable: boolean;
  /**
   * チャンネルの最古の未読メッセージの日時
   * @format date-time
   */
  since: string;
  /**
   * チャンネルの最新の未読メッセージの日時
   * @format date-time
   */
  updatedAt: string;
  /**
   * そのチャンネルの未読の中で最も古いメッセージのid
   * @format uuid
   */
  oldestMessageId: string;
}

/**
 * PostLoginRequest
 * ログインリクエスト
 */
export interface PostLoginRequest {
  /**
   * ユーザー名
   * @pattern ^[a-zA-Z0-9_-]{1,32}$
   */
  name: string;
  /**
   * パスワード
   * @pattern ^[\x20-\x7E]{10,32}$
   */
  password: string;
}

/**
 * LoginSession
 * ログインセッション情報
 */
export interface LoginSession {
  /**
   * セッションUUID
   * @format uuid
   */
  id: string;
  /**
   * 発行日時
   * @format date-time
   */
  issuedAt: string;
}

/**
 * ActiveOAuth2Token
 * 有効なOAuth2トークン情報
 */
export interface ActiveOAuth2Token {
  /**
   * トークンUUID
   * @format uuid
   */
  id: string;
  /** OAuth2クライアントUUID */
  clientId: string;
  /** スコープ */
  scopes: OAuth2Scope[];
  /**
   * 発行日時
   * @format date-time
   */
  issuedAt: string;
}

/**
 * OAuth2Scope
 * OAuth2スコープ
 */
export enum OAuth2Scope {
  Openid = 'openid',
  Profile = 'profile',
  Read = 'read',
  Write = 'write',
  ManageBot = 'manage_bot',
}

/**
 * OAuth2Client
 * OAuth2クライアント情報
 */
export interface OAuth2Client {
  /** クライアントUUID */
  id: string;
  /**
   * クライアント名
   * @minLength 1
   * @maxLength 32
   */
  name: string;
  /**
   * 説明
   * @maxLength 1000
   */
  description: string;
  /**
   * クライアント開発者UUID
   * @format uuid
   */
  developerId: string;
  /** 要求スコープの配列 */
  scopes: OAuth2Scope[];
  /** confidential client なら true, public client なら false */
  confidential: boolean;
}

/**
 * PatchClientRequest
 * OAuth2クライアント情報変更リクエスト
 */
export interface PatchClientRequest {
  /**
   * クライアント名
   * @minLength 1
   * @maxLength 32
   */
  name?: string;
  /**
   * 説明
   * @maxLength 1000
   */
  description?: string;
  /**
   * コールバックURL
   * @format uri
   */
  callbackUrl?: string;
  /**
   * クライアント開発者UUID
   * @format uuid
   */
  developerId?: string;
  /** confidential client なら true, public client なら false */
  confidential?: boolean;
}

/**
 * OAuth2ClientDetail
 * OAuth2クライアント詳細情報
 */
export interface OAuth2ClientDetail {
  /** クライアントUUID */
  id: string;
  /**
   * クライアント開発者UUID
   * @format uuid
   */
  developerId: string;
  /**
   * 説明
   * @maxLength 1000
   */
  description: string;
  /**
   * クライアント名
   * @minLength 1
   * @maxLength 32
   */
  name: string;
  /** 要求スコープの配列 */
  scopes: OAuth2Scope[];
  /**
   * コールバックURL
   * @format uri
   */
  callbackUrl: string;
  /** クライアントシークレット */
  secret: string;
  /** confidential client なら true, public client なら false */
  confidential: boolean;
}

/**
 * PostClientRequest
 * OAuth2クライアント作成リクエスト
 */
export interface PostClientRequest {
  /**
   * クライアント名
   * @minLength 1
   * @maxLength 32
   */
  name: string;
  /**
   * コールバックURL
   * @format uri
   */
  callbackUrl: string;
  /** 要求スコープの配列 */
  scopes: OAuth2Scope[];
  /**
   * 説明
   * @maxLength 1000
   */
  description: string;
  /**
   * confidential client なら true, public cleint なら false
   * @default false
   */
  confidential?: boolean;
}

/**
 * BotMode
 * BOT動作モード
 *
 * HTTP: HTTP Mode
 * WebSocket: WebSocket Mode
 */
export enum BotMode {
  HTTP = 'HTTP',
  WebSocket = 'WebSocket',
}

/**
 * BotState
 * BOT状態
 * 0: 停止
 * 1: 有効
 * 2: 一時停止
 * @format int32
 */
export enum BotState {
  Deactivated = 0,
  Active = 1,
  Suspended = 2,
}

/**
 * Bot
 * BOT情報
 */
export interface Bot {
  /**
   * BOT UUID
   * @format uuid
   */
  id: string;
  /**
   * BOTユーザーUUID
   * @format uuid
   */
  botUserId: string;
  /**
   * 説明
   * @maxLength 1000
   */
  description: string;
  /**
   * BOT開発者UUID
   * @format uuid
   */
  developerId: string;
  /** BOTが購読しているイベントの配列 */
  subscribeEvents: string[];
  /**
   * BOT動作モード
   *
   * HTTP: HTTP Mode
   * WebSocket: WebSocket Mode
   */
  mode: BotMode;
  /**
   * BOT状態
   * 0: 停止
   * 1: 有効
   * 2: 一時停止
   */
  state: BotState;
  /**
   * 作成日時
   * @format date-time
   */
  createdAt: string;
  /**
   * 更新日時
   * @format date-time
   */
  updatedAt: string;
}

/**
 * PatchBotRequest
 * BOT情報変更リクエスト
 */
export interface PatchBotRequest {
  /**
   * BOTユーザー表示名
   * @maxLength 32
   */
  displayName?: string;
  /**
   * BOTの説明
   * @maxLength 1000
   */
  description?: string;
  /** 特権 */
  privileged?: boolean;
  /**
   * BOT動作モード
   *
   * HTTP: HTTP Mode
   * WebSocket: WebSocket Mode
   */
  mode?: BotMode;
  /**
   * BOTサーバーエンドポイント
   * @format uri
   */
  endpoint?: string;
  /**
   * 移譲先の開発者UUID
   * @format uuid
   */
  developerId?: string;
  /**
   * 購読するイベント
   * @uniqueItems false
   */
  subscribeEvents?: string[];
  /**
   * 自己紹介(biography)
   * @maxLength 1000
   */
  bio?: string;
}

/**
 * BotTokens
 * BOTのトークン情報
 */
export interface BotTokens {
  /** Verification Token */
  verificationToken: string;
  /** BOTアクセストークン */
  accessToken: string;
}

/**
 * BotDetail
 * BOT詳細情報
 */
export interface BotDetail {
  /**
   * BOT UUID
   * @format uuid
   */
  id: string;
  /**
   * 更新日時
   * @format date-time
   */
  updatedAt: string;
  /**
   * 作成日時
   * @format date-time
   */
  createdAt: string;
  /**
   * BOT動作モード
   *
   * HTTP: HTTP Mode
   * WebSocket: WebSocket Mode
   */
  mode: BotMode;
  /**
   * BOT状態
   * 0: 停止
   * 1: 有効
   * 2: 一時停止
   */
  state: BotState;
  /** BOTが購読しているイベントの配列 */
  subscribeEvents: string[];
  /**
   * BOT開発者UUID
   * @format uuid
   */
  developerId: string;
  /**
   * 説明
   * @maxLength 1000
   */
  description: string;
  /**
   * BOTユーザーUUID
   * @format uuid
   */
  botUserId: string;
  /** BOTのトークン情報 */
  tokens: BotTokens;
  /**
   * BOTサーバーエンドポイント
   * @format uri
   */
  endpoint: string;
  /** 特権BOTかどうか */
  privileged: boolean;
  /** BOTが参加しているチャンネルのUUID配列 */
  channels: string[];
}

/**
 * BotEventLog
 * BOTイベントログ
 */
export interface BotEventLog {
  /**
   * BOT UUID
   * @format uuid
   */
  botId: string;
  /**
   * リクエストUUID
   * @format uuid
   */
  requestId: string;
  /** イベントタイプ */
  event: string;
  /** イベント配送結果 */
  result?: BotEventResult;
  /**
   * ステータスコード
   * @format int32
   */
  code: number;
  /**
   * イベント日時
   * @format date-time
   */
  datetime: string;
}

/**
 * BotEventResult
 * イベント配送結果
 */
export enum BotEventResult {
  OK = 'ok',
  NG = 'ng',
  NetworkError = 'ne',
  Dropped = 'dp',
}

/**
 * PostBotRequest
 * BOT作成リクエスト
 */
export interface PostBotRequest {
  /**
   * BOTユーザーID
   * 自動的に接頭辞"BOT_"が付与されます
   * @maxLength 16
   * @pattern ^[a-zA-Z0-9_-]{1,16}$
   */
  name: string;
  /**
   * BOTユーザー表示名
   * @maxLength 32
   */
  displayName: string;
  /**
   * BOTの説明
   * @maxLength 1000
   */
  description: string;
  /**
   * BOT動作モード
   *
   * HTTP: HTTP Mode
   * WebSocket: WebSocket Mode
   */
  mode: BotMode;
  /**
   * BOTサーバーエンドポイント
   * BOT動作モードがHTTPの場合必須です
   * @format uri
   */
  endpoint?: string;
}

/**
 * PostBotActionJoinRequest
 * BOTチャンネル参加リクエスト
 */
export interface PostBotActionJoinRequest {
  /**
   * チャンネルUUID
   * @format uuid
   */
  channelId: string;
}

/**
 * PostBotActionLeaveRequest
 * BOTチャンネル退出リクエスト
 */
export interface PostBotActionLeaveRequest {
  /**
   * チャンネルUUID
   * @format uuid
   */
  channelId: string;
}

/**
 * BotUser
 * BOTユーザー対
 */
export interface BotUser {
  /**
   * BOT UUID
   * @format uuid
   */
  id: string;
  /**
   * BOTユーザーUUID
   * @format uuid
   */
  botUserId: string;
}

/**
 * PostWebRTCAuthenticateRequest
 * skyway用認証リクエスト
 */
export interface PostWebRTCAuthenticateRequest {
  /** ピアID */
  peerId: string;
}

/**
 * WebRTCAuthenticateResult
 * skyway用認証リクエストリザルト
 */
export interface WebRTCAuthenticateResult {
  /** ピアID */
  peerId: string;
  /**
   * TTL
   * @format int32
   */
  ttl: number;
  /**
   * タイムスタンプ
   * @format int64
   */
  timestamp: number;
  /** 認証トークン */
  authToken: string;
}

/**
 * PatchChannelRequest
 * チャンネル情報変更リクエスト
 */
export interface PatchChannelRequest {
  /**
   * チャンネル名
   * @pattern ^[a-zA-Z0-9-_]{1,20}$
   */
  name?: string;
  /** アーカイブされているかどうか */
  archived?: boolean;
  /** 強制通知チャンネルかどうか */
  force?: boolean;
  /**
   * 親チャンネルUUID
   * @format uuid
   */
  parent?: string;
}

/**
 * WebRTCUserStates
 * WebRTC状態の配列
 */
export type WebRTCUserStates = WebRTCUserState[];

/**
 * ClipFolder
 * クリップフォルダ情報
 */
export interface ClipFolder {
  /**
   * フォルダUUID
   * @format uuid
   */
  id: string;
  /**
   * フォルダ名
   * @minLength 1
   * @maxLength 30
   */
  name: string;
  /**
   * 作成日時
   * @format date-time
   */
  createdAt: string;
  /**
   * フォルダ所有者UUID
   * @format uuid
   */
  ownerId: string;
  /**
   * 説明
   * @maxLength 1000
   */
  description: string;
}

/**
 * PatchClipFolderRequest
 * クリップフォルダ情報編集リクエスト
 */
export interface PatchClipFolderRequest {
  /**
   * フォルダ名
   * @minLength 1
   * @maxLength 30
   */
  name?: string;
  /**
   * 説明
   * @maxLength 1000
   */
  description?: string;
}

/**
 * PostClipFolderRequest
 * クリップフォルダ作成リクエスト
 */
export interface PostClipFolderRequest {
  /**
   * フォルダ名
   * @minLength 1
   * @maxLength 30
   */
  name: string;
  /**
   * 説明
   * @maxLength 1000
   */
  description: string;
}

/**
 * PostClipFolderMessageRequest
 * クリップ追加リクエスト
 */
export interface PostClipFolderMessageRequest {
  /**
   * メッセージUUID
   * @format uuid
   */
  messageId: string;
}

/**
 * ClippedMessage
 * クリップされたメッセージ
 */
export interface ClippedMessage {
  /** メッセージ */
  message: Message;
  /**
   * クリップした日時
   * @format date-time
   */
  clippedAt: string;
}

/**
 * ChannelEvent
 * チャンネルイベント
 */
export interface ChannelEvent {
  /** イベントタイプ */
  type:
    | 'TopicChanged'
    | 'SubscribersChanged'
    | 'PinAdded'
    | 'PinRemoved'
    | 'NameChanged'
    | 'ParentChanged'
    | 'VisibilityChanged'
    | 'ForcedNotificationChanged'
    | 'ChildCreated';
  /**
   * イベント日時
   * @format date-time
   */
  datetime: string;
  /** イベント内容 */
  detail:
    | TopicChangedEvent
    | SubscribersChangedEvent
    | PinAddedEvent
    | PinRemovedEvent
    | NameChangedEvent
    | ParentChangedEvent
    | VisibilityChangedEvent
    | ForcedNotificationChangedEvent
    | ChildCreatedEvent;
}

/**
 * TopicChangedEvent
 * トピック変更イベント
 */
export interface TopicChangedEvent {
  /**
   * 変更者UUID
   * @format uuid
   */
  userId: string;
  /** 変更前トピック */
  before: string;
  /** 変更後トピック */
  after: string;
}

/**
 * SubscribersChangedEvent
 * 購読者変更イベント
 */
export interface SubscribersChangedEvent {
  /**
   * 変更者UUID
   * @format uuid
   */
  userId: string;
  /** オンにされたユーザーのUUID配列 */
  on: string[];
  /** オフにされたユーザーのUUID配列 */
  off: string[];
}

/**
 * PinAddedEvent
 * ピン追加イベント
 */
export interface PinAddedEvent {
  /**
   * 変更者UUID
   * @format uuid
   */
  userId: string;
  /**
   * メッセージUUID
   * @format uuid
   */
  messageId: string;
}

/**
 * PinRemovedEvent
 * ピン削除イベント
 */
export interface PinRemovedEvent {
  /**
   * 変更者UUID
   * @format uuid
   */
  userId: string;
  /**
   * メッセージUUID
   * @format uuid
   */
  messageId: string;
}

/**
 * NameChangedEvent
 * チャンネル名変更イベント
 */
export interface NameChangedEvent {
  /**
   * 変更者UUID
   * @format uuid
   */
  userId: string;
  /** 変更前チャンネル名 */
  before: string;
  /** 変更後チャンネル名 */
  after: string;
}

/**
 * ParentChangedEvent
 * 親チャンネル変更イベント
 */
export interface ParentChangedEvent {
  /**
   * 変更者UUID
   * @format uuid
   */
  userId: string;
  /**
   * 変更前親チャンネルUUID
   * @format uuid
   */
  before: string;
  /**
   * 変更後親チャンネルUUID
   * @format uuid
   */
  after: string;
}

/**
 * VisibilityChangedEvent
 * チャンネル可視状態変更イベント
 */
export interface VisibilityChangedEvent {
  /**
   * 変更者UUID
   * @format uuid
   */
  userId: string;
  /** 変更後可視状態 */
  visibility: boolean;
}

/**
 * ForcedNotificationChangedEvent
 * チャンネル強制通知状態変更イベント
 */
export interface ForcedNotificationChangedEvent {
  /**
   * 変更者UUID
   * @format uuid
   */
  userId: string;
  /** 変更後強制通知状態 */
  force: boolean;
}

/**
 * ChildCreatedEvent
 * 子チャンネル作成イベント
 */
export interface ChildCreatedEvent {
  /**
   * 作成者UUID
   * @format uuid
   */
  userId: string;
  /**
   * チャンネルUUID
   * @format uuid
   */
  channelId: string;
}

/**
 * StampPalette
 * スタンプパレット情報
 */
export interface StampPalette {
  /**
   * スタンプパレットUUID
   * @format uuid
   */
  id: string;
  /**
   * パレット名
   * @maxLength 30
   */
  name: string;
  /** パレット内のスタンプのUUID配列 */
  stamps: string[];
  /**
   * 作成者UUID
   * @format uuid
   */
  creatorId: string;
  /**
   * パレット作成日時
   * @format date-time
   */
  createdAt: string;
  /**
   * パレット更新日時
   * @format date-time
   */
  updatedAt: string;
  /**
   * パレット説明
   * @maxLength 1000
   */
  description: string;
}

/**
 * PostStampPaletteRequest
 * スタンプパレット作成リクエスト
 */
export interface PostStampPaletteRequest {
  /**
   * パレット内のスタンプのUUID配列
   * @maxItems 200
   * @uniqueItems true
   */
  stamps: string[];
  /**
   * パレット名
   * @maxLength 30
   */
  name: string;
  /**
   * 説明
   * @maxLength 1000
   */
  description: string;
}

/**
 * PatchStampPaletteRequest
 * スタンプパレット情報変更リクエスト
 */
export interface PatchStampPaletteRequest {
  /**
   * パレット名
   * @minLength 1
   * @maxLength 30
   */
  name?: string;
  /**
   * 説明
   * @maxLength 1000
   */
  description?: string;
  /**
   * パレット内のスタンプUUIDの配列
   * @maxItems 200
   * @uniqueItems true
   */
  stamps?: string[];
}

/**
 * PatchStampRequest
 * スタンプ情報変更リクエスト
 */
export interface PatchStampRequest {
  /**
   * スタンプ名
   * @pattern ^[a-zA-Z0-9_-]{1,32}$
   */
  name?: string;
  /**
   * 作成者UUID
   * @format uuid
   */
  creatorId?: string;
}

/**
 * MessagePin
 * ピン情報
 */
export interface MessagePin {
  /**
   * ピン留めしたユーザーUUID
   * @format uuid
   */
  userId: string;
  /**
   * ピン留めされた日時
   * @format date-time
   */
  pinnedAt: string;
}

/**
 * PostUserGroupAdmin
 * グループ管理者追加リクエスト
 */
export interface PostUserGroupAdminRequest {
  /**
   * 追加するユーザーのUUID
   * @format uuid
   */
  id: string;
}

/**
 * ChannelList
 * GET /channelsレスポンス
 */
export interface ChannelList {
  /** パブリックチャンネルの配列 */
  public: Channel[];
  /** ダイレクトメッセージチャンネルの配列 */
  dm?: DMChannel[];
}

/**
 * DMChannel
 * ダイレクトメッセージチャンネル
 */
export interface DMChannel {
  /**
   * チャンネルUUID
   * @format uuid
   */
  id: string;
  /**
   * 送信先相手のUUID
   * @format uuid
   */
  userId: string;
}

/**
 * ActivityTimelineMessage
 * Timelineアクテビティ用メッセージ
 */
export interface ActivityTimelineMessage {
  /**
   * メッセージUUID
   * @format uuid
   */
  id: string;
  /**
   * 投稿者UUID
   * @format uuid
   */
  userId: string;
  /**
   * チャンネルUUID
   * @format uuid
   */
  channelId: string;
  /** メッセージ本文 */
  content: string;
  /**
   * 投稿日時
   * @format date-time
   */
  createdAt: string;
  /**
   * 編集日時
   * @format date-time
   */
  updatedAt: string;
}

export interface OAuth2Decide {
  /** 承諾する場合は"approve" */
  submit: string;
}

export interface PostOAuth2Token {
  grant_type: string;
  code?: string;
  redirect_uri?: string;
  client_id?: string;
  code_verifier?: string;
  username?: string;
  /** @format password */
  password?: string;
  scope?: string;
  refresh_token?: string;
  client_secret?: string;
}

export interface OAuth2Token {
  access_token: string;
  token_type: string;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
  id_token?: string;
}

export interface OAuth2Authorization {
  response_type?: OAuth2ResponseType;
  client_id: string;
  redirect_uri?: string;
  scope?: string;
  state?: string;
  code_challenge?: string;
  code_challenge_method?: string;
  nonce?: string;
  prompt?: OAuth2Prompt;
}

export enum OAuth2Prompt {
  None = 'none',
}

export enum OAuth2ResponseType {
  Code = 'code',
  Token = 'token',
  None = 'none',
}

/**
 * OAuth2Revoke
 * POST /oauth2/revoke 用リクエストボディ
 */
export interface OAuth2Revoke {
  /** 無効化するOAuth2トークンまたはOAuth2リフレッシュトークン */
  token: string;
}

/**
 * ExternalProviderUser
 * 外部認証アカウントユーザー
 */
export interface ExternalProviderUser {
  /** 外部サービス名 */
  providerName: string;
  /** 紐付けた日時 */
  linkedAt: string;
  /** 外部アカウント名 */
  externalName: string;
}

/**
 * PostLinkExternalAccount
 * POST /users/me/ex-accounts/link 用リクエストボディ
 */
export interface PostLinkExternalAccount {
  /** 外部サービス名 */
  providerName: string;
}

/**
 * PostUnlinkExternalAccount
 * POST /users/me/ex-accounts/unlink 用リクエストボディ
 */
export interface PostUnlinkExternalAccount {
  /** 外部サービス名 */
  providerName: string;
}

/**
 * UserPermission
 * ユーザー権限
 */
export enum UserPermission {
  GetWebhook = 'get_webhook',
  CreateWebhook = 'create_webhook',
  EditWebhook = 'edit_webhook',
  DeleteWebhook = 'delete_webhook',
  AccessOthersWebhook = 'access_others_webhook',
  GetBot = 'get_bot',
  CreateBot = 'create_bot',
  EditBot = 'edit_bot',
  DeleteBot = 'delete_bot',
  AccessOthersBot = 'access_others_bot',
  BotActionJoinChannel = 'bot_action_join_channel',
  BotActionLeaveChannel = 'bot_action_leave_channel',
  CreateChannel = 'create_channel',
  GetChannel = 'get_channel',
  EditChannel = 'edit_channel',
  DeleteChannel = 'delete_channel',
  ChangeParentChannel = 'change_parent_channel',
  EditChannelTopic = 'edit_channel_topic',
  GetChannelStar = 'get_channel_star',
  EditChannelStar = 'edit_channel_star',
  GetMyTokens = 'get_my_tokens',
  RevokeMyToken = 'revoke_my_token',
  GetClients = 'get_clients',
  CreateClient = 'create_client',
  EditMyClient = 'edit_my_client',
  DeleteMyClient = 'delete_my_client',
  ManageOthersClient = 'manage_others_client',
  UploadFile = 'upload_file',
  DownloadFile = 'download_file',
  DeleteFile = 'delete_file',
  GetMessage = 'get_message',
  PostMessage = 'post_message',
  EditMessage = 'edit_message',
  DeleteMessage = 'delete_message',
  ReportMessage = 'report_message',
  GetMessageReports = 'get_message_reports',
  CreateMessagePin = 'create_message_pin',
  DeleteMessagePin = 'delete_message_pin',
  GetChannelSubscription = 'get_channel_subscription',
  EditChannelSubscription = 'edit_channel_subscription',
  ConnectNotificationStream = 'connect_notification_stream',
  RegisterFCMDevice = 'register_fcm_device',
  GetStamp = 'get_stamp',
  CreateStamp = 'create_stamp',
  EditStamp = 'edit_stamp',
  EditStampCreatedByOthers = 'edit_stamp_created_by_others',
  DeleteStamp = 'delete_stamp',
  DeleteMyStamp = 'delete_my_stamp',
  AddMessageStamp = 'add_message_stamp',
  RemoveMessageStamp = 'remove_message_stamp',
  GetMyStampHistory = 'get_my_stamp_history',
  GetStampPalette = 'get_stamp_palette',
  CreateStampPalette = 'create_stamp_palette',
  EditStampPalette = 'edit_stamp_palette',
  DeleteStampPalette = 'delete_stamp_palette',
  GetUser = 'get_user',
  RegisterUser = 'register_user',
  GetMe = 'get_me',
  GetOIDCUserInfo = 'get_oidc_userinfo',
  EditMe = 'edit_me',
  ChangeMyIcon = 'change_my_icon',
  ChangeMyPassword = 'change_my_password',
  EditOtherUsers = 'edit_other_users',
  GetUserQRCode = 'get_user_qr_code',
  GetUserTag = 'get_user_tag',
  EditUserTag = 'edit_user_tag',
  GetUserGroup = 'get_user_group',
  CreateUserGroup = 'create_user_group',
  CreateSpecialUserGroup = 'create_special_user_group',
  EditUserGroup = 'edit_user_group',
  DeleteUserGroup = 'delete_user_group',
  AllUserGroupsAdmin = 'edit_others_user_group',
  WebRTC = 'web_rtc',
  GetMySessions = 'get_my_sessions',
  DeleteMySessions = 'delete_my_sessions',
  GetMyExternalAccount = 'get_my_external_account',
  EditMyExternalAccount = 'edit_my_external_account',
  GetUnread = 'get_unread',
  DeleteUnread = 'delete_unread',
  GetClipFolder = 'get_clip_folder',
  CreateClipFolder = 'create_clip_folder',
  EditClipFolder = 'edit_clip_folder',
  DeleteClipFolder = 'delete_clip_folder',
}

/**
 * Version
 * バージョン・サーバーフラグ情報
 */
export interface Version {
  /** traQ(サーバー)リビジョン */
  revision: string;
  /** traQ(サーバー)バージョン */
  version: string;
  flags: {
    /** 有効な外部ログインプロバイダ */
    externalLogin: string[];
    /** ユーザーが自身で新規登録(POST /api/v3/users)可能か */
    signUpAllowed: boolean;
  };
}

/**
 * WebRTCUserState
 * WebRTC状態
 */
export interface WebRTCUserState {
  /**
   * ユーザーUUID
   * @format uuid
   */
  userId: string;
  /**
   * チャンネルUUID
   * @format uuid
   */
  channelId: string;
  /** セッションの配列 */
  sessions: Session[];
}

/**
 * MessageClip
 * メッセージクリップ
 */
export interface MessageClip {
  /**
   * クリップされているフォルダのID
   * @format uuid
   */
  folderId: string;
  /**
   * クリップされた日時
   * @format date-time
   */
  clippedAt: string;
}

/**
 * Ogp
 * OGPの情報
 */
export interface Ogp {
  type: string;
  title: string;
  url: string;
  images: OgpMedia[];
  description: string;
  videos: OgpMedia[];
}

/**
 * OgpMedia
 * OGPに含まれる画像の情報
 */
export interface OgpMedia {
  url: string;
  secureUrl: string | null;
  type: string | null;
  width: number | null;
  height: number | null;
}

/**
 * GetNotifyCitation
 * メッセージ引用通知の設定情報
 */
export interface GetNotifyCitation {
  notifyCitation: boolean;
}

/**
 * UserSettings
 * ユーザー設定の情報
 */
export interface UserSettings {
  /**
   * ユーザーUUID
   * @format uuid
   */
  id: string;
  /** メッセージ引用通知の設定情報 */
  notifyCitation: boolean;
}

/**
 * PutNotifyCitationRequest
 * メッセージ引用通知設定リクエスト
 */
export interface PutNotifyCitationRequest {
  /** メッセージ引用通知の設定情報 */
  notifyCitation: boolean;
}

export interface Session {
  /** 状態 */
  state: string;
  /** セッションID */
  sessionId: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://q.trap.jp/api/v3';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: FormData) =>
      (Array.from(input.keys()) || []).reduce((formData, key) => {
        const property = input.get(key);
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title traQ v3
 * @version 3.0
 * @license MIT (https://github.com/traPtitech/traQ/blob/master/LICENSE)
 * @baseUrl https://q.trap.jp/api/v3
 * @contact traP (https://github.com/traPtitech/traQ)
 *
 * traQ v3 API
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  channels = {
    /**
     * @description 指定したチャンネルにメッセージを投稿します。 embedをtrueに指定すると、メッセージ埋め込みが自動で行われます。 アーカイブされているチャンネルに投稿することはできません。
     *
     * @tags message, channel
     * @name PostMessage
     * @summary チャンネルにメッセージを投稿
     * @request POST:/channels/{channelId}/messages
     * @secure
     */
    postMessage: (
      channelId: string,
      data: PostMessageRequest,
      params: RequestParams = {}
    ) =>
      this.request<Message, void>({
        path: `/channels/${channelId}/messages`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したチャンネルのメッセージのリストを取得します。
     *
     * @tags channel, message
     * @name GetMessages
     * @summary チャンネルメッセージのリストを取得
     * @request GET:/channels/{channelId}/messages
     * @secure
     */
    getMessages: (
      channelId: string,
      query?: {
        /**
         * 取得する件数
         * @min 1
         * @max 200
         * @example 50
         */
        limit?: number;
        /**
         * 取得するオフセット
         * @default 0
         * @example 150
         */
        offset?: number;
        /**
         * 取得する時間範囲の開始日時
         * @format date-time
         * @default "0000-01-01T00:00:00.000000Z"
         * @example "2016-10-12T11:00:00.000000Z"
         */
        since?: string;
        /**
         * 取得する時間範囲の終了日時
         * @format date-time
         * @example "2016-10-12T11:00:00.0000000Z"
         */
        until?: string;
        /**
         * 範囲の端を含めるかどうか
         * @default false
         */
        inclusive?: boolean;
        /**
         * 昇順か降順か
         * @default "desc"
         */
        order?: 'asc' | 'desc';
      },
      params: RequestParams = {}
    ) =>
      this.request<Message[], void>({
        path: `/channels/${channelId}/messages`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したチャンネルの統計情報を取得します。
     *
     * @tags channel
     * @name GetChannelStats
     * @summary チャンネル統計情報を取得
     * @request GET:/channels/{channelId}/stats
     * @secure
     */
    getChannelStats: (channelId: string, params: RequestParams = {}) =>
      this.request<ChannelStats, void>({
        path: `/channels/${channelId}/stats`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したチャンネルのトピックを取得します。
     *
     * @tags channel
     * @name GetChannelTopic
     * @summary チャンネルトピックを取得
     * @request GET:/channels/{channelId}/topic
     * @secure
     */
    getChannelTopic: (channelId: string, params: RequestParams = {}) =>
      this.request<ChannelTopic, void>({
        path: `/channels/${channelId}/topic`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したチャンネルのトピックを編集します。 アーカイブされているチャンネルのトピックは編集できません。
     *
     * @tags channel
     * @name EditChannelTopic
     * @summary チャンネルトピックを編集
     * @request PUT:/channels/{channelId}/topic
     * @secure
     */
    editChannelTopic: (
      channelId: string,
      data: PutChannelTopicRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/channels/${channelId}/topic`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したチャンネルの閲覧者のリストを取得します。
     *
     * @tags channel
     * @name GetChannelViewers
     * @summary チャンネル閲覧者リストを取得
     * @request GET:/channels/{channelId}/viewers
     * @secure
     */
    getChannelViewers: (channelId: string, params: RequestParams = {}) =>
      this.request<ChannelViewer[], void>({
        path: `/channels/${channelId}/viewers`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したチャンネルにピン留めされているピンメッセージのリストを取得します。
     *
     * @tags channel, pin
     * @name GetChannelPins
     * @summary チャンネルピンのリストを取得
     * @request GET:/channels/{channelId}/pins
     * @secure
     */
    getChannelPins: (channelId: string, params: RequestParams = {}) =>
      this.request<Pin[], void>({
        path: `/channels/${channelId}/pins`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したチャンネルを通知購読しているユーザーのUUIDのリストを取得します。
     *
     * @tags channel, notification
     * @name GetChannelSubscribers
     * @summary チャンネルの通知購読者のリストを取得
     * @request GET:/channels/{channelId}/subscribers
     * @secure
     */
    getChannelSubscribers: (channelId: string, params: RequestParams = {}) =>
      this.request<string[], void>({
        path: `/channels/${channelId}/subscribers`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したチャンネルの通知購読者を編集します。 リクエストに含めなかったユーザーの通知購読状態は変更しません。 また、存在しないユーザーを指定した場合は無視されます。
     *
     * @tags channel, notification
     * @name EditChannelSubscribers
     * @summary チャンネルの通知購読者を編集
     * @request PATCH:/channels/{channelId}/subscribers
     * @secure
     */
    editChannelSubscribers: (
      channelId: string,
      data: PatchChannelSubscribersRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/channels/${channelId}/subscribers`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したチャンネルの通知購読者を設定します。 リクエストに含めなかったユーザーの通知購読状態はオフになります。 また、存在しないユーザーを指定した場合は無視されます。
     *
     * @tags channel, notification
     * @name SetChannelSubscribers
     * @summary チャンネルの通知購読者を設定
     * @request PUT:/channels/{channelId}/subscribers
     * @secure
     */
    setChannelSubscribers: (
      channelId: string,
      data: PutChannelSubscribersRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/channels/${channelId}/subscribers`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description チャンネルを作成します。 階層が6以上になるチャンネルは作成できません。
     *
     * @tags channel
     * @name CreateChannel
     * @summary チャンネルを作成
     * @request POST:/channels
     * @secure
     */
    createChannel: (data: PostChannelRequest, params: RequestParams = {}) =>
      this.request<Channel, void>({
        path: `/channels`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description チャンネルのリストを取得します。
     *
     * @tags channel
     * @name GetChannels
     * @summary チャンネルリストを取得
     * @request GET:/channels
     * @secure
     */
    getChannels: (
      query?: {
        /**
         * ダイレクトメッセージチャンネルをレスポンスに含めるかどうか
         * @default false
         */
        'include-dm'?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<ChannelList, any>({
        path: `/channels`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したチャンネルに参加しているBOTのリストを取得します。
     *
     * @tags bot, channel
     * @name GetChannelBots
     * @summary チャンネル参加中のBOTのリストを取得
     * @request GET:/channels/{channelId}/bots
     * @secure
     */
    getChannelBots: (channelId: string, params: RequestParams = {}) =>
      this.request<BotUser[], void>({
        path: `/channels/${channelId}/bots`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したチャンネルの情報を取得します。
     *
     * @tags channel
     * @name GetChannel
     * @summary チャンネル情報を取得
     * @request GET:/channels/{channelId}
     * @secure
     */
    getChannel: (channelId: string, params: RequestParams = {}) =>
      this.request<Channel, void>({
        path: `/channels/${channelId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したチャンネルの情報を変更します。 変更には権限が必要です。 ルートチャンネルに移動させる場合は、`parent`に`00000000-0000-0000-0000-000000000000`を指定してください。
     *
     * @tags channel
     * @name EditChannel
     * @summary チャンネル情報を変更
     * @request PATCH:/channels/{channelId}
     * @secure
     */
    editChannel: (
      channelId: string,
      data: PatchChannelRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/channels/${channelId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したチャンネルのイベントリストを取得します。
     *
     * @tags channel
     * @name GetChannelEvents
     * @summary チャンネルイベントのリストを取得
     * @request GET:/channels/{channelId}/events
     * @secure
     */
    getChannelEvents: (
      channelId: string,
      query?: {
        /**
         * 取得する件数
         * @min 1
         * @max 200
         * @example 50
         */
        limit?: number;
        /**
         * 取得するオフセット
         * @default 0
         * @example 150
         */
        offset?: number;
        /**
         * 取得する時間範囲の開始日時
         * @format date-time
         * @default "0000-01-01T00:00:00.000000Z"
         * @example "2016-10-12T11:00:00.000000Z"
         */
        since?: string;
        /**
         * 取得する時間範囲の終了日時
         * @format date-time
         * @example "2016-10-12T11:00:00.0000000Z"
         */
        until?: string;
        /**
         * 範囲の端を含めるかどうか
         * @default false
         */
        inclusive?: boolean;
        /**
         * 昇順か降順か
         * @default "desc"
         */
        order?: 'asc' | 'desc';
      },
      params: RequestParams = {}
    ) =>
      this.request<ChannelEvent[], void>({
        path: `/channels/${channelId}/events`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  messages = {
    /**
     * @description メッセージを検索します。
     *
     * @tags message
     * @name SearchMessages
     * @summary メッセージを検索
     * @request GET:/messages
     * @secure
     */
    searchMessages: (
      query?: {
        /**
         * 検索ワード
         * Simple-Query-String-Syntaxをパースして検索します
         * @example ""phrase match" +(foo | bar) -baz"
         */
        word?: string;
        /**
         * 投稿日時が指定日時より後
         * @format date-time
         * @example "2006-01-02T15:04:05.000Z"
         */
        after?: string;
        /**
         * 投稿日時が指定日時より前
         * @format date-time
         * @example "2006-01-02T15:04:05.000Z"
         */
        before?: string;
        /**
         * メッセージが投稿されたチャンネル
         * @format uuid
         */
        in?: string;
        /**
         * メンションされたユーザー
         * @format uuid
         */
        to?: string;
        /**
         * メッセージを投稿したユーザー
         * @format uuid
         */
        from?: string;
        /**
         * 引用しているメッセージ
         * @format uuid
         */
        citation?: string;
        /** メッセージを投稿したユーザーがBotかどうか */
        bot?: boolean;
        /** メッセージがURLを含むか */
        hasURL?: boolean;
        /** メッセージが添付ファイルを含むか */
        hasAttachments?: boolean;
        /** メッセージが画像を含むか */
        hasImage?: boolean;
        /** メッセージが動画を含むか */
        hasVideo?: boolean;
        /** メッセージが音声ファイルを含むか */
        hasAudio?: boolean;
        /**
         * 検索結果から取得するメッセージの最大件数
         * @min 1
         * @max 100
         */
        limit?: number;
        /**
         * 検索結果から取得するメッセージのオフセット
         * @min 0
         * @max 9900
         */
        offset?: number;
        /**
         * ソート順 (作成日時が新しい `createdAt`, 作成日時が古い `-createdAt`, 更新日時が新しい `updatedAt`, 更新日時が古い `-updatedAt`)
         * @default "-createdAt"
         */
        sort?: 'createdAt' | '-createdAt' | 'updatedAt' | '-updatedAt';
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          /**
           * 検索にヒットしたメッセージ件数
           * @format int64
           */
          totalHits: number;
          /** 検索にヒットしたメッセージの配列 */
          hits: Message[];
        },
        void
      >({
        path: `/messages`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したメッセージを取得します。
     *
     * @tags message
     * @name GetMessage
     * @summary メッセージを取得
     * @request GET:/messages/{messageId}
     * @secure
     */
    getMessage: (messageId: string, params: RequestParams = {}) =>
      this.request<Message, void>({
        path: `/messages/${messageId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したメッセージを編集します。 自身が投稿したメッセージのみ編集することができます。 アーカイブされているチャンネルのメッセージを編集することは出来ません。
     *
     * @tags message
     * @name EditMessage
     * @summary メッセージを編集
     * @request PUT:/messages/{messageId}
     * @secure
     */
    editMessage: (
      messageId: string,
      data: PostMessageRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/messages/${messageId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したメッセージを削除します。 自身が投稿したメッセージと自身が管理権限を持つWebhookとBOTが投稿したメッセージのみ削除することができます。 アーカイブされているチャンネルのメッセージを編集することは出来ません。
     *
     * @tags message
     * @name DeleteMessage
     * @summary メッセージを削除
     * @request DELETE:/messages/{messageId}
     * @secure
     */
    deleteMessage: (messageId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/messages/${messageId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したメッセージのピン留め情報を取得します。
     *
     * @tags message, pin
     * @name GetPin
     * @summary ピン留めを取得
     * @request GET:/messages/{messageId}/pin
     * @secure
     */
    getPin: (messageId: string, params: RequestParams = {}) =>
      this.request<MessagePin, void>({
        path: `/messages/${messageId}/pin`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したメッセージをピン留めします。 アーカイブされているチャンネルのメッセージ・存在しないメッセージ・チャンネル当たりの上限数を超えたメッセージのピン留めはできません。
     *
     * @tags message, pin
     * @name CreatePin
     * @summary ピン留めする
     * @request POST:/messages/{messageId}/pin
     * @secure
     */
    createPin: (messageId: string, params: RequestParams = {}) =>
      this.request<MessagePin, void>({
        path: `/messages/${messageId}/pin`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したメッセージのピン留めを外します。
     *
     * @tags message, pin
     * @name RemovePin
     * @summary ピン留めを外す
     * @request DELETE:/messages/{messageId}/pin
     * @secure
     */
    removePin: (messageId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/messages/${messageId}/pin`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したメッセージに押されているスタンプのリストを取得します。
     *
     * @tags message, stamp
     * @name GetMessageStamps
     * @summary メッセージのスタンプリストを取得
     * @request GET:/messages/{messageId}/stamps
     * @secure
     */
    getMessageStamps: (messageId: string, params: RequestParams = {}) =>
      this.request<MessageStamp[], void>({
        path: `/messages/${messageId}/stamps`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したメッセージに指定したスタンプを押します。
     *
     * @tags message, stamp
     * @name AddMessageStamp
     * @summary スタンプを押す
     * @request POST:/messages/{messageId}/stamps/{stampId}
     * @secure
     */
    addMessageStamp: (
      messageId: string,
      stampId: string,
      data: PostMessageStampRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/messages/${messageId}/stamps/${stampId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したメッセージから指定した自身が押したスタンプを削除します。
     *
     * @tags message, stamp
     * @name RemoveMessageStamp
     * @summary スタンプを消す
     * @request DELETE:/messages/{messageId}/stamps/{stampId}
     * @secure
     */
    removeMessageStamp: (
      messageId: string,
      stampId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/messages/${messageId}/stamps/${stampId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 対象のメッセージの自分のクリップの一覧を返します。
     *
     * @tags message, clip
     * @name GetMessageClips
     * @summary 自分のクリップを取得
     * @request GET:/messages/{messageId}/clips
     * @secure
     */
    getMessageClips: (messageId: string, params: RequestParams = {}) =>
      this.request<MessageClip[], void>({
        path: `/messages/${messageId}/clips`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  files = {
    /**
     * @description 指定したチャンネルにファイルをアップロードします。 アーカイブされているチャンネルにはアップロード出来ません。
     *
     * @tags file
     * @name PostFile
     * @summary ファイルをアップロード
     * @request POST:/files
     * @secure
     */
    postFile: (data: PostFileRequest, params: RequestParams = {}) =>
      this.request<FileInfo, void>({
        path: `/files`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したクエリでファイルメタのリストを取得します。 クエリパラメータ`channelId`, `mine`の少なくともいずれかが必須です。
     *
     * @tags file
     * @name GetFiles
     * @summary ファイルメタのリストを取得
     * @request GET:/files
     * @secure
     */
    getFiles: (
      query?: {
        /**
         * アップロード先チャンネルUUID
         * @format uuid
         */
        channelId?: string;
        /**
         * 取得する件数
         * @min 1
         * @max 200
         * @example 50
         */
        limit?: number;
        /**
         * 取得するオフセット
         * @default 0
         * @example 150
         */
        offset?: number;
        /**
         * 取得する時間範囲の開始日時
         * @format date-time
         * @default "0000-01-01T00:00:00.000000Z"
         * @example "2016-10-12T11:00:00.000000Z"
         */
        since?: string;
        /**
         * 取得する時間範囲の終了日時
         * @format date-time
         * @example "2016-10-12T11:00:00.0000000Z"
         */
        until?: string;
        /**
         * 範囲の端を含めるかどうか
         * @default false
         */
        inclusive?: boolean;
        /**
         * 昇順か降順か
         * @default "desc"
         */
        order?: 'asc' | 'desc';
        /**
         * アップロード者が自分のファイルのみを取得するか
         * @default false
         */
        mine?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<FileInfo[], void>({
        path: `/files`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したファイルのメタ情報を取得します。 指定したファイルへのアクセス権限が必要です。
     *
     * @tags file
     * @name GetFileMeta
     * @summary ファイルメタを取得
     * @request GET:/files/{fileId}/meta
     * @secure
     */
    getFileMeta: (fileId: string, params: RequestParams = {}) =>
      this.request<FileInfo, void>({
        path: `/files/${fileId}/meta`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したファイルのサムネイル画像を取得します。 指定したファイルへのアクセス権限が必要です。
     *
     * @tags file
     * @name GetThumbnailImage
     * @summary サムネイル画像を取得
     * @request GET:/files/{fileId}/thumbnail
     * @secure
     */
    getThumbnailImage: (
      fileId: string,
      query?: {
        /** 取得するサムネイルのタイプ */
        type?: ThumbnailType;
      },
      params: RequestParams = {}
    ) =>
      this.request<File, void>({
        path: `/files/${fileId}/thumbnail`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'blob',
        ...params,
      }),

    /**
     * @description 指定したファイル本体を取得します。 指定したファイルへのアクセス権限が必要です。
     *
     * @tags file
     * @name GetFile
     * @summary ファイルをダウンロード
     * @request GET:/files/{fileId}
     * @secure
     */
    getFile: (
      fileId: string,
      query?: {
        /** 1を指定するとレスポンスにContent-Dispositionヘッダーが付与されます */
        dl?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<File, void>({
        path: `/files/${fileId}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したファイルを削除します。 指定したファイルの削除権限が必要です。
     *
     * @tags file
     * @name DeleteFile
     * @summary ファイルを削除
     * @request DELETE:/files/{fileId}
     * @secure
     */
    deleteFile: (fileId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/files/${fileId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  stamps = {
    /**
     * @description 指定したスタンプの情報を取得します。
     *
     * @tags stamp
     * @name GetStamp
     * @summary スタンプ情報を取得
     * @request GET:/stamps/{stampId}
     * @secure
     */
    getStamp: (stampId: string, params: RequestParams = {}) =>
      this.request<Stamp, void>({
        path: `/stamps/${stampId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したスタンプを削除します。 対象のスタンプの削除権限が必要です。
     *
     * @tags stamp
     * @name DeleteStamp
     * @summary スタンプを削除
     * @request DELETE:/stamps/{stampId}
     * @secure
     */
    deleteStamp: (stampId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/stamps/${stampId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したスタンプの情報を変更します。
     *
     * @tags stamp
     * @name EditStamp
     * @summary スタンプ情報を変更
     * @request PATCH:/stamps/{stampId}
     * @secure
     */
    editStamp: (
      stampId: string,
      data: PatchStampRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/stamps/${stampId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description スタンプを新規作成します。
     *
     * @tags stamp
     * @name CreateStamp
     * @summary スタンプを作成
     * @request POST:/stamps
     * @secure
     */
    createStamp: (data: PostStampRequest, params: RequestParams = {}) =>
      this.request<Stamp, void>({
        path: `/stamps`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description スタンプのリストを取得します。
     *
     * @tags stamp
     * @name GetStamps
     * @summary スタンプリストを取得
     * @request GET:/stamps
     * @secure
     */
    getStamps: (
      query?: {
        /**
         * Unicode絵文字を含ませるかどうか
         * Deprecated: typeクエリを指定しなければ全てのスタンプを取得できるため、そちらを利用してください
         * @deprecated
         * @default true
         */
        'include-unicode'?: boolean;
        /** 取得するスタンプの種類 */
        type?: 'unicode' | 'original';
      },
      params: RequestParams = {}
    ) =>
      this.request<StampWithThumbnail[], any>({
        path: `/stamps`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したスタンプの統計情報を取得します。
     *
     * @tags stamp
     * @name GetStampStats
     * @summary スタンプ統計情報を取得
     * @request GET:/stamps/{stampId}/stats
     * @secure
     */
    getStampStats: (stampId: string, params: RequestParams = {}) =>
      this.request<StampStats, void>({
        path: `/stamps/${stampId}/stats`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したIDのスタンプ画像を返します。
     *
     * @tags stamp
     * @name GetStampImage
     * @summary スタンプ画像を取得
     * @request GET:/stamps/{stampId}/image
     * @secure
     */
    getStampImage: (stampId: string, params: RequestParams = {}) =>
      this.request<File, void>({
        path: `/stamps/${stampId}/image`,
        method: 'GET',
        secure: true,
        format: 'blob',
        ...params,
      }),

    /**
     * @description 指定したスタンプの画像を変更します。
     *
     * @tags stamp
     * @name ChangeStampImage
     * @summary スタンプ画像を変更
     * @request PUT:/stamps/{stampId}/image
     * @secure
     */
    changeStampImage: (
      stampId: string,
      data: {
        /**
         * スタンプ画像(1MBまでのpng, jpeg, gif)
         * @format binary
         */
        file: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/stamps/${stampId}/image`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
  users = {
    /**
     * @description 自分のスタンプ履歴を最大100件まで取得します。 結果は降順で返されます。 このAPIが返すスタンプ履歴は厳密な履歴ではありません。
     *
     * @tags stamp, me
     * @name GetMyStampHistory
     * @summary スタンプ履歴を取得
     * @request GET:/users/me/stamp-history
     * @secure
     */
    getMyStampHistory: (
      query?: {
        /**
         * 件数
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<StampHistoryEntry[], any>({
        path: `/users/me/stamp-history`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 自身のQRコードを取得します。 返されたQRコードまたはトークンは、発行後の5分間のみ有効です
     *
     * @tags me
     * @name GetMyQrCode
     * @summary QRコードを取得
     * @request GET:/users/me/qr-code
     * @secure
     */
    getMyQrCode: (
      query?: {
        /**
         * 画像でなくトークン文字列で返すかどうか
         * @default false
         */
        token?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<File, any>({
        path: `/users/me/qr-code`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'blob',
        ...params,
      }),

    /**
     * @description 指定したユーザーの詳細情報を取得します。
     *
     * @tags user
     * @name GetUser
     * @summary ユーザー詳細情報を取得
     * @request GET:/users/{userId}
     * @secure
     */
    getUser: (userId: string, params: RequestParams = {}) =>
      this.request<UserDetail, void>({
        path: `/users/${userId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したユーザーの情報を変更します。 管理者権限が必要です。
     *
     * @tags user
     * @name EditUser
     * @summary ユーザー情報を変更
     * @request PATCH:/users/{userId}
     * @secure
     */
    editUser: (
      userId: string,
      data: PatchUserRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/users/${userId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 自身のユーザー詳細情報を取得します。
     *
     * @tags me
     * @name GetMe
     * @summary 自分のユーザー詳細を取得
     * @request GET:/users/me
     * @secure
     */
    getMe: (params: RequestParams = {}) =>
      this.request<MyUserDetail, any>({
        path: `/users/me`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 自身のユーザー情報を変更します。
     *
     * @tags me
     * @name EditMe
     * @summary 自分のユーザー情報を変更
     * @request PATCH:/users/me
     * @secure
     */
    editMe: (data: PatchMeRequest, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/me`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description OIDCトークンを用いてユーザー詳細を取得します。 OIDC UserInfo Endpointです。
     *
     * @tags me
     * @name GetOidcUserInfo
     * @summary 自分のユーザー詳細を取得 (OIDC UserInfo)
     * @request GET:/users/me/oidc
     * @secure
     */
    getOidcUserInfo: (params: RequestParams = {}) =>
      this.request<OIDCUserInfo, any>({
        path: `/users/me/oidc`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したユーザーにダイレクトメッセージを送信します。
     *
     * @tags message, user
     * @name PostDirectMessage
     * @summary ダイレクトメッセージを送信
     * @request POST:/users/{userId}/messages
     * @secure
     */
    postDirectMessage: (
      userId: string,
      data: PostMessageRequest,
      params: RequestParams = {}
    ) =>
      this.request<Message, void>({
        path: `/users/${userId}/messages`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したユーザーとのダイレクトメッセージのリストを取得します。
     *
     * @tags message, user
     * @name GetDirectMessages
     * @summary ダイレクトメッセージのリストを取得
     * @request GET:/users/{userId}/messages
     * @secure
     */
    getDirectMessages: (
      userId: string,
      query?: {
        /**
         * 取得する件数
         * @min 1
         * @max 200
         * @example 50
         */
        limit?: number;
        /**
         * 取得するオフセット
         * @default 0
         * @example 150
         */
        offset?: number;
        /**
         * 取得する時間範囲の開始日時
         * @format date-time
         * @default "0000-01-01T00:00:00.000000Z"
         * @example "2016-10-12T11:00:00.000000Z"
         */
        since?: string;
        /**
         * 取得する時間範囲の終了日時
         * @format date-time
         * @example "2016-10-12T11:00:00.0000000Z"
         */
        until?: string;
        /**
         * 範囲の端を含めるかどうか
         * @default false
         */
        inclusive?: boolean;
        /**
         * 昇順か降順か
         * @default "desc"
         */
        order?: 'asc' | 'desc';
      },
      params: RequestParams = {}
    ) =>
      this.request<Message[], void>({
        path: `/users/${userId}/messages`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したユーザーの統計情報を取得します。
     *
     * @tags user
     * @name GetUserStats
     * @summary ユーザー統計情報を取得
     * @request GET:/users/{userId}/stats
     * @secure
     */
    getUserStats: (userId: string, params: RequestParams = {}) =>
      this.request<UserStats, void>({
        path: `/users/${userId}/stats`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 自身のチャンネル購読状態を取得します。
     *
     * @tags me, notification
     * @name GetMyChannelSubscriptions
     * @summary 自分のチャンネル購読状態を取得
     * @request GET:/users/me/subscriptions
     * @secure
     */
    getMyChannelSubscriptions: (params: RequestParams = {}) =>
      this.request<UserSubscribeState[], any>({
        path: `/users/me/subscriptions`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 自身の指定したチャンネルの購読レベルを設定します。
     *
     * @tags me, notification
     * @name SetChannelSubscribeLevel
     * @summary チャンネル購読レベルを設定
     * @request PUT:/users/me/subscriptions/{channelId}
     * @secure
     */
    setChannelSubscribeLevel: (
      channelId: string,
      data: PutChannelSubscribeLevelRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/users/me/subscriptions/${channelId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したユーザーのアイコン画像を取得します。
     *
     * @tags user
     * @name GetUserIcon
     * @summary ユーザーのアイコン画像を取得
     * @request GET:/users/{userId}/icon
     * @secure
     */
    getUserIcon: (userId: string, params: RequestParams = {}) =>
      this.request<File, void>({
        path: `/users/${userId}/icon`,
        method: 'GET',
        secure: true,
        format: 'blob',
        ...params,
      }),

    /**
     * @description 指定したユーザーのアイコン画像を変更します。 管理者権限が必要です。
     *
     * @tags user
     * @name ChangeUserIcon
     * @summary ユーザーのアイコン画像を変更します
     * @request PUT:/users/{userId}/icon
     * @secure
     */
    changeUserIcon: (
      userId: string,
      data: PutUserIconRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/users/${userId}/icon`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 自分のアイコン画像を取得します。
     *
     * @tags me
     * @name GetMyIcon
     * @summary 自分のアイコン画像を取得
     * @request GET:/users/me/icon
     * @secure
     */
    getMyIcon: (params: RequestParams = {}) =>
      this.request<File, void>({
        path: `/users/me/icon`,
        method: 'GET',
        secure: true,
        format: 'blob',
        ...params,
      }),

    /**
     * @description 自分のアイコン画像を変更します。
     *
     * @tags me
     * @name ChangeMyIcon
     * @summary 自分のアイコン画像を変更
     * @request PUT:/users/me/icon
     * @secure
     */
    changeMyIcon: (data: PutUserIconRequest, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/me/icon`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 自身のパスワードを変更します。
     *
     * @tags me
     * @name ChangeMyPassword
     * @summary 自分のパスワードを変更
     * @request PUT:/users/me/password
     * @secure
     */
    changeMyPassword: (
      data: PutMyPasswordRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/users/me/password`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したユーザーのパスワードを変更します。 管理者権限が必要です。
     *
     * @tags user
     * @name ChangeUserPassword
     * @summary ユーザーのパスワードを変更
     * @request PUT:/users/{userId}/password
     * @secure
     */
    changeUserPassword: (
      userId: string,
      data: PutUserPasswordRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/users/${userId}/password`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 自身のFCMデバイスを登録します。
     *
     * @tags me, notification
     * @name RegisterFcmDevice
     * @summary FCMデバイスを登録
     * @request POST:/users/me/fcm-device
     * @secure
     */
    registerFcmDevice: (
      data: PostMyFCMDeviceRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/users/me/fcm-device`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 自身のチャンネル閲覧状態一覧を取得します。
     *
     * @tags me, notification
     * @name GetMyViewStates
     * @summary 自身のチャンネル閲覧状態一覧を取得
     * @request GET:/users/me/view-states
     * @secure
     */
    getMyViewStates: (params: RequestParams = {}) =>
      this.request<MyChannelViewState[], any>({
        path: `/users/me/view-states`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description ユーザーを登録します。 管理者権限が必要です。
     *
     * @tags user
     * @name CreateUser
     * @summary ユーザーを登録
     * @request POST:/users
     * @secure
     */
    createUser: (data: PostUserRequest, params: RequestParams = {}) =>
      this.request<UserDetail, void>({
        path: `/users`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description ユーザーのリストを取得します。 `include-suspended`を指定しない場合、レスポンスにはユーザーアカウント状態が"1: 有効"であるユーザーのみが含まれます。 `include-suspended`と`name`を同時に指定することはできません。
     *
     * @tags user
     * @name GetUsers
     * @summary ユーザーのリストを取得
     * @request GET:/users
     * @secure
     */
    getUsers: (
      query?: {
        /**
         * アカウントがアクティブでないユーザーを含め、全てのユーザーを取得するかどうか
         * @default false
         */
        'include-suspended'?: boolean;
        /** 名前が一致するアカウントのみを取得する */
        name?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<User[], void>({
        path: `/users`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したユーザーのタグリストを取得します。
     *
     * @tags user, user tag
     * @name GetUserTags
     * @summary ユーザーのタグリストを取得
     * @request GET:/users/{userId}/tags
     * @secure
     */
    getUserTags: (userId: string, params: RequestParams = {}) =>
      this.request<UserTag[], void>({
        path: `/users/${userId}/tags`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したユーザーに指定したタグを追加します。 Webhookユーザーにタグを追加することは出来ません。
     *
     * @tags user, user tag
     * @name AddUserTag
     * @summary ユーザーにタグを追加
     * @request POST:/users/{userId}/tags
     * @secure
     */
    addUserTag: (
      userId: string,
      data: PostUserTagRequest,
      params: RequestParams = {}
    ) =>
      this.request<UserTag, void>({
        path: `/users/${userId}/tags`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したユーザーの指定したタグの状態を変更します。 他人の状態は変更できません。
     *
     * @tags user, user tag
     * @name EditUserTag
     * @summary ユーザーのタグを編集
     * @request PATCH:/users/{userId}/tags/{tagId}
     * @secure
     */
    editUserTag: (
      userId: string,
      tagId: string,
      data: PatchUserTagRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/users/${userId}/tags/${tagId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 既に存在しないタグを削除しようとした場合は204を返します。
     *
     * @tags user, user tag
     * @name RemoveUserTag
     * @summary ユーザーからタグを削除します
     * @request DELETE:/users/{userId}/tags/{tagId}
     * @secure
     */
    removeUserTag: (
      userId: string,
      tagId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/users/${userId}/tags/${tagId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 自分に付けられているタグの配列を取得します。
     *
     * @tags me, user tag
     * @name GetMyUserTags
     * @summary 自分のタグリストを取得
     * @request GET:/users/me/tags
     * @secure
     */
    getMyUserTags: (params: RequestParams = {}) =>
      this.request<UserTag[], any>({
        path: `/users/me/tags`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 自分に新しくタグを追加します。
     *
     * @tags me, user tag
     * @name AddMyUserTag
     * @summary 自分にタグを追加
     * @request POST:/users/me/tags
     * @secure
     */
    addMyUserTag: (data: PostUserTagRequest, params: RequestParams = {}) =>
      this.request<UserTag, void>({
        path: `/users/me/tags`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 既に存在しないタグを削除しようとした場合は204を返します。
     *
     * @tags user tag, me
     * @name RemoveMyUserTag
     * @summary 自分からタグを削除します
     * @request DELETE:/users/me/tags/{tagId}
     * @secure
     */
    removeMyUserTag: (tagId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/me/tags/${tagId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 自分の指定したタグの状態を変更します。
     *
     * @tags user tag, me
     * @name EditMyUserTag
     * @summary 自分のタグを編集
     * @request PATCH:/users/me/tags/{tagId}
     * @secure
     */
    editMyUserTag: (
      tagId: string,
      data: PatchUserTagRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/users/me/tags/${tagId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 自分がスターしているチャンネルのUUIDの配列を取得します。
     *
     * @tags me, star
     * @name GetMyStars
     * @summary スターチャンネルリストを取得
     * @request GET:/users/me/stars
     * @secure
     */
    getMyStars: (params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/users/me/stars`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したチャンネルをスターチャンネルに追加します。 スター済みのチャンネルIDを指定した場合、204を返します。 不正なチャンネルIDを指定した場合、400を返します。
     *
     * @tags me, star
     * @name AddMyStar
     * @summary チャンネルをスターに追加
     * @request POST:/users/me/stars
     * @secure
     */
    addMyStar: (data: PostStarRequest, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/me/stars`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 既にスターから削除されているチャンネルを指定した場合は204を返します。
     *
     * @tags me, star
     * @name RemoveMyStar
     * @summary チャンネルをスターから削除します
     * @request DELETE:/users/me/stars/{channelId}
     * @secure
     */
    removeMyStar: (channelId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/me/stars/${channelId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 自分が現在未読のチャンネルの未読情報を取得します。
     *
     * @tags me, notification
     * @name GetMyUnreadChannels
     * @summary 未読チャンネルを取得
     * @request GET:/users/me/unread
     * @secure
     */
    getMyUnreadChannels: (params: RequestParams = {}) =>
      this.request<UnreadChannel[], any>({
        path: `/users/me/unread`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 自分のログインセッションのリストを取得します。
     *
     * @tags authentication, me
     * @name GetMySessions
     * @summary 自分のログインセッションリストを取得
     * @request GET:/users/me/sessions
     * @secure
     */
    getMySessions: (params: RequestParams = {}) =>
      this.request<LoginSession[], any>({
        path: `/users/me/sessions`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定した自分のセッションを無効化(ログアウト)します。 既に存在しない・無効化されているセッションを指定した場合も`204`を返します。
     *
     * @tags authentication, me
     * @name RevokeMySession
     * @summary セッションを無効化
     * @request DELETE:/users/me/sessions/{sessionId}
     * @secure
     */
    revokeMySession: (sessionId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/me/sessions/${sessionId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 有効な自分に発行されたOAuth2トークンのリストを取得します。
     *
     * @tags oauth2, me
     * @name GetMyTokens
     * @summary 有効トークンのリストを取得
     * @request GET:/users/me/tokens
     * @secure
     */
    getMyTokens: (params: RequestParams = {}) =>
      this.request<ActiveOAuth2Token[], any>({
        path: `/users/me/tokens`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 自分の指定したトークンの認可を取り消します。
     *
     * @tags oauth2, me
     * @name RevokeMyToken
     * @summary トークンの認可を取り消す
     * @request DELETE:/users/me/tokens/{tokenId}
     * @secure
     */
    revokeMyToken: (tokenId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/me/tokens/${tokenId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 自分が未読のチャンネルを既読にします。
     *
     * @tags me, notification
     * @name ReadChannel
     * @summary チャンネルを既読にする
     * @request DELETE:/users/me/unread/{channelId}
     * @secure
     */
    readChannel: (channelId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/me/unread/${channelId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 自分に紐付けられている外部ログインアカウント一覧を取得します。
     *
     * @tags authentication, me
     * @name GetMyExternalAccounts
     * @summary 外部ログインアカウント一覧を取得
     * @request GET:/users/me/ex-accounts
     * @secure
     */
    getMyExternalAccounts: (params: RequestParams = {}) =>
      this.request<ExternalProviderUser[], any>({
        path: `/users/me/ex-accounts`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 自分に外部ログインアカウントを紐付けます。 指定した`providerName`がサーバー側で有効である必要があります。 リクエストが受理された場合、外部サービスの認証画面にリダイレクトされ、認証される必要があります。
     *
     * @tags authentication, me
     * @name LinkExternalAccount
     * @summary 外部ログインアカウントを紐付ける
     * @request POST:/users/me/ex-accounts/link
     * @secure
     */
    linkExternalAccount: (
      data: PostLinkExternalAccount,
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/users/me/ex-accounts/link`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 自分に紐付けられている外部ログインアカウントの紐付けを解除します。
     *
     * @tags authentication, me
     * @name UnlinkExternalAccount
     * @summary 外部ログインアカウントの紐付けを解除
     * @request POST:/users/me/ex-accounts/unlink
     * @secure
     */
    unlinkExternalAccount: (
      data: PostUnlinkExternalAccount,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/users/me/ex-accounts/unlink`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したユーザーとのダイレクトメッセージチャンネルの情報を返します。 ダイレクトメッセージチャンネルが存在しなかった場合、自動的に作成されます。
     *
     * @tags user, channel
     * @name GetUserDmChannel
     * @summary DMチャンネル情報を取得
     * @request GET:/users/{userId}/dm-channel
     * @secure
     */
    getUserDmChannel: (userId: string, params: RequestParams = {}) =>
      this.request<DMChannel, void>({
        path: `/users/${userId}/dm-channel`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description ユーザー設定を取得します。
     *
     * @tags me
     * @name GetUserSettings
     * @summary ユーザー設定を取得
     * @request GET:/users/me/settings
     * @secure
     */
    getUserSettings: (params: RequestParams = {}) =>
      this.request<UserSettings, any>({
        path: `/users/me/settings`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description メッセージ引用通知の設定情報を変更します。
     *
     * @tags me
     * @name GetMyNotifyCitation
     * @summary メッセージ引用通知の設定情報を取得
     * @request GET:/users/me/settings/notify-citation
     * @secure
     */
    getMyNotifyCitation: (params: RequestParams = {}) =>
      this.request<GetNotifyCitation, any>({
        path: `/users/me/settings/notify-citation`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description メッセージ引用通知の設定情報を変更します
     *
     * @tags me
     * @name ChangeMyNotifyCitation
     * @summary メッセージ引用通知の設定情報を変更
     * @request PUT:/users/me/settings/notify-citation
     * @secure
     */
    changeMyNotifyCitation: (
      data: PutNotifyCitationRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/users/me/settings/notify-citation`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  groups = {
    /**
     * @description 指定したユーザーグループの情報を取得します。
     *
     * @tags group
     * @name GetUserGroup
     * @summary ユーザーグループを取得
     * @request GET:/groups/{groupId}
     * @secure
     */
    getUserGroup: (groupId: string, params: RequestParams = {}) =>
      this.request<UserGroup, void>({
        path: `/groups/${groupId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したユーザーグループを削除します。 対象のユーザーグループの管理者権限が必要です。
     *
     * @tags group
     * @name DeleteUserGroup
     * @summary ユーザーグループを削除
     * @request DELETE:/groups/{groupId}
     * @secure
     */
    deleteUserGroup: (groupId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/groups/${groupId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したユーザーグループの情報を編集します。 対象のユーザーグループの管理者権限が必要です。
     *
     * @tags group
     * @name EditUserGroup
     * @summary ユーザーグループを編集
     * @request PATCH:/groups/{groupId}
     * @secure
     */
    editUserGroup: (
      groupId: string,
      data: PatchUserGroupRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/groups/${groupId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description ユーザーグループのアイコンを変更します。 対象のユーザーグループの管理者権限が必要です。
     *
     * @tags group
     * @name ChangeUserGroupIcon
     * @summary ユーザーグループのアイコンを変更
     * @request PUT:/groups/{groupId}/icon
     * @secure
     */
    changeUserGroupIcon: (
      groupId: string,
      data: PutUserIconRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/groups/${groupId}/icon`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 指定したグループのメンバーのリストを取得します。
     *
     * @tags group
     * @name GetUserGroupMembers
     * @summary グループメンバーを取得
     * @request GET:/groups/{groupId}/members
     * @secure
     */
    getUserGroupMembers: (groupId: string, params: RequestParams = {}) =>
      this.request<UserGroupMember[], void>({
        path: `/groups/${groupId}/members`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したグループにメンバーを追加します。 対象のユーザーグループの管理者権限が必要です。
     *
     * @tags group
     * @name AddUserGroupMember
     * @summary グループメンバーを追加
     * @request POST:/groups/{groupId}/members
     * @secure
     */
    addUserGroupMember: (
      groupId: string,
      data: UserGroupMember,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/groups/${groupId}/members`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したユーザーグループから指定したユーザーを削除します。 既にグループから削除されているメンバーを指定した場合は204を返します。 対象のユーザーグループの管理者権限が必要です。
     *
     * @tags group
     * @name RemoveUserGroupMember
     * @summary グループメンバーを削除
     * @request DELETE:/groups/{groupId}/members/{userId}
     * @secure
     */
    removeUserGroupMember: (
      groupId: string,
      userId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/groups/${groupId}/members/${userId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したユーザーグループ内の指定したユーザーの属性を編集します。 対象のユーザーグループの管理者権限が必要です。
     *
     * @tags group
     * @name EditUserGroupMember
     * @summary グループメンバーを編集
     * @request PATCH:/groups/{groupId}/members/{userId}
     * @secure
     */
    editUserGroupMember: (
      groupId: string,
      userId: string,
      data: PatchGroupMemberRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/groups/${groupId}/members/${userId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description ユーザーグループのリストを取得します。
     *
     * @tags group
     * @name GetUserGroups
     * @summary ユーザーグループのリストを取得
     * @request GET:/groups
     * @secure
     */
    getUserGroups: (params: RequestParams = {}) =>
      this.request<UserGroup[], any>({
        path: `/groups`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description ユーザーグループを作成します。 作成者は自動的にグループ管理者になります。
     *
     * @tags group
     * @name CreateUserGroup
     * @summary ユーザーグループを作成
     * @request POST:/groups
     * @secure
     */
    createUserGroup: (data: PostUserGroupRequest, params: RequestParams = {}) =>
      this.request<UserGroup, void>({
        path: `/groups`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したユーザーグループから指定した管理者を削除します。 対象のユーザーグループの管理者権限が必要です。 グループから管理者が存在しなくなる場合は400エラーを返します。
     *
     * @tags group
     * @name RemoveUserGroupAdmin
     * @summary グループ管理者を削除
     * @request DELETE:/groups/{groupId}/admins/{userId}
     * @secure
     */
    removeUserGroupAdmin: (
      groupId: string,
      userId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/groups/${groupId}/admins/${userId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したグループに管理者を追加します。 対象のユーザーグループの管理者権限が必要です。
     *
     * @tags group
     * @name AddUserGroupAdmin
     * @summary グループ管理者を追加
     * @request POST:/groups/{groupId}/admins
     * @secure
     */
    addUserGroupAdmin: (
      groupId: string,
      data: PostUserGroupAdminRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/groups/${groupId}/admins`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したグループの管理者のリストを取得します。
     *
     * @tags group
     * @name GetUserGroupAdmins
     * @summary グループ管理者を取得
     * @request GET:/groups/{groupId}/admins
     * @secure
     */
    getUserGroupAdmins: (groupId: string, params: RequestParams = {}) =>
      this.request<string[], void>({
        path: `/groups/${groupId}/admins`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  webhooks = {
    /**
     * @description Webhookのリストを取得します。 allがtrueで無い場合は、自分がオーナーのWebhookのリストを返します。
     *
     * @tags webhook
     * @name GetWebhooks
     * @summary Webhook情報のリストを取得します
     * @request GET:/webhooks
     * @secure
     */
    getWebhooks: (
      query?: {
        /**
         * 全てのWebhookを取得します。権限が必要です。
         * @default false
         */
        all?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<Webhook[], any>({
        path: `/webhooks`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Webhookを新規作成します。 `secret`が空文字の場合、insecureウェブフックが作成されます。
     *
     * @tags webhook
     * @name CreateWebhook
     * @summary Webhookを新規作成
     * @request POST:/webhooks
     * @secure
     */
    createWebhook: (data: PostWebhookRequest, params: RequestParams = {}) =>
      this.request<Webhook, void>({
        path: `/webhooks`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したWebhookの詳細を取得します。
     *
     * @tags webhook
     * @name GetWebhook
     * @summary Webhook情報を取得
     * @request GET:/webhooks/{webhookId}
     * @secure
     */
    getWebhook: (webhookId: string, params: RequestParams = {}) =>
      this.request<Webhook, void>({
        path: `/webhooks/${webhookId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Webhookにメッセージを投稿します。 secureなウェブフックに対しては`X-TRAQ-Signature`ヘッダーが必須です。 アーカイブされているチャンネルには投稿できません。
     *
     * @tags webhook
     * @name PostWebhook
     * @summary Webhookを送信
     * @request POST:/webhooks/{webhookId}
     * @secure
     */
    postWebhook: (
      webhookId: string,
      data: string,
      query?: {
        /**
         * メンション・チャンネルリンクを自動埋め込みする場合に1を指定する
         * @default 0
         */
        embed?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/webhooks/${webhookId}`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Text,
        ...params,
      }),

    /**
     * @description 指定したWebhookを削除します。 Webhookによって投稿されたメッセージは削除されません。
     *
     * @tags webhook
     * @name DeleteWebhook
     * @summary Webhookを削除
     * @request DELETE:/webhooks/{webhookId}
     * @secure
     */
    deleteWebhook: (webhookId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/webhooks/${webhookId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したWebhookの情報を変更します。
     *
     * @tags webhook
     * @name EditWebhook
     * @summary Webhook情報を変更
     * @request PATCH:/webhooks/{webhookId}
     * @secure
     */
    editWebhook: (
      webhookId: string,
      data: PatchWebhookRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/webhooks/${webhookId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したWebhookのアイコン画像を取得します
     *
     * @tags webhook
     * @name GetWebhookIcon
     * @summary Webhookのアイコンを取得
     * @request GET:/webhooks/{webhookId}/icon
     * @secure
     */
    getWebhookIcon: (webhookId: string, params: RequestParams = {}) =>
      this.request<File, void>({
        path: `/webhooks/${webhookId}/icon`,
        method: 'GET',
        secure: true,
        format: 'blob',
        ...params,
      }),

    /**
     * @description 指定したWebhookのアイコン画像を変更します。
     *
     * @tags webhook
     * @name ChangeWebhookIcon
     * @summary Webhookのアイコンを変更
     * @request PUT:/webhooks/{webhookId}/icon
     * @secure
     */
    changeWebhookIcon: (
      webhookId: string,
      data: PutUserIconRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/webhooks/${webhookId}/icon`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 指定されたWebhookが投稿したメッセージのリストを返します。
     *
     * @tags webhook
     * @name GetWebhookMessages
     * @summary Webhookの投稿メッセージのリストを取得
     * @request GET:/webhooks/{webhookId}/messages
     * @secure
     */
    getWebhookMessages: (
      webhookId: string,
      query?: {
        /**
         * 取得する件数
         * @min 1
         * @max 200
         * @example 50
         */
        limit?: number;
        /**
         * 取得するオフセット
         * @default 0
         * @example 150
         */
        offset?: number;
        /**
         * 取得する時間範囲の開始日時
         * @format date-time
         * @default "0000-01-01T00:00:00.000000Z"
         * @example "2016-10-12T11:00:00.000000Z"
         */
        since?: string;
        /**
         * 取得する時間範囲の終了日時
         * @format date-time
         * @example "2016-10-12T11:00:00.0000000Z"
         */
        until?: string;
        /**
         * 範囲の端を含めるかどうか
         * @default false
         */
        inclusive?: boolean;
        /**
         * 昇順か降順か
         * @default "desc"
         */
        order?: 'asc' | 'desc';
      },
      params: RequestParams = {}
    ) =>
      this.request<Message[], void>({
        path: `/webhooks/${webhookId}/messages`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  tags = {
    /**
     * @description 指定したタグの情報を取得します。
     *
     * @tags user tag
     * @name GetTag
     * @summary タグ情報を取得
     * @request GET:/tags/{tagId}
     * @secure
     */
    getTag: (tagId: string, params: RequestParams = {}) =>
      this.request<Tag, void>({
        path: `/tags/${tagId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  version = {
    /**
     * @description サーバーバージョン及びサーバーフラグ情報を取得します。
     *
     * @tags public
     * @name GetServerVersion
     * @summary バージョンを取得
     * @request GET:/version
     * @secure
     */
    getServerVersion: (params: RequestParams = {}) =>
      this.request<Version, any>({
        path: `/version`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  login = {
    /**
     * @description ログインします。
     *
     * @tags authentication
     * @name Login
     * @summary ログイン
     * @request POST:/login
     * @secure
     */
    login: (
      data: PostLoginRequest,
      query?: {
        /**
         * リダイレクト先
         * @format uri
         */
        redirect?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/login`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  logout = {
    /**
     * @description ログアウトします。
     *
     * @tags authentication
     * @name Logout
     * @summary ログアウト
     * @request POST:/logout
     * @secure
     */
    logout: (
      query?: {
        /**
         * リダイレクト先
         * @format uri
         */
        redirect?: string;
        /**
         * 全てのセッションでログアウトするかどうか
         * @default false
         */
        all?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/logout`,
        method: 'POST',
        query: query,
        secure: true,
        ...params,
      }),
  };
  activity = {
    /**
     * @description パブリックチャンネルの直近の投稿メッセージを作成日時の降順で取得します。 `all`が`true`でない場合、購読チャンネルのみのタイムラインを取得します
     *
     * @tags activity
     * @name GetActivityTimeline
     * @summary アクテビティタイムラインを取得
     * @request GET:/activity/timeline
     * @secure
     */
    getActivityTimeline: (
      query?: {
        /**
         * 取得する件数
         * @min 1
         * @max 50
         * @default 50
         */
        limit?: number;
        /**
         * 全てのチャンネルのタイムラインを取得する
         * @default false
         */
        all?: boolean;
        /**
         * 同じチャンネルのメッセージは最新のもののみ取得するか
         * @default false
         */
        per_channel?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<ActivityTimelineMessage[], void>({
        path: `/activity/timeline`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 現在オンラインな(SSEまたはWSが接続中)ユーザーのUUIDのリストを返します。
     *
     * @tags activity
     * @name GetOnlineUsers
     * @summary オンラインユーザーリストを取得
     * @request GET:/activity/onlines
     * @secure
     */
    getOnlineUsers: (params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/activity/onlines`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  ws = {
    /**
     * @description # WebSocketプロトコル ## 送信 `コマンド:引数1:引数2:...`のような形式のTextMessageをサーバーに送信することで、このWebSocketセッションに対する設定が実行できる。 ### `viewstate`コマンド このWebSocketセッションが見ているチャンネル(イベントを受け取るチャンネル)を設定する。 現時点では1つのセッションに対して1つのチャンネルしか設定できない。 `viewstate:{チャンネルID}:{閲覧状態}` + チャンネルID: 対象のチャンネルID + 閲覧状態: `none`, `monitoring`, `editing` 最初の`viewstate`コマンドを送る前、または`viewstate:null`, `viewstate:`を送信した後は、このセッションはどこのチャンネルも見ていないことになる。 ### `rtcstate`コマンド 自分のWebRTC状態を変更する。 他のコネクションが既に状態を保持している場合、変更することができません。 `rtcstate:{チャンネルID}:({状態}:{セッションID})*` コネクションが切断された場合、自分のWebRTC状態はリセットされます。 ### `timeline_streaming`コマンド 全てのパブリックチャンネルの`MESSAGE_CREATED`イベントを受け取るかどうかを設定する。 初期状態は`off`です。 `timeline_streaming:(on|off|true|false)` ## 受信 TextMessageとして各種イベントが`type`と`body`を持つJSONとして非同期に送られます。 例: ```json {"type":"USER_ONLINE","body":{"id":"7dd8e07f-7f5d-4331-9176-b56a4299768b"}} ``` ## イベント一覧 ### `USER_JOINED` ユーザーが新規登録された。 対象: 全員 + `id`: 登録されたユーザーのId ### `USER_UPDATED` ユーザーの情報が更新された。 対象: 全員 + `id`: 情報が更新されたユーザーのId ### `USER_TAGS_UPDATED` ユーザーのタグが更新された。 対象: 全員 + `id`: タグが更新されたユーザーのId + `tag_id`: 更新されたタグのId ### `USER_ICON_UPDATED` ユーザーのアイコンが更新された。 対象: 全員 + `id`: アイコンが更新されたユーザーのId ### `USER_WEBRTC_STATE_CHANGED` ユーザーのWebRTCの状態が変化した 対象: 全員 + `user_id`: 変更があったユーザーのId + `channel_id`: ユーザーの変更後の接続チャンネルのId + `sessions`: ユーザーの変更後の状態(配列) + `state`: 状態 + `sessionId`: セッションID ### `USER_VIEWSTATE_CHANGED` ユーザーのチャンネルの閲覧状態が変化した 対象: 変化したWSセッションを含めた、該当ユーザーのWSセッション全て + `view_states`: 変化したWSセッションを含めた、該当ユーザーの変更後の状態(配列) + `key`: WSセッションの識別子 + `channel_id`: 閲覧しているチャンネルId + `state`: 閲覧状態 ### `USER_ONLINE` ユーザーがオンラインになった。 対象: 全員 + `id`: オンラインになったユーザーのId ### `USER_OFFLINE` ユーザーがオフラインになった。 対象: 全員 + `id`: オフラインになったユーザーのId ### `USER_GROUP_CREATED` ユーザーグループが作成された 対象: 全員 + `id`: 作成されたユーザーグループのId ### `USER_GROUP_UPDATED` ユーザーグループが更新された 対象: 全員 + `id`: 作成されたユーザーグループのId ### `USER_GROUP_DELETED` ユーザーグループが削除された 対象: 全員 + `id`: 削除されたユーザーグループのId ### `CHANNEL_CREATED` チャンネルが新規作成された。 対象: 該当チャンネルを閲覧可能な全員 + `id`: 作成されたチャンネルのId + `dm_user_id`: (DMの場合のみ) DM相手のユーザーId ### `CHANNEL_UPDATED` チャンネルの情報が変更された。 対象: 該当チャンネルを閲覧可能な全員 + `id`: 変更があったチャンネルのId + `dm_user_id`: (DMの場合のみ) DM相手のユーザーId ### `CHANNEL_DELETED` チャンネルが削除された。 対象: 該当チャンネルを閲覧可能な全員 + `id`: 削除されたチャンネルのId + `dm_user_id`: (DMの場合のみ) DM相手のユーザーId ### `CHANNEL_STARED` 自分がチャンネルをスターした。 対象: 自分 + `id`: スターしたチャンネルのId ### `CHANNEL_UNSTARED` 自分がチャンネルのスターを解除した。 対象: 自分 + `id`: スターしたチャンネルのId ### `CHANNEL_VIEWERS_CHANGED` チャンネルの閲覧者が変化した。 対象: 該当チャンネルを閲覧しているユーザー + `id`: 変化したチャンネルのId + `viewers`: 変化後の閲覧者(配列) + `userId`: ユーザーId + `state`: 閲覧状態 + `updatedAt`: 閲覧状態の更新日時 ### `CHANNEL_SUBSCRIBERS_CHANGED` チャンネルの購読者が変化した。 対象: 該当チャンネルを閲覧しているユーザー + `id`: 変化したチャンネルのId ### `MESSAGE_CREATED` メッセージが投稿された。 対象: 投稿チャンネルを閲覧しているユーザー・投稿チャンネルに通知をつけているユーザー・メンションを受けたユーザー + `id`: 投稿されたメッセージのId + `is_citing`: 投稿されたメッセージがWebSocketを接続しているユーザーの投稿を引用しているかどうか ### `MESSAGE_UPDATED` メッセージが更新された。 対象: 投稿チャンネルを閲覧しているユーザー + `id`: 更新されたメッセージのId ### `MESSAGE_DELETED` メッセージが削除された。 対象: 投稿チャンネルを閲覧しているユーザー + `id`: 削除されたメッセージのId ### `MESSAGE_STAMPED` メッセージにスタンプが押された。 対象: 投稿チャンネルを閲覧しているユーザー + `message_id`: メッセージId + `user_id`: スタンプを押したユーザーのId + `stamp_id`: スタンプのId + `count`: そのユーザーが押した数 + `created_at`: そのユーザーがそのスタンプをそのメッセージに最初に押した日時 ### `MESSAGE_UNSTAMPED` メッセージからスタンプが外された。 対象: 投稿チャンネルを閲覧しているユーザー + `message_id`: メッセージId + `user_id`: スタンプを押したユーザーのId + `stamp_id`: スタンプのId ### `MESSAGE_PINNED` メッセージがピン留めされた。 対象: 投稿チャンネルを閲覧しているユーザー + `message_id`: ピンされたメッセージのID + `channel_id`: ピンされたメッセージのチャンネルID ### `MESSAGE_UNPINNED` ピン留めされたメッセージのピンが外された。 対象: 投稿チャンネルを閲覧しているユーザー + `message_id`: ピンが外されたメッセージのID + `channel_id`: ピンが外されたメッセージのチャンネルID ### `MESSAGE_READ` 自分があるチャンネルのメッセージを読んだ。 対象: 自分 + `id`: 読んだチャンネルId ### `STAMP_CREATED` スタンプが新しく追加された。 対象: 全員 + `id`: 作成されたスタンプのId ### `STAMP_UPDATED` スタンプが修正された。 対象: 全員 + `id`: 修正されたスタンプのId ### `STAMP_DELETED` スタンプが削除された。 対象: 全員 + `id`: 削除されたスタンプのId ### `STAMP_PALETTE_CREATED` スタンプパレットが新しく追加された。 対象: 自分 + `id`: 作成されたスタンプパレットのId ### `STAMP_PALETTE_UPDATED` スタンプパレットが修正された。 対象: 自分 + `id`: 修正されたスタンプパレットのId ### `STAMP_PALETTE_DELETED` スタンプパレットが削除された。 対象: 自分 + `id`: 削除されたスタンプパレットのId ### `CLIP_FOLDER_CREATED` クリップフォルダーが作成された。 対象：自分 + `id`: 作成されたクリップフォルダーのId ### `CLIP_FOLDER_UPDATED` クリップフォルダーが修正された。 対象: 自分 + `id`: 更新されたクリップフォルダーのId ### `CLIP_FOLDER_DELETED` クリップフォルダーが削除された。 対象: 自分 + `id`: 削除されたクリップフォルダーのId ### `CLIP_FOLDER_MESSAGE_DELETED` クリップフォルダーからメッセージが除外された。 対象: 自分 + `folder_id`: メッセージが除外されたクリップフォルダーのId + `message_id`: クリップフォルダーから除外されたメッセージのId ### `CLIP_FOLDER_MESSAGE_ADDED` クリップフォルダーにメッセージが追加された。 対象: 自分 + `folder_id`: メッセージが追加されたクリップフォルダーのId + `message_id`: クリップフォルダーに追加されたメッセージのId
     *
     * @tags notification
     * @name Ws
     * @summary WebSocket通知ストリームに接続します
     * @request GET:/ws
     * @secure
     */
    ws: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/ws`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  public = {
    /**
     * @description ユーザーのアイコン画像を取得します。
     *
     * @tags public
     * @name GetPublicUserIcon
     * @summary ユーザーのアイコン画像を取得
     * @request GET:/public/icon/{username}
     * @secure
     */
    getPublicUserIcon: (username: string, params: RequestParams = {}) =>
      this.request<File, void>({
        path: `/public/icon/${username}`,
        method: 'GET',
        secure: true,
        format: 'blob',
        ...params,
      }),
  };
  clients = {
    /**
     * @description 指定したOAuth2クライアントの情報を取得します。 詳細情報の取得には対象のクライアントの管理権限が必要です。
     *
     * @tags oauth2
     * @name GetClient
     * @summary OAuth2クライアント情報を取得
     * @request GET:/clients/{clientId}
     * @secure
     */
    getClient: (
      clientId: string,
      query?: {
        /**
         * 詳細情報を含めるかどうか
         * @default false
         */
        detail?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<OAuth2Client | OAuth2ClientDetail, void>({
        path: `/clients/${clientId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したOAuth2クライアントを削除します。 対象のクライアントの管理権限が必要です。正常に削除された場合、このクライアントに対する認可は全て取り消されます。
     *
     * @tags oauth2
     * @name DeleteClient
     * @summary OAuth2クライアントを削除
     * @request DELETE:/clients/{clientId}
     * @secure
     */
    deleteClient: (clientId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/clients/${clientId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したOAuth2クライアントの情報を変更します。 対象のクライアントの管理権限が必要です。 クライアント開発者UUIDを変更した場合は、変更先ユーザーにクライアント管理権限が移譲され、自分自身は権限を失います。
     *
     * @tags oauth2
     * @name EditClient
     * @summary OAuth2クライアント情報を変更
     * @request PATCH:/clients/{clientId}
     * @secure
     */
    editClient: (
      clientId: string,
      data: PatchClientRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/clients/${clientId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 自分が許可している指定したOAuthクライアントのアクセストークンを全てRevokeします。
     *
     * @tags oauth2
     * @name RevokeClientTokens
     * @summary OAuthクライアントのトークンを削除
     * @request DELETE:/clients/{clientId}/tokens
     * @secure
     */
    revokeClientTokens: (clientId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/clients/${clientId}/tokens`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 自身が開発者のOAuth2クライアントのリストを取得します。 `all`が`true`の場合、全開発者の全クライアントのリストを返します。
     *
     * @tags oauth2
     * @name GetClients
     * @summary OAuth2クライアントのリストを取得
     * @request GET:/clients
     * @secure
     */
    getClients: (
      query?: {
        /**
         * 全てのクライアントを取得するかどうか
         * @default false
         */
        all?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<OAuth2Client[], any>({
        path: `/clients`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description OAuth2クライアントを作成します。
     *
     * @tags oauth2
     * @name CreateClient
     * @summary OAuth2クライアントを作成
     * @request POST:/clients
     * @secure
     */
    createClient: (data: PostClientRequest, params: RequestParams = {}) =>
      this.request<OAuth2ClientDetail, void>({
        path: `/clients`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  bots = {
    /**
     * @description BOTを作成します。 作成後に購読イベントの設定を行う必要があります。 さらにHTTP Modeの場合はアクティベーションを行う必要があります。
     *
     * @tags bot
     * @name CreateBot
     * @summary BOTを作成
     * @request POST:/bots
     * @secure
     */
    createBot: (data: PostBotRequest, params: RequestParams = {}) =>
      this.request<BotDetail, void>({
        path: `/bots`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description BOT情報のリストを取得します。 allを指定しない場合、自分が開発者のBOTのみを返します。
     *
     * @tags bot
     * @name GetBots
     * @summary BOTリストを取得
     * @request GET:/bots
     * @secure
     */
    getBots: (
      query?: {
        /**
         * 全てのBOTを取得するかどうか
         * @default false
         */
        all?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<Bot[], any>({
        path: `/bots`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description # BOT WebSocketプロトコル ## 送信 `コマンド:引数1:引数2:...` のような形式のTextMessageをサーバーに送信することで、このWebSocketセッションに対する設定が実行できます。 ### `rtcstate`コマンド 自分のWebRTC状態を変更します。 他のコネクションが既に状態を保持している場合、変更することができません。 `rtcstate:{チャンネルID}:({状態}:{セッションID})*` チャンネルIDにnullもしくは空文字を指定するか、状態にnullもしくは空文字を指定した場合、WebRTC状態はリセットされます。 `rtcstate:null`, `rtcstate:`, `rtcstate:channelId:null`, `rtcstate:channelId:` コネクションが切断された場合、自分のWebRTC状態はリセットされます。 ## 受信 TextMessageとして各種イベントが`type`、`reqId`、`body`を持つJSONとして非同期に送られます。 `body`の内容はHTTP Modeの場合のRequest Bodyと同様です。 例外として`ERROR`イベントは`reqId`を持ちません。 例: PINGイベント `{"type":"PING","reqId":"requestId","body":{"eventTime":"2019-05-07T04:50:48.582586882Z"}}` ### `ERROR` コマンドの引数が不正などの理由でコマンドが受理されなかった場合に送られます。 非同期に送られるため、必ずしもコマンドとの対応関係を確定できないことに注意してください。 本番環境ではERRORが送られないようにすることが望ましいです。 `{"type":"ERROR","body":"message"}`
     *
     * @tags bot
     * @name ConnectBotWs
     * @summary WebSocket Mode BOT用通知ストリームに接続します
     * @request GET:/bots/ws
     * @secure
     */
    connectBotWs: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/bots/ws`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したBOTのアイコン画像を取得を取得します。
     *
     * @tags bot
     * @name GetBotIcon
     * @summary BOTのアイコン画像を取得
     * @request GET:/bots/{botId}/icon
     * @secure
     */
    getBotIcon: (botId: string, params: RequestParams = {}) =>
      this.request<File, void>({
        path: `/bots/${botId}/icon`,
        method: 'GET',
        secure: true,
        format: 'blob',
        ...params,
      }),

    /**
     * @description 指定したBOTのアイコン画像を変更を変更します。 対象のBOTの管理権限が必要です。
     *
     * @tags bot
     * @name ChangeBotIcon
     * @summary BOTのアイコン画像を変更
     * @request PUT:/bots/{botId}/icon
     * @secure
     */
    changeBotIcon: (
      botId: string,
      data: PutUserIconRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/bots/${botId}/icon`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 指定したBOTのBOT情報を取得します。 BOT詳細情報を取得する場合は、対象のBOTの管理権限が必要です。
     *
     * @tags bot
     * @name GetBot
     * @summary BOT情報を取得
     * @request GET:/bots/{botId}
     * @secure
     */
    getBot: (
      botId: string,
      query?: {
        /**
         * 詳細情報を含めるかどうか
         * @default false
         */
        detail?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<Bot | BotDetail, void>({
        path: `/bots/${botId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したBOTを削除します。 対象のBOTの管理権限が必要です。
     *
     * @tags bot
     * @name DeleteBot
     * @summary BOTを削除
     * @request DELETE:/bots/{botId}
     * @secure
     */
    deleteBot: (botId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/bots/${botId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したBOTの情報を変更します。 対象のBOTの管理権限が必要です。 BOT開発者UUIDを変更した場合は、変更先ユーザーにBOT管理権限が移譲され、自分自身は権限を失います。
     *
     * @tags bot
     * @name EditBot
     * @summary BOT情報を変更
     * @request PATCH:/bots/{botId}
     * @secure
     */
    editBot: (
      botId: string,
      data: PatchBotRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/bots/${botId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したBOTを有効化します。 対象のBOTの管理権限が必要です。
     *
     * @tags bot
     * @name ActivateBot
     * @summary BOTをアクティベート
     * @request POST:/bots/{botId}/actions/activate
     * @secure
     */
    activateBot: (botId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/bots/${botId}/actions/activate`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したBOTを無効化します。対象のBOTの管理権限が必要です。
     *
     * @tags bot
     * @name InactivateBot
     * @summary BOTをインアクティベート
     * @request POST:/bots/{botId}/actions/inactivate
     * @secure
     */
    inactivateBot: (botId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/bots/${botId}/actions/inactivate`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したBOTの現在の各種トークンを無効化し、再発行を行います。 対象のBOTの管理権限が必要です。
     *
     * @tags bot
     * @name ReissueBot
     * @summary BOTのトークンを再発行
     * @request POST:/bots/{botId}/actions/reissue
     * @secure
     */
    reissueBot: (botId: string, params: RequestParams = {}) =>
      this.request<BotTokens, void>({
        path: `/bots/${botId}/actions/reissue`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したBOTのイベントログを取得します。 対象のBOTの管理権限が必要です。
     *
     * @tags bot
     * @name GetBotLogs
     * @summary BOTのイベントログを取得
     * @request GET:/bots/{botId}/logs
     * @secure
     */
    getBotLogs: (
      botId: string,
      query?: {
        /**
         * 取得する件数
         * @min 1
         * @max 200
         * @example 50
         */
        limit?: number;
        /**
         * 取得するオフセット
         * @default 0
         * @example 150
         */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<BotEventLog[], void>({
        path: `/bots/${botId}/logs`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したBOTを指定したチャンネルに参加させます。 チャンネルに参加したBOTは、そのチャンネルの各種イベントを受け取るようになります。 対象のBOTの管理権限が必要です。
     *
     * @tags bot
     * @name LetBotJoinChannel
     * @summary BOTをチャンネルに参加させる
     * @request POST:/bots/{botId}/actions/join
     * @secure
     */
    letBotJoinChannel: (
      botId: string,
      data: PostBotActionJoinRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/bots/${botId}/actions/join`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したBOTを指定したチャンネルから退出させます。 対象のBOTの管理権限が必要です。
     *
     * @tags bot
     * @name LetBotLeaveChannel
     * @summary BOTをチャンネルから退出させる
     * @request POST:/bots/{botId}/actions/leave
     * @secure
     */
    letBotLeaveChannel: (
      botId: string,
      data: PostBotActionLeaveRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/bots/${botId}/actions/leave`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  webrtc = {
    /**
     * @description Skyway WebRTC用の認証API
     *
     * @tags webrtc
     * @name PostWebRtcAuthenticate
     * @summary Skyway用認証API
     * @request POST:/webrtc/authenticate
     * @secure
     */
    postWebRtcAuthenticate: (
      data: PostWebRTCAuthenticateRequest,
      params: RequestParams = {}
    ) =>
      this.request<WebRTCAuthenticateResult, void>({
        path: `/webrtc/authenticate`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 現在のWebRTC状態を取得します。
     *
     * @tags webrtc
     * @name GetWebRtcState
     * @summary WebRTC状態を取得
     * @request GET:/webrtc/state
     * @secure
     */
    getWebRtcState: (params: RequestParams = {}) =>
      this.request<WebRTCUserStates, any>({
        path: `/webrtc/state`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  clipFolders = {
    /**
     * @description クリップフォルダを作成します。 既にあるフォルダと同名のフォルダを作成することは可能です。
     *
     * @tags clip
     * @name CreateClipFolder
     * @summary クリップフォルダを作成
     * @request POST:/clip-folders
     * @secure
     */
    createClipFolder: (
      data: PostClipFolderRequest,
      params: RequestParams = {}
    ) =>
      this.request<ClipFolder, void>({
        path: `/clip-folders`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 自身が所有するクリップフォルダのリストを取得します。
     *
     * @tags clip
     * @name GetClipFolders
     * @summary クリップフォルダのリストを取得
     * @request GET:/clip-folders
     * @secure
     */
    getClipFolders: (params: RequestParams = {}) =>
      this.request<ClipFolder[], any>({
        path: `/clip-folders`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したクリップフォルダの情報を取得します。
     *
     * @tags clip
     * @name GetClipFolder
     * @summary クリップフォルダ情報を取得
     * @request GET:/clip-folders/{folderId}
     * @secure
     */
    getClipFolder: (folderId: string, params: RequestParams = {}) =>
      this.request<ClipFolder, void>({
        path: `/clip-folders/${folderId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したクリップフォルダを削除します。
     *
     * @tags clip
     * @name DeleteClipFolder
     * @summary クリップフォルダを削除
     * @request DELETE:/clip-folders/{folderId}
     * @secure
     */
    deleteClipFolder: (folderId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/clip-folders/${folderId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したクリップフォルダの情報を編集します。
     *
     * @tags clip
     * @name EditClipFolder
     * @summary クリップフォルダ情報を編集
     * @request PATCH:/clip-folders/{folderId}
     * @secure
     */
    editClipFolder: (
      folderId: string,
      data: PatchClipFolderRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/clip-folders/${folderId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 指定したメッセージを指定したクリップフォルダに追加します。
     *
     * @tags clip
     * @name ClipMessage
     * @summary メッセージをクリップフォルダに追加
     * @request POST:/clip-folders/{folderId}/messages
     * @secure
     */
    clipMessage: (
      folderId: string,
      data: PostClipFolderMessageRequest,
      params: RequestParams = {}
    ) =>
      this.request<ClippedMessage, void>({
        path: `/clip-folders/${folderId}/messages`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したフォルダ内のクリップのリストを取得します。 `order`を指定しない場合、クリップした日時の新しい順で返されます。
     *
     * @tags clip
     * @name GetClips
     * @summary フォルダ内のクリップのリストを取得
     * @request GET:/clip-folders/{folderId}/messages
     * @secure
     */
    getClips: (
      folderId: string,
      query?: {
        /**
         * 取得する件数
         * @min 1
         * @max 200
         * @example 50
         */
        limit?: number;
        /**
         * 取得するオフセット
         * @default 0
         * @example 150
         */
        offset?: number;
        /**
         * 昇順か降順か
         * @default "desc"
         */
        order?: 'asc' | 'desc';
      },
      params: RequestParams = {}
    ) =>
      this.request<ClippedMessage[], void>({
        path: `/clip-folders/${folderId}/messages`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したフォルダから指定したメッセージのクリップを除外します。 既に外されているメッセージを指定した場合は204を返します。
     *
     * @tags clip
     * @name UnclipMessage
     * @summary メッセージをクリップフォルダから除外
     * @request DELETE:/clip-folders/{folderId}/messages/{messageId}
     * @secure
     */
    unclipMessage: (
      folderId: string,
      messageId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/clip-folders/${folderId}/messages/${messageId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  stampPalettes = {
    /**
     * @description 自身が所有しているスタンプパレットのリストを取得します。
     *
     * @tags stamp
     * @name GetStampPalettes
     * @summary スタンプパレットのリストを取得
     * @request GET:/stamp-palettes
     * @secure
     */
    getStampPalettes: (params: RequestParams = {}) =>
      this.request<StampPalette[], any>({
        path: `/stamp-palettes`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description スタンプパレットを作成します。
     *
     * @tags stamp
     * @name CreateStampPalette
     * @summary スタンプパレットを作成
     * @request POST:/stamp-palettes
     * @secure
     */
    createStampPalette: (
      data: PostStampPaletteRequest,
      params: RequestParams = {}
    ) =>
      this.request<StampPalette, void>({
        path: `/stamp-palettes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したスタンプパレットの情報を取得します。
     *
     * @tags stamp
     * @name GetStampPalette
     * @summary スタンプパレットを取得
     * @request GET:/stamp-palettes/{paletteId}
     * @secure
     */
    getStampPalette: (paletteId: string, params: RequestParams = {}) =>
      this.request<StampPalette, void>({
        path: `/stamp-palettes/${paletteId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定したスタンプパレットを削除します。 対象のスタンプパレットの管理権限が必要です。
     *
     * @tags stamp
     * @name DeleteStampPalette
     * @summary スタンプパレットを削除
     * @request DELETE:/stamp-palettes/{paletteId}
     * @secure
     */
    deleteStampPalette: (paletteId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/stamp-palettes/${paletteId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 指定したスタンプパレットを編集します。 リクエストのスタンプの配列の順番は保存されて変更されます。 対象のスタンプパレットの管理権限が必要です。
     *
     * @tags stamp
     * @name EditStampPalette
     * @summary スタンプパレットを編集
     * @request PATCH:/stamp-palettes/{paletteId}
     * @secure
     */
    editStampPalette: (
      paletteId: string,
      data: PatchStampPaletteRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/stamp-palettes/${paletteId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  oauth2 = {
    /**
     * @description OAuth2 トークンエンドポイント
     *
     * @tags oauth2
     * @name PostOAuth2Token
     * @summary OAuth2 トークンエンドポイント
     * @request POST:/oauth2/token
     * @secure
     */
    postOAuth2Token: (data: PostOAuth2Token, params: RequestParams = {}) =>
      this.request<OAuth2Token, void>({
        path: `/oauth2/token`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params,
      }),

    /**
     * @description OAuth2 認可承諾
     *
     * @tags oauth2
     * @name PostOAuth2AuthorizeDecide
     * @summary OAuth2 認可承諾API
     * @request POST:/oauth2/authorize/decide
     * @secure
     */
    postOAuth2AuthorizeDecide: (
      data: OAuth2Decide,
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/oauth2/authorize/decide`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description OAuth2 認可エンドポイント
     *
     * @tags oauth2
     * @name GetOAuth2Authorize
     * @summary OAuth2 認可エンドポイント
     * @request GET:/oauth2/authorize
     * @secure
     */
    getOAuth2Authorize: (
      query: {
        response_type?: OAuth2ResponseType;
        client_id: string;
        redirect_uri?: string;
        scope?: string;
        state?: string;
        code_challenge?: string;
        code_challenge_method?: string;
        nonce?: string;
        prompt?: OAuth2Prompt;
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/oauth2/authorize`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description OAuth2 認可エンドポイント
     *
     * @tags oauth2
     * @name PostOAuth2Authorize
     * @summary OAuth2 認可エンドポイント
     * @request POST:/oauth2/authorize
     * @secure
     */
    postOAuth2Authorize: (
      data: OAuth2Authorization,
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/oauth2/authorize`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description OAuth2 トークン無効化エンドポイント
     *
     * @tags oauth2
     * @name RevokeOAuth2Token
     * @summary OAuth2 トークン無効化エンドポイント
     * @request POST:/oauth2/revoke
     * @secure
     */
    revokeOAuth2Token: (data: OAuth2Revoke, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/oauth2/revoke`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),
  };
  ogp = {
    /**
     * @description 指定されたURLのOGP情報を取得します。 指定されたURLに対するOGP情報が見つからなかった場合、typeがemptyに設定された空のOGP情報を返します。
     *
     * @tags ogp
     * @name GetOgp
     * @summary OGP情報を取得
     * @request GET:/ogp
     * @secure
     */
    getOgp: (
      query: {
        /** OGPを取得したいURL */
        url: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<Ogp, void>({
        path: `/ogp`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description 指定されたURLのOGP情報のキャッシュを削除します。
     *
     * @tags ogp
     * @name DeleteOgpCache
     * @summary OGP情報のキャッシュを削除
     * @request DELETE:/ogp/cache
     * @secure
     */
    deleteOgpCache: (
      query: {
        /** OGPのキャッシュを削除したいURL */
        url: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/ogp/cache`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),
  };
}
