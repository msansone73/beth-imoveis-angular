import { Manager } from "./manager";

export interface Landlord {
  id: number;
  name: string;
  password: string;
  fone: string;
  foneOther: string;
  email: string;
  emailOther: string;
  inativo: boolean;
  manager: Manager
}
