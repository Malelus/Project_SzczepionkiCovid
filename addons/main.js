window.onload = () => {
  //===========================//
  //===// Loading classes //===//
  //===========================//

  // - hamburger
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  // - page transition
  const transition_el = document.querySelector('.transition');
  const anchors = document.querySelectorAll('a:not(.external):not(.home)');

  // - popup
  const popup_btn = document.querySelectorAll('.show-popup');
  const popup = document.querySelector('.popup');

  // - form
  const form = document.getElementById('form');
  const form_result = document.querySelector('.form__result');

  //=============================//
  //===// Loading variables //===//
  //=============================//

  // Defining single variables and array for them
  let variables = [
    '--transition-time',
    '--btn-anim-time',
    '--popup-time',
    '--logo-anim-time',
    '--nav-hide-time',
    '--nav-show-time',
    '--main-anim-time',
    '--form-result-visibility',
    '--anim-delay',
    '--anim-delay--logo-icon',
  ];
  let t_time, b_time, p_time, l_time, h_time, s_time, m_time, f_time, d_time, dl_time;
  let durations = [t_time, b_time, p_time, l_time, h_time, s_time, m_time, f_time, d_time, dl_time];

  // Inserting all time durations into array
  var variable = getComputedStyle(document.body);
  for (var i = 0; i < 10; i++) {
    durations[i] = variable.getPropertyValue(variables[i]);
  }

  //================================//
  //====// Variables formating //===//
  //================================//

  // Subtracting `s` letter from loaded string
  for (i = 0; i < 10; i++) {
    durations[i] = durations[i].substring(0, durations[i].length - 1);
  }

  // Setting own variable for transition time
  let time = durations[0] * 1000;
  let time_result = durations[7] * 1000;

  // Setting style for console timing info
  for (i = 0; i < 10; i++) {
    if (durations[i].indexOf('.') < '') durations[i] = durations[i] + '.0';
  }

  //====================//
  //====// Console //===//
  //====================//

  // Console log transitions durations & delays

  console.log(`# Transitions, Animations was loaded correctly! (Time is given in seconds)\n\n`);
  console.log(`# Page transition:`);
  console.log(`  - static screen: ` + durations[0]);
  console.log(`  - transition: ` + durations[0]);
  console.log(`# Button animation time: ` + durations[1]);
  console.log(`# Popup time: ` + durations[2]);
  console.log(`# Logo animation time: ` + durations[3]);
  console.log(`# Navigation:`);
  console.log(`  - hide: ` + durations[4]);
  console.log(`  - show: ` + durations[5]);
  console.log(`# Main animation: ` + durations[6]);
  console.log(`# Form result visibility: ` + durations[7]);
  console.log(`# Delays:`);
  console.log(`  - default: ` + durations[8]);
  console.log(`  - logo icon: ` + durations[9]);

  //====================//
  //===// Scripts //===//
  //===================//

  //===// Hamburger //===//

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('nav--visible');
  });

  //===// Page transition //===//
  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, time);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.target.href;

      transition_el.classList.add('is-active');

      setTimeout(() => {
        window.location.href = target;
      }, time);
    });
  }

  //===// Popup //===//

  //===// Popup show & close with button //===//
  popup_btn.forEach((button) => {
    button.addEventListener('click', (e) => {
      const pop_target = e.target.dataset.target;

      const popup_el = document.querySelector(pop_target);
      if (popup_el != null) {
        popup_el.classList.toggle('pop-is-active');
      }
    });
  });

  //===// Popup close on escape key press //===//
  document.addEventListener('keydown', esc);
  function esc(ev) {
    if (ev.which === 27) {
      popup.classList.remove('pop-is-active');
    }
  }

  //===// Form //===//

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    form.reset();
    form_result.classList.add('form__result--true');

    setTimeout(() => {
      location.reload();
    }, time_result + 125);
  });
};
