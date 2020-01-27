import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';

export class UserQuery extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getQueryType(): number;
  setQueryType(value: number): void;

  getQuery(): string;
  setQuery(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserQuery.AsObject;
  static toObject(includeInstance: boolean, msg: UserQuery): UserQuery.AsObject;
  static serializeBinaryToWriter(message: UserQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserQuery;
  static deserializeBinaryFromReader(message: UserQuery, reader: jspb.BinaryReader): UserQuery;
}

export namespace UserQuery {
  export type AsObject = {
    id: string,
    userId: string,
    projectId: string,
    queryType: number,
    query: string,
    name: string,
    description: string,
  }
}

export class UserQueries extends jspb.Message {
  getUserQueriesList(): Array<UserQuery>;
  setUserQueriesList(value: Array<UserQuery>): void;
  clearUserQueriesList(): void;
  addUserQueries(value?: UserQuery, index?: number): UserQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserQueries.AsObject;
  static toObject(includeInstance: boolean, msg: UserQueries): UserQueries.AsObject;
  static serializeBinaryToWriter(message: UserQueries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserQueries;
  static deserializeBinaryFromReader(message: UserQueries, reader: jspb.BinaryReader): UserQueries;
}

export namespace UserQueries {
  export type AsObject = {
    userQueriesList: Array<UserQuery.AsObject>,
  }
}

export class UserQueryId extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getQueryType(): number;
  setQueryType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserQueryId.AsObject;
  static toObject(includeInstance: boolean, msg: UserQueryId): UserQueryId.AsObject;
  static serializeBinaryToWriter(message: UserQueryId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserQueryId;
  static deserializeBinaryFromReader(message: UserQueryId, reader: jspb.BinaryReader): UserQueryId;
}

export namespace UserQueryId {
  export type AsObject = {
    userId: string,
    projectId: string,
    queryType: number,
  }
}

