import {useLinkTo} from "@react-navigation/native";


const useLinkToProps = () => {
  const linkTo = useLinkTo()

  const navigate = (link: string, params: Object) => {
    let parsedLink = link;
    for (const param in params) {
      // @ts-ignore
      parsedLink = parsedLink.replace(`:${param}`, params[param])
    }
    linkTo(parsedLink)
  }

  return navigate
}

export default useLinkToProps;