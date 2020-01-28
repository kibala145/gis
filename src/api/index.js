/*eslint-disable*/
// import axios from 'axios';
/*import {AuthenticationRequest} from './generated/authentication_service_pb';
import {AuthenticationServiceClient} from './generated/Authentication_serviceServiceClientPb';*/
import {ProjectServiceClient} from './generated/Project_serviceServiceClientPb'
import {Empty} from './generated/google/protobuf/empty_pb'
// import {ProjectServiceClient} from './generated/Project_serviceServiceClientPb'

export async function getProjects() {
  /*const req = new AuthenticationRequest();
  req.setUsername('admin')
  req.setPassword('admincgis')
  const client = new AuthenticationServiceClient('http://localhost:8080')
  client.oAuthToken(req, {}, (e, res) => {
    debugger
    e
    res
  })*/
  const req = new Empty();
  const client = new ProjectServiceClient('http://localhost:8080');
  debugger
  client.getPublicUserOldProjects(req, {}, (err, res) => {
    res
    err
    debugger
  })
}