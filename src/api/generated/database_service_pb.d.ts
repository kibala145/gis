import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';
import * as project_service_pb from './project_service_pb';
import * as common_pb from './common_pb';

export class AttributeSearchRequest extends jspb.Message {
  getDataSource(): string;
  setDataSource(value: string): void;

  getThemeSrid(): string;
  setThemeSrid(value: string): void;

  getInSrid(): string;
  setInSrid(value: string): void;

  getOutSrid(): string;
  setOutSrid(value: string): void;

  getAttributeTable(): string;
  setAttributeTable(value: string): void;

  getAttributeIdColumn(): string;
  setAttributeIdColumn(value: string): void;

  getAttributeLinkGeometryColumn(): string;
  setAttributeLinkGeometryColumn(value: string): void;

  getGeometryTable(): string;
  setGeometryTable(value: string): void;

  getGeometryIdColumn(): string;
  setGeometryIdColumn(value: string): void;

  getGeometryColumn(): string;
  setGeometryColumn(value: string): void;

  getLinkTable(): string;
  setLinkTable(value: string): void;

  getLinkTableGeometryIdColumn(): string;
  setLinkTableGeometryIdColumn(value: string): void;

  getLinkTableAttributeIdColumn(): string;
  setLinkTableAttributeIdColumn(value: string): void;

  getWithGeometry(): boolean;
  setWithGeometry(value: boolean): void;

  getRowLimit(): string;
  setRowLimit(value: string): void;

  getSelectColumnsList(): Array<SelectColumn>;
  setSelectColumnsList(value: Array<SelectColumn>): void;
  clearSelectColumnsList(): void;
  addSelectColumns(value?: SelectColumn, index?: number): SelectColumn;

  getWhereStatementsList(): Array<WhereStatement>;
  setWhereStatementsList(value: Array<WhereStatement>): void;
  clearWhereStatementsList(): void;
  addWhereStatements(value?: WhereStatement, index?: number): WhereStatement;

  getSpatialStatementsList(): Array<SpatialStatement>;
  setSpatialStatementsList(value: Array<SpatialStatement>): void;
  clearSpatialStatementsList(): void;
  addSpatialStatements(value?: SpatialStatement, index?: number): SpatialStatement;

  getThemeId(): string;
  setThemeId(value: string): void;

  getThemeName(): string;
  setThemeName(value: string): void;

  getThemeLabel(): string;
  setThemeLabel(value: string): void;

  getThemeIsExportable(): string;
  setThemeIsExportable(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeSearchRequest): AttributeSearchRequest.AsObject;
  static serializeBinaryToWriter(message: AttributeSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeSearchRequest;
  static deserializeBinaryFromReader(message: AttributeSearchRequest, reader: jspb.BinaryReader): AttributeSearchRequest;
}

export namespace AttributeSearchRequest {
  export type AsObject = {
    dataSource: string,
    themeSrid: string,
    inSrid: string,
    outSrid: string,
    attributeTable: string,
    attributeIdColumn: string,
    attributeLinkGeometryColumn: string,
    geometryTable: string,
    geometryIdColumn: string,
    geometryColumn: string,
    linkTable: string,
    linkTableGeometryIdColumn: string,
    linkTableAttributeIdColumn: string,
    withGeometry: boolean,
    rowLimit: string,
    selectColumnsList: Array<SelectColumn.AsObject>,
    whereStatementsList: Array<WhereStatement.AsObject>,
    spatialStatementsList: Array<SpatialStatement.AsObject>,
    themeId: string,
    themeName: string,
    themeLabel: string,
    themeIsExportable: string,
  }
}

export class SelectColumn extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getType(): string;
  setType(value: string): void;

  getControlType(): string;
  setControlType(value: string): void;

  getReferenceTable(): string;
  setReferenceTable(value: string): void;

  getReferenceJoinColumn(): string;
  setReferenceJoinColumn(value: string): void;

  getReferenceSelectColumn(): string;
  setReferenceSelectColumn(value: string): void;

