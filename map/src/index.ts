import { User } from "./User";
import { Company } from "./Compant";
import { CustomMap } from "./CustomMap";
console.log("hi there");

const user = new User();
const company = new Company();

const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
console.log(user, company);
