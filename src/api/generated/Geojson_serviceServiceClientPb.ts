/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as common_pb from './common_pb';

import {
  Feature,
  FeatureCollection} from './geojson_service_pb';

export class GeojsonServiceClient {
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

  methodInfoFeatureCollectionToExcel = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Bytes,
    (request: FeatureCollection) => {
      return request.serializeBinary();
    },
    common_pb.Bytes.deserializeBinary
  );

  featureCollectionToExcel(
    request: FeatureCollection,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Bytes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.GeojsonService/FeatureCollectionToExcel',
      request,
      metadata || {},
      this.methodInfoFeatureCollectionToExcel,
      callback);
  }

  methodInfoFeatureToExcel = new grpcWeb.AbstractClientBase.MethodInfo(
    common_pb.Bytes,
    (request: Feature) => {
      return request.serializeBinary();
    },
    common_pb.Bytes.deserializeBinary
  );

  featureToExcel(
    request: Feature,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_pb.Bytes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.GeojsonService/FeatureToExcel',
      request,
      metadata || {},
      this.methodInfoFeatureToExcel,
      callback);
  }

}

