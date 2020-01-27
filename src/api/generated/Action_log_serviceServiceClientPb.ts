/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';

import {
  ActionLog,
  ActionLogRequest,
  ActionLogResponse} from './action_log_service_pb';

export class ActionLogServiceClient {
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

  methodInfoCreateActionLog = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: ActionLog) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  createActionLog(
    request: ActionLog,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ActionLogService/CreateActionLog',
      request,
      metadata || {},
      this.methodInfoCreateActionLog,
      callback);
  }

  methodInfoGetUserActionLogs = new grpcWeb.AbstractClientBase.MethodInfo(
    ActionLogResponse,
    (request: common_pb.Name) => {
      return request.serializeBinary();
    },
    ActionLogResponse.deserializeBinary
  );

  getUserActionLogs(
    request: common_pb.Name,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ActionLogResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ActionLogService/GetUserActionLogs',
      request,
      metadata || {},
      this.methodInfoGetUserActionLogs,
      callback);
  }

  methodInfoGetActionLogs = new grpcWeb.AbstractClientBase.MethodInfo(
    ActionLogResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    ActionLogResponse.deserializeBinary
  );

  getActionLogs(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ActionLogResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ActionLogService/GetActionLogs',
      request,
      metadata || {},
      this.methodInfoGetActionLogs,
      callback);
  }

  methodInfoGetFilteredActionLogsCount = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Count,
    (request: ActionLogRequest) => {
      return request.serializeBinary();
    },
    common_pb.Count.deserializeBinary
  );

  getFilteredActionLogsCount(
    request: ActionLogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Count) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ActionLogService/GetFilteredActionLogsCount',
      request,
      metadata || {},
      this.methodInfoGetFilteredActionLogsCount,
      callback);
  }

  methodInfoGetFilteredActionLogs = new grpcWeb.AbstractClientBase.MethodInfo(
    ActionLogResponse,
    (request: ActionLogRequest) => {
      return request.serializeBinary();
    },
    ActionLogResponse.deserializeBinary
  );

  getFilteredActionLogs(
    request: ActionLogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ActionLogResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ActionLogService/GetFilteredActionLogs',
      request,
      metadata || {},
      this.methodInfoGetFilteredActionLogs,
      callback);
  }

  methodInfoGetActionLogsExcel = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Bytes,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    common_pb.Bytes.deserializeBinary
  );

  getActionLogsExcel(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Bytes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ActionLogService/GetActionLogsExcel',
      request,
      metadata || {},
      this.methodInfoGetActionLogsExcel,
      callback);
  }

  methodInfoGetFilteredActionLogsExcel = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Bytes,
    (request: ActionLogRequest) => {
      return request.serializeBinary();
    },
    common_pb.Bytes.deserializeBinary
  );

  getFilteredActionLogsExcel(
    request: ActionLogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Bytes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ActionLogService/GetFilteredActionLogsExcel',
      request,
      metadata || {},
      this.methodInfoGetFilteredActionLogsExcel,
      callback);
  }

}

