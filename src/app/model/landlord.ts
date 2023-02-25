import { Manager } from "./manager";

export class Landlord {
  id: number=-1
  name: string=''
  password: string=''
  fone: string=''
  foneOther: string=''
  email: string=''
  emailOther: string=''
  inativo: boolean=false
  manager: Manager= new Manager()
}
