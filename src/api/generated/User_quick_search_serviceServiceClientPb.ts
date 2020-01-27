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
  UserQuickSearch,
  UserQuickSearchId,
  UserQuickSearches} from './user_quick_search_service_pb';

export class UserQuickSearchServiceClient {
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

  methodInfoCreateUserQuickSearch = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: UserQuickSearch) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  createUserQuickSearch(
    request: UserQuickSearch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserQuickSearchService/CreateUserQuickSearch',
      request,
      metadata || {},
      this.methodInfoCreateUserQuickSearch,
      callback);
  }

  methodInfoUpdateUserQuickSearch = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: UserQuickSearch) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateUserQuickSearch(
    request: UserQuickSearch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserQuickSearchService/UpdateUserQuickSearch',
      request,
      metadata || {},
      this.methodInfoUpdateUserQuickSearch,
      callback);
  }

  methodInfoDeleteUserQuickSearch = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: common_pb.Id) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteUserQuickSearch(
    request: common_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserQuickSearchService/DeleteUserQuickSearch',
      request,
      metadata || {},
      this.methodInfoDeleteUserQuickSearch,
      callback);
  }

  methodInfoGetUserQuickSearches = new grpcWeb.AbstractClientBase.MethodInfo(
    UserQuickSearches,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    UserQuickSearches.deserializeBinary
  );

  getUserQuickSearches(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserQuickSearches) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserQuickSearchService/GetUserQuickSearches',
      request,
      metadata || {},
      this.methodInfoGetUserQuickSearches,
      callback);
  }

  methodInfoGetUserQuickSearchesByUserId = new grpcWeb.AbstractClientBase.MethodInfo(
    UserQuickSearches,
    (request: UserQuickSearchId) => {
      return request.serializeBinary();
    },
    UserQuickSearches.deserializeBinary
  );

  getUserQuickSearchesByUserId(
    request: UserQuickSearchId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserQuickSearches) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserQuickSearchService/GetUserQuickSearchesByUserId',
      request,
      metadata || {},
      this.methodInfoGetUserQuickSearchesByUserId,
      callback);
  }

  methodInfoGetUserQuickSearchesByProjectId = new grpcWeb.AbstractClientBase.MethodInfo(
    UserQuickSearches,
    (request: UserQuickSearchId) => {
      return request.serializeBinary();
    },
    UserQuickSearches.deserializeBinary
  );

  getUserQuickSearchesByProjectId(
    request: UserQuickSearchId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserQuickSearches) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserQuickSearchService/GetUserQuickSearchesByProjectId',
      request,
      metadata || {},
      this.methodInfoGetUserQuickSearchesByProjectId,
      callback);
  }

  methodInfoGetUserQuickSearchesByUserIdAndProjectId = new grpcWeb.AbstractClientBase.MethodInfo(
    UserQuickSearches,
    (request: UserQuickSearchId) => {
      return request.serializeBinary();
    },
    UserQuickSearches.deserializeBinary
  );

  getUserQuickSearchesByUserIdAndProjectId(
    request: UserQuickSearchId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserQuickSearches) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserQuickSearchService/GetUserQuickSearchesByUserIdAndProjectId',
      request,
      metadata || {},
      this.methodInfoGetUserQuickSearchesByUserIdAndProjectId,
      callback);
  }

}

