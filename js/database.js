let supabaseClient = null;

function conectarSupabase() {

    if (supabaseClient) {

        return supabaseClient;

    }

    if (!SUPABASE_URL || !SUPABASE_KEY) {

        console.error("Configuração do Supabase não encontrada.");

        return null;

    }

    supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

    console.log("Supabase conectado.");

    return supabaseClient;

}

function obterSupabase() {

    return supabaseClient;

}