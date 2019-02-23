import { Person } from '../models/person';
import { PersonDetail } from '../models/person-detail';

const baseUrl = 'http://assignment.siteimprove.com/api/';

const personsEP = baseUrl + 'persons';
const personDetailEP = baseUrl + 'persondetails/';

export async function loadPersons(): Promise<Person[]> {
  const res = await fetch(personsEP);
  return res.json();
}

export async function loadPersonDetails(id: number): Promise<PersonDetail[]> {
  const url = personDetailEP + id;
  const res = await fetch(url);
  return res.json();
}
