import { createClient } from "@supabase/supabase-js";
import serverConfig from "@/config/serverConfig";

// Initialize Supabase client
const supabaseUrl = serverConfig.SUPABASE_URL;
const supabaseKey = serverConfig.SUPABASE_ANONYMOUS_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
