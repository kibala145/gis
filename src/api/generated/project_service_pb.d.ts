import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as protoc$gen$swagger_options_annotations_pb from './protoc-gen-swagger/options/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as common_pb from './common_pb';

export class Project extends jspb.Message {
  getProjectTitle(): string;
  setProjectTitle(value: string): void;

  getProjectIcon(): string;
  setProjectIcon(value: string): void;

  getMapPart(): MapPart | undefined;
  setMapPart(value?: MapPart): void;
  hasMapPart(): boolean;
  clearMapPart(): void;

  getApplicationPart(): ApplicationPart | undefined;
  setApplicationPart(value?: ApplicationPart): void;
  hasApplicationPart(): boolean;
  clearApplicationPart(): void;

  getPortalActionsList(): Array<PortalAction>;
  setPortalActionsList(value: Array<PortalAction>): void;
  clearPortalActionsList(): void;
  addPortalActions(value?: PortalAction, index?: number): PortalAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    projectTitle: string,
    projectIcon: string,
    mapPart?: MapPart.AsObject,
    applicationPart?: ApplicationPart.AsObject,
    portalActionsList: Array<PortalAction.AsObject>,
  }
}

export class MapPart extends jspb.Message {
  getMapPositioning(): MapPositioning | undefined;
  setMapPositioning(value?: MapPositioning): void;
  hasMapPositioning(): boolean;
  clearMapPositioning(): void;

  getGoogleAnalyticsId(): string;
  setGoogleAnalyticsId(value: string): void;

  getYandexMetrikaId(): string;
  setYandexMetrikaId(value: string): void;

  getBaseSrid(): string;
  setBaseSrid(value: string): void;

  getSearchOnlyVisible(): boolean;
  setSearchOnlyVisible(value: boolean): void;

  getThemeGroupsList(): Array<ThemeGroup>;
  setThemeGroupsList(value: Array<ThemeGroup>): void;
  clearThemeGroupsList(): void;
  addThemeGroups(value?: ThemeGroup, index?: number): ThemeGroup;

  getCountry(): string;
  setCountry(value: string): void;

  getSpatialServersList(): Array<SpatialServer>;
  setSpatialServersList(value: Array<SpatialServer>): void;
  clearSpatialServersList(): void;
  addSpatialServers(value?: SpatialServer, index?: number): SpatialServer;

  getSearchEngines(): SearchEngines | undefined;
  setSearchEngines(value?: SearchEngines): void;
  hasSearchEngines(): boolean;
  clearSearchEngines(): void;

  getGeolocation(): boolean;
  setGeolocation(value: boolean): void;

  getCadastrePrefix(): string;
  setCadastrePrefix(value: string): void;

  getTimeSeriesList(): Array<TemporalThemeLayer>;
  setTimeSeriesList(value: Array<TemporalThemeLayer>): void;
  clearTimeSeriesList(): void;
  addTimeSeries(value?: TemporalThemeLayer, index?: number): TemporalThemeLayer;

