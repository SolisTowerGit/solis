document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const mensagem = document.getElementById("mensagem");

    // Se já estiver logado, vai direto para o dashboard
    supabase.auth.getSession().then(({ data }) => {

        if (data.session) {

            window.location.href = "index.html";

        }

    });

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        mensagem.textContent = "";

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const { error } = await supabase.auth.signInWithPassword({

            email,
            password

        });

        if (error) {

            mensagem.textContent = "E-mail ou senha inválidos.";
            return;

        }

        window.location.href = "index.html";

    });

});