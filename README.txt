PUANTAJ V4 — KURULUM

1) FRONTEND
Bu klasörü HTTPS üzerinden yayınlayın. En kolay seçenekler: GitHub Pages, Netlify veya Cloudflare Pages.
HTTPS gerekir; böylece uygulama mobil/masaüstünde PWA olarak ana ekrana kurulabilir.

2) GOOGLE DRIVE VERİ DEPOSU
Google Apps Script'te yeni bir proje açın.
Code.gs içeriğini yapıştırın.
Deploy > New deployment > Web app:
- Execute as: Me
- Who has access: Anyone (veya kuruluş hesabınıza uygun erişim)
Deploy edin ve Web App URL'sini kopyalayın.
Uygulamanın "Google Drive bağlantısı" alanına bu URL'yi yapıştırın.

3) TEK TUŞLA ERİŞİM
iPhone/iPad: Safari > Paylaş > Ana Ekrana Ekle
Android/Chrome: Menü > Uygulamayı yükle / Ana ekrana ekle
Masaüstü Chrome/Edge: adres çubuğundaki Yükle simgesi.

4) ÖZELLİKLER
- Şantiye > Ekip > İşçi
- Şantiye silme
- Ekip silme
- İşçi ekleme/silme
- Haftalık ana görünüm
- Tek tuşla aylık liste
- Sürekli/Süreksiz işçi
- İşçi/Ekip/Şantiye için tarih aralıklı yevmiye raporu
- Google Drive senkronizasyonu
- PWA / mobil + masaüstü
- Offline önbellek

NOT
Silinen işçi/ekip/şantiyelerin geçmiş puantaj kayıtları records içinde korunur; aktif listeden kaldırılır.
