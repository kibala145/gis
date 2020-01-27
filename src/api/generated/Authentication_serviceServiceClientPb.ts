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

import {
  AuthenticationRequest,
  AuthenticationResponse} from './authentication_service_pb';

export class AuthenticationServiceClient {
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

  methodInfoOAuthToken = new grpcWeb.AbstractClientBase.MethodInfo(
    AuthenticationResponse,
    (request: AuthenticationRequest) => {
      return request.serializeBinary();
    },
    AuthenticationResponse.deserializeBinary
  );

  oAuthToken(
    request: AuthenticationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AuthenticationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.AuthenticationService/OAuthToken',
      request,
      metadata || {},
      this.methodInfoOAuthToken,
      callback);
  }

  methodInfoOAuthLogout = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  oAuthLogout(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.AuthenticationService/OAuthLogout',
      request,
      metadata || {},
      this.methodInfoOAuthLogout,
      callback);
  }

}

