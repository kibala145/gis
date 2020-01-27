import * as jspb from "google-protobuf"

import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb';

export class Version extends jspb.Message {
  getMajor(): number;
  setMajor(value: number): void;

  getMinor(): number;
  setMinor(value: number): void;

  getPatch(): number;
  setPatch(value: number): void;

  getSuffix(): string;
  setSuffix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    major: number,
    minor: number,
    patch: number,
    suffix: string,
  }
}

export class CodeGeneratorRequest extends jspb.Message {
  getFileToGenerateList(): Array<string>;
  setFileToGenerateList(value: Array<string>): void;
  clearFileToGenerateList(): void;
  addFileToGenerate(value: string, index?: number): void;

  getParameter(): string;
  setParameter(value: string): void;

  getProtoFileList(): Array<google_protobuf_descriptor_pb.FileDescriptorProto>;
  setProtoFileList(value: Array<google_protobuf_descriptor_pb.FileDescriptorProto>): void;
  clearProtoFileList(): void;
  addProtoFile(value?: google_protobuf_descriptor_pb.FileDescriptorProto, index?: number): google_protobuf_descriptor_pb.FileDescriptorProto;

  getCompilerVersion(): Version | undefined;
  setCompilerVersion(value?: Version): void;
  hasCompilerVersion(): boolean;
  clearCompilerVersion(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeGeneratorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CodeGeneratorRequest): CodeGeneratorRequest.AsObject;
  static serializeBinaryToWriter(message: CodeGeneratorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeGeneratorRequest;
  static deserializeBinaryFromReader(message: CodeGeneratorRequest, reader: jspb.BinaryReader): CodeGeneratorRequest;
}

export namespace CodeGeneratorRequest {
  export type AsObject = {
    fileToGenerateList: Array<string>,
    parameter: string,
    protoFileList: Array<google_protobuf_descriptor_pb.FileDescriptorProto.AsObject>,
    compilerVersion?: Version.AsObject,
  }
}

export class CodeGeneratorResponse extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  getFileList(): Array<CodeGeneratorResponse.File>;
  setFileList(value: Array<CodeGeneratorResponse.File>): void;
  clearFileList(): void;
  addFile(value?: CodeGeneratorResponse.File, index?: number): CodeGeneratorResponse.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeGeneratorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CodeGeneratorResponse): CodeGeneratorResponse.AsObject;
  static serializeBinaryToWriter(message: CodeGeneratorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeGeneratorResponse;
  static deserializeBinaryFromReader(message: CodeGeneratorResponse, reader: jspb.BinaryReader): CodeGeneratorResponse;
}

export namespace CodeGeneratorResponse {
  export type AsObject = {
    error: string,
    fileList: Array<CodeGeneratorResponse.File.AsObject>,
  }

  export class File extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getInsertionPoint(): string;
    setInsertionPoint(value: string): void;

    getContent(): string;
    setContent(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): File.AsObject;
    static toObject(includeInstance: boolean, msg: File): File.AsObject;
    static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): File;
    static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
  }

  export namespace File {
    export type AsObject = {
      name: string,
      insertionPoint: string,
      content: string,
    }
  }

}

