import {Breed} from "./Breed";

export interface Pet {
  id: string,
  name: string,
  price: number,
  breed: Breed,
  age: number,
  sex: "boy" | "girl",
  image: string,
  description: string
}