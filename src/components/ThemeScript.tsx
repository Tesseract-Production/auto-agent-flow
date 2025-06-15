export function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (theme === 'dark' || (theme === 'system' && systemPrefersDark) || (!theme && systemPrefersDark)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.add('light');
        }
      } catch (e) {
        // Fallback to light mode if localStorage is not available
        document.documentElement.classList.add('light');
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: themeScript,
      }}
    />
  );
}