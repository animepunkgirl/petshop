import {Colors} from "@config";


const useRandomColor = () => {
  const keys = Object.keys(Colors)
  const random = keys.length * Math.random() << 0
  return Colors[keys[random] as keyof typeof Colors]
}

export default useRandomColor