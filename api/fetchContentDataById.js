import supabase from "@/lib/supabase";
import ServerConfig from "@/config/serverConfig";

const fetchContentData = async (id) => {
    let contentData = {};
    try {
        const { data, error } = await supabase
            .from(ServerConfig.SUPABASE_TABLE_NAME)
            .select("*")
            .eq("id", id);

        contentData = data[0];
        console.log(contentData);
        return contentData;
    } catch (error) {
        console.error("Error fetching IDs:", error.message);
        return contentData;
    }
};

export default fetchContentData;
