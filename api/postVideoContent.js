import ServerConfig from "../config/serverConfig"
import axios from "axios"

const postVideoContent = async (title, content, tags) => {
  const URl = ServerConfig.serverURL + "/create"
  const requestBody = {
    title: title,
    contnet: content,
    tags: tags,
  }
  try {
    const response = await axios.post(URl, requestBody)
    console.log(response)
    if (response.data.message === "success") {
      return "success"
    } else {
      return "error"
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}

export default postVideoContent
