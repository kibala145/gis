/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';
import * as project_service_pb from './project_service_pb';
import * as common_pb from './common_pb';

import {
  AttributeSearchRequest,
  AttributeSearchResponse,
  BindAttributeAndGeometryRequest,
  BufferGeometryAroundWktRequest,
  BufferGeometryRequest,
  BufferGeometryResponse,
  DatabaseOperationRequest,
  DatabaseSelectOperationResponse,
  InfoClickRequest,
  InfoClickResponse,
  InvokeMethodRequest,
  ReferenceValuesRequest} from './database_service_pb';

export class DatabaseServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoAttributeSearch = new grpcWeb.AbstractClientBase.MethodInfo(
    AttributeSearchResponse,
    (request: AttributeSearchRequest) => {
      return request.serializeBinary();
    },
    AttributeSearchResponse.deserializeBinary
  );

  attributeSearch(
    request: AttributeSearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AttributeSearchResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.DatabaseService/AttributeSearch',
      request,
      metadata || {},
      this.methodInfoAttributeSearch,
      callback);
  }

  methodInfoPublicInfoClick = new grpcWeb.AbstractClientBase.MethodInfo(
    InfoClickResponse,
    (request: InfoClickRequest) => {
      return request.serializeBinary();
    },
    InfoClickResponse.deserializeBinary
  );

  publicInfoClick(
    request: InfoClickRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: InfoClickResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.DatabaseService/PublicInfoClick',
      request,
      metadata || {},
      this.methodInfoPublicInfoClick,
      callback);
  }

  methodInfoInfoClick = new grpcWeb.AbstractClientBase.MethodInfo(
    InfoClickResponse,
    (request: InfoClickRequest) => {
      return request.serializeBinary();
    },
    InfoClickResponse.deserializeBinary
  );

  infoClick(
    request: InfoClickRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: InfoClickResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.DatabaseService/InfoClick',
      request,
      metadata || {},
      this.methodInfoInfoClick,
      callback);
  }

  methodInfoBufferGeometry = new grpcWeb.AbstractClientBase.MethodInfo(
    BufferGeometryResponse,
    (request: BufferGeometryRequest) => {
      return request.serializeBinary();
    },
    BufferGeometryResponse.deserializeBinary
  );

  bufferGeometry(
    request: BufferGeometryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BufferGeometryResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.DatabaseService/BufferGeometry',
      request,
      metadata || {},
      this.methodInfoBufferGeometry,
      callback);
  }

  methodInfoBufferGeometryAroundWkt = new grpcWeb.AbstractClientBase.MethodInfo(
    BufferGeometryResponse,
    (request: BufferGeometryAroundWktRequest) => {
      return request.serializeBinary();
    },
    BufferGeometryResponse.deserializeBinary
  );

  bufferGeometryAroundWkt(
    request: BufferGeometryAroundWktRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BufferGeometryResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.DatabaseService/BufferGeometryAroundWkt',
      request,
      metadata || {},
      this.methodInfoBufferGeometryAroundWkt,
      callback);
  }

  methodInfoInvokeDatabaseMethod = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.CommonResponse,
    (request: InvokeMethodRequest) => {
      return request.serializeBinary();
    },
    common_pb.CommonResponse.deserializeBinary
  );

  invokeDatabaseMethod(
    request: InvokeMethodRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.CommonResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.DatabaseService/InvokeDatabaseMethod',
      request,
      metadata || {},
      this.methodInfoInvokeDatabaseMethod,
      callback);
  }

  methodInfoDatabaseUpdateOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.CommonResponse,
    (request: DatabaseOperationRequest) => {
      return request.serializeBinary();
    },
    common_pb.CommonResponse.deserializeBinary
  );

  databaseUpdateOperation(
    request: DatabaseOperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.CommonResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.DatabaseService/DatabaseUpdateOperation',
      request,
      metadata || {},
      this.methodInfoDatabaseUpdateOperation,
      callback);
  }

  methodInfoDatabaseSelectOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    DatabaseSelectOperationResponse,
    (request: DatabaseOperationRequest) => {
      return request.serializeBinary();
    },
    DatabaseSelectOperationResponse.deserializeBinary
  );

  databaseSelectOperation(
    request: DatabaseOperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DatabaseSelectOperationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.DatabaseService/DatabaseSelectOperation',
      request,
      metadata || {},
      this.methodInfoDatabaseSelectOperation,
      callback);
  }

  methodInfoBindAttributeWithGeometry = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.CommonResponse,
    (request: BindAttributeAndGeometryRequest) => {
      return request.serializeBinary();
    },
    common_pb.CommonResponse.deserializeBinary
  );

  bindAttributeWithGeometry(
    request: BindAttributeAndGeometryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.CommonResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.DatabaseService/BindAttributeWithGeometry',
      request,
      metadata || {},
      this.methodInfoBindAttributeWithGeometry,
      callback);
  }

  methodInfoUnbindAttributeWithGeometry = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.CommonResponse,
    (request: BindAttributeAndGeometryRequest) => {
      return request.serializeBinary();
    },
    common_pb.CommonResponse.deserializeBinary
  );

  unbindAttributeWithGeometry(
    request: BindAttributeAndGeometryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.CommonResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.DatabaseService/UnbindAttributeWithGeometry',
      request,
      metadata || {},
      this.methodInfoUnbindAttributeWithGeometry,
      callback);
  }

  methodInfoGetReferenceValues = new grpcWeb.AbstractClientBase.MethodInfo(
    DatabaseSelectOperationResponse,
    (request: ReferenceValuesRequest) => {
      return request.serializeBinary();
    },
    DatabaseSelectOperationResponse.deserializeBinary
  );

  getReferenceValues(
    request: ReferenceValuesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DatabaseSelectOperationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.DatabaseService/GetReferenceValues',
      request,
      metadata || {},
      this.methodInfoGetReferenceValues,
      callback);
  }

}

