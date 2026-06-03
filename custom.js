(function () {
  var accent = "#a88466";
  var accentDark = "#8f765e";
  var light = "#fffaf1";

  var css = [
    ".music-toggle{position:fixed;right:18px;bottom:18px;z-index:100000;padding:12px 16px;border:1px solid rgba(255,250,241,.72);border-radius:999px;background:rgba(143,118,94,.94);color:" + light + ";font-family:Arial,sans-serif;font-size:13px;line-height:1;box-shadow:0 10px 30px rgba(0,0,0,.22);cursor:pointer}",
    ".invite-reveal{opacity:0;transform:translateY(26px);transition:opacity 1.7s ease,transform 1.7s ease}",
    ".invite-reveal.invite-reveal--visible{opacity:1;transform:translateY(0)}",

    "#rec867221427 .t396__artboard,#rec867221428 .t396__artboard{background-color:#fffefd!important}",
    "#rec867221427 .t396__carrier,#rec867221428 .t396__carrier{opacity:.72!important}",
    "#allrecords .tn-elem[data-elem-type='text'] .tn-atom{color:" + accent + "!important}",
    "#rec867221430 .tn-elem[data-elem-type='shape'] .tn-atom{background-color:" + accentDark + "!important;border-color:" + accentDark + "!important}",
    "#rec867221430 .tn-elem[data-elem-type='vector'] svg path,#rec867221430 .tn-elem[data-elem-type='vector'] svg rect,#rec867221430 .tn-elem[data-elem-type='vector'] svg line,#rec867221430 .tn-elem[data-elem-type='vector'] svg circle{stroke:" + accent + "!important;fill:" + accent + "!important}",

    "#rec867221430 .tn-elem[data-elem-id='1740943406896'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740943609643'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740943489903'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740943541063'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740606292560'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740943443300'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740943550085'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740943453484'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740943560214'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740606477868'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740943498803'] .tn-atom{color:" + light + "!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740951491414'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740951491402'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740951491417'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740951491410'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740951491421'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740951491406'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740951491424'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740951491395'] .tn-atom{color:" + light + "!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740950458035'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740948279142'] .tn-atom,#rec867221430 .tn-elem[data-elem-id='1740948279157'] *{color:" + light + "!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740948279157'] input,#rec867221430 .tn-elem[data-elem-id='1740948279157'] textarea,#rec867221430 .tn-elem[data-elem-id='1740948279157'] select{color:#1b1b1b!important;border-color:rgba(255,250,241,.72)!important;background:#fffcfc!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740948279157'] input[type='radio'],#rec867221430 .tn-elem[data-elem-id='1740948279157'] input[type='checkbox']{background:transparent!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740948279157'] input::placeholder,#rec867221430 .tn-elem[data-elem-id='1740948279157'] textarea::placeholder{color:rgba(27,27,27,.55)!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740948279157'] .t-input-group{margin-bottom:15px!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740948279157'] .t-input-title{line-height:1.25!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740948279157'] .t-radio__control,#rec867221430 .tn-elem[data-elem-id='1740948279157'] .t-checkbox__control{display:block!important;line-height:1.25!important;margin-bottom:7px!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740948279157'] textarea{min-height:58px!important;padding-top:9px!important}",

    "#rec867221427 .tn-elem[data-elem-id='1740437302394']{display:table!important;top:292px!important;left:calc(50% - 160px + 74px)!important;width:170px!important;height:auto!important;z-index:5!important}",
    "#rec867221428 .tn-elem[data-elem-id='1740437929384']{display:table!important;top:298px!important;left:calc(50% - 160px + 74px)!important;width:170px!important;height:auto!important;z-index:4!important}",
    "#rec867221427 .tn-elem[data-elem-id='1740437302394'] .tn-atom__img,#rec867221428 .tn-elem[data-elem-id='1740437929384'] .tn-atom__img{content:url('./Макет №1_files/flower.png')!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740951541898']{top:4088px!important;left:calc(50% - 160px + -24px)!important;width:124px!important;height:auto!important;z-index:6!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740951541898'] .tn-atom__img{content:url('./Макет №1_files/flower.png')!important;transform:scaleX(-1)!important;transform-origin:center center!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740949777850']{top:3584px!important;left:calc(50% - 160px + 60px)!important;z-index:8!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740946049775'] .tn-atom__img{content:url('./Макет №1_files/middle-photo.jpg')!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740951281738'] .tn-atom__img{content:url('./Макет №1_files/final-photo.png')!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740606463738']{top:3924px!important;z-index:30!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740951491377']{top:4010px!important;z-index:30!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740951491414'],#rec867221430 .tn-elem[data-elem-id='1740951491417'],#rec867221430 .tn-elem[data-elem-id='1740951491421'],#rec867221430 .tn-elem[data-elem-id='1740951491424']{top:4020px!important;z-index:31!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740951491402'],#rec867221430 .tn-elem[data-elem-id='1740951491410'],#rec867221430 .tn-elem[data-elem-id='1740951491406'],#rec867221430 .tn-elem[data-elem-id='1740951491395']{top:4041px!important;z-index:31!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740951491392'],#rec867221430 .tn-elem[data-elem-id='1740952191717'],#rec867221430 .tn-elem[data-elem-id='1740952188729']{top:4025px!important;z-index:31!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740945234453']{top:92px!important;left:calc(50% - 160px + 17px)!important;width:286px!important}",
    "#rec867221430 .tn-elem[data-elem-id='1739747157108']{display:none!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740947825709'],#rec867221430 .tn-elem[data-elem-id='1740947825714'],#rec867221430 .tn-elem[data-elem-id='1740947818559'],#rec867221430 .tn-elem[data-elem-id='1740947818561']{display:none!important}",
    ".dresscode-gallery{position:absolute;top:1500px;left:calc(50% - 160px + 10px);width:300px;display:grid;grid-template-columns:repeat(2,1fr);gap:7px;z-index:28}",
    ".dresscode-gallery img{width:100%;height:96px;display:block;object-fit:cover;border-radius:0}",
    "#rec867221430 .tn-elem[data-elem-id='1740948279142']{display:none!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740950458035']{display:table!important;top:1987px!important;left:calc(50% - 160px + 59px)!important;z-index:30!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740948279157']{display:table!important;top:2058px!important;left:calc(50% - 160px + 10px)!important;width:300px!important;height:660px!important;z-index:30!important;overflow:hidden!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740948279157'] .tn-atom{width:300px!important;height:660px!important;overflow:hidden!important}",
    ".yandex-form-embed{width:650px!important;height:1430px!important;border:0!important;display:block!important;background:#fff!important;transform:scale(.46)!important;transform-origin:top left!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740951436649']{left:calc(50% - 160px + 0px)!important;width:320px!important;text-align:center!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740951436649'] .tn-atom{width:320px!important;text-align:center!important;display:block!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740606463738']{left:calc(50% - 160px + 0px)!important;width:320px!important;text-align:center!important}",
    "#rec867221430 .tn-elem[data-elem-id='1740606463738'] .tn-atom{width:320px!important;text-align:center!important;display:block!important}",

    "body:not(.desktop-invite-frame){background:#fffdf9!important}",
    "#rec1578292001,.desktop-invite-iframe{display:none!important}",
    "@media (prefers-reduced-motion:reduce){.invite-reveal{opacity:1;transform:none;transition:none}}"
  ].join("");

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  function setText(id, html) {
    document.querySelectorAll("[data-elem-id='" + id + "'] .tn-atom").forEach(function (node) {
      node.innerHTML = html;
    });
  }

  function setFormHtml() {
    var form = document.querySelector("[data-elem-id='1740948279157'] form");
    if (!form) return;

    if (!document.querySelector("script[data-yandex-form-embed]")) {
      var script = document.createElement("script");
      script.src = "https://forms.yandex.com/_static/embed.js";
      script.async = true;
      script.setAttribute("data-yandex-form-embed", "true");
      document.head.appendChild(script);
    }
    form.innerHTML = '<iframe class="yandex-form-embed" src="https://forms.yandex.com/u/6a1fe7b884227c410c6b47e9?iframe=1" frameborder="0" name="ya-form-6a1fe7b884227c410c6b47e9" width="650" height="1430"></iframe>';
    form.removeAttribute("action");
    form.removeAttribute("method");
  }

  function addDresscodeGallery() {
    var artboard = document.querySelector("#rec867221430 .t396__artboard");
    if (!artboard || document.querySelector(".dresscode-gallery")) return;

    var gallery = document.createElement("div");
    gallery.className = "dresscode-gallery";
    gallery.innerHTML = [
      "dresscode-01.jpg",
      "dresscode-02.jpg",
      "dresscode-03.jpg",
      "dresscode-04.jpg",
      "dresscode-05.jpg",
      "dresscode-06.jpg",
      "dresscode-07.jpg",
      "dresscode-08.jpg"
    ].map(function (file, index) {
      return '<img src="./Макет №1_files/' + file + '" alt="Дресс-код ' + (index + 1) + '">';
    }).join("");
    artboard.appendChild(gallery);
  }

  function startCountdown() {
    var target = new Date(2026, 7, 6, 0, 0, 0);

    function pad(value) {
      return String(value).padStart(2, "0");
    }

    function update() {
      var diff = Math.max(0, target.getTime() - Date.now());
      var days = Math.floor(diff / 86400000);
      var hours = Math.floor(diff / 3600000) % 24;
      var minutes = Math.floor(diff / 60000) % 60;
      var seconds = Math.floor(diff / 1000) % 60;

      setText("1740951491414", String(days));
      setText("1740951491417", pad(hours));
      setText("1740951491421", pad(minutes));
      setText("1740951491424", pad(seconds));
    }

    update();
    window.setInterval(update, 250);
  }

  ready(function () {
    document.body.classList.remove("desktop-invite-frame");
    document.querySelectorAll(".desktop-invite-iframe,#rec1578292001").forEach(function (node) {
      node.remove();
    });

    setText("1741214381625", "Вы приглашены на свадьбу");
    setText("1739745901165", "ИВАНА<br>и АЛЁНЫ");
    setText("1740437607315", "и АЛЁНЫ<br>ПРИГЛАШЕНИЕ");
    setText("1739747157108", "06 / 08 / 2026");
    setText("1740945705061", "ДОРОГИЕ ГОСТИ!");
    setText("1740945234453", "Один день в этом году станет для нас особенно важным, и мы хотим провести его в кругу близких и друзей! Приглашаем вас на наше событие - рождение нашей семьи!<br><br>06 / 08 / 2026");
    setText("1740943609643", "ГК &quot;Ялта&quot;<br>Пермский муниципальный округ,<br>деревня Берег Камы, 20А");
    setText("1740606292560", "место проведения");
    setText("1740943406896", "ТАЙМИНГ ДНЯ");
    setText("1740943489903", "--:--");
    setText("1740943541063", "Сбор гостей");
    setText("1740943443300", "--:--");
    setText("1740943550085", "Выездная церемония");
    setText("1740943453484", "--:--");
    setText("1740943560214", "Свадебный ужин");
    setText("1740606477868", "--:--");
    setText("1740943498803", "Завершение вечера");
    setText("1740950645221", "ДРЕСС-КОД");
    setText("1740950749498", "Будем благодарны, если вы поддержите нашу цветовую палитру в своих нарядах.");
    setText("1740950740489", "Дорогие дамы, избегайте белых платьев. Невеста - одна.<br><br>Мужчины: брюки + рубашка/поло, без пиджаков!");
    setText("1740950458035", "АНКЕТА ГОСТЯ");
    setText("1740948279142", "");
    setText("1740951060629", "ПОЖЕЛАНИЯ");
    setText("1740951164506", "Не ломайте голову над подарком, мы будем рады вашим пожеланиям в конвертах, которые помогут исполнить наши мечты.<br><br>Будем благодарны, если воздержитесь от множественных криков &quot;Горько!&quot; - у нас сладко!");
    setText("1740951436649", "КОНТАКТЫ<br>ВЕДУЩЕГО");
    setText("1740948052750", "По всем вопросам, связанным с нашим торжественным вечером, обращаться к нашему ведущему - Евгений.<br><br>Номер телефона и ссылка на соцсети появятся позже.");
    setText("1740606463738", "до встречи<br>осталось:");
    setFormHtml();
    addDresscodeGallery();
    startCountdown();

    var audio = document.createElement("audio");
    audio.src = "./Макет №1_files/music.mp3";
    audio.loop = true;
    audio.preload = "auto";
    document.body.appendChild(audio);

    var button = document.createElement("button");
    button.type = "button";
    button.className = "music-toggle";
    button.textContent = "Включить музыку";
    button.addEventListener("click", function () {
      if (audio.paused) {
        audio.play().then(function () {
          button.textContent = "Выключить музыку";
        }).catch(function () {
          button.textContent = "Нажмите еще раз";
        });
      } else {
        audio.pause();
        button.textContent = "Включить музыку";
      }
    });
    document.body.appendChild(button);

    var revealTargets = Array.prototype.slice.call(document.querySelectorAll(
      "#rec867221430 .t396__elem[data-elem-type='text'], #rec867221430 .t396__elem[data-elem-type='image']"
    ));
    revealTargets.forEach(function (node, index) {
      if (index > 2) {
        node.classList.add("invite-reveal");
      }
    });

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach(function (node) {
        node.classList.add("invite-reveal--visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("invite-reveal--visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    });

    document.querySelectorAll(".invite-reveal").forEach(function (node) {
      observer.observe(node);
    });
  });
})();
