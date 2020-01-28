"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */
exports.__esModule = true;
// GENERATED CODE -- DO NOT EDIT!
var grpcWeb = require("grpc-web");
var common_pb = require("./common_pb");
var project_service_pb_1 = require("./project_service_pb");
var ProjectServiceClient = /** @class */ (function () {
    function ProjectServiceClient(hostname, credentials, options) {
        this.methodInfoGetPublicUserOldProjects = new grpcWeb.AbstractClientBase.MethodInfo(common_pb.Ids, function (request) {
            return request.serializeBinary();
        }, common_pb.Ids.deserializeBinary);
        this.methodInfoGetPublicProjectFromOldById = new grpcWeb.AbstractClientBase.MethodInfo(project_service_pb_1.Project, function (request) {
            return request.serializeBinary();
        }, project_service_pb_1.Project.deserializeBinary);
        this.methodInfoGetPublicMapPartFromOldById = new grpcWeb.AbstractClientBase.MethodInfo(project_service_pb_1.MapPart, function (request) {
            return request.serializeBinary();
        }, project_service_pb_1.MapPart.deserializeBinary);
        this.methodInfoGetUserOldProjects = new grpcWeb.AbstractClientBase.MethodInfo(common_pb.Ids, function (request) {
            return request.serializeBinary();
        }, common_pb.Ids.deserializeBinary);
        this.methodInfoGetProjectFromOldById = new grpcWeb.AbstractClientBase.MethodInfo(project_service_pb_1.Project, function (request) {
            return request.serializeBinary();
        }, project_service_pb_1.Project.deserializeBinary);
        this.methodInfoGetMapPartFromOldById = new grpcWeb.AbstractClientBase.MethodInfo(project_service_pb_1.MapPart, function (request) {
            return request.serializeBinary();
        }, project_service_pb_1.MapPart.deserializeBinary);
        this.methodInfoGetOldProjects = new grpcWeb.AbstractClientBase.MethodInfo(common_pb.Ids, function (request) {
            return request.serializeBinary();
        }, common_pb.Ids.deserializeBinary);
        this.methodInfoGetThemeLayerFromOldById = new grpcWeb.AbstractClientBase.MethodInfo(project_service_pb_1.ThemeLayer, function (request) {
            return request.serializeBinary();
        }, project_service_pb_1.ThemeLayer.deserializeBinary);
        this.methodInfoGetThemeLayerDescriptionsFromOld = new grpcWeb.AbstractClientBase.MethodInfo(project_service_pb_1.ThemeLayerDescriptions, function (request) {
            return request.serializeBinary();
        }, project_service_pb_1.ThemeLayerDescriptions.deserializeBinary);
        this.methodInfoGetThemeLayersFromOld = new grpcWeb.AbstractClientBase.MethodInfo(project_service_pb_1.ThemeLayers, function (request) {
            return request.serializeBinary();
        }, project_service_pb_1.ThemeLayers.deserializeBinary);
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
    ProjectServiceClient.prototype.getPublicUserOldProjects = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/service.ProjectService/GetPublicUserOldProjects', request, metadata || {}, this.methodInfoGetPublicUserOldProjects, callback);
    };
    ProjectServiceClient.prototype.getPublicProjectFromOldById = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/service.ProjectService/GetPublicProjectFromOldById', request, metadata || {}, this.methodInfoGetPublicProjectFromOldById, callback);
    };
    ProjectServiceClient.prototype.getPublicMapPartFromOldById = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/service.ProjectService/GetPublicMapPartFromOldById', request, metadata || {}, this.methodInfoGetPublicMapPartFromOldById, callback);
    };
    ProjectServiceClient.prototype.getUserOldProjects = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/service.ProjectService/GetUserOldProjects', request, metadata || {}, this.methodInfoGetUserOldProjects, callback);
    };
    ProjectServiceClient.prototype.getProjectFromOldById = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/service.ProjectService/GetProjectFromOldById', request, metadata || {}, this.methodInfoGetProjectFromOldById, callback);
    };
    ProjectServiceClient.prototype.getMapPartFromOldById = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/service.ProjectService/GetMapPartFromOldById', request, metadata || {}, this.methodInfoGetMapPartFromOldById, callback);
    };
    ProjectServiceClient.prototype.getOldProjects = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/service.ProjectService/GetOldProjects', request, metadata || {}, this.methodInfoGetOldProjects, callback);
    };
    ProjectServiceClient.prototype.getThemeLayerFromOldById = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/service.ProjectService/GetThemeLayerFromOldById', request, metadata || {}, this.methodInfoGetThemeLayerFromOldById, callback);
    };
    ProjectServiceClient.prototype.getThemeLayerDescriptionsFromOld = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/service.ProjectService/GetThemeLayerDescriptionsFromOld', request, metadata || {}, this.methodInfoGetThemeLayerDescriptionsFromOld, callback);
    };
    ProjectServiceClient.prototype.getThemeLayersFromOld = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/service.ProjectService/GetThemeLayersFromOld', request, metadata || {}, this.methodInfoGetThemeLayersFromOld, callback);
    };
    return ProjectServiceClient;
}());
exports.ProjectServiceClient = ProjectServiceClient;
