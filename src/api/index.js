import axios from 'axios';

export async function getProjects() {
  debugger
  const res = await axios.get('http://geoportal.gov39.ru/cgis-portal/rest/anonymous/projects/');
  res
}