  getSelectionStyle(): SelectionStyle | undefined;
  setSelectionStyle(value?: SelectionStyle): void;
  hasSelectionStyle(): boolean;
  clearSelectionStyle(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapPart.AsObject;
  static toObject(includeInstance: boolean, msg: MapPart): MapPart.AsObject;
  static serializeBinaryToWriter(message: MapPart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapPart;
  static deserializeBinaryFromReader(message: MapPart, reader: jspb.BinaryReader): MapPart;
}

export namespace MapPart {
  export type AsObject = {
    mapPositioning?: MapPositioning.AsObject,
    googleAnalyticsId: string,
    yandexMetrikaId: string,
    baseSrid: string,
    searchOnlyVisible: boolean,
    themeGroupsList: Array<ThemeGroup.AsObject>,
    country: string,
    spatialServersList: Array<SpatialServer.AsObject>,
    searchEngines?: SearchEngines.AsObject,
    geolocation: boolean,
    cadastrePrefix: string,
    timeSeriesList: Array<TemporalThemeLayer.AsObject>,
    selectionStyle?: SelectionStyle.AsObject,
  }
}

export class MapPositioning extends jspb.Message {
  getCenterLat(): number;
  setCenterLat(value: number): void;

  getCenterLng(): number;
  setCenterLng(value: number): void;

  getZoom(): number;
  setZoom(value: number): void;

  getNorthEastLat(): number;
  setNorthEastLat(value: number): void;

  getNorthEastLng(): number;
  setNorthEastLng(value: number): void;

  getSouthWestLat(): number;
  setSouthWestLat(value: number): void;

  getSouthWestLng(): number;
  setSouthWestLng(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapPositioning.AsObject;
  static toObject(includeInstance: boolean, msg: MapPositioning): MapPositioning.AsObject;
  static serializeBinaryToWriter(message: MapPositioning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapPositioning;
  static deserializeBinaryFromReader(message: MapPositioning, reader: jspb.BinaryReader): MapPositioning;
}

export namespace MapPositioning {
  export type AsObject = {
    centerLat: number,
    centerLng: number,
    zoom: number,
    northEastLat: number,
    northEastLng: number,
    southWestLat: number,
    southWestLng: number,
  }
}

export class ThemeGroup extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getThemeGroupsList(): Array<ThemeGroup>;
  setThemeGroupsList(value: Array<ThemeGroup>): void;
  clearThemeGroupsList(): void;
  addThemeGroups(value?: ThemeGroup, index?: number): ThemeGroup;

  getThemeLayersList(): Array<ThemeLayer>;
  setThemeLayersList(value: Array<ThemeLayer>): void;
  clearThemeLayersList(): void;
  addThemeLayers(value?: ThemeLayer, index?: number): ThemeLayer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThemeGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ThemeGroup): ThemeGroup.AsObject;
  static serializeBinaryToWriter(message: ThemeGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThemeGroup;
  static deserializeBinaryFromReader(message: ThemeGroup, reader: jspb.BinaryReader): ThemeGroup;
}

export namespace ThemeGroup {
  export type AsObject = {
    id: string,
    label: string,
    themeGroupsList: Array<ThemeGroup.AsObject>,
    themeLayersList: Array<ThemeLayer.AsObject>,
  }
}

export class ThemeLayer extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getThemeServerOptions(): ThemeServerOptions | undefined;
  setThemeServerOptions(value?: ThemeServerOptions): void;
  hasThemeServerOptions(): boolean;
  clearThemeServerOptions(): void;

  getSearchable(): boolean;
  setSearchable(value: boolean): void;

  getEditable(): boolean;
  setEditable(value: boolean): void;

  getExportable(): boolean;
  setExportable(value: boolean): void;

  getVisible(): boolean;
  setVisible(value: boolean): void;

  getIsWfs(): boolean;
  setIsWfs(value: boolean): void;

  getHasData(): boolean;
  setHasData(value: boolean): void;

  getQuickSearch(): boolean;
  setQuickSearch(value: boolean): void;

  getIsTime(): boolean;
  setIsTime(value: boolean): void;

  getMapEngines(): MapEngines | undefined;
  setMapEngines(value?: MapEngines): void;
  hasMapEngines(): boolean;
  clearMapEngines(): void;

  getName(): string;
  setName(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTime(): string;
  setTime(value: string): void;

  getStyle(): string;
  setStyle(value: string): void;

  getInfoClickTargetUnit(): string;
  setInfoClickTargetUnit(value: string): void;

  getInfoClickTargetSize(): number;
  setInfoClickTargetSize(value: number): void;

  getShowOnMapZoom(): number;
  setShowOnMapZoom(value: number): void;

  getTileSize(): number;
  setTileSize(value: number): void;

  getMinScale(): number;
  setMinScale(value: number): void;

  getMaxScale(): number;
  setMaxScale(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  getLegendIconUrl(): string;
  setLegendIconUrl(value: string): void;

  getServerUrl(): string;
  setServerUrl(value: string): void;

  getWmsServer(): string;
  setWmsServer(value: string): void;

  getDataSource(): string;
  setDataSource(value: string): void;

  getMapViewerDataSource(): string;
  setMapViewerDataSource(value: string): void;

  getSchemeName(): string;
  setSchemeName(value: string): void;

  getSrid(): string;
  setSrid(value: string): void;

  getGeometryTable(): string;
  setGeometryTable(value: string): void;

  getGeometryColumn(): string;
  setGeometryColumn(value: string): void;

  getGeometryIdColumn(): string;
  setGeometryIdColumn(value: string): void;

  getGeometryTableSequencer(): string;
  setGeometryTableSequencer(value: string): void;

  getGeometryType(): string;
  setGeometryType(value: string): void;

  getGeometryDimension(): number;
  setGeometryDimension(value: number): void;

  getAttributeTable(): string;
  setAttributeTable(value: string): void;

  getAttributeIdColumn(): string;
  setAttributeIdColumn(value: string): void;

  getGeometryAttributeLinkTable(): string;
  setGeometryAttributeLinkTable(value: string): void;

  getGeometryAttributeLinkColumn(): string;
  setGeometryAttributeLinkColumn(value: string): void;

  getLinkTableGeometryIdColumn(): string;
  setLinkTableGeometryIdColumn(value: string): void;

  getLinkTableAttributeIdColumn(): string;
  setLinkTableAttributeIdColumn(value: string): void;

  getPortalActionsList(): Array<PortalAction>;
  setPortalActionsList(value: Array<PortalAction>): void;
  clearPortalActionsList(): void;
  addPortalActions(value?: PortalAction, index?: number): PortalAction;

  getThemeInfoFieldsList(): Array<ThemeInfoField>;
  setThemeInfoFieldsList(value: Array<ThemeInfoField>): void;
  clearThemeInfoFieldsList(): void;
  addThemeInfoFields(value?: ThemeInfoField, index?: number): ThemeInfoField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThemeLayer.AsObject;
  static toObject(includeInstance: boolean, msg: ThemeLayer): ThemeLayer.AsObject;
  static serializeBinaryToWriter(message: ThemeLayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThemeLayer;
  static deserializeBinaryFromReader(message: ThemeLayer, reader: jspb.BinaryReader): ThemeLayer;
}

export namespace ThemeLayer {
  export type AsObject = {
    id: string,
    themeServerOptions?: ThemeServerOptions.AsObject,
    searchable: boolean,
    editable: boolean,
    exportable: boolean,
    visible: boolean,
    isWfs: boolean,
    hasData: boolean,
    quickSearch: boolean,
    isTime: boolean,
    mapEngines?: MapEngines.AsObject,
    name: string,
    label: string,
    description: string,
    time: string,
    style: string,
    infoClickTargetUnit: string,
    infoClickTargetSize: number,
    showOnMapZoom: number,
    tileSize: number,
    minScale: number,
    maxScale: number,
    index: number,
    legendIconUrl: string,
    serverUrl: string,
    wmsServer: string,
    dataSource: string,
    mapViewerDataSource: string,
    schemeName: string,
    srid: string,
    geometryTable: string,
    geometryColumn: string,
    geometryIdColumn: string,
    geometryTableSequencer: string,
    geometryType: string,
    geometryDimension: number,
    attributeTable: string,
    attributeIdColumn: string,
    geometryAttributeLinkTable: string,
    geometryAttributeLinkColumn: string,
    linkTableGeometryIdColumn: string,
    linkTableAttributeIdColumn: string,
    portalActionsList: Array<PortalAction.AsObject>,
    themeInfoFieldsList: Array<ThemeInfoField.AsObject>,
  }
}

export class ThemeServerOptions extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThemeServerOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ThemeServerOptions): ThemeServerOptions.AsObject;
  static serializeBinaryToWriter(message: ThemeServerOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThemeServerOptions;
  static deserializeBinaryFromReader(message: ThemeServerOptions, reader: jspb.BinaryReader): ThemeServerOptions;
}

export namespace ThemeServerOptions {
  export type AsObject = {
    name: string,
    type: string,
  }
}

export class MapEngines extends jspb.Message {
  getLeaflet(): boolean;
  setLeaflet(value: boolean): void;

  getCesium(): boolean;
  setCesium(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapEngines.AsObject;
  static toObject(includeInstance: boolean, msg: MapEngines): MapEngines.AsObject;
  static serializeBinaryToWriter(message: MapEngines, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapEngines;
  static deserializeBinaryFromReader(message: MapEngines, reader: jspb.BinaryReader): MapEngines;
}

export namespace MapEngines {
  export type AsObject = {
    leaflet: boolean,
    cesium: boolean,
  }
}

export class PortalAction extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getTooltip(): string;
  setTooltip(value: string): void;

  getFunction(): string;
  setFunction(value: string): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  getIconType(): string;
  setIconType(value: string): void;

  getUserGroupsList(): Array<string>;
  setUserGroupsList(value: Array<string>): void;
  clearUserGroupsList(): void;
  addUserGroups(value: string, index?: number): void;

  getOnScreen(): boolean;
  setOnScreen(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortalAction.AsObject;
  static toObject(includeInstance: boolean, msg: PortalAction): PortalAction.AsObject;
  static serializeBinaryToWriter(message: PortalAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortalAction;
  static deserializeBinaryFromReader(message: PortalAction, reader: jspb.BinaryReader): PortalAction;
}

export namespace PortalAction {
  export type AsObject = {
    id: string,
    name: string,
    tooltip: string,
    pb_function: string,
    platform: string,
    icon: string,
    iconType: string,
    userGroupsList: Array<string>,
    onScreen: boolean,
  }
}

export class ThemeInfoField extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getColumn(): string;
  setColumn(value: string): void;

  getColumnType(): string;
  setColumnType(value: string): void;

  getControlType(): string;
  setControlType(value: string): void;

  getReferenceTable(): string;
  setReferenceTable(value: string): void;

  getReferenceIdColumn(): string;
  setReferenceIdColumn(value: string): void;

  getReferenceDisplayColumn(): string;
  setReferenceDisplayColumn(value: string): void;

  getQuickSearch(): boolean;
  setQuickSearch(value: boolean): void;

  getIsRequired(): boolean;
  setIsRequired(value: boolean): void;

  getIsReadOnly(): boolean;
  setIsReadOnly(value: boolean): void;

  getPos(): number;
  setPos(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThemeInfoField.AsObject;
  static toObject(includeInstance: boolean, msg: ThemeInfoField): ThemeInfoField.AsObject;
  static serializeBinaryToWriter(message: ThemeInfoField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThemeInfoField;
  static deserializeBinaryFromReader(message: ThemeInfoField, reader: jspb.BinaryReader): ThemeInfoField;
}

export namespace ThemeInfoField {
  export type AsObject = {
    id: string,
    label: string,
    column: string,
    columnType: string,
    controlType: string,
    referenceTable: string,
    referenceIdColumn: string,
    referenceDisplayColumn: string,
    quickSearch: boolean,
    isRequired: boolean,
    isReadOnly: boolean,
    pos: number,
  }
}

export class TemporalThemeLayer extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getDataSource(): string;
  setDataSource(value: string): void;

  getSchemeName(): string;
  setSchemeName(value: string): void;

  getGeometryTable(): string;
  setGeometryTable(value: string): void;

  getGeometryIdColumn(): string;
  setGeometryIdColumn(value: string): void;

  getGeometryColumn(): string;
  setGeometryColumn(value: string): void;

  getTemporalStartColumn(): string;
  setTemporalStartColumn(value: string): void;

  getTemporalEndColumn(): string;
  setTemporalEndColumn(value: string): void;

  getTimeSeriesStart(): string;
  setTimeSeriesStart(value: string): void;

  getTimeSeriesEnd(): string;
  setTimeSeriesEnd(value: string): void;

  getSelectionStyle(): SelectionStyle | undefined;
  setSelectionStyle(value?: SelectionStyle): void;
  hasSelectionStyle(): boolean;
  clearSelectionStyle(): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAttributesList(): Array<TemporalThemeAttribute>;
  setAttributesList(value: Array<TemporalThemeAttribute>): void;
  clearAttributesList(): void;
  addAttributes(value?: TemporalThemeAttribute, index?: number): TemporalThemeAttribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemporalThemeLayer.AsObject;
  static toObject(includeInstance: boolean, msg: TemporalThemeLayer): TemporalThemeLayer.AsObject;
  static serializeBinaryToWriter(message: TemporalThemeLayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemporalThemeLayer;
  static deserializeBinaryFromReader(message: TemporalThemeLayer, reader: jspb.BinaryReader): TemporalThemeLayer;
}

export namespace TemporalThemeLayer {
  export type AsObject = {
    id: string,
    label: string,
    dataSource: string,
    schemeName: string,
    geometryTable: string,
    geometryIdColumn: string,
    geometryColumn: string,
    temporalStartColumn: string,
    temporalEndColumn: string,
    timeSeriesStart: string,
    timeSeriesEnd: string,
    selectionStyle?: SelectionStyle.AsObject,
    description: string,
    attributesList: Array<TemporalThemeAttribute.AsObject>,
  }
}

export class TemporalThemeAttribute extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemporalThemeAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: TemporalThemeAttribute): TemporalThemeAttribute.AsObject;
  static serializeBinaryToWriter(message: TemporalThemeAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemporalThemeAttribute;
  static deserializeBinaryFromReader(message: TemporalThemeAttribute, reader: jspb.BinaryReader): TemporalThemeAttribute;
}

export namespace TemporalThemeAttribute {
  export type AsObject = {
    name: string,
    label: string,
  }
}

export class SelectionStyle extends jspb.Message {
  getStroke(): boolean;
  setStroke(value: boolean): void;

  getColor(): string;
  setColor(value: string): void;

  getWeight(): number;
  setWeight(value: number): void;

  getOpacity(): number;
  setOpacity(value: number): void;

  getLineCap(): string;
  setLineCap(value: string): void;

  getLineJoin(): string;
  setLineJoin(value: string): void;

  getDashArray(): string;
  setDashArray(value: string): void;

  getDashOffset(): string;
  setDashOffset(value: string): void;

  getFill(): boolean;
  setFill(value: boolean): void;

  getFillColor(): string;
  setFillColor(value: string): void;

  getFillOpacity(): number;
  setFillOpacity(value: number): void;

  getFillRule(): string;
  setFillRule(value: string): void;

  getBubblingMouseEvents(): boolean;
  setBubblingMouseEvents(value: boolean): void;

  getInteractive(): boolean;
  setInteractive(value: boolean): void;

  getPane(): string;
  setPane(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SelectionStyle.AsObject;
  static toObject(includeInstance: boolean, msg: SelectionStyle): SelectionStyle.AsObject;
  static serializeBinaryToWriter(message: SelectionStyle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SelectionStyle;
  static deserializeBinaryFromReader(message: SelectionStyle, reader: jspb.BinaryReader): SelectionStyle;
}

export namespace SelectionStyle {
  export type AsObject = {
    stroke: boolean,
    color: string,
    weight: number,
    opacity: number,
    lineCap: string,
    lineJoin: string,
    dashArray: string,
    dashOffset: string,
    fill: boolean,
    fillColor: string,
    fillOpacity: number,
    fillRule: string,
    bubblingMouseEvents: boolean,
    interactive: boolean,
    pane: string,
  }
}

export class SpatialServer extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getUri(): string;
  setUri(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getIsSecure(): boolean;
  setIsSecure(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpatialServer.AsObject;
  static toObject(includeInstance: boolean, msg: SpatialServer): SpatialServer.AsObject;
  static serializeBinaryToWriter(message: SpatialServer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpatialServer;
  static deserializeBinaryFromReader(message: SpatialServer, reader: jspb.BinaryReader): SpatialServer;
}

export namespace SpatialServer {
  export type AsObject = {
    name: string,
    uri: string,
    username: string,
    password: string,
    isSecure: boolean,
  }
}

export class SearchEngines extends jspb.Message {
  getYandex(): boolean;
  setYandex(value: boolean): void;

  getRosreestr(): boolean;
  setRosreestr(value: boolean): void;

  getGoogle(): boolean;
  setGoogle(value: boolean): void;

  getOsm(): boolean;
  setOsm(value: boolean): void;

  getQuickSearch(): boolean;
  setQuickSearch(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchEngines.AsObject;
  static toObject(includeInstance: boolean, msg: SearchEngines): SearchEngines.AsObject;
  static serializeBinaryToWriter(message: SearchEngines, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchEngines;
  static deserializeBinaryFromReader(message: SearchEngines, reader: jspb.BinaryReader): SearchEngines;
}

export namespace SearchEngines {
  export type AsObject = {
    yandex: boolean,
    rosreestr: boolean,
    google: boolean,
    osm: boolean,
    quickSearch: boolean,
  }
}

export class ApplicationPart extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getApplicationGroupsList(): Array<ApplicationGroup>;
  setApplicationGroupsList(value: Array<ApplicationGroup>): void;
  clearApplicationGroupsList(): void;
  addApplicationGroups(value?: ApplicationGroup, index?: number): ApplicationGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationPart.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationPart): ApplicationPart.AsObject;
  static serializeBinaryToWriter(message: ApplicationPart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationPart;
  static deserializeBinaryFromReader(message: ApplicationPart, reader: jspb.BinaryReader): ApplicationPart;
}

export namespace ApplicationPart {
  export type AsObject = {
    path: string,
    applicationGroupsList: Array<ApplicationGroup.AsObject>,
  }
}

export class ApplicationGroup extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getApplicationModulesList(): Array<ApplicationModule>;
  setApplicationModulesList(value: Array<ApplicationModule>): void;
  clearApplicationModulesList(): void;
  addApplicationModules(value?: ApplicationModule, index?: number): ApplicationModule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationGroup): ApplicationGroup.AsObject;
  static serializeBinaryToWriter(message: ApplicationGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationGroup;
  static deserializeBinaryFromReader(message: ApplicationGroup, reader: jspb.BinaryReader): ApplicationGroup;
}

export namespace ApplicationGroup {
  export type AsObject = {
    id: string,
    label: string,
    applicationModulesList: Array<ApplicationModule.AsObject>,
  }
}

export class ApplicationModule extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getCss(): string;
  setCss(value: string): void;

  getInitEvent(): string;
  setInitEvent(value: string): void;

  getToCache(): boolean;
  setToCache(value: boolean): void;

  getJs(): string;
  setJs(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationModule.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationModule): ApplicationModule.AsObject;
  static serializeBinaryToWriter(message: ApplicationModule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationModule;
  static deserializeBinaryFromReader(message: ApplicationModule, reader: jspb.BinaryReader): ApplicationModule;
}

export namespace ApplicationModule {
  export type AsObject = {
    id: string,
    label: string,
    css: string,
    initEvent: string,
    toCache: boolean,
    js: string,
  }
}

export class ThemeLayerDescriptions extends jspb.Message {
  getThemeLayerDescriptionsList(): Array<ThemeLayerDescription>;
  setThemeLayerDescriptionsList(value: Array<ThemeLayerDescription>): void;
  clearThemeLayerDescriptionsList(): void;
  addThemeLayerDescriptions(value?: ThemeLayerDescription, index?: number): ThemeLayerDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThemeLayerDescriptions.AsObject;
  static toObject(includeInstance: boolean, msg: ThemeLayerDescriptions): ThemeLayerDescriptions.AsObject;
  static serializeBinaryToWriter(message: ThemeLayerDescriptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThemeLayerDescriptions;
  static deserializeBinaryFromReader(message: ThemeLayerDescriptions, reader: jspb.BinaryReader): ThemeLayerDescriptions;
}

export namespace ThemeLayerDescriptions {
  export type AsObject = {
    themeLayerDescriptionsList: Array<ThemeLayerDescription.AsObject>,
  }
}

export class ThemeLayerDescription extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getProjectName(): string;
  setProjectName(value: string): void;

  getThemeId(): string;
  setThemeId(value: string): void;

  getThemeName(): string;
  setThemeName(value: string): void;

  getThemeDescription(): string;
  setThemeDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThemeLayerDescription.AsObject;
  static toObject(includeInstance: boolean, msg: ThemeLayerDescription): ThemeLayerDescription.AsObject;
  static serializeBinaryToWriter(message: ThemeLayerDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThemeLayerDescription;
  static deserializeBinaryFromReader(message: ThemeLayerDescription, reader: jspb.BinaryReader): ThemeLayerDescription;
}

export namespace ThemeLayerDescription {
  export type AsObject = {
    projectId: string,
    projectName: string,
    themeId: string,
    themeName: string,
    themeDescription: string,
  }
}

export class ThemeLayers extends jspb.Message {
  getThemeLayersList(): Array<ThemeLayerResponse>;
  setThemeLayersList(value: Array<ThemeLayerResponse>): void;
  clearThemeLayersList(): void;
  addThemeLayers(value?: ThemeLayerResponse, index?: number): ThemeLayerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThemeLayers.AsObject;
  static toObject(includeInstance: boolean, msg: ThemeLayers): ThemeLayers.AsObject;
  static serializeBinaryToWriter(message: ThemeLayers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThemeLayers;
  static deserializeBinaryFromReader(message: ThemeLayers, reader: jspb.BinaryReader): ThemeLayers;
}

export namespace ThemeLayers {
  export type AsObject = {
    themeLayersList: Array<ThemeLayerResponse.AsObject>,
  }
}

export class ThemeLayerResponse extends jspb.Message {
  getProjectName(): string;
  setProjectName(value: string): void;

  getThemeLayer(): ThemeLayer | undefined;
  setThemeLayer(value?: ThemeLayer): void;
  hasThemeLayer(): boolean;
  clearThemeLayer(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThemeLayerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ThemeLayerResponse): ThemeLayerResponse.AsObject;
  static serializeBinaryToWriter(message: ThemeLayerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThemeLayerResponse;
  static deserializeBinaryFromReader(message: ThemeLayerResponse, reader: jspb.BinaryReader): ThemeLayerResponse;
}

export namespace ThemeLayerResponse {
  export type AsObject = {
    projectName: string,
    themeLayer?: ThemeLayer.AsObject,
  }
}

export class ProjectThemeLayerId extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getThemeLayerId(): string;
  setThemeLayerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectThemeLayerId.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectThemeLayerId): ProjectThemeLayerId.AsObject;
  static serializeBinaryToWriter(message: ProjectThemeLayerId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectThemeLayerId;
  static deserializeBinaryFromReader(message: ProjectThemeLayerId, reader: jspb.BinaryReader): ProjectThemeLayerId;
}

export namespace ProjectThemeLayerId {
  export type AsObject = {
    projectId: string,
    themeLayerId: string,
  }
}

export class OldProject extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getProject(): string;
  setProject(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  getAnalytics(): string;
  setAnalytics(value: string): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  getIsInvalid(): boolean;
  setIsInvalid(value: boolean): void;

  getIsTemplate(): boolean;
  setIsTemplate(value: boolean): void;

  getHasApi(): boolean;
  setHasApi(value: boolean): void;

  getIndex(): number;
  setIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OldProject.AsObject;
  static toObject(includeInstance: boolean, msg: OldProject): OldProject.AsObject;
  static serializeBinaryToWriter(message: OldProject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OldProject;
  static deserializeBinaryFromReader(message: OldProject, reader: jspb.BinaryReader): OldProject;
}

export namespace OldProject {
  export type AsObject = {
    id: string,
    name: string,
    project: string,
    locale: string,
    analytics: string,
    isDefault: boolean,
    isInvalid: boolean,
    isTemplate: boolean,
    hasApi: boolean,
    index: number,
  }
}

