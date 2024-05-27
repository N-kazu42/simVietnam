document.addEventListener('DOMContentLoaded', () => {
    // body要素にスタイルを追加
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  
    // ダークモードの設定を無視する
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-color-scheme: dark) {
        :root {
          color-scheme: light;
        }
      }
    `;
    document.head.appendChild(style);
  });
  