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
  MapPart,
  Project,
  ProjectThemeLayerId,
  ThemeLayer,
  ThemeLayerDescriptions,
  ThemeLayers} from './project_service_pb';

export class ProjectServiceClient {
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

  methodInfoGetPublicUserOldProjects = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Ids,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    common_pb.Ids.deserializeBinary
  );

  getPublicUserOldProjects(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Ids) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ProjectService/GetPublicUserOldProjects',
      request,
      metadata || {},
      this.methodInfoGetPublicUserOldProjects,
      callback);
  }

  methodInfoGetPublicProjectFromOldById = new grpcWeb.AbstractClientBase.MethodInfo(
    Project,
    (request: common_pb.Id) => {
      return request.serializeBinary();
    },
    Project.deserializeBinary
  );

  getPublicProjectFromOldById(
    request: common_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Project) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ProjectService/GetPublicProjectFromOldById',
      request,
      metadata || {},
      this.methodInfoGetPublicProjectFromOldById,
      callback);
  }

  methodInfoGetPublicMapPartFromOldById = new grpcWeb.AbstractClientBase.MethodInfo(
    MapPart,
    (request: common_pb.Id) => {
      return request.serializeBinary();
    },
    MapPart.deserializeBinary
  );

  getPublicMapPartFromOldById(
    request: common_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MapPart) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ProjectService/GetPublicMapPartFromOldById',
      request,
      metadata || {},
      this.methodInfoGetPublicMapPartFromOldById,
      callback);
  }

  methodInfoGetUserOldProjects = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Ids,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    common_pb.Ids.deserializeBinary
  );

  getUserOldProjects(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Ids) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ProjectService/GetUserOldProjects',
      request,
      metadata || {},
      this.methodInfoGetUserOldProjects,
      callback);
  }

  methodInfoGetProjectFromOldById = new grpcWeb.AbstractClientBase.MethodInfo(
    Project,
    (request: common_pb.Id) => {
      return request.serializeBinary();
    },
    Project.deserializeBinary
  );

  getProjectFromOldById(
    request: common_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Project) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ProjectService/GetProjectFromOldById',
      request,
      metadata || {},
      this.methodInfoGetProjectFromOldById,
      callback);
  }

  methodInfoGetMapPartFromOldById = new grpcWeb.AbstractClientBase.MethodInfo(
    MapPart,
    (request: common_pb.Id) => {
      return request.serializeBinary();
    },
    MapPart.deserializeBinary
  );

  getMapPartFromOldById(
    request: common_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MapPart) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ProjectService/GetMapPartFromOldById',
      request,
      metadata || {},
      this.methodInfoGetMapPartFromOldById,
      callback);
  }

  methodInfoGetOldProjects = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Ids,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    common_pb.Ids.deserializeBinary
  );

  getOldProjects(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Ids) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ProjectService/GetOldProjects',
      request,
      metadata || {},
      this.methodInfoGetOldProjects,
      callback);
  }

  methodInfoGetThemeLayerFromOldById = new grpcWeb.AbstractClientBase.MethodInfo(
    ThemeLayer,
    (request: ProjectThemeLayerId) => {
      return request.serializeBinary();
    },
    ThemeLayer.deserializeBinary
  );

  getThemeLayerFromOldById(
    request: ProjectThemeLayerId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ThemeLayer) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ProjectService/GetThemeLayerFromOldById',
      request,
      metadata || {},
      this.methodInfoGetThemeLayerFromOldById,
      callback);
  }

  methodInfoGetThemeLayerDescriptionsFromOld = new grpcWeb.AbstractClientBase.MethodInfo(
    ThemeLayerDescriptions,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    ThemeLayerDescriptions.deserializeBinary
  );

  getThemeLayerDescriptionsFromOld(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ThemeLayerDescriptions) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ProjectService/GetThemeLayerDescriptionsFromOld',
      request,
      metadata || {},
      this.methodInfoGetThemeLayerDescriptionsFromOld,
      callback);
  }

  methodInfoGetThemeLayersFromOld = new grpcWeb.AbstractClientBase.MethodInfo(
    ThemeLayers,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    ThemeLayers.deserializeBinary
  );

  getThemeLayersFromOld(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ThemeLayers) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ProjectService/GetThemeLayersFromOld',
      request,
      metadata || {},
      this.methodInfoGetThemeLayersFromOld,
      callback);
  }

}

