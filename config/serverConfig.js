const ServerConfig = {
    serverURL: "http://ec2-13-49-226-188.eu-north-1.compute.amazonaws.com:3000",
    // serverURL: "http://localhost:3001",
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_ANONYMOUS_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_TABLE_NAME: "autosocial",
};

export default ServerConfig;