  getAggregateFunction(): string;
  setAggregateFunction(value: string): void;

  getPos(): number;
  setPos(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SelectColumn.AsObject;
  static toObject(includeInstance: boolean, msg: SelectColumn): SelectColumn.AsObject;
  static serializeBinaryToWriter(message: SelectColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SelectColumn;
  static deserializeBinaryFromReader(message: SelectColumn, reader: jspb.BinaryReader): SelectColumn;
}

export namespace SelectColumn {
  export type AsObject = {
    id: string,
    name: string,
    label: string,
    type: string,
    controlType: string,
    referenceTable: string,
    referenceJoinColumn: string,
    referenceSelectColumn: string,
    aggregateFunction: string,
    pos: number,
  }
}

export class WhereStatement extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getOperator(): string;
  setOperator(value: string): void;

  getValueList(): Array<string>;
  setValueList(value: Array<string>): void;
  clearValueList(): void;
  addValue(value: string, index?: number): void;

  getLogicalStatement(): string;
  setLogicalStatement(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhereStatement.AsObject;
  static toObject(includeInstance: boolean, msg: WhereStatement): WhereStatement.AsObject;
  static serializeBinaryToWriter(message: WhereStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhereStatement;
  static deserializeBinaryFromReader(message: WhereStatement, reader: jspb.BinaryReader): WhereStatement;
}

export namespace WhereStatement {
  export type AsObject = {
    name: string,
    type: string,
    operator: string,
    valueList: Array<string>,
    logicalStatement: string,
  }
}

export class SpatialStatement extends jspb.Message {
  getWktGeometry(): string;
  setWktGeometry(value: string): void;

  getRowLimit(): string;
  setRowLimit(value: string): void;

  getDistance(): string;
  setDistance(value: string): void;

  getOperator(): string;
  setOperator(value: string): void;

  getLayerSrid(): string;
  setLayerSrid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpatialStatement.AsObject;
  static toObject(includeInstance: boolean, msg: SpatialStatement): SpatialStatement.AsObject;
  static serializeBinaryToWriter(message: SpatialStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpatialStatement;
  static deserializeBinaryFromReader(message: SpatialStatement, reader: jspb.BinaryReader): SpatialStatement;
}

export namespace SpatialStatement {
  export type AsObject = {
    wktGeometry: string,
    rowLimit: string,
    distance: string,
    operator: string,
    layerSrid: string,
  }
}

export class AttributeSearchResponse extends jspb.Message {
  getThemeId(): string;
  setThemeId(value: string): void;

  getThemeLabel(): string;
  setThemeLabel(value: string): void;

  getThemeName(): string;
  setThemeName(value: string): void;

  getThemeIsExportable(): string;
  setThemeIsExportable(value: string): void;

  getColumnHeadersList(): Array<AttributeSearchColumnHeader>;
  setColumnHeadersList(value: Array<AttributeSearchColumnHeader>): void;
  clearColumnHeadersList(): void;
  addColumnHeaders(value?: AttributeSearchColumnHeader, index?: number): AttributeSearchColumnHeader;

  getObjectsList(): Array<AttributeSearchObject>;
  setObjectsList(value: Array<AttributeSearchObject>): void;
  clearObjectsList(): void;
  addObjects(value?: AttributeSearchObject, index?: number): AttributeSearchObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeSearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeSearchResponse): AttributeSearchResponse.AsObject;
  static serializeBinaryToWriter(message: AttributeSearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeSearchResponse;
  static deserializeBinaryFromReader(message: AttributeSearchResponse, reader: jspb.BinaryReader): AttributeSearchResponse;
}

export namespace AttributeSearchResponse {
  export type AsObject = {
    themeId: string,
    themeLabel: string,
    themeName: string,
    themeIsExportable: string,
    columnHeadersList: Array<AttributeSearchColumnHeader.AsObject>,
    objectsList: Array<AttributeSearchObject.AsObject>,
  }
}

export class AttributeSearchColumnHeader extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeSearchColumnHeader.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeSearchColumnHeader): AttributeSearchColumnHeader.AsObject;
  static serializeBinaryToWriter(message: AttributeSearchColumnHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeSearchColumnHeader;
  static deserializeBinaryFromReader(message: AttributeSearchColumnHeader, reader: jspb.BinaryReader): AttributeSearchColumnHeader;
}

export namespace AttributeSearchColumnHeader {
  export type AsObject = {
    label: string,
    type: string,
  }
}

export class AttributeSearchObject extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getGeometryId(): string;
  setGeometryId(value: string): void;

  getAttributeId(): string;
  setAttributeId(value: string): void;

  getWktGeometry(): string;
  setWktGeometry(value: string): void;

  getDistance(): string;
  setDistance(value: string): void;

  getThemeId(): string;
  setThemeId(value: string): void;

  getColumnsList(): Array<AttributeSearchColumn>;
  setColumnsList(value: Array<AttributeSearchColumn>): void;
  clearColumnsList(): void;
  addColumns(value?: AttributeSearchColumn, index?: number): AttributeSearchColumn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeSearchObject.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeSearchObject): AttributeSearchObject.AsObject;
  static serializeBinaryToWriter(message: AttributeSearchObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeSearchObject;
  static deserializeBinaryFromReader(message: AttributeSearchObject, reader: jspb.BinaryReader): AttributeSearchObject;
}

export namespace AttributeSearchObject {
  export type AsObject = {
    id: string,
    geometryId: string,
    attributeId: string,
    wktGeometry: string,
    distance: string,
    themeId: string,
    columnsList: Array<AttributeSearchColumn.AsObject>,
  }
}

export class AttributeSearchColumn extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getControlType(): string;
  setControlType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeSearchColumn.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeSearchColumn): AttributeSearchColumn.AsObject;
  static serializeBinaryToWriter(message: AttributeSearchColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeSearchColumn;
  static deserializeBinaryFromReader(message: AttributeSearchColumn, reader: jspb.BinaryReader): AttributeSearchColumn;
}

export namespace AttributeSearchColumn {
  export type AsObject = {
    name: string,
    label: string,
    value: string,
    controlType: string,
  }
}

export class InfoClickRequest extends jspb.Message {
  getClickLat(): number;
  setClickLat(value: number): void;

