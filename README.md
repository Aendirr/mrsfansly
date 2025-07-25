# MrFans Agency - Modern OnlyFans Ajans Websitesi

## 🚀 Genel Bakış

Bu proje, OnlyFans ajansları için modern, responsive ve tamamen özelleştirilebilir bir website'dir. Video destekli hero section, 3x3 grid layout, bebek mavisi başvur butonları ve dark mode özelliği ile geliştirilmiştir.

## ✨ Özellikler

- 🎥 **Video Destekli Hero Section** - Etkileyici giriş ekranı
- 🧭 **Modern Header** - Sabit navbar, sosyal medya linkleri, bebek mavisi başvur butonu
- 🎯 **3x3 Konfigürasyonlu Grid Sistemi** - Tamamen özelleştirilebilir
- 📱 **Video Alt Slider** - OnlyFans korumaları ve DMCA mesajları
- 👥 **Models Section** - Tıklanabilir model profilleri ve detay modalları
- 🌙 **Dark/Light Mode** - Kullanıcı tercihi ile değiştirilebilir
- 📱 **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- ⚙️ **Kolay Konfigürasyon** - Tek dosyadan tüm içerikleri yönetin
- 🎨 **Modern UI/UX** - Gradient efektler ve smooth animasyonlar
- ♿ **Accessibility** - Erişilebilirlik standartlarına uygun
- 🖼️ **Glassmorphism Modallar** - About, Model Detay ve Hizmet Detay modalları
- 📱 **Mobil Menü Sistemi** - Hamburger menü ve backdrop blur efektleri
- 📊 **Detaylı İstatistikler** - Model performans ve hizmet istatistikleri
- 🔗 **Sosyal Medya Entegrasyonu** - Tıklanabilir sosyal medya linkleri

## 🛠️ Teknolojiler

- React 18
- ES6+ JavaScript
- CSS3 (Custom Properties ile Dark Mode)
- Modern CSS Grid & Flexbox
- Responsive Design

## 📦 Kurulum

1. **Gereksinimler**: Node.js (v14 veya üzeri)

2. **Bağımlılıkları yükleyin**:
   `
   npm install
   `

3. **Geliştirme sunucusunu başlatın**:
   `
   npm start
   `

