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
  User,
  Users} from './user_service_pb';

export class UserServiceClient {
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

  methodInfoGetUserById = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: common_pb.Id) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  getUserById(
    request: common_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserService/GetUserById',
      request,
      metadata || {},
      this.methodInfoGetUserById,
      callback);
  }

  methodInfoGetUserByName = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: common_pb.Name) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  getUserByName(
    request: common_pb.Name,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserService/GetUserByName',
      request,
      metadata || {},
      this.methodInfoGetUserByName,
      callback);
  }

  methodInfoIsUserExists = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Ok,
    (request: common_pb.Name) => {
      return request.serializeBinary();
    },
    common_pb.Ok.deserializeBinary
  );

  isUserExists(
    request: common_pb.Name,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Ok) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserService/IsUserExists',
      request,
      metadata || {},
      this.methodInfoIsUserExists,
      callback);
  }

  methodInfoGetUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    Users,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    Users.deserializeBinary
  );

  getUsers(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Users) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserService/GetUsers',
      request,
      metadata || {},
      this.methodInfoGetUsers,
      callback);
  }

  methodInfoGetLoggedUser = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  getLoggedUser(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.UserService/GetLoggedUser',
      request,
      metadata || {},
      this.methodInfoGetLoggedUser,
      callback);
  }

}