  getClickLng(): number;
  setClickLng(value: number): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getThemeId(): string;
  setThemeId(value: string): void;

  getOutSrid(): string;
  setOutSrid(value: string): void;

  getInSrid(): string;
  setInSrid(value: string): void;

  getRadius(): number;
  setRadius(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoClickRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InfoClickRequest): InfoClickRequest.AsObject;
  static serializeBinaryToWriter(message: InfoClickRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoClickRequest;
  static deserializeBinaryFromReader(message: InfoClickRequest, reader: jspb.BinaryReader): InfoClickRequest;
}

export namespace InfoClickRequest {
  export type AsObject = {
    clickLat: number,
    clickLng: number,
    projectId: string,
    themeId: string,
    outSrid: string,
    inSrid: string,
    radius: number,
  }
}

export class InfoClickResponse extends jspb.Message {
  getObjectsList(): Array<InfoClickObject>;
  setObjectsList(value: Array<InfoClickObject>): void;
  clearObjectsList(): void;
  addObjects(value?: InfoClickObject, index?: number): InfoClickObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoClickResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InfoClickResponse): InfoClickResponse.AsObject;
  static serializeBinaryToWriter(message: InfoClickResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoClickResponse;
  static deserializeBinaryFromReader(message: InfoClickResponse, reader: jspb.BinaryReader): InfoClickResponse;
}

export namespace InfoClickResponse {
  export type AsObject = {
    objectsList: Array<InfoClickObject.AsObject>,
  }
}

export class InfoClickObject extends jspb.Message {
  getThemeId(): string;
  setThemeId(value: string): void;

