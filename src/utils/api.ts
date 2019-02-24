import { Person } from '../models/person';
import { PersonDetail } from '../models/person-detail';

const baseUrl = 'http://assignment.siteimprove.com/api/';

const personsEP = baseUrl + 'persons';
const personDetailEP = baseUrl + 'persondetails/';

export async function loadPersons(): Promise<Person[]> {
  await delay(3000);
  const res = await fetch(personsEP);
  return res.json();
}

export async function loadPersonDetails(id: number): Promise<PersonDetail[]> {
  await delay(3000);
  const url = personDetailEP + id;
  const res = await fetch(url);
  return res.json();
}

async function delay(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
