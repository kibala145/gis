import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class AuthenticationRequest extends jspb.Message {
  getGrantType(): string;
  setGrantType(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getCubaToken(): string;
  setCubaToken(value: string): void;

  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationRequest): AuthenticationRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationRequest;
  static deserializeBinaryFromReader(message: AuthenticationRequest, reader: jspb.BinaryReader): AuthenticationRequest;
}

export namespace AuthenticationRequest {
  export type AsObject = {
    grantType: string,
    username: string,
    cubaToken: string,
    refreshToken: string,
    password: string,
  }
}

export class AuthenticationResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  getTokenType(): string;
  setTokenType(value: string): void;

  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  getExpiresIn(): number;
  setExpiresIn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationResponse): AuthenticationResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationResponse;
  static deserializeBinaryFromReader(message: AuthenticationResponse, reader: jspb.BinaryReader): AuthenticationResponse;
}

export namespace AuthenticationResponse {
  export type AsObject = {
    accessToken: string,
    tokenType: string,
    refreshToken: string,
    expiresIn: number,
  }
}

