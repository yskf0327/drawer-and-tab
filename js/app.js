/**
 * drawer menu
 */

let drawerButton = document.getElementById('js-drawer-button');
let bodyElm = document.querySelector('body');

drawerButton.addEventListener('click', function () {
  bodyElm.classList.toggle('open');
});

/**
 * tab menu
 */

let tabButtonArray = document.querySelectorAll('.tab-button');
let tabPanelArray = document.querySelectorAll('.tab-panel');
let tabPanelWrapper = document.querySelector('.tab-panel-wrapper');
let tabPanelHeight = tabPanelArray[0].offsetHeight;
console.log(tabPanelHeight);
tabPanelWrapper.style.height = tabPanelHeight + 'px';

for (let i = 0; i < tabButtonArray.length; i++) {
  tabButtonArray[i].addEventListener('click', function () {
    let activeTabBtn = document.querySelector('.tab-button.active');
    let activeTabpanel = document.querySelector('.tab-panel.active');
    let targetPanelId = tabButtonArray[i].getAttribute('aria-controls');
    let targetPanel = document.getElementById(targetPanelId);
    if (!this.classList.contains('active')) {
      activeTabBtn.classList.remove('active');
      this.classList.add('active');
      activeTabpanel.classList.remove('active');
      targetPanel.classList.add('active');
      tabPanelWrapper.style.height = targetPanel.offsetHeight + 'px';
    }
  });
}
