import ServerConfig from "../config/serverConfig";
import axios from "axios";

const postVideoContent = async (title, content, tags) => {
    const URl = ServerConfig.serverURL + "/create";
    const requestBody = {
        title: title,
        content: content,
        tags: tags,
    };
    try {
        const response = await axios.post(URl, requestBody);
        console.log(response);
        if (response.status === 200) {
            return "success";
        } else {
            return "error";
        }
    } catch (err) {
        console.log(err);
        return "Error";
    }
};

export default postVideoContent;
