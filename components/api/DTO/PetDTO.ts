import {Pet} from "@Types/Pet";

export type PetDTO = Omit<Pet, "breed"> & { breed: string }