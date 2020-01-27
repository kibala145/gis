import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

export class CommonResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommonResponse): CommonResponse.AsObject;
  static serializeBinaryToWriter(message: CommonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonResponse;
  static deserializeBinaryFromReader(message: CommonResponse, reader: jspb.BinaryReader): CommonResponse;
}

export namespace CommonResponse {
  export type AsObject = {
    status: string,
    message: string,
    data: string,
  }
}

export class Id extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Id.AsObject;
  static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
  static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Id;
  static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
}

export namespace Id {
  export type AsObject = {
    id: string,
  }
}

export class Ids extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  clearIdsList(): void;
  addIds(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ids.AsObject;
  static toObject(includeInstance: boolean, msg: Ids): Ids.AsObject;
  static serializeBinaryToWriter(message: Ids, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ids;
  static deserializeBinaryFromReader(message: Ids, reader: jspb.BinaryReader): Ids;
}

export namespace Ids {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class Strings extends jspb.Message {
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  clearValuesList(): void;
  addValues(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Strings.AsObject;
  static toObject(includeInstance: boolean, msg: Strings): Strings.AsObject;
  static serializeBinaryToWriter(message: Strings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Strings;
  static deserializeBinaryFromReader(message: Strings, reader: jspb.BinaryReader): Strings;
}

export namespace Strings {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export class Ok extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ok.AsObject;
  static toObject(includeInstance: boolean, msg: Ok): Ok.AsObject;
  static serializeBinaryToWriter(message: Ok, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ok;
  static deserializeBinaryFromReader(message: Ok, reader: jspb.BinaryReader): Ok;
}

export namespace Ok {
  export type AsObject = {
    result: boolean,
  }
}

export class Name extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Name.AsObject;
  static toObject(includeInstance: boolean, msg: Name): Name.AsObject;
  static serializeBinaryToWriter(message: Name, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Name;
  static deserializeBinaryFromReader(message: Name, reader: jspb.BinaryReader): Name;
}

export namespace Name {
  export type AsObject = {
    name: string,
  }
}

export class Count extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Count.AsObject;
  static toObject(includeInstance: boolean, msg: Count): Count.AsObject;
  static serializeBinaryToWriter(message: Count, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Count;
  static deserializeBinaryFromReader(message: Count, reader: jspb.BinaryReader): Count;
}

export namespace Count {
  export type AsObject = {
    count: number,
  }
}

export class Bytes extends jspb.Message {
  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bytes.AsObject;
  static toObject(includeInstance: boolean, msg: Bytes): Bytes.AsObject;
  static serializeBinaryToWriter(message: Bytes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bytes;
  static deserializeBinaryFromReader(message: Bytes, reader: jspb.BinaryReader): Bytes;
}

export namespace Bytes {
  export type AsObject = {
    bytes: Uint8Array | string,
  }
}

