import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';

export class Bookmark extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getCreatedDate(): string;
  setCreatedDate(value: string): void;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bookmark.AsObject;
  static toObject(includeInstance: boolean, msg: Bookmark): Bookmark.AsObject;
  static serializeBinaryToWriter(message: Bookmark, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bookmark;
  static deserializeBinaryFromReader(message: Bookmark, reader: jspb.BinaryReader): Bookmark;
}

export namespace Bookmark {
  export type AsObject = {
    id: string,
    userId: string,
    name: string,
    url: string,
    createdDate: string,
    isPublic: boolean,
  }
}

export class Bookmarks extends jspb.Message {
  getBookmarksList(): Array<Bookmark>;
  setBookmarksList(value: Array<Bookmark>): void;
  clearBookmarksList(): void;
  addBookmarks(value?: Bookmark, index?: number): Bookmark;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bookmarks.AsObject;
  static toObject(includeInstance: boolean, msg: Bookmarks): Bookmarks.AsObject;
  static serializeBinaryToWriter(message: Bookmarks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bookmarks;
  static deserializeBinaryFromReader(message: Bookmarks, reader: jspb.BinaryReader): Bookmarks;
}

export namespace Bookmarks {
  export type AsObject = {
    bookmarksList: Array<Bookmark.AsObject>,
  }
}

