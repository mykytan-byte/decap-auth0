interface Env {
  GITHUB_CLIENT_ID: string;
}

export async function onRequest(context: { env: Env }) {
  const client_id = context.env.GITHUB_CLIENT_ID;
  const state = crypto.randomUUID();
  
  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", client_id);
  url.searchParams.set("scope", "repo,user,user:email");
  url.searchParams.set("state", state);

  return Response.redirect(url.toString(), 302);
}
