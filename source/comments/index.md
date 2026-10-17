---
title: 留言存档
date: 2026-10-17 18:20:00
---

<div id="waline-archive">
  <p class="archive-loading">正在加载留言…</p>
</div>

<script>
(function () {
  var box = document.getElementById('waline-archive');
  var API = 'https://waline-sepia-rho.vercel.app/api/comment?type=recent&count=50';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function fmtTime(t) {
    try {
      var d = new Date(t);
      return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' +
        String(d.getDate()).padStart(2, '0') + ' ' +
        String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
    } catch (e) { return ''; }
  }

  fetch(API)
    .then(function (r) { return r.json(); })
    .then(function (res) {
      var list = (res && res.data) || [];
      if (!list.length) {
        box.innerHTML = '<p class="archive-empty">还没有留言，来发第一条吧。</p>';
        return;
      }
      var html = list.map(function (c) {
        var nick = esc(c.nick || '匿名');
        var time = fmtTime(c.createdAt);
        // Waline 返回的 comment 已是转义/渲染后的 HTML，只做长度截断
        var body = String(c.comment || '').slice(0, 500);
        var url = esc(c.url || '/');
        return '<article class="archive-item">' +
          '<header><span class="archive-nick">' + nick + '</span>' +
          '<span class="archive-time">' + esc(time) + '</span></header>' +
          '<div class="archive-body">' + body + '</div>' +
          '<a class="archive-link" href="' + url + '">查看原文 →</a>' +
          '</article>';
      }).join('');
      box.innerHTML = html;
    })
    .catch(function () {
      box.innerHTML = '<p class="archive-empty">留言加载失败，请稍后重试。</p>';
    });
})();
</script>
