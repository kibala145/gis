import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';

export class UserQuickSearch extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getQuickSearch(): string;
  setQuickSearch(value: string): void;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserQuickSearch.AsObject;
  static toObject(includeInstance: boolean, msg: UserQuickSearch): UserQuickSearch.AsObject;
  static serializeBinaryToWriter(message: UserQuickSearch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserQuickSearch;
  static deserializeBinaryFromReader(message: UserQuickSearch, reader: jspb.BinaryReader): UserQuickSearch;
}

export namespace UserQuickSearch {
  export type AsObject = {
    id: string,
    userId: string,
    projectId: string,
    isDefault: boolean,
    name: string,
    quickSearch: string,
    isPublic: boolean,
  }
}

export class UserQuickSearches extends jspb.Message {
  getUserQuickSearchesList(): Array<UserQuickSearch>;
  setUserQuickSearchesList(value: Array<UserQuickSearch>): void;
  clearUserQuickSearchesList(): void;
  addUserQuickSearches(value?: UserQuickSearch, index?: number): UserQuickSearch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserQuickSearches.AsObject;
  static toObject(includeInstance: boolean, msg: UserQuickSearches): UserQuickSearches.AsObject;
  static serializeBinaryToWriter(message: UserQuickSearches, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserQuickSearches;
  static deserializeBinaryFromReader(message: UserQuickSearches, reader: jspb.BinaryReader): UserQuickSearches;
}

export namespace UserQuickSearches {
  export type AsObject = {
    userQuickSearchesList: Array<UserQuickSearch.AsObject>,
  }
}

export class UserQuickSearchId extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserQuickSearchId.AsObject;
  static toObject(includeInstance: boolean, msg: UserQuickSearchId): UserQuickSearchId.AsObject;
  static serializeBinaryToWriter(message: UserQuickSearchId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserQuickSearchId;
  static deserializeBinaryFromReader(message: UserQuickSearchId, reader: jspb.BinaryReader): UserQuickSearchId;
}

export namespace UserQuickSearchId {
  export type AsObject = {
    userId: string,
    projectId: string,
  }
}

