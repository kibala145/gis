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
  Group,
  GroupResponse,
  Groups} from './group_service_pb';

export class GroupServiceClient {
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

  methodInfoGetGroupById = new grpcWeb.AbstractClientBase.MethodInfo(
    Group,
    (request: common_pb.Id) => {
      return request.serializeBinary();
    },
    Group.deserializeBinary
  );

  getGroupById(
    request: common_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Group) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.GroupService/GetGroupById',
      request,
      metadata || {},
      this.methodInfoGetGroupById,
      callback);
  }

  methodInfoGetGroupByName = new grpcWeb.AbstractClientBase.MethodInfo(
    Group,
    (request: common_pb.Name) => {
      return request.serializeBinary();
    },
    Group.deserializeBinary
  );

  getGroupByName(
    request: common_pb.Name,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Group) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.GroupService/GetGroupByName',
      request,
      metadata || {},
      this.methodInfoGetGroupByName,
      callback);
  }

  methodInfoGetGroups = new grpcWeb.AbstractClientBase.MethodInfo(
    Groups,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    Groups.deserializeBinary
  );

  getGroups(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Groups) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.GroupService/GetGroups',
      request,
      metadata || {},
      this.methodInfoGetGroups,
      callback);
  }

  methodInfoGetGroupProjects = new grpcWeb.AbstractClientBase.MethodInfo(
    GroupResponse,
    (request: common_pb.Id) => {
      return request.serializeBinary();
    },
    GroupResponse.deserializeBinary
  );

  getGroupProjects(
    request: common_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GroupResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.GroupService/GetGroupProjects',
      request,
      metadata || {},
      this.methodInfoGetGroupProjects,
      callback);
  }

  methodInfoGetGroupUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    GroupResponse,
    (request: common_pb.Id) => {
      return request.serializeBinary();
    },
    GroupResponse.deserializeBinary
  );

  getGroupUsers(
    request: common_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GroupResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.GroupService/GetGroupUsers',
      request,
      metadata || {},
      this.methodInfoGetGroupUsers,
      callback);
  }

}

