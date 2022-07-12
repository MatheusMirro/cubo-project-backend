import { Prisma } from '@prisma/client';

export class Content implements Prisma.DataUserUncheckedCreateInput {
  id?: number;
  name: string;
  lastname: string;
  participation: string;
}

//DataUserUncheckedCreateInput
