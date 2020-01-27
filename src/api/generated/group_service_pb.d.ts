import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';

export class Group extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getShortName(): string;
  setShortName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    id: string,
    name: string,
    shortName: string,
  }
}

export class Groups extends jspb.Message {
  getGroupsList(): Array<Group>;
  setGroupsList(value: Array<Group>): void;
  clearGroupsList(): void;
  addGroups(value?: Group, index?: number): Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Groups.AsObject;
  static toObject(includeInstance: boolean, msg: Groups): Groups.AsObject;
  static serializeBinaryToWriter(message: Groups, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Groups;
  static deserializeBinaryFromReader(message: Groups, reader: jspb.BinaryReader): Groups;
}

export namespace Groups {
  export type AsObject = {
    groupsList: Array<Group.AsObject>,
  }
}

export class GroupResponse extends jspb.Message {
  getValuesMap(): jspb.Map<string, string>;
  clearValuesMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GroupResponse): GroupResponse.AsObject;
  static serializeBinaryToWriter(message: GroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupResponse;
  static deserializeBinaryFromReader(message: GroupResponse, reader: jspb.BinaryReader): GroupResponse;
}

export namespace GroupResponse {
  export type AsObject = {
    valuesMap: Array<[string, string]>,
  }
}

