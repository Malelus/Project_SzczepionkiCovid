window.onload = () => {
  //===========================//
  //===// Loading classes //===//
  //===========================//

  // - hamburger
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  // - page transition
  const transition_el = document.querySelector('.transition');
  const anchors = document.querySelectorAll('a.in');

  // - popup
  const popup_btn = document.querySelectorAll('.show-popup');
  const popup = document.querySelector('.popup');

  //=============================//
  //===// Loading variables //===//
  //=============================//

  // Loading time durations from main.css
  var variable = getComputedStyle(document.body);
  let t_time = variable.getPropertyValue('--transition-time');
  let b_time = variable.getPropertyValue('--btn-anim-time');
  let p_time = variable.getPropertyValue('--popup-time');
  let l_time = variable.getPropertyValue('--logo-anim-time');
  let h_time = variable.getPropertyValue('--nav-hide-time');
  let s_time = variable.getPropertyValue('--nav-show-time');
  let m_time = variable.getPropertyValue('--main-anim-time');

  // Loading time delays from main.css
  let d_time = variable.getPropertyValue('--anim-delay');
  let dl_time = variable.getPropertyValue('--anim-delay--logo-icon');

  //====================//
  //====// Console //===//
  //====================//

  // Subtracting `s` letter from loaded string
  t_time = t_time.substring(0, t_time.length - 1);
  b_time = b_time.substring(0, b_time.length - 1);
  p_time = p_time.substring(0, p_time.length - 1);
  l_time = l_time.substring(0, l_time.length - 1);
  h_time = h_time.substring(0, h_time.length - 1);
  s_time = s_time.substring(0, s_time.length - 1);
  m_time = m_time.substring(0, m_time.length - 1);
  d_time = d_time.substring(0, d_time.length - 1);
  dl_time = dl_time.substring(0, dl_time.length - 1);

  // Setting own variable for transition time
  let time = t_time * 1000;

  // Setting style for console timing info
  if (t_time.indexOf('.') < '') t_time = t_time + '.0';
  if (b_time.indexOf('.') < '') b_time = b_time + '.0';
  if (p_time.indexOf('.') < '') p_time = p_time + '.0';
  if (l_time.indexOf('.') < '') l_time = l_time + '.0';
  if (h_time.indexOf('.') < '') h_time = h_time + '.0';
  if (s_time.indexOf('.') < '') s_time = s_time + '.0';
  if (m_time.indexOf('.') < '') m_time = m_time + '.0';
  if (d_time.indexOf('.') < '') d_time = d_time + '.0';
  if (dl_time.indexOf('.') < '') dl_time = dl_time + '.0';

  // Console log transitions durations & delays

  console.log(`# Transitions, Animations was loaded correctly! (Time is given in seconds)\n\n`);
  console.log(`# Page transition:`);
  console.log(`  - static screen: ` + t_time);
  console.log(`  - transition: ` + t_time);
  console.log(`# Button animation time: ` + b_time);
  console.log(`# Popup time: ` + p_time);
  console.log(`# Logo animation time: ` + l_time);
  console.log(`# Navigation:`);
  console.log(`  - hide: ` + h_time);
  console.log(`  - show: ` + s_time);
  console.log(`# Main animation: ` + m_time);
  console.log(`# Delays:`);
  console.log(`  - default: ` + d_time);
  console.log(`  - logo icon: ` + dl_time);

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

  //===// Popup close on escape press //===//
  document.addEventListener('keydown', esc);
  function esc(ev) {
    if (ev.which === 27) {
      popup.classList.remove('pop-is-active');
    }
  }
};
