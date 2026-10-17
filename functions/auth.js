// Decap CMS GitHub OAuth 中转 · Pages Function: GET /auth
// 跳转到 GitHub 授权页
export async function onRequest(context) {
  const { env, request } = context;
  const url = new URL(request.url);
  const params = new URLSearchParams({
    client_id: env.GITHUB_CLIENT_ID || '',
    redirect_uri: `${url.protocol}//${url.host}/callback`,
    scope: 'repo',
  });
  return Response.redirect(
    `https://github.com/login/oauth/authorize?${params.toString()}`,
    302,
  );
}
