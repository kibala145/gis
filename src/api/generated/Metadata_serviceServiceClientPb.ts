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
  DataSources,
  GeometryTables,
  MapViewerStyles,
  MapViewerThemes,
  MetadataServiceRequest,
  TableMetadata} from './metadata_service_pb';

export class MetadataServiceClient {
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

  methodInfoGetDataSourceReadOnlyTables = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Strings,
    (request: MetadataServiceRequest) => {
      return request.serializeBinary();
    },
    common_pb.Strings.deserializeBinary
  );

  getDataSourceReadOnlyTables(
    request: MetadataServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Strings) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.MetadataService/GetDataSourceReadOnlyTables',
      request,
      metadata || {},
      this.methodInfoGetDataSourceReadOnlyTables,
      callback);
  }

  methodInfoGetDataSourceSchemes = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Strings,
    (request: MetadataServiceRequest) => {
      return request.serializeBinary();
    },
    common_pb.Strings.deserializeBinary
  );

  getDataSourceSchemes(
    request: MetadataServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Strings) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.MetadataService/GetDataSourceSchemes',
      request,
      metadata || {},
      this.methodInfoGetDataSourceSchemes,
      callback);
  }

  methodInfoGetSchemeReadOnlyTables = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Strings,
    (request: MetadataServiceRequest) => {
      return request.serializeBinary();
    },
    common_pb.Strings.deserializeBinary
  );

  getSchemeReadOnlyTables(
    request: MetadataServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Strings) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.MetadataService/GetSchemeReadOnlyTables',
      request,
      metadata || {},
      this.methodInfoGetSchemeReadOnlyTables,
      callback);
  }

  methodInfoGetSchemeReadWriteTables = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Strings,
    (request: MetadataServiceRequest) => {
      return request.serializeBinary();
    },
    common_pb.Strings.deserializeBinary
  );

  getSchemeReadWriteTables(
    request: MetadataServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Strings) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.MetadataService/GetSchemeReadWriteTables',
      request,
      metadata || {},
      this.methodInfoGetSchemeReadWriteTables,
      callback);
  }

  methodInfoIsSchemeTableEditable = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Ok,
    (request: MetadataServiceRequest) => {
      return request.serializeBinary();
    },
    common_pb.Ok.deserializeBinary
  );

  isSchemeTableEditable(
    request: MetadataServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Ok) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.MetadataService/IsSchemeTableEditable',
      request,
      metadata || {},
      this.methodInfoIsSchemeTableEditable,
      callback);
  }

  methodInfoGetSchemeSequences = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Strings,
    (request: MetadataServiceRequest) => {
      return request.serializeBinary();
    },
    common_pb.Strings.deserializeBinary
  );

  getSchemeSequences(
    request: MetadataServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Strings) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.MetadataService/GetSchemeSequences',
      request,
      metadata || {},
      this.methodInfoGetSchemeSequences,
      callback);
  }

  methodInfoGetTableColumnsMetadata = new grpcWeb.AbstractClientBase.MethodInfo(
    TableMetadata,
    (request: MetadataServiceRequest) => {
      return request.serializeBinary();
    },
    TableMetadata.deserializeBinary
  );

  getTableColumnsMetadata(
    request: MetadataServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TableMetadata) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.MetadataService/GetTableColumnsMetadata',
      request,
      metadata || {},
      this.methodInfoGetTableColumnsMetadata,
      callback);
  }

  methodInfoGetSchemeGeometryTables = new grpcWeb.AbstractClientBase.MethodInfo(
    GeometryTables,
    (request: MetadataServiceRequest) => {
      return request.serializeBinary();
    },
    GeometryTables.deserializeBinary
  );

  getSchemeGeometryTables(
    request: MetadataServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GeometryTables) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.MetadataService/GetSchemeGeometryTables',
      request,
      metadata || {},
      this.methodInfoGetSchemeGeometryTables,
      callback);
  }

  methodInfoGetDataSourceMapViewerStyles = new grpcWeb.AbstractClientBase.MethodInfo(
    MapViewerStyles,
    (request: MetadataServiceRequest) => {
      return request.serializeBinary();
    },
    MapViewerStyles.deserializeBinary
  );

  getDataSourceMapViewerStyles(
    request: MetadataServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MapViewerStyles) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.MetadataService/GetDataSourceMapViewerStyles',
      request,
      metadata || {},
      this.methodInfoGetDataSourceMapViewerStyles,
      callback);
  }

  methodInfoGetDataSourceMapViewerThemes = new grpcWeb.AbstractClientBase.MethodInfo(
    MapViewerThemes,
    (request: MetadataServiceRequest) => {
      return request.serializeBinary();
    },
    MapViewerThemes.deserializeBinary
  );

  getDataSourceMapViewerThemes(
    request: MetadataServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MapViewerThemes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.MetadataService/GetDataSourceMapViewerThemes',
      request,
      metadata || {},
      this.methodInfoGetDataSourceMapViewerThemes,
      callback);
  }

  methodInfoGetDataSources = new grpcWeb.AbstractClientBase.MethodInfo(
    DataSources,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    DataSources.deserializeBinary
  );

  getDataSources(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DataSources) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.MetadataService/GetDataSources',
      request,
      metadata || {},
      this.methodInfoGetDataSources,
      callback);
  }

}

