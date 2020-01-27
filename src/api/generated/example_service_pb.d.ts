import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

export class ExampleRequest extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleRequest): ExampleRequest.AsObject;
  static serializeBinaryToWriter(message: ExampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleRequest;
  static deserializeBinaryFromReader(message: ExampleRequest, reader: jspb.BinaryReader): ExampleRequest;
}

export namespace ExampleRequest {
  export type AsObject = {
    data: string,
  }
}

export class ExampleResponse extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleResponse): ExampleResponse.AsObject;
  static serializeBinaryToWriter(message: ExampleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleResponse;
  static deserializeBinaryFromReader(message: ExampleResponse, reader: jspb.BinaryReader): ExampleResponse;
}

export namespace ExampleResponse {
  export type AsObject = {
    data: string,
  }
}

