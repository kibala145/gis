import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';

export class ActionLog extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getDate(): string;
  setDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionLog.AsObject;
  static toObject(includeInstance: boolean, msg: ActionLog): ActionLog.AsObject;
  static serializeBinaryToWriter(message: ActionLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionLog;
  static deserializeBinaryFromReader(message: ActionLog, reader: jspb.BinaryReader): ActionLog;
}

export namespace ActionLog {
  export type AsObject = {
    id: string,
    username: string,
    action: string,
    comment: string,
    date: string,
  }
}

export class ActionLogRequest extends jspb.Message {
  getOrderBy(): string;
  setOrderBy(value: string): void;

  getOrder(): string;
  setOrder(value: string): void;

  getPage(): string;
  setPage(value: string): void;

  getSize(): string;
  setSize(value: string): void;

  getActionLogFiltersList(): Array<ActionLogFilter>;
  setActionLogFiltersList(value: Array<ActionLogFilter>): void;
  clearActionLogFiltersList(): void;
  addActionLogFilters(value?: ActionLogFilter, index?: number): ActionLogFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActionLogRequest): ActionLogRequest.AsObject;
  static serializeBinaryToWriter(message: ActionLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionLogRequest;
  static deserializeBinaryFromReader(message: ActionLogRequest, reader: jspb.BinaryReader): ActionLogRequest;
}

export namespace ActionLogRequest {
  export type AsObject = {
    orderBy: string,
    order: string,
    page: string,
    size: string,
    actionLogFiltersList: Array<ActionLogFilter.AsObject>,
  }
}

export class ActionLogFilter extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getFieldType(): string;
  setFieldType(value: string): void;

  getOperator(): string;
  setOperator(value: string): void;

  getLogicalStatement(): string;
  setLogicalStatement(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionLogFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ActionLogFilter): ActionLogFilter.AsObject;
  static serializeBinaryToWriter(message: ActionLogFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionLogFilter;
  static deserializeBinaryFromReader(message: ActionLogFilter, reader: jspb.BinaryReader): ActionLogFilter;
}

export namespace ActionLogFilter {
  export type AsObject = {
    name: string,
    value: string,
    fieldType: string,
    operator: string,
    logicalStatement: string,
    priority: number,
  }
}

export class ActionLogResponse extends jspb.Message {
  getActionLogsList(): Array<ActionLog>;
  setActionLogsList(value: Array<ActionLog>): void;
  clearActionLogsList(): void;
  addActionLogs(value?: ActionLog, index?: number): ActionLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActionLogResponse): ActionLogResponse.AsObject;
  static serializeBinaryToWriter(message: ActionLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionLogResponse;
  static deserializeBinaryFromReader(message: ActionLogResponse, reader: jspb.BinaryReader): ActionLogResponse;
}

export namespace ActionLogResponse {
  export type AsObject = {
    actionLogsList: Array<ActionLog.AsObject>,
  }
}

