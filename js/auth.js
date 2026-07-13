async function verificarSessao() {

    const supabase = obterSupabase();

    const { data, error } = await supabase.auth.getSession();

    if (error) {

        console.error(error);

        return false;

    }

    if (data.session) {

        mostrarDashboard();

        return true;

    }

    mostrarLogin();

    return false;

}

async function login() {

    const email = document.getElementById("login-email").value.trim();

    const senha = document.getElementById("login-senha").value;

    if (!email || !senha) {

        alert("Preencha o e-mail e a senha.");

        return;

    }

    const supabase = obterSupabase();

    const { error } = await supabase.auth.signInWithPassword({

        email: email,
        password: senha

    });

    if (error) {

        alert(error.message);

        return;

    }

    mostrarDashboard();

    await carregarDespesas();

}

async function logout() {

    const supabase = obterSupabase();

    await supabase.auth.signOut();

    mostrarLogin();

}

function mostrarLogin() {

    const login = document.getElementById("login-screen");

    const dashboard = document.getElementById("dashboard-screen");

    if (login) {

        login.style.display = "flex";

    }

    if (dashboard) {

        dashboard.style.display = "none";

    }

}

function mostrarDashboard() {

    const login = document.getElementById("login-screen");

    const dashboard = document.getElementById("dashboard-screen");

    if (login) {

        login.style.display = "none";

    }

    if (dashboard) {

        dashboard.style.display = "block";

    }

}