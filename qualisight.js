document.addEventListener('DOMContentLoaded', function () {
    const images = [
      { src: 'image 26.jpg', alt: 'ネジの打痕検査　new！（AI物体認識）' },
      { src: 'image 27.jpg', alt: 'ベアリングの欠陥検査　new！（AI物体認識）' },
      { src: 'image 28.jpg', alt: 'ゴムのふくれ不良　new！（AI物体認識）' },
      { src: 'image 29.jpg', alt: 'トマトの傷検査　new！（AI物体認識）' },
      { src: 'image 30.jpg', alt: 'サバからアニサキスを検出　new！（AI物体認識）' },
      { src: 'image 31.jpg', alt: '野菜の中からカエルを発見　new！（AI物体認識）' },
      { src: 'image 32.jpg', alt: 'アルミダイカストの傷・打痕検査　new！（AI物体認識）' },
      { src: 'image 33.jpg', alt: 'アルミダイカストの穴バリ検査　new！（AI物体認識）' },
      { src: 'image 34.jpg', alt: '箱内部品のカウント　new！（AI物体認識）' },
      { src: 'image 35.jpg', alt: '金属刻印のOCR　new！（AI OCR）' },
      { src: 'image 36.jpg', alt: '基板パターンとシルク印刷の欠陥（マスターとの比較）' },
      { src: 'image 37.jpg', alt: '電子部品の向きの検査（指定色の有無）' },
      { src: 'image 38.jpg', alt: 'コネクターの配線色の検査（指定色の有無）' },
      { src: 'image 39.jpg', alt: '印刷の間違い･カスレの検査（色比較抽出＋粒子カウント）' },
      { src: 'image 42.jpg', alt: 'ナットの計数と異品の検出（色比較抽出＋粒子カウント）' },
      { src: 'image 41.jpg', alt: '飲料キャップの黒ブツの検出（傷・ブツ検出）' },
      { src: 'image 43.jpg', alt: '凹凸のある表面上に発生した傷の検出（傷・ブツ検出）' },
      { src: 'image 44.jpg', alt: '機械部品の寸法と角度の検査（位置・幅測定 / 角度測定）' },
      { src: 'image 45.jpg', alt: 'QFP部品の半田ブリッジの検査（明線暗線カウント 間隔変化）' },
      { src: 'image 46.jpg', alt: '紙の枚数のカウント（明線暗線カウント 間隔変化）' },
      { src: 'image 47.jpg', alt: 'バーコード読取（バー/2Dコード）' },
      { src: 'image 48.jpg', alt: 'OCRの読取とバーコードでの読取文字を比較（バー/2Dコード）' },
      { src: 'image 49.jpg', alt: '電圧･電流などの規格値の読取と確認（OCR 文字認識 ）' },
      { src: 'image 50.jpg', alt: 'IC部品のレーザー刻印の印字読取（機械学習OCR）' },
      { src: 'image 51.jpg', alt: 'LEDバーメーター、リニアアナログメーター、フローメーターの読取（メーター表示の読取）' },
      { src: 'image 52.jpg', alt: '回転式アナログメーターの読取（メーター表示の読取）' },
      { src: 'image 53.jpg', alt: '7セグメントの読取（デジタル7セグ表示読取）' },
      { src: 'image 54.jpg', alt: '制御盤のランプのON/OFFの読取（ランプON/OFF読取）' }
    ];
  
    const container = document.getElementById('image-container');
  
    images.forEach((image, index) => {
      if (index % 2 === 0) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'flex flex-col sm:flex-row justify-center';
        container.appendChild(rowDiv);
      }
  
      const imageDiv = document.createElement('div');
      imageDiv.className = 'p-4 sm:p-8 w-full sm:w-auto';
  
      const imgElement = document.createElement('img');
      imgElement.src = `images/qualisight/${image.src}`;
      imgElement.alt = image.alt;
      imgElement.className = 'm-auto';
  
      const pElement = document.createElement('p');
      pElement.textContent = image.alt;
  
      imageDiv.appendChild(imgElement);
      imageDiv.appendChild(pElement);
  
      container.lastElementChild.appendChild(imageDiv);
    });
  });
  