  getThemeName(): string;
  setThemeName(value: string): void;

  getThemeGroupName(): string;
  setThemeGroupName(value: string): void;

  getThemeIsEditable(): boolean;
  setThemeIsEditable(value: boolean): void;

  getThemeIsExportable(): boolean;
  setThemeIsExportable(value: boolean): void;

  getThemeDataSource(): string;
  setThemeDataSource(value: string): void;

  getThemeGeometryId(): string;
  setThemeGeometryId(value: string): void;

  getThemeAttributeId(): string;
  setThemeAttributeId(value: string): void;

  getThemeWktGeometry(): string;
  setThemeWktGeometry(value: string): void;

  getThemePortalActionsList(): Array<project_service_pb.PortalAction>;
  setThemePortalActionsList(value: Array<project_service_pb.PortalAction>): void;
  clearThemePortalActionsList(): void;
  addThemePortalActions(value?: project_service_pb.PortalAction, index?: number): project_service_pb.PortalAction;

  getColumnsList(): Array<InfoClickColumn>;
  setColumnsList(value: Array<InfoClickColumn>): void;
  clearColumnsList(): void;
  addColumns(value?: InfoClickColumn, index?: number): InfoClickColumn;

  getClickLng(): number;
  setClickLng(value: number): void;

  getClickLat(): number;
  setClickLat(value: number): void;

  getOutSrid(): string;
  setOutSrid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoClickObject.AsObject;
  static toObject(includeInstance: boolean, msg: InfoClickObject): InfoClickObject.AsObject;
  static serializeBinaryToWriter(message: InfoClickObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoClickObject;
  static deserializeBinaryFromReader(message: InfoClickObject, reader: jspb.BinaryReader): InfoClickObject;
}

export namespace InfoClickObject {
  export type AsObject = {
    themeId: string,
    themeName: string,
    themeGroupName: string,
    themeIsEditable: boolean,
    themeIsExportable: boolean,
    themeDataSource: string,
    themeGeometryId: string,
    themeAttributeId: string,
    themeWktGeometry: string,
    themePortalActionsList: Array<project_service_pb.PortalAction.AsObject>,
    columnsList: Array<InfoClickColumn.AsObject>,
    clickLng: number,
    clickLat: number,
    outSrid: string,
  }
}

export class InfoClickColumn extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getType(): string;
  setType(value: string): void;

  getControlType(): string;
  setControlType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoClickColumn.AsObject;
  static toObject(includeInstance: boolean, msg: InfoClickColumn): InfoClickColumn.AsObject;
  static serializeBinaryToWriter(message: InfoClickColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoClickColumn;
  static deserializeBinaryFromReader(message: InfoClickColumn, reader: jspb.BinaryReader): InfoClickColumn;
}

export namespace InfoClickColumn {
  export type AsObject = {
    value: string,
    label: string,
    type: string,
    controlType: string,
  }
}

export class BufferGeometryRequest extends jspb.Message {
  getDataSource(): string;
  setDataSource(value: string): void;

  getGeometryTable(): string;
  setGeometryTable(value: string): void;

  getGeometryColumn(): string;
  setGeometryColumn(value: string): void;

  getAttributeColumn(): string;
  setAttributeColumn(value: string): void;

  getAttributeValue(): string;
  setAttributeValue(value: string): void;

  getBufferDistance(): string;
  setBufferDistance(value: string): void;

  getGeometryDimension(): number;
  setGeometryDimension(value: number): void;

  getThemeSrid(): string;
  setThemeSrid(value: string): void;

