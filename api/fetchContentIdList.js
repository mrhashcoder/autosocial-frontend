import supabase from "@/lib/supabase";
import ServerConfig from "@/config/serverConfig";

const fetchContentIdList = async () => {
    let contentIdList = [];
    try {
        const { data, error } = await supabase
            .from(ServerConfig.SUPABASE_TABLE_NAME)
            .select("id")
            .limit(20)
            .order("created_at", { ascending: false });
        console.log(data);

        contentIdList = data.map((item) => item.id);

        return contentIdList;
    } catch (error) {
        console.error("Error fetching IDs:", error.message);
        return contentIdList;
    }
};

export default fetchContentIdList;
