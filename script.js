// My Approach tab switching
(function () {
  var tabs = document.querySelectorAll('.approach-nav .tab-item');
  if (!tabs.length) return;

  var heroImages = {
    understanding: "images/lake-480472_1920.webp",
    transitions: "images/sunrise-77677_1920.webp",
    process: "images/unterberg+stairsteps.webp"
  };

  var heroTitles = {
    understanding: "Understanding",
    transitions: "Transitions Lead to Transformations",
    process: "The Process of Therapy"
  };

  var hero = document.getElementById('hero');
  var heroTitle = document.getElementById('hero-title');

  function activate(name) {
    tabs.forEach(function (tab) {
      tab.classList.toggle('active', tab.dataset.tab === name);
    });
    document.querySelectorAll('.approach-panel').forEach(function (panel) {
      panel.classList.toggle('active', panel.id === 'panel-' + name);
    });
    if (hero && heroImages[name]) {
      hero.style.backgroundImage = "url('" + heroImages[name] + "')";
    }
    if (heroTitle && heroTitles[name]) {
      heroTitle.textContent = heroTitles[name];
    }
  }

  tabs.forEach(function (tab) {
    tab.querySelector('a').addEventListener('click', function (e) {
      e.preventDefault();
      var name = tab.dataset.tab;
      activate(name);
      history.replaceState(null, '', '#' + name);
    });
  });

  var initial = window.location.hash ? window.location.hash.substring(1) : 'understanding';
  if (!heroImages[initial]) initial = 'understanding';
  activate(initial);
})();

// Contact form submit
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-status').style.display = 'block';
    form.reset();
  });
})();
