/*eslint-disable*/

/*Grpc get projects remote function demo implementation*/
/*import {ProjectServiceClient} from './generated/Project_serviceServiceClientPb'
import {Empty} from './generated/google/protobuf/empty_pb'

export function getProjects() {
  return new Promise((resolve, reject) => {
    const req = new Empty();
    const client = new ProjectServiceClient('http://localhost:8080');
    client.getPublicUserOldProjects(req, {}, (err, res) => {
      if (!err) resolve(res.toObject().idsList)
      else reject(err)
    })
  })
}*/

