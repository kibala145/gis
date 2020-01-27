import * as jspb from "google-protobuf"

import * as common_pb from './common_pb';

export class FeatureCollection extends jspb.Message {
  getFeatureCollection(): string;
  setFeatureCollection(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureCollection.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureCollection): FeatureCollection.AsObject;
  static serializeBinaryToWriter(message: FeatureCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureCollection;
  static deserializeBinaryFromReader(message: FeatureCollection, reader: jspb.BinaryReader): FeatureCollection;
}

export namespace FeatureCollection {
  export type AsObject = {
    featureCollection: string,
  }
}

export class Feature extends jspb.Message {
  getFeature(): string;
  setFeature(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feature.AsObject;
  static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
  static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feature;
  static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
  export type AsObject = {
    feature: string,
  }
}

