const iframe = document.getElementById('main-iframe'); // iframe for content
const tabsContainer = document.getElementById('tabs'); // container for tabs
const addressBar = document.getElementById('address-bar'); // address bar input

// History array per tab
let tabHistory = [
  {back: [], forward: [], url: "https://www.google.com/webhp?igu=1&safe=active&ssui=on", label: "Google"}
];
let activeTabIndex = 0;

// -----------------------------
// URL validation
// -----------------------------
function isValidURL(url) {
  try { return Boolean(new URL(url)); } 
  catch { return false; }
}

// -----------------------------
// Update active tab UI and iframe
// -----------------------------
function updateTab() {
  const tab = tabsContainer.children[activeTabIndex];
  tab.dataset.url = tabHistory[activeTabIndex].url;
  tab.textContent = tabHistory[activeTabIndex].label;

  // Add close button
  const closeSpan = document.createElement('span');
  closeSpan.classList.add('close-btn');
  closeSpan.innerHTML = '&times;';
  tab.appendChild(closeSpan);

  iframe.src = tabHistory[activeTabIndex].url;
  addressBar.value = tabHistory[activeTabIndex].url;

  Array.from(tabsContainer.children).forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
}

// -----------------------------
// Tab click / close handling
// -----------------------------
tabsContainer.addEventListener('click', e => {
  const clickedTab = e.target.closest('.tab');
  if (!clickedTab) return;

  const idx = Array.from(tabsContainer.children).indexOf(clickedTab);

  // Close button
  if (e.target.classList.contains('close-btn')) {
    if (tabsContainer.children.length === 1) return; // prevent closing last tab
    tabHistory.splice(idx, 1);
    tabsContainer.removeChild(clickedTab);

    if (activeTabIndex >= idx) activeTabIndex = Math.max(0, activeTabIndex - 1);
    updateTab();
    return;
  }

  // Switch tab
  activeTabIndex = idx;
  updateTab();
});

// -----------------------------
// Address bar navigation
// -----------------------------
addressBar.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    let url = addressBar.value.trim();
    if (!url.startsWith('http')) url = 'https://' + url;
    if (!isValidURL(url)) { alert("Invalid URL"); return; }

    tabHistory[activeTabIndex].back.push(tabHistory[activeTabIndex].url);
    tabHistory[activeTabIndex].forward = [];
    tabHistory[activeTabIndex].url = url;
    tabHistory[activeTabIndex].label = (activeTabIndex === 0 && url.includes("google.com")) ? "Google" : "New Tab";
    updateTab();
  }
});
// -----------------------------
// New tab button
// -----------------------------
  document.getElementById('newtab-btn').addEventListener('click', () => {
  const newTab = document.createElement('div');
  newTab.classList.add('tab');
  const url = 'https://example.com';
  newTab.dataset.url = url;
  newTab.textContent = 'New Tab';
  tabsContainer.appendChild(newTab);
  tabHistory.push({back: [], forward: [], url: url, label: 'New Tab'});

  activeTabIndex = tabHistory.length - 1;
  updateTab();
});

// -----------------------------
// Navigation buttons
// -----------------------------
document.getElementById('back-btn').addEventListener('click', () => {
  const h = tabHistory[activeTabIndex];
  if (h.back.length) { h.forward.push(h.url); h.url = h.back.pop(); updateTab(); }
});
document.getElementById('forward-btn').addEventListener('click', () => {
  const h = tabHistory[activeTabIndex];
  if (h.forward.length) { h.back.push(h.url); h.url = h.forward.pop(); updateTab(); }
});
document.getElementById('refresh-btn').addEventListener('click', () => updateTab());
document.getElementById('home-btn').addEventListener('click', () => {
  const h = tabHistory[activeTabIndex];
  const home = 'https://www.google.com/webhp?igu=1&safe=active&ssui=on';
  h.back.push(h.url); h.forward = []; h.url = home; h.label = 'Google';
  updateTab();
});
document.getElementById('inprivate-btn').addEventListener('click', () => document.body.classList.toggle('inprivate'));

// -----------------------------
// Keyboard shortcuts
// -----------------------------
document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.key === 't') { e.preventDefault(); document.getElementById('newtab-btn').click(); }
  if (e.ctrlKey && e.key === 'w') { e.preventDefault(); const closeBtn = tabsContainer.children[activeTabIndex].querySelector('.close-btn'); if (closeBtn) closeBtn.click(); }
  if (e.ctrlKey && e.key === 'Tab') { e.preventDefault(); activeTabIndex = (activeTabIndex + 1) % tabsContainer.children.length; updateTab(); }
});

// -----------------------------
// Tab hover tooltip (title)
// -----------------------------
Array.from(tabsContainer.children).forEach(tab => {
  tab.title = tab.dataset.url;
});

// -----------------------------
// Stability enhancements
// -----------------------------
// Prevent double rapid navigation
let navTimeout = false;
iframe.addEventListener('load', () => { navTimeout = false; });
