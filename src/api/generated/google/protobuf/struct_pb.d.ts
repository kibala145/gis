import * as jspb from "google-protobuf"

export class Struct extends jspb.Message {
  getFieldsMap(): jspb.Map<string, Value>;
  clearFieldsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Struct.AsObject;
  static toObject(includeInstance: boolean, msg: Struct): Struct.AsObject;
  static serializeBinaryToWriter(message: Struct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Struct;
  static deserializeBinaryFromReader(message: Struct, reader: jspb.BinaryReader): Struct;
}

export namespace Struct {
  export type AsObject = {
    fieldsMap: Array<[string, Value.AsObject]>,
  }
}

export class Value extends jspb.Message {
  getNullValue(): NullValue;
  setNullValue(value: NullValue): void;

  getNumberValue(): number;
  setNumberValue(value: number): void;

  getStringValue(): string;
  setStringValue(value: string): void;

  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  getStructValue(): Struct | undefined;
  setStructValue(value?: Struct): void;
  hasStructValue(): boolean;
  clearStructValue(): void;

  getListValue(): ListValue | undefined;
  setListValue(value?: ListValue): void;
  hasListValue(): boolean;
  clearListValue(): void;

  getKindCase(): Value.KindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    nullValue: NullValue,
    numberValue: number,
    stringValue: string,
    boolValue: boolean,
    structValue?: Struct.AsObject,
    listValue?: ListValue.AsObject,
  }

  export enum KindCase { 
    KIND_NOT_SET = 0,
    NULL_VALUE = 1,
    NUMBER_VALUE = 2,
    STRING_VALUE = 3,
    BOOL_VALUE = 4,
    STRUCT_VALUE = 5,
    LIST_VALUE = 6,
  }
}

export class ListValue extends jspb.Message {
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): void;
  clearValuesList(): void;
  addValues(value?: Value, index?: number): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListValue.AsObject;
  static toObject(includeInstance: boolean, msg: ListValue): ListValue.AsObject;
  static serializeBinaryToWriter(message: ListValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListValue;
  static deserializeBinaryFromReader(message: ListValue, reader: jspb.BinaryReader): ListValue;
}

export namespace ListValue {
  export type AsObject = {
    valuesList: Array<Value.AsObject>,
  }
}

export enum NullValue { 
  NULL_VALUE = 0,
}