  getOutSrid(): string;
  setOutSrid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BufferGeometryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BufferGeometryRequest): BufferGeometryRequest.AsObject;
  static serializeBinaryToWriter(message: BufferGeometryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BufferGeometryRequest;
  static deserializeBinaryFromReader(message: BufferGeometryRequest, reader: jspb.BinaryReader): BufferGeometryRequest;
}

export namespace BufferGeometryRequest {
  export type AsObject = {
    dataSource: string,
    geometryTable: string,
    geometryColumn: string,
    attributeColumn: string,
    attributeValue: string,
    bufferDistance: string,
    geometryDimension: number,
    themeSrid: string,
    outSrid: string,
  }
}

export class BufferGeometryResponse extends jspb.Message {
  getWktGeometry(): string;
  setWktGeometry(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BufferGeometryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BufferGeometryResponse): BufferGeometryResponse.AsObject;
  static serializeBinaryToWriter(message: BufferGeometryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BufferGeometryResponse;
  static deserializeBinaryFromReader(message: BufferGeometryResponse, reader: jspb.BinaryReader): BufferGeometryResponse;
}

export namespace BufferGeometryResponse {
  export type AsObject = {
    wktGeometry: string,
  }
}

export class BufferGeometryAroundWktRequest extends jspb.Message {
  getWktGeometry(): string;
  setWktGeometry(value: string): void;

  getDistance(): string;
  setDistance(value: string): void;

  getDataSource(): string;
  setDataSource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BufferGeometryAroundWktRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BufferGeometryAroundWktRequest): BufferGeometryAroundWktRequest.AsObject;
  static serializeBinaryToWriter(message: BufferGeometryAroundWktRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BufferGeometryAroundWktRequest;
  static deserializeBinaryFromReader(message: BufferGeometryAroundWktRequest, reader: jspb.BinaryReader): BufferGeometryAroundWktRequest;
}

export namespace BufferGeometryAroundWktRequest {
  export type AsObject = {
    wktGeometry: string,
    distance: string,
    dataSource: string,
  }
}

export class InvokeMethodRequest extends jspb.Message {
  getMethodName(): string;
  setMethodName(value: string): void;

  getMethodType(): MethodType;
  setMethodType(value: MethodType): void;

  getDataSource(): string;
  setDataSource(value: string): void;

  getMethodParametersList(): Array<string>;
  setMethodParametersList(value: Array<string>): void;
  clearMethodParametersList(): void;
  addMethodParameters(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeMethodRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeMethodRequest): InvokeMethodRequest.AsObject;
  static serializeBinaryToWriter(message: InvokeMethodRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeMethodRequest;
  static deserializeBinaryFromReader(message: InvokeMethodRequest, reader: jspb.BinaryReader): InvokeMethodRequest;
}

export namespace InvokeMethodRequest {
  export type AsObject = {
    methodName: string,
    methodType: MethodType,
    dataSource: string,
    methodParametersList: Array<string>,
  }
}

export class DatabaseOperationRequest extends jspb.Message {
  getDataSource(): string;
  setDataSource(value: string): void;

  getTable(): string;
  setTable(value: string): void;

  getSequencer(): string;
  setSequencer(value: string): void;

  getOperation(): string;
  setOperation(value: string): void;

  getPrimaryKey(): string;
  setPrimaryKey(value: string): void;

  getPrimaryKeyValue(): string;
  setPrimaryKeyValue(value: string): void;

  getPrimaryKeyType(): string;
  setPrimaryKeyType(value: string): void;

  getSelectWhereExpression(): string;
  setSelectWhereExpression(value: string): void;

  getRowLimit(): string;
  setRowLimit(value: string): void;

  getDbSrid(): string;
  setDbSrid(value: string): void;

  getInSrid(): string;
  setInSrid(value: string): void;

  getOutSrid(): string;
  setOutSrid(value: string): void;

  getIsDistinct(): boolean;
  setIsDistinct(value: boolean): void;

  getGeometryDimension(): number;
  setGeometryDimension(value: number): void;

