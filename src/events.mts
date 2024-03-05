import { z, type ZodRawShape, type Primitive } from 'zod';

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  displayName: z.string(),
  iconId: z.string().uuid(),
  bot: z.boolean(),
});
export type User = z.infer<typeof UserSchema>;

export const ChannelSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  path: z.string(),
  parentId: z.string().uuid(),
  creator: UserSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type Channel = z.infer<typeof ChannelSchema>;

export const EmbedUserSchema = z.object({
  type: z.literal('user'),
  raw: z.string(),
  id: z.string().uuid(),
});
export const EmbedChannelSchema = z.object({
  type: z.literal('channel'),
  raw: z.string(),
  id: z.string().uuid(),
});
export const EmbedSchema = z.union([EmbedUserSchema, EmbedChannelSchema]);
export type Embed = z.infer<typeof EmbedSchema>;

export const MessageSchema = z.object({
  id: z.string().uuid(),
  user: UserSchema,
  channelId: z.string().uuid(),
  text: z.string(),
  plainText: z.string(),
  embedded: z.array(EmbedSchema),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const StampSchema = z.object({
  stampId: z.string().uuid(),
  userId: z.string().uuid(),
  count: z.number().int().min(0),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type Stamp = z.infer<typeof StampSchema>;

export const UserGroupMemberSchema = z.object({
  groupId: z.string().uuid(),
  userId: z.string().uuid(),
});
export type UserGroupMember = z.infer<typeof UserGroupMemberSchema>;

export const UserGroupSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  type: z.string(),
  icon: z.string().uuid(),
  admins: z.array(UserGroupMemberSchema),
  members: z.array(
    UserGroupMemberSchema.extend({
      role: z.string(),
    })
  ),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type UserGroup = z.infer<typeof UserGroupSchema>;

const createEventSchema = <T extends Primitive, K extends ZodRawShape>(
  type: T,
  body: K
) =>
  z.object({
    type: z.literal(type),
    reqId: z.string(),
    body: z.object({ eventTime: z.coerce.date() }).extend(body),
  });

export const PingEventSchema = createEventSchema('PING', {});
export type PingEvent = z.infer<typeof PingEventSchema>;

export const JoinedEventSchema = createEventSchema('JOINED', {
  channel: ChannelSchema,
});
export type JoinedEvent = z.infer<typeof JoinedEventSchema>;

export const LeftEventSchema = createEventSchema('LEFT', {
  channel: ChannelSchema,
});
export type LeftEvent = z.infer<typeof LeftEventSchema>;

export const MessageCreatedEventSchema = createEventSchema('MESSAGE_CREATED', {
  message: MessageSchema,
});
export type MessageCreatedEvent = z.infer<typeof MessageCreatedEventSchema>;

export const MessageDeletedEventSchema = createEventSchema('MESSAGE_DELETED', {
  message: z.object({
    id: z.string().uuid(),
    channelId: z.string().uuid(),
  }),
});
export type MessageDeletedEvent = z.infer<typeof MessageDeletedEventSchema>;

export const MessageUpdatedEventSchema = createEventSchema('MESSAGE_UPDATED', {
  message: MessageSchema,
});
export type MessageUpdatedEvent = z.infer<typeof MessageUpdatedEventSchema>;

export const DirectMessageCreatedEventSchema = createEventSchema(
  'DIRECT_MESSAGE_CREATED',
  {
    message: MessageSchema,
  }
);
export type DirectMessageCreatedEvent = z.infer<
  typeof DirectMessageCreatedEventSchema
>;

export const DirectMessageDeletedEventSchema = createEventSchema(
  'DIRECT_MESSAGE_DELETED',
  {
    message: z.object({
      id: z.string().uuid(),
      userId: z.string().uuid(),
      channelId: z.string().uuid(),
    }),
  }
);
export type DirectMessageDeletedEvent = z.infer<
  typeof DirectMessageDeletedEventSchema
>;

export const DirectMessageUpdatedEventSchema = createEventSchema(
  'DIRECT_MESSAGE_UPDATED',
  {
    message: MessageSchema,
  }
);
export type DirectMessageUpdatedEvent = z.infer<
  typeof DirectMessageUpdatedEventSchema
>;

export const BotMessageStampsUpdatedEventSchema = createEventSchema(
  'BOT_MESSAGE_STAMPS_UPDATED',
  {
    messageId: z.string(),
    stamps: z.array(StampSchema),
  }
);

export const ChannelCreatedEventSchema = createEventSchema('CHANNEL_CREATED', {
  channel: ChannelSchema,
});
export type ChannelCreatedEvent = z.infer<typeof ChannelCreatedEventSchema>;

export const ChannelTopicChangedEventSchema = createEventSchema(
  'CHANNEL_TOPIC_CHANGED',
  {
    channel: ChannelSchema,
    topic: z.string(),
    updater: UserSchema,
  }
);

export const UserCreatedEventSchema = createEventSchema('USER_CREATED', {
  user: UserSchema,
});
export type UserCreatedEvent = z.infer<typeof UserCreatedEventSchema>;

export const UserActivatedEventSchema = createEventSchema('USER_ACTIVATED', {
  user: UserSchema,
});
export type UserActivatedEvent = z.infer<typeof UserActivatedEventSchema>;

export const UserGroupCreatedEventSchema = createEventSchema(
  'USER_GROUP_CREATED',
  {
    group: UserGroupSchema,
  }
);
export type UserGroupCreatedEvent = z.infer<typeof UserGroupCreatedEventSchema>;

export const UserGroupUpdatedEventSchema = createEventSchema(
  'USER_GROUP_UPDATED',
  {
    groupId: z.string().uuid(),
  }
);
export type UserGroupUpdatedEvent = z.infer<typeof UserGroupUpdatedEventSchema>;

export const UserGroupDeletedEventSchema = createEventSchema(
  'USER_GROUP_DELETED',
  {
    groupId: z.string().uuid(),
  }
);
export type UserGroupDeletedEvent = z.infer<typeof UserGroupDeletedEventSchema>;

export const UserGroupMemberAddedEventSchema = createEventSchema(
  'USER_GROUP_MEMBER_ADDED',
  {
    groupMember: UserGroupMemberSchema.extend({
      groupId: z.string().uuid(),
      userId: z.string().uuid(),
      role: z.string(),
    }),
  }
);
export type UserGroupMemberAddedEvent = z.infer<
  typeof UserGroupMemberAddedEventSchema
>;

export const UserGroupMemberUpdatedEventSchema = createEventSchema(
  'USER_GROUP_MEMBER_UPDATED',
  {
    groupMember: UserGroupMemberSchema,
  }
);
export type UserGroupMemberUpdatedEvent = z.infer<
  typeof UserGroupMemberUpdatedEventSchema
>;

export const UserGroupMemberRemovedEventSchema = createEventSchema(
  'USER_GROUP_MEMBER_REMOVED',
  {
    groupMember: UserGroupMemberSchema,
  }
);
export type UserGroupMemberRemovedEvent = z.infer<
  typeof UserGroupMemberRemovedEventSchema
>;

export const UserGroupAdminAddedEventSchema = createEventSchema(
  'USER_GROUP_ADMIN_ADDED',
  {
    groupMember: UserGroupMemberSchema,
  }
);
export type UserGroupAdminAddedEvent = z.infer<
  typeof UserGroupAdminAddedEventSchema
>;

export const UserGroupAdminRemovedEventSchema = createEventSchema(
  'USER_GROUP_ADMIN_REMOVED',
  {
    groupMember: UserGroupMemberSchema,
  }
);
export type UserGroupAdminRemovedEvent = z.infer<
  typeof UserGroupAdminRemovedEventSchema
>;

export const StampCreatedEventSchema = createEventSchema('STAMP_CREATED', {
  id: z.string().uuid(),
  name: z.string(),
  fileId: z.string().uuid(),
  creator: UserSchema,
});
export type StampCreatedEvent = z.infer<typeof StampCreatedEventSchema>;

export const TagAddedEventSchema = createEventSchema('TAG_ADDED', {
  tagId: z.string().uuid(),
  tag: z.string(),
});
export type TagAddedEvent = z.infer<typeof TagAddedEventSchema>;

export const TagRemovedEventSchema = createEventSchema('TAG_REMOVED', {
  tagId: z.string().uuid(),
  tag: z.string(),
});
export type TagRemovedEvent = z.infer<typeof TagRemovedEventSchema>;

export const ErrorEventSchema = createEventSchema('ERROR', {});
export type ErrorEvent = z.infer<typeof ErrorEventSchema>;

export const EventSchema = z.union([
  PingEventSchema,
  JoinedEventSchema,
  LeftEventSchema,
  MessageCreatedEventSchema,
  MessageDeletedEventSchema,
  MessageUpdatedEventSchema,
  DirectMessageCreatedEventSchema,
  DirectMessageDeletedEventSchema,
  DirectMessageUpdatedEventSchema,
  BotMessageStampsUpdatedEventSchema,
  ChannelCreatedEventSchema,
  ChannelTopicChangedEventSchema,
  UserCreatedEventSchema,
  UserActivatedEventSchema,
  UserGroupCreatedEventSchema,
  UserGroupUpdatedEventSchema,
  UserGroupDeletedEventSchema,
  UserGroupMemberAddedEventSchema,
  UserGroupMemberUpdatedEventSchema,
  UserGroupMemberRemovedEventSchema,
  UserGroupAdminAddedEventSchema,
  UserGroupAdminRemovedEventSchema,
  StampCreatedEventSchema,
  TagAddedEventSchema,
  TagRemovedEventSchema,
  ErrorEventSchema,
]);
export type Event = z.infer<typeof EventSchema>;
