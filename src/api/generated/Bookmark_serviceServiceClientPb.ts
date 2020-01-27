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
  Bookmark,
  Bookmarks} from './bookmark_service_pb';

export class BookmarkServiceClient {
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

  methodInfoCreateBookmark = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: Bookmark) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  createBookmark(
    request: Bookmark,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.BookmarkService/CreateBookmark',
      request,
      metadata || {},
      this.methodInfoCreateBookmark,
      callback);
  }

  methodInfoUpdateBookmark = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: Bookmark) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateBookmark(
    request: Bookmark,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.BookmarkService/UpdateBookmark',
      request,
      metadata || {},
      this.methodInfoUpdateBookmark,
      callback);
  }

  methodInfoDeleteBookmark = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: common_pb.Id) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteBookmark(
    request: common_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.BookmarkService/DeleteBookmark',
      request,
      metadata || {},
      this.methodInfoDeleteBookmark,
      callback);
  }

  methodInfoGetPublicUserBookmarks = new grpcWeb.AbstractClientBase.MethodInfo(
    Bookmarks,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    Bookmarks.deserializeBinary
  );

  getPublicUserBookmarks(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Bookmarks) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.BookmarkService/GetPublicUserBookmarks',
      request,
      metadata || {},
      this.methodInfoGetPublicUserBookmarks,
      callback);
  }

  methodInfoGetPublicBookmarkById = new grpcWeb.AbstractClientBase.MethodInfo(
    Bookmark,
    (request: common_pb.Id) => {
      return request.serializeBinary();
    },
    Bookmark.deserializeBinary
  );

  getPublicBookmarkById(
    request: common_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Bookmark) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.BookmarkService/GetPublicBookmarkById',
      request,
      metadata || {},
      this.methodInfoGetPublicBookmarkById,
      callback);
  }

  methodInfoGetUserBookmarks = new grpcWeb.AbstractClientBase.MethodInfo(
    Bookmarks,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    Bookmarks.deserializeBinary
  );

  getUserBookmarks(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Bookmarks) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.BookmarkService/GetUserBookmarks',
      request,
      metadata || {},
      this.methodInfoGetUserBookmarks,
      callback);
  }

  methodInfoGetBookmarkById = new grpcWeb.AbstractClientBase.MethodInfo(
    Bookmark,
    (request: common_pb.Id) => {
      return request.serializeBinary();
    },
    Bookmark.deserializeBinary
  );

  getBookmarkById(
    request: common_pb.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Bookmark) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/service.BookmarkService/GetBookmarkById',
      request,
      metadata || {},
      this.methodInfoGetBookmarkById,
      callback);
  }

}