  getAttributeRowsList(): Array<AttributeRow>;
  setAttributeRowsList(value: Array<AttributeRow>): void;
  clearAttributeRowsList(): void;
  addAttributeRows(value?: AttributeRow, index?: number): AttributeRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatabaseOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DatabaseOperationRequest): DatabaseOperationRequest.AsObject;
  static serializeBinaryToWriter(message: DatabaseOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatabaseOperationRequest;
  static deserializeBinaryFromReader(message: DatabaseOperationRequest, reader: jspb.BinaryReader): DatabaseOperationRequest;
}

export namespace DatabaseOperationRequest {
  export type AsObject = {
    dataSource: string,
    table: string,
    sequencer: string,
    operation: string,
    primaryKey: string,
    primaryKeyValue: string,
    primaryKeyType: string,
    selectWhereExpression: string,
    rowLimit: string,
    dbSrid: string,
    inSrid: string,
    outSrid: string,
    isDistinct: boolean,
    geometryDimension: number,
    attributeRowsList: Array<AttributeRow.AsObject>,
  }
}

export class AttributeRow extends jspb.Message {
  getAttributesList(): Array<Attribute>;
  setAttributesList(value: Array<Attribute>): void;
  clearAttributesList(): void;
  addAttributes(value?: Attribute, index?: number): Attribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeRow.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeRow): AttributeRow.AsObject;
  static serializeBinaryToWriter(message: AttributeRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeRow;
  static deserializeBinaryFromReader(message: AttributeRow, reader: jspb.BinaryReader): AttributeRow;
}

export namespace AttributeRow {
  export type AsObject = {
    attributesList: Array<Attribute.AsObject>,
  }
}

export class Attribute extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attribute.AsObject;
  static toObject(includeInstance: boolean, msg: Attribute): Attribute.AsObject;
  static serializeBinaryToWriter(message: Attribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attribute;
  static deserializeBinaryFromReader(message: Attribute, reader: jspb.BinaryReader): Attribute;
}

export namespace Attribute {
  export type AsObject = {
    name: string,
    value: string,
    type: string,
  }
}

export class DatabaseSelectOperationResponse extends jspb.Message {
  getRowsList(): Array<DatabaseSelectOperationObject>;
  setRowsList(value: Array<DatabaseSelectOperationObject>): void;
  clearRowsList(): void;
  addRows(value?: DatabaseSelectOperationObject, index?: number): DatabaseSelectOperationObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatabaseSelectOperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DatabaseSelectOperationResponse): DatabaseSelectOperationResponse.AsObject;
  static serializeBinaryToWriter(message: DatabaseSelectOperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatabaseSelectOperationResponse;
  static deserializeBinaryFromReader(message: DatabaseSelectOperationResponse, reader: jspb.BinaryReader): DatabaseSelectOperationResponse;
}

export namespace DatabaseSelectOperationResponse {
  export type AsObject = {
    rowsList: Array<DatabaseSelectOperationObject.AsObject>,
  }
}

export class DatabaseSelectOperationObject extends jspb.Message {
  getRowMap(): jspb.Map<string, string>;
  clearRowMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatabaseSelectOperationObject.AsObject;
  static toObject(includeInstance: boolean, msg: DatabaseSelectOperationObject): DatabaseSelectOperationObject.AsObject;
  static serializeBinaryToWriter(message: DatabaseSelectOperationObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatabaseSelectOperationObject;
  static deserializeBinaryFromReader(message: DatabaseSelectOperationObject, reader: jspb.BinaryReader): DatabaseSelectOperationObject;
}

export namespace DatabaseSelectOperationObject {
  export type AsObject = {
    rowMap: Array<[string, string]>,
  }
}

export class BindAttributeAndGeometryRequest extends jspb.Message {
  getDataSource(): string;
  setDataSource(value: string): void;

  getDbSrid(): string;
  setDbSrid(value: string): void;

  getInSrid(): string;
  setInSrid(value: string): void;

  getAttributeTable(): string;
  setAttributeTable(value: string): void;

  getAttributeIdColumn(): string;
  setAttributeIdColumn(value: string): void;

  getAttributeIdValue(): string;
  setAttributeIdValue(value: string): void;

