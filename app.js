(() => {
  'use strict';
  const translations = {
    en: {
      sidebarRole: 'Ph.D. student<br>Georgia Tech', navAbout: 'About', navResearch: 'Research', navPublications: 'Publications', navTalks: 'Talks', talksTitle: 'Talks', talkDate: 'Oct 24, 2026', talkSlides: 'Slides ↗', talkSession: 'Minisymposium: Machine learning theory for neural networks and scientific modeling', navEducation: 'Education', sidebarNote: 'Research & ideas', topbar: 'A PERSONAL ACADEMIC SPACE', status: 'Always curious', heroEyebrow: "HELLO, I'M", position: 'Ph.D. student', intro: 'I am a second-year Ph.D. student in Mathematics at Georgia Tech, advised by <a href="https://sites.google.com/view/weizhumath/home" target="_blank" rel="noopener noreferrer">Wei Zhu</a>. I received my B.S. in Mathematics and Applied Mathematics from Tianjin University.', researchOverview: 'I am interested in <strong>generative models</strong>, both in improving their performance and in understanding their underlying mechanisms through theory. I am also interested in applying machine learning tools to <strong>scientific problems</strong>.', introEvolution: 'My interests initially focused exclusively on machine learning theory. I am now beginning to explore computational work, with the aim of connecting theory more closely with practice.', exploreResearch: 'Explore my research', selectedWork: 'Publications', note: 'A SMALL UPDATE', newsText: 'A new home for my research. More to come.', researchTitle: 'Interests', generativeInterest: 'Generative models: performance and theory', theoryInterest: 'Machine learning theory', scienceInterest: 'Machine learning for science', publicationsTitle: 'Publications', publicationsAside: 'Papers, preprints & ongoing work', publicationsEmptyTitle: 'More to share, soon.', publicationsEmptyText: 'Papers and preprints will appear here as this website grows.', comingSoon: 'IN THE MAKING', educationTitle: 'Education', educationPosition: 'Ph.D. in Mathematics', advisorLabel: 'Advisor:', bachelorPosition: 'B.S. in Mathematics and Applied Mathematics', bachelorDates: '2021–2025', current: 'Current', backToTop: 'Back to top', lastUpdatedLabel: 'Last updated:', lastUpdatedDate: 'Oct 24, 2026', footerNote: 'A work in progress, much like research.', all: 'All', code: 'Code ↗', project: 'Project ↗', abstract: 'Abstract', hideAbstract: 'Hide abstract', email: 'Email ↗', cv: 'CV ↗'
    },
    zh: {
      sidebarRole: '博士生<br>佐治亚理工学院', navAbout: '关于', navResearch: '研究', navPublications: '论文', navTalks: '报告', talksTitle: '学术报告', talkDate: '2026 年 10 月 24 日', talkSlides: '幻灯片 ↗', talkSession: '专题讨论会：Machine learning theory for neural networks and scientific modeling', navEducation: '教育', sidebarNote: '研究与思考', topbar: '研究、想法与持续的探索', status: '保持好奇', heroEyebrow: '你好，我是', position: '博士生', intro: '我目前是 Georgia Tech（佐治亚理工学院）的数学博士二年级学生，导师是 <a href="https://sites.google.com/view/weizhumath/home" target="_blank" rel="noopener noreferrer">Wei Zhu</a>。我在天津大学获得了数学与应用数学专业的学士学位。', researchOverview: '我对<strong>生成模型</strong>感兴趣，既关心如何提升它们的表现，也希望从理论上理解其背后的机制。我也对如何将机器学习工具应用于<strong>科学问题</strong>感兴趣。', introEvolution: '过去，我的兴趣集中在纯粹的机器学习理论研究上。现在，我正开始尝试计算工作，希望让理论与实践联系得更紧密。', exploreResearch: '了解我的研究', selectedWork: '学术论文', note: '最近动态', newsText: '研究与思考有了一个新家，更多内容陆续更新。', researchTitle: '研究兴趣', generativeInterest: '生成模型：性能与理论', theoryInterest: '机器学习理论', scienceInterest: '机器学习在科学问题中的应用', publicationsTitle: '学术论文', publicationsAside: '论文、预印本与进行中的工作', publicationsEmptyTitle: '更多研究，敬请期待。', publicationsEmptyText: '论文和预印本将在这里陆续更新。', comingSoon: '陆续整理中', educationTitle: '教育经历', educationPosition: '数学博士（在读）', advisorLabel: '导师：', bachelorPosition: '数学与应用数学学士', bachelorDates: '2021–2025', current: '在读', backToTop: '回到顶部', lastUpdatedLabel: '最后更新：', lastUpdatedDate: '2026 年 10 月 24 日', footerNote: '和研究一样，这里也在持续生长。', all: '全部', code: '代码 ↗', project: '项目 ↗', abstract: '摘要', hideAbstract: '收起摘要', email: '邮件 ↗', cv: '简历 ↗'
    }
  };
  const profile = window.PROFILE || {};
  let language = 'en';
  try { if (localStorage.getItem('fanliu-language') === 'zh') language = 'zh'; } catch {}
  const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
  const dictionary = () => translations[language];
  const safeUrl = value => {
    if (typeof value !== 'string' || !value) return null;
    try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; } catch { return null; }
  };
  const externalLink = (label, url) => {
    const link = document.createElement('a');
    link.textContent = label;
    link.href = url;
    if (!url.startsWith('mailto:')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    return link;
  };

  function renderContact() {
    const container = document.getElementById('contact-links');
    container.replaceChildren();
    if (typeof profile.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
      const link = externalLink(profile.email, 'mailto:' + profile.email);
      link.className = 'email-link';
      const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon.setAttribute('viewBox', '0 0 24 24');
      icon.setAttribute('aria-hidden', 'true');
      icon.setAttribute('focusable', 'false');
      icon.innerHTML = '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>';
      link.prepend(icon);
      container.append(link);
    }
    for (const [field, label] of [['scholar', 'Google Scholar ↗'], ['github', 'GitHub ↗'], ['linkedin', 'LinkedIn ↗'], ['cv', dictionary().cv]]) {
      const url = safeUrl(profile[field]);
      if (url) container.append(externalLink(label, url));
    }
  }

  function renderAvatar() {
    const image = document.getElementById('profile-photo');
    const value = profile.avatar;
    const url = safeUrl(value) || (typeof value === 'string' && value.startsWith('./') ? value : null);
    if (!url) return;
    image.addEventListener('load', () => {
      image.hidden = false;
      document.querySelector('.avatar-initials').hidden = true;
      document.querySelector('.profile-avatar').setAttribute('aria-label', 'Fan Liu');
    }, { once: true });
    image.src = url;
  }

  let currentTopic = 'all';
  function renderPublications() {
    const publications = Array.isArray(profile.publications) ? profile.publications.filter(item => item && typeof item.title === 'string' && item.title.trim()) : [];
    const list = document.getElementById('publication-list');
    const filters = document.getElementById('publication-filters');
    document.getElementById('publication-empty').hidden = publications.length > 0;
    list.replaceChildren(); filters.replaceChildren();
    const topics = [...new Set(publications.map(item => item.topic).filter(topic => typeof topic === 'string' && topic))];
    filters.hidden = topics.length < 2;
    if (!topics.includes(currentTopic)) currentTopic = 'all';
    for (const topic of ['all', ...topics]) {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'filter-button';
      button.textContent = topic === 'all' ? dictionary().all : topic;
      button.setAttribute('aria-pressed', String(topic === currentTopic));
      button.addEventListener('click', () => { currentTopic = topic; renderPublications(); });
      filters.append(button);
    }
    publications.filter(item => currentTopic === 'all' || item.topic === currentTopic).forEach((item, index) => {
      const row = document.createElement('article'); row.className = 'publication-row';
      const year = document.createElement('span'); year.className = 'publication-year'; year.textContent = item.year || '';
      const body = document.createElement('div'); body.className = 'publication-body';
      const title = document.createElement('h3');
      const titleUrl = safeUrl(item.paperUrl);
      if (titleUrl) title.append(externalLink(item.title, titleUrl)); else title.textContent = item.title;
      body.append(title);
      for (const [field, className] of [['authors', ''], ['venue', 'publication-meta']]) {
        if (!item[field]) continue;
        const text = document.createElement('p'); text.className = className;
        if (field === 'venue' && titleUrl) text.append(externalLink(item[field], titleUrl));
        else if (field === 'authors') {
          for (const part of String(item[field]).split(/(Fan Liu)/g)) {
            if (part === 'Fan Liu') { const ownName = document.createElement('strong'); ownName.textContent = part; text.append(ownName); }
            else text.append(document.createTextNode(part));
          }
        } else text.textContent = item[field];
        body.append(text);
      }
      const links = document.createElement('div'); links.className = 'publication-links';
      for (const [field, key] of [['codeUrl', 'code'], ['projectUrl', 'project']]) {
        const url = safeUrl(item[field]); if (url) links.append(externalLink(dictionary()[key], url));
      }
      if (item.abstract) {
        const button = document.createElement('button'); button.type = 'button'; button.textContent = dictionary().abstract;
        const abstract = document.createElement('p'); abstract.className = 'publication-abstract'; abstract.id = 'abstract-' + index; abstract.hidden = true; abstract.textContent = item.abstract;
        button.setAttribute('aria-controls', abstract.id); button.setAttribute('aria-expanded', 'false');
        button.addEventListener('click', () => { abstract.hidden = !abstract.hidden; button.setAttribute('aria-expanded', String(!abstract.hidden)); button.textContent = abstract.hidden ? dictionary().abstract : dictionary().hideAbstract; });
        links.append(button); body.append(links, abstract);
      } else if (links.childElementCount) body.append(links);
      row.append(year, body); list.append(row);
    });
  }

  function applyLanguage() {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    for (const element of document.querySelectorAll('[data-i18n]')) {
      const text = dictionary()[element.dataset.i18n];
      if (text) element.innerHTML = text;
    }
    const button = document.getElementById('language-toggle');
    button.innerHTML = language === 'zh' ? 'EN <span aria-hidden="true">↗</span>' : '中文 <span aria-hidden="true">↗</span>';
    button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
    document.querySelector('.navigation').setAttribute('aria-label', language === 'zh' ? '主导航' : 'Main navigation');
    const backToTop = document.querySelector('.footer-back-to-top');
    backToTop.setAttribute('aria-label', dictionary().backToTop);
    backToTop.title = dictionary().backToTop;
    document.querySelector('.skip-link').textContent = language === 'zh' ? '跳转到正文' : 'Skip to content';
    updateThemeLabel(); renderPublications(); renderContact();
  }
  document.getElementById('language-toggle').addEventListener('click', () => { language = language === 'en' ? 'zh' : 'en'; savePreference('fanliu-language', language); applyLanguage(); });

  function updateThemeLabel() {
    const dark = document.documentElement.dataset.theme === 'dark';
    const label = language === 'zh' ? (dark ? '切换为浅色主题' : '切换为深色主题') : (dark ? 'Switch to light theme' : 'Switch to dark theme');
    for (const button of document.querySelectorAll('[data-theme-toggle]')) { button.setAttribute('aria-label', label); button.title = label; }
  }
  const themeButton = document.getElementById('theme-toggle');
  themeButton.dataset.themeToggle = '';
  themeButton.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next; savePreference('fanliu-theme', next); updateThemeLabel();
  });

  const sectionElements = [...document.querySelectorAll('main section[id]')];
  const navigationLinks = [...document.querySelectorAll('.navigation a')];
  let scrollQueued = false;
  function updateScroll() {
    scrollQueued = false;
    const offset = innerWidth <= 700 ? 160 : 180;
    let active = sectionElements[0].id;
    let nearestTop = -Infinity;
    for (const section of sectionElements) {
      const top = section.getBoundingClientRect().top;
      if (top <= offset && (top > nearestTop + 2 || (Math.abs(top - nearestTop) <= 2 && location.hash === '#' + section.id))) { active = section.id; nearestTop = top; }
    }
    const maxScroll = document.documentElement.scrollHeight - innerHeight;
    if (maxScroll > 0 && scrollY >= maxScroll - 8) active = sectionElements.at(-1).id;
    for (const link of navigationLinks) {
      const selected = link.getAttribute('href') === '#' + active;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    }
    document.querySelector('.reading-progress').style.width = (maxScroll > 0 ? Math.max(0, Math.min(100, scrollY / maxScroll * 100)) : 0) + '%';
  }
  window.addEventListener('scroll', () => { if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateScroll); } }, { passive: true });
  window.addEventListener('resize', updateScroll, { passive: true });
  applyLanguage(); renderAvatar(); updateScroll();
})();
