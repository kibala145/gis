import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getDefaultProjectId(): string;
  setDefaultProjectId(value: string): void;

  getRegistrationDate(): string;
  setRegistrationDate(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  getRegisteredVia(): string;
  setRegisteredVia(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    name: string,
    password: string,
    enabled: boolean,
    defaultProjectId: string,
    registrationDate: string,
    email: string,
    info: string,
    image: string,
    registeredVia: string,
  }
}

export class Users extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): void;
  clearUsersList(): void;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Users.AsObject;
  static toObject(includeInstance: boolean, msg: Users): Users.AsObject;
  static serializeBinaryToWriter(message: Users, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Users;
  static deserializeBinaryFromReader(message: Users, reader: jspb.BinaryReader): Users;
}

export namespace Users {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