  getAttributeLinkGeometryColumn(): string;
  setAttributeLinkGeometryColumn(value: string): void;

  getAttributeLinkGeometryValue(): string;
  setAttributeLinkGeometryValue(value: string): void;

  getAttributeSequencer(): string;
  setAttributeSequencer(value: string): void;

  getAttributeInsertRowList(): Array<Attribute>;
  setAttributeInsertRowList(value: Array<Attribute>): void;
  clearAttributeInsertRowList(): void;
  addAttributeInsertRow(value?: Attribute, index?: number): Attribute;

  getGeometryTable(): string;
  setGeometryTable(value: string): void;

  getGeometryIdColumn(): string;
  setGeometryIdColumn(value: string): void;

  getGeometryIdValue(): string;
  setGeometryIdValue(value: string): void;

  getGeometrySequencer(): string;
  setGeometrySequencer(value: string): void;

  getGeometryDimension(): number;
  setGeometryDimension(value: number): void;

  getGeometryInsertRowList(): Array<Attribute>;
  setGeometryInsertRowList(value: Array<Attribute>): void;
  clearGeometryInsertRowList(): void;
  addGeometryInsertRow(value?: Attribute, index?: number): Attribute;

  getLinkTable(): string;
  setLinkTable(value: string): void;

  getLinkTableGeometryIdColumn(): string;
  setLinkTableGeometryIdColumn(value: string): void;

  getLinkTableAttributeIdColumn(): string;
  setLinkTableAttributeIdColumn(value: string): void;

  getInsertAttribute(): boolean;
  setInsertAttribute(value: boolean): void;

  getInsertGeometry(): boolean;
  setInsertGeometry(value: boolean): void;

  getWithLinkTable(): boolean;
  setWithLinkTable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindAttributeAndGeometryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BindAttributeAndGeometryRequest): BindAttributeAndGeometryRequest.AsObject;
  static serializeBinaryToWriter(message: BindAttributeAndGeometryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindAttributeAndGeometryRequest;
  static deserializeBinaryFromReader(message: BindAttributeAndGeometryRequest, reader: jspb.BinaryReader): BindAttributeAndGeometryRequest;
}

export namespace BindAttributeAndGeometryRequest {
  export type AsObject = {
    dataSource: string,
    dbSrid: string,
    inSrid: string,
    attributeTable: string,
    attributeIdColumn: string,
    attributeIdValue: string,
    attributeLinkGeometryColumn: string,
    attributeLinkGeometryValue: string,
    attributeSequencer: string,
    attributeInsertRowList: Array<Attribute.AsObject>,
    geometryTable: string,
    geometryIdColumn: string,
    geometryIdValue: string,
    geometrySequencer: string,
    geometryDimension: number,
    geometryInsertRowList: Array<Attribute.AsObject>,
    linkTable: string,
    linkTableGeometryIdColumn: string,
    linkTableAttributeIdColumn: string,
    insertAttribute: boolean,
    insertGeometry: boolean,
    withLinkTable: boolean,
  }
}

export class ReferenceValuesRequest extends jspb.Message {
  getReferenceTable(): string;
  setReferenceTable(value: string): void;

  getReferenceIdColumn(): string;
  setReferenceIdColumn(value: string): void;

  getReferenceDisplayColumn(): string;
  setReferenceDisplayColumn(value: string): void;

  getDataSource(): string;
  setDataSource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceValuesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceValuesRequest): ReferenceValuesRequest.AsObject;
  static serializeBinaryToWriter(message: ReferenceValuesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceValuesRequest;
  static deserializeBinaryFromReader(message: ReferenceValuesRequest, reader: jspb.BinaryReader): ReferenceValuesRequest;
}

export namespace ReferenceValuesRequest {
  export type AsObject = {
    referenceTable: string,
    referenceIdColumn: string,
    referenceDisplayColumn: string,
    dataSource: string,
  }
}

export enum MethodType { 
  PROCEDURE = 0,
  FUNCTION = 1,
}
