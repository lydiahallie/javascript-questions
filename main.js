const check = document.querySelector('#checkbox')

check.addEventListener('change', function () {
  const lightTheme = document.getElementsByTagName('link')[2]
  const darkTheme = document.getElementsByTagName('link')[3]
  if (check.checked) {
    darkTheme.disabled = false
    lightTheme.disabled = true
  } else {
    lightTheme.disabled = false
    darkTheme.disabled = true
  }
})

window.$docsify = {
  name: 'javascript-questions',
  repo: 'lydiahallie/javascript-questions',
  loadSidebar: true,
  auto2top: true
}
