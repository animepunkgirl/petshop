import {collection, doc, getDoc, getDocs, getFirestore, query} from 'firebase/firestore';
import {getStorage, ref, getDownloadURL} from 'firebase/storage';

import {app} from "./_firebase"

import {Pet} from "@Types/Pet";
import {Breed} from "@Types/Breed";
import {PetDTO} from "./DTO/PetDTO";

const firestore = getFirestore(app);
const storage = getStorage(app);

const getBreedByRef = async (breedId: string): Promise<Breed> => {
  const breedRef = doc(firestore, "breeds", breedId.toString())
  const breedSnapshot = await getDoc(breedRef)

  if(breedSnapshot.exists()) {
    const {name} = breedSnapshot.data()
    return {
      id: breedSnapshot.id,
      name
    }
  } else {
    console.error("Breed doesn't exist: " + breedId)
    return {
      id: "",
      name: ""
    }
  }
}

const populateImageUrl = async (pets: PetDTO[]): Promise<PetDTO[]> => {
  return Promise.all(pets.map(async (pet) => {
    const fileName = pet.image
    return {
      ...pet,
      image: await getDownloadURL(ref(storage, `/pets/${fileName}`))
    }
  }))
}

const populateBreed = async (pets: PetDTO[]): Promise<Pet[]> => {
  const breeds: Breed[] = [];

  for (const pet of pets) {
    if(breeds.find(({id}) => id === pet.breed))
      continue;

    const newBreed = await getBreedByRef(pet.breed)
    console.log(newBreed)
    breeds.push(newBreed)
  }

  return pets.map(pet => ({
    ...pet,
    breed: breeds.find(({id}) => id === pet.breed)!,
  }))
}

const getPetList = async (): Promise<Pet[]> => {
  const q = query(collection(firestore, "pets"))
  const qSnapshot = await getDocs(q)

  const result: PetDTO[] = [];

  qSnapshot.forEach( pet => {
    const petData = pet.data();
    result.push({
      id: pet.id,
      ...petData
    } as PetDTO)
  })

  return await populateBreed(await populateImageUrl(result))
}

const API = {
  getPetList
}

export default API;