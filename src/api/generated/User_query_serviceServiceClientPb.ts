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
  UserQueries,
  UserQuery,
  UserQueryId} from './user_query_service_pb';

export class UserQueryServiceClient {
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

  methodInfoCreateUserQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: UserQuery) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  createUserQuery(
    request: UserQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserQueryService/CreateUserQuery',
      request,
      metadata || {},
      this.methodInfoCreateUserQuery,
      callback);
  }

  methodInfoUpdateUserQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: UserQuery) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateUserQuery(
    request: UserQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserQueryService/UpdateUserQuery',
      request,
      metadata || {},
      this.methodInfoUpdateUserQuery,
      callback);
  }

  methodInfoDeleteUserQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: common_pb.Id) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteUserQuery(
    request: common_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserQueryService/DeleteUserQuery',
      request,
      metadata || {},
      this.methodInfoDeleteUserQuery,
      callback);
  }

  methodInfoGetUserQueriesByUserIdAndProjectId = new grpcWeb.AbstractClientBase.MethodInfo(
    UserQueries,
    (request: UserQueryId) => {
      return request.serializeBinary();
    },
    UserQueries.deserializeBinary
  );

  getUserQueriesByUserIdAndProjectId(
    request: UserQueryId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserQueries) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserQueryService/GetUserQueriesByUserIdAndProjectId',
      request,
      metadata || {},
      this.methodInfoGetUserQueriesByUserIdAndProjectId,
      callback);
  }

  methodInfoGetUserQueriesByUserIdAndProjectIdAndQueryType = new grpcWeb.AbstractClientBase.MethodInfo(
    UserQueries,
    (request: UserQueryId) => {
      return request.serializeBinary();
    },
    UserQueries.deserializeBinary
  );

  getUserQueriesByUserIdAndProjectIdAndQueryType(
    request: UserQueryId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserQueries) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserQueryService/GetUserQueriesByUserIdAndProjectIdAndQueryType',
      request,
      metadata || {},
      this.methodInfoGetUserQueriesByUserIdAndProjectIdAndQueryType,
      callback);
  }

}

