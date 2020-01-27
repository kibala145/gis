/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';

import {
  ExampleRequest,
  ExampleResponse} from './example_service_pb';

export class ExampleServiceClient {
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

  methodInfoPublicExample = new grpcWeb.AbstractClientBase.MethodInfo(
    ExampleResponse,
    (request: ExampleRequest) => {
      return request.serializeBinary();
    },
    ExampleResponse.deserializeBinary
  );

  publicExample(
    request: ExampleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExampleResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ExampleService/PublicExample',
      request,
      metadata || {},
      this.methodInfoPublicExample,
      callback);
  }

  methodInfoExample = new grpcWeb.AbstractClientBase.MethodInfo(
    ExampleResponse,
    (request: ExampleRequest) => {
      return request.serializeBinary();
    },
    ExampleResponse.deserializeBinary
  );

  example(
    request: ExampleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExampleResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.ExampleService/Example',
      request,
      metadata || {},
      this.methodInfoExample,
      callback);
  }

}

