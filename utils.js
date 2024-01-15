export function isDarkTheme(theme){
  let isDark;
  switch (theme){
    case "light":
      isDark = false;
      break;
    case "dark":
      isDark = true;
      break;
    case "system":
      function getSystemTheme(){
          let e = window.matchMedia('(prefers-color-scheme: dark)')
          console.log(e)
            const isDark = e.matches
            // const systemTheme = isDark ? 'dark' : 'light'
            return isDark
      }
      isDark = getSystemTheme()
      break;
  }
  return isDark;
}

export function listenThemeChange(callback){
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === "attributes" && mutation.attributeName === "style") {
          // console.log(mutation.target.style.colorScheme);
          if(mutation.target.style.colorScheme){
            callback(mutation.target.style.colorScheme)
          }
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true, //configure it to listen to attribute changes
      attributeFilter: ["style"], //['style', 'class']
    });
    return observer
}