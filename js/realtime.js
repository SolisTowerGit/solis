function iniciarRealtime() {

    const supabase = obterSupabase();

    if (!supabase) {

        console.error("Supabase não conectado.");

        return;

    }

    supabase
        .channel("despesas-realtime")
        .on(
            "postgres_changes",
            {
                event: "*",
                schema: "public",
                table: "despesas"
            },
            async () => {

                console.log("Alteração detectada.");

                await carregarDespesas();

            }
        )
        .subscribe((status) => {

            console.log("Realtime:", status);

        });

}