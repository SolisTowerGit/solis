async function listarDespesas() {

    const supabase = obterSupabase();

    if (!supabase) {

        console.error("Supabase não conectado.");

        return [];

    }

    const { data, error } = await supabase
        .from("despesas")
        .select("*")
        .order("vencimento", { ascending: false });

    if (error) {

        console.error(error);

        return [];

    }

    return data ?? [];

}

async function inserirDespesa(despesa) {

    const supabase = obterSupabase();

    const { error } = await supabase
        .from("despesas")
        .insert([despesa]);

    if (error) {

        console.error(error);

        return false;

    }

    return true;

}

async function atualizarDespesa(id, despesa) {

    const supabase = obterSupabase();

    const { error } = await supabase
        .from("despesas")
        .update(despesa)
        .eq("id", id);

    if (error) {

        console.error(error);

        return false;

    }

    return true;

}

async function excluirDespesa(id) {

    const supabase = obterSupabase();

    const { error } = await supabase
        .from("despesas")
        .delete()
        .eq("id", id);

    if (error) {

        console.error(error);

        return false;

    }

    return true;

}