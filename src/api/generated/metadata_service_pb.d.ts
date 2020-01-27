import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';

export class MetadataServiceRequest extends jspb.Message {
  getDataSource(): string;
  setDataSource(value: string): void;

  getScheme(): string;
  setScheme(value: string): void;

  getTable(): string;
  setTable(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataServiceRequest): MetadataServiceRequest.AsObject;
  static serializeBinaryToWriter(message: MetadataServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataServiceRequest;
  static deserializeBinaryFromReader(message: MetadataServiceRequest, reader: jspb.BinaryReader): MetadataServiceRequest;
}

export namespace MetadataServiceRequest {
  export type AsObject = {
    dataSource: string,
    scheme: string,
    table: string,
  }
}

export class TableMetadata extends jspb.Message {
  getColumnsMetadataList(): Array<ColumnMetadata>;
  setColumnsMetadataList(value: Array<ColumnMetadata>): void;
  clearColumnsMetadataList(): void;
  addColumnsMetadata(value?: ColumnMetadata, index?: number): ColumnMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TableMetadata): TableMetadata.AsObject;
  static serializeBinaryToWriter(message: TableMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableMetadata;
  static deserializeBinaryFromReader(message: TableMetadata, reader: jspb.BinaryReader): TableMetadata;
}

export namespace TableMetadata {
  export type AsObject = {
    columnsMetadataList: Array<ColumnMetadata.AsObject>,
  }
}

export class ColumnMetadata extends jspb.Message {
  getColumnName(): string;
  setColumnName(value: string): void;

  getDataType(): string;
  setDataType(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnMetadata): ColumnMetadata.AsObject;
  static serializeBinaryToWriter(message: ColumnMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnMetadata;
  static deserializeBinaryFromReader(message: ColumnMetadata, reader: jspb.BinaryReader): ColumnMetadata;
}

export namespace ColumnMetadata {
  export type AsObject = {
    columnName: string,
    dataType: string,
    description: string,
  }
}

export class GeometryTables extends jspb.Message {
  getGeometryTablesList(): Array<GeometryTable>;
  setGeometryTablesList(value: Array<GeometryTable>): void;
  clearGeometryTablesList(): void;
  addGeometryTables(value?: GeometryTable, index?: number): GeometryTable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeometryTables.AsObject;
  static toObject(includeInstance: boolean, msg: GeometryTables): GeometryTables.AsObject;
  static serializeBinaryToWriter(message: GeometryTables, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeometryTables;
  static deserializeBinaryFromReader(message: GeometryTables, reader: jspb.BinaryReader): GeometryTables;
}

export namespace GeometryTables {
  export type AsObject = {
    geometryTablesList: Array<GeometryTable.AsObject>,
  }
}

export class GeometryTable extends jspb.Message {
  getTable(): string;
  setTable(value: string): void;

  getGeometryColumn(): string;
  setGeometryColumn(value: string): void;

  getSrid(): string;
  setSrid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeometryTable.AsObject;
  static toObject(includeInstance: boolean, msg: GeometryTable): GeometryTable.AsObject;
  static serializeBinaryToWriter(message: GeometryTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeometryTable;
  static deserializeBinaryFromReader(message: GeometryTable, reader: jspb.BinaryReader): GeometryTable;
}

export namespace GeometryTable {
  export type AsObject = {
    table: string,
    geometryColumn: string,
    srid: string,
  }
}

export class MapViewerStyles extends jspb.Message {
  getMapViewerStylesList(): Array<MapViewerStyle>;
  setMapViewerStylesList(value: Array<MapViewerStyle>): void;
  clearMapViewerStylesList(): void;
  addMapViewerStyles(value?: MapViewerStyle, index?: number): MapViewerStyle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapViewerStyles.AsObject;
  static toObject(includeInstance: boolean, msg: MapViewerStyles): MapViewerStyles.AsObject;
  static serializeBinaryToWriter(message: MapViewerStyles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapViewerStyles;
  static deserializeBinaryFromReader(message: MapViewerStyles, reader: jspb.BinaryReader): MapViewerStyles;
}

export namespace MapViewerStyles {
  export type AsObject = {
    mapViewerStylesList: Array<MapViewerStyle.AsObject>,
  }
}

export class MapViewerStyle extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapViewerStyle.AsObject;
  static toObject(includeInstance: boolean, msg: MapViewerStyle): MapViewerStyle.AsObject;
  static serializeBinaryToWriter(message: MapViewerStyle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapViewerStyle;
  static deserializeBinaryFromReader(message: MapViewerStyle, reader: jspb.BinaryReader): MapViewerStyle;
}

export namespace MapViewerStyle {
  export type AsObject = {
    name: string,
    type: string,
    description: string,
  }
}

export class MapViewerThemes extends jspb.Message {
  getMapViewerThemesList(): Array<MapViewerTheme>;
  setMapViewerThemesList(value: Array<MapViewerTheme>): void;
  clearMapViewerThemesList(): void;
  addMapViewerThemes(value?: MapViewerTheme, index?: number): MapViewerTheme;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapViewerThemes.AsObject;
  static toObject(includeInstance: boolean, msg: MapViewerThemes): MapViewerThemes.AsObject;
  static serializeBinaryToWriter(message: MapViewerThemes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapViewerThemes;
  static deserializeBinaryFromReader(message: MapViewerThemes, reader: jspb.BinaryReader): MapViewerThemes;
}

export namespace MapViewerThemes {
  export type AsObject = {
    mapViewerThemesList: Array<MapViewerTheme.AsObject>,
  }
}

export class MapViewerTheme extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getBaseTable(): string;
  setBaseTable(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getGeometryColumn(): string;
  setGeometryColumn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapViewerTheme.AsObject;
  static toObject(includeInstance: boolean, msg: MapViewerTheme): MapViewerTheme.AsObject;
  static serializeBinaryToWriter(message: MapViewerTheme, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapViewerTheme;
  static deserializeBinaryFromReader(message: MapViewerTheme, reader: jspb.BinaryReader): MapViewerTheme;
}

export namespace MapViewerTheme {
  export type AsObject = {
    name: string,
    baseTable: string,
    description: string,
    geometryColumn: string,
  }
}

export class DataSources extends jspb.Message {
  getDataSourcesMap(): jspb.Map<string, string>;
  clearDataSourcesMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSources.AsObject;
  static toObject(includeInstance: boolean, msg: DataSources): DataSources.AsObject;
  static serializeBinaryToWriter(message: DataSources, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSources;
  static deserializeBinaryFromReader(message: DataSources, reader: jspb.BinaryReader): DataSources;
}

export namespace DataSources {
  export type AsObject = {
    dataSourcesMap: Array<[string, string]>,
  }
}

