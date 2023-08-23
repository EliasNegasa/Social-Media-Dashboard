const checkbox = document.getElementById('darkmode');
const rootNode = document.documentElement;

const localTheme = localStorage.getItem('theme');
const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

const setTheme = () => {
  if (localTheme === 'dark' || (!localTheme && darkTheme)) {
    rootNode.classList.add('dark');
    checkbox.checked = true;
  }
};

const switchTheme = () => {
  const isDarkMode = checkbox.checked;
  rootNode.classList.toggle('dark', isDarkMode);
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
};

checkbox.addEventListener('click', switchTheme);

setTheme();
