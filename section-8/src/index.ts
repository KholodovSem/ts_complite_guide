import { Company } from './Company';
import { User } from './user';
import { CustomMap } from './CustomMap';

//User and Company
const user = new User();
const company = new Company();

//Root element reference:
const mapEl = document.querySelector('#map')! as HTMLElement;

//Google map
const googleMap = new CustomMap(mapEl);
googleMap.addMarker(user);
googleMap.addMarker(company);
