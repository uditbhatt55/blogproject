document.addEventListener('DOMContentLoaded', function () {

  const html = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  if (stored) html.setAttribute('data-theme', stored);
  if (themeBtn) {
    updateThemeIcon();
    themeBtn.addEventListener('click', function () {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    if (!themeBtn) return;
    const isDark = html.getAttribute('data-theme') === 'dark';
    themeBtn.textContent = isDark ? '☀️' : '🌙';
    themeBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  const searchInput = document.getElementById('post-search');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const q = this.value.trim().toLowerCase();
      document.querySelectorAll('.post-card-wrap').forEach(function (wrap) {
        const title = wrap.querySelector('.card-title');
        const excerpt = wrap.querySelector('.card-excerpt');
        const text = (title ? title.textContent : '') + ' ' + (excerpt ? excerpt.textContent : '');
        wrap.style.display = text.toLowerCase().includes(q) || q === '' ? '' : 'none';
      });
    });
  }

  const likeBtn = document.getElementById('like-btn');
  if (likeBtn) {
    likeBtn.addEventListener('click', function () {
      this.classList.toggle('liked');
      const count = this.querySelector('.like-count');
      if (count) {
        let n = parseInt(count.textContent) || 0;
        count.textContent = this.classList.contains('liked') ? n + 1 : Math.max(0, n - 1);
      }
    });
  }

  const pwInput = document.getElementById('id_password1');
  const bar = document.getElementById('pw-bar');
  const label = document.getElementById('pw-label');
  if (pwInput && bar) {
    pwInput.addEventListener('input', function () {
      const v = this.value;
      let score = 0;
      if (v.length >= 8) score++;
      if (/[A-Z]/.test(v)) score++;
      if (/[0-9]/.test(v)) score++;
      if (/[^A-Za-z0-9]/.test(v)) score++;
      const colors = ['#e05252', '#e09552', '#c4a840', '#5a9e5a'];
      const labels = ['Weak', 'Fair', 'Good', 'Strong'];
      const pct = [25, 50, 75, 100];
      if (v.length === 0) {
        bar.style.width = '0%';
        if (label) label.textContent = '';
      } else {
        const idx = Math.max(0, score - 1);
        bar.style.width = pct[idx] + '%';
        bar.style.background = colors[idx];
        if (label) label.textContent = labels[idx];
      }
    });
  }

  const uploadInput = document.getElementById('id_image');
  const preview = document.getElementById('upload-preview');
  const previewImg = document.getElementById('preview-img');
  if (uploadInput && preview && previewImg) {
    uploadInput.addEventListener('change', function () {
      const file = this.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          previewImg.src = e.target.result;
          preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const uploadZone = document.getElementById('upload-zone');
  if (uploadZone) {
    uploadZone.addEventListener('dragover', function (e) {
      e.preventDefault();
      this.classList.add('drag-over');
    });
    uploadZone.addEventListener('dragleave', function () {
      this.classList.remove('drag-over');
    });
    uploadZone.addEventListener('drop', function (e) {
      e.preventDefault();
      this.classList.remove('drag-over');
      const file = e.dataTransfer.files[0];
      if (file && uploadInput) {
        const dt = new DataTransfer();
        dt.items.add(file);
        uploadInput.files = dt.files;
        uploadInput.dispatchEvent(new Event('change'));
      }
    });
  }

  document.querySelectorAll('.alert').forEach(function (el) {
    setTimeout(function () {
      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity = '0';
      setTimeout(function () { el.remove(); }, 500);
    }, 4000);
  });
});
