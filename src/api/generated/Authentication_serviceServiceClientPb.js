"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */
exports.__esModule = true;
// GENERATED CODE -- DO NOT EDIT!
var grpcWeb = require("grpc-web");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var authentication_service_pb_1 = require("./authentication_service_pb");
var AuthenticationServiceClient = /** @class */ (function () {
    function AuthenticationServiceClient(hostname, credentials, options) {
        this.methodInfoOAuthToken = new grpcWeb.AbstractClientBase.MethodInfo(authentication_service_pb_1.AuthenticationResponse, function (request) {
            return request.serializeBinary();
        }, authentication_service_pb_1.AuthenticationResponse.deserializeBinary);
        this.methodInfoOAuthLogout = new grpcWeb.AbstractClientBase.MethodInfo(google_protobuf_empty_pb.Empty, function (request) {
            return request.serializeBinary();
        }, google_protobuf_empty_pb.Empty.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    AuthenticationServiceClient.prototype.oAuthToken = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/service.AuthenticationService/OAuthToken', request, metadata || {}, this.methodInfoOAuthToken, callback);
    };
    AuthenticationServiceClient.prototype.oAuthLogout = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/service.AuthenticationService/OAuthLogout', request, metadata || {}, this.methodInfoOAuthLogout, callback);
    };
    return AuthenticationServiceClient;
}());
exports.AuthenticationServiceClient = AuthenticationServiceClient;