4. **Tarayıcıda görüntüleyin**: [http://localhost:3000](http://localhost:3000)

## ⚙️ Konfigürasyon

Tüm site içerikleri `src/config/siteConfig.js` dosyasından yönetilir:

### Hero Section
`javascript
hero: {
  mainHeading: "Ana başlığınız",
  subHeading: "Alt başlığınız",
  description: "Açıklama metniniz",
  videoUrl: "/videos/hero-video.mp4",
  ctaButton: {
    text: "Buton metni",
    link: "#section"
  }
}
`

### Grid Items (3x3)
`javascript
gridSection: {
  items: [
    {
      id: 1,
      title: "Başlık",
      description: "Açıklama",
      icon: "🎯",
      link: "#link"
    }
    // ... 9 adet item
  ]
}
`

### Video Alt Slider
`javascript
sliderMessages: [
  "🔒 DMCA koruması altında güvenli içerik yönetimi",
  "⚖️ Telif hakları ihlallerine anında müdahale",
  // ... 12 adet mesaj
]
`

### Alt Bölüm
`javascript
bottomSection: {
  heading: "Başlığınız",
  text: "Açıklama metniniz"
}
`

## 🎥 Video Ekleme

### Yerel Video (Şu anda kullanımda)
1. Video dosyanızı `public/assets/` klasörüne koyun
2. Video dosyanızın adı: `31.mp4` olmalı (veya `siteConfig.js`'te yolu güncelleyin)
3. Şu anda: `"/assets/31.mp4"` kullanılıyor
4. Video otomatik oynatma, sessiz ve döngüde çalışır

### YouTube Video
1. `siteConfig.js` dosyasında `hero.videoUrl` değerine YouTube URL'ini yazın
2. Örnek: `"https://www.youtube.com/watch?v=VIDEO_ID"`
3. Video otomatik olarak sessiz ve döngüde oynatılır

### Fallback Image
1. Video yüklenemezse gösterilecek resim için: `public/images/hero-poster.jpg`

## 🎨 Renk Teması Özelleştirme

CSS değişkenleri `src/index.css` dosyasında:

`css
:root {
  --primary-bg: #ffffff;
  --primary-text: #000000;
  --secondary-bg: #f8f9fa;
  --border-color: #e9ecef;
  
  /* Bebek Mavisi Buton Paleti */
  --baby-blue: #87CEEB;
  --baby-blue-hover: #6BB6E8;
  --baby-blue-light: #B0E0E6;
  --baby-blue-dark: #5F9EA0;
}

[data-theme="dark"] {
  --primary-bg: #1a1a1a;
  --primary-text: #ffffff;
  --secondary-bg: #2d2d2d;
  --border-color: #404040;
  /* Bebek mavisi dark mode'da da aynı */
}
`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Production Build

`bash
npm run build
`

Build klasörü static hosting servislerine deploy edilebilir.

## 📁 Proje Yapısı

src/

├── components/

│   ├── Navbar/               # Sabit header (bebek mavisi başvur butonu)

│   ├── HeroSection/          # Video'lu ana ekran (bebek mavisi başvur butonu)

│   ├── ServicesGrid/         # 3x3 grid sistemi

│   ├── TextSlider/           # Video alt slider (DMCA mesajları)

│   ├── ModelsSection/        # Model profilleri placeholder

│   ├── BottomSection/        # Alt metin bölümü (bebek mavisi butonlar)

│   └── ThemeToggle/          # Dark mode butonu

├── contexts/

│   └── ThemeContext.js       # Dark mode yönetimi

├── config/

│   └── siteConfig.js         # Site konfigürasyonu (slider mesajları dahil)

├── App.js                    # Ana component

├── index.js                  # React entry point

└── index.css                 # Global stiller (bebek mavisi renk paleti)

`

## 🔧 Özelleştirme İpuçları

1. **Logo Özelleştirme**: Navbar'daki logo ikonunu ve metni değiştirebilirsiniz
2. **Navbar Menü**: Menu öğelerini `Navbar.js` dosyasından güncelleyebilirsiniz
3. **Sosyal Medya**: `siteConfig.js` dosyasından sosyal medya linklerini güncelleyin
4. **Buton Renkleri**: `index.css` dosyasında `--baby-blue` değişkenlerini değiştirin
5. **Models Section**: Placeholder yerine gerçek model profilleri ekleyebilirsiniz
6. **Footer**: Ekstra bilgiler için footer componenti oluşturabilirsiniz
7. **Slider Özelleştirme**: `sliderMessages` dizisini güncelleyerek mesajları değiştirin
8. **Animasyonlar**: CSS transition'ları artırabilirsiniz
9. **SEO**: Meta tag'lar için React Helmet kullanabilirsiniz

## 🐛 Sorun Giderme

- **Video oynatılmıyor**: Tarayıcı autoplay policy'si nedeniyle muted olmalı
- **Dark mode çalışmıyor**: localStorage desteği gereklidir
- **Responsive sorunlar**: CSS Grid desteği gereklidir
- **Slider mesajları gözükmüyor**: `siteConfig.js` dosyasında `sliderMessages` dizisini kontrol edin
- **Navbar menü çalışmıyor**: Section ID'lerinin doğru olduğundan emin olun

## 📞 Destek

Herhangi bir sorun veya özelleştirme talebi için iletişime geçebilirsiniz.

---

**Not**: Bu template, OnlyFans ajansları için özel olarak tasarlanmıştır ve tüm yasal gerekliliklere uygun şekilde kullanılmalıdır. 


## License

This project is licensed under the Apache License 2.0 – see the [LICENSE](./LICENSE) file for details.
