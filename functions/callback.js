// Decap CMS GitHub OAuth 中转 · Pages Function: GET /callback
// 用 code 换 token，按 decap 协议回传给 /admin 弹窗完成登录
//
// 环境变量（Pages 项目设置里配）：
//   GITHUB_CLIENT_ID     （普通变量即可，会出现在授权跳转 URL 里）
//   GITHUB_CLIENT_SECRET （加密变量）

const ALLOWED_ORIGIN = 'https://aifree-blog.pages.dev';

export async function onRequest(context) {
  const { env, request } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  let token = '';
  let ok = false;

  if (code && env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET) {
    try {
      const r = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      const j = await r.json();
      if (j.access_token) {
        token = j.access_token;
        ok = true;
      }
    } catch (e) {
      ok = false;
    }
  }

  const status = ok ? 'success' : 'error';
  const content = ok
    ? { token, provider: 'github' }
    : { message: '换取 token 失败' };
  // decap 协议：authorization:github:<status>:<json>
  const message =
    'authorization:github:' + status + ':' + JSON.stringify(content);

  const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>登录中…</title></head><body>
<script>
(function () {
  var message = ${JSON.stringify(message)};
  function done(text) {
    document.body.innerHTML =
      '<p style="font-family:sans-serif;padding:48px;text-align:center;color:#333">' +
      text + '</p>';
  }
  function onMsg(e) {
    if (e.origin !== ${JSON.stringify(ALLOWED_ORIGIN)}) return;
    try {
      if (window.opener) window.opener.postMessage(message, e.origin);
    } catch (err) {}
    done('登录成功，窗口即将关闭…');
    setTimeout(function () { window.close(); }, 600);
  }
  window.addEventListener('message', onMsg, false);
  try {
    if (window.opener) window.opener.postMessage('authorizing:github', '*');
  } catch (err) {}
  setTimeout(function () { done('登录超时，请关闭重试'); }, 8000);
})();
</script>
</body></html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
