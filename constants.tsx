
import { CategoryNode, GlobalSettings } from './types';

export const INITIAL_GLOBAL_SETTINGS: GlobalSettings = {
  phoneNumber: '+90 555 000 00 00',
  instagramLink: 'https://instagram.com/g360ai',
  youtubeLink: 'https://youtube.com',
  emailAddress: 'info@g360ai.com',
  contactTitle: 'Projelerinizi 360° Hayata Geçirelim',
  contactDescription: 'Dijital dönüşüm süreçleriniz, fiyat teklifleri ve iş birlikleri için bize aşağıdaki kanallardan dilediğiniz zaman ulaşabilirsiniz.'
};

export const PORTFOLIO_DATA: CategoryNode[] = [
  {
    id: 'special',
    title: 'Özel Çekimlerimiz ✨',
    iconName: 'Star',
    isSpecial: true,
    items: [
      { id: 's1', name: 'Anıtkabir', location: 'Çankaya, Ankara', linkUrl: '#', description: "Ata'mızın ebedi istirahatgâhını 360° gezilebilir hale getirdik. 🇹🇷" },
      { id: 's2', name: 'Glitch Gifts and Novelties', location: 'Kanada', linkUrl: '#', description: 'Kanada ekibimizin sizler için özel bir sürprizi var. 😉' },
      { id: 's3', name: 'Hooters Saskatoon', location: 'Kanada', linkUrl: '#', description: 'Dünyanın en seksi restoran zincirinin çekimlerindeyiz. 🦉' },
      { id: 's4', name: 'Artemisia Sergi Salonu', location: 'Bodrum Belediyesi', linkUrl: '#', description: "Bodrum'da sanatın büyüleyici dünyasını keşfedin! ☀️" },
      { id: 's5', name: 'Highway Outlet', location: 'Bolu', linkUrl: '#', description: "Avrupa'nın en büyük otoyol üzeri alışveriş tesisi'ni gezin! 🛣️" }
    ]
  },
  {
    id: 'aspava',
    title: "Tüm Aspava'ları gelmeden gezin 😋",
    iconName: 'Utensils',
    isSpecial: true,
    items: [
      { id: 'a1', name: 'Gülçimen Aspava', location: 'Esat, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a2', name: 'Yıldız Aspava', location: 'Balgat, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a3', name: 'Yıldırım Aspava', location: 'Tandoğan, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a4', name: 'Haydar Gülçimen Aspava', location: 'Trabzon', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a5', name: 'Akkaya Aspava', location: 'YDA, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a6', name: 'Halil Gülçimen Aspava', location: 'Eryaman, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a7', name: 'Ülgerler Aspava', location: 'Mustafa Kemal, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a8', name: 'Yıldız Aspava', location: '(100.Yıl), Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a9', name: 'Gülçimen Aspava', location: 'Mustafa Kemal, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a10', name: 'Tarihi Aspava', location: 'Bağlıca, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a11', name: 'Karataş Aspava', location: 'Etlik, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a12', name: 'Yıldız Aspava', location: 'Podium Avm, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a13', name: 'Musa Çimen Aspava', location: 'Mamak, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a14', name: 'Yıldız Aspava', location: 'Ovacık, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a15', name: 'Cengiz Yıldırım Aspava', location: 'Balgat, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a16', name: 'Koyuncu Aspava', location: 'Ovacık, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a17', name: 'Şimşek Aspava', location: 'Kızılay, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a18', name: 'Gülcemal Aspava', location: 'Elazığ', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a19', name: 'Acarbey Aspava', location: 'Alacaatlı, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a20', name: 'Koç Aspava', location: 'Beytepe, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'a21', name: 'Yıldırım Aspava', location: 'Kırıkkale', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '1',
    title: '1 | Otel / Konaklama İşletmesi',
    iconName: 'Hotel',
    children: [
      {
        id: '1-5star',
        title: '5 Yıldızlı Otel',
        items: [
          { 
            id: 'h1', 
            name: 'Ramada By Wyndham Karapinar Konya', 
            location: 'Karapınar, Konya', 
            address: 'Ulus Mahallesi, Ulus Street D330 No:1280, 42400 Karapınar/Konya, Türkiye',
            phoneNumber: '+90 332 744 00 44',
            rating: 4.7,
            reviewCount: 458,
            websiteUrl: 'https://www.wyndhamhotels.com/ramada',
            linkUrl: 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJcQNXvJdt1xQRmwCCzw-B_Hs', 
            description: 'Konfor ve lüksün buluştuğu noktada eşsiz bir konaklama deneyimi.',
            imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop', 
            googlePlaceId: 'ChIJcQNXvJdt1xQRmwCCzw-B_Hs'
          },
          { 
            id: 'h2', 
            name: 'Ramada Plaza by Wyndham Samsun', 
            location: 'İlkadım, Samsun', 
            address: 'Liman, Atatürk Blv. No:150, 55100 İlkadım/Samsun',
            phoneNumber: '+90 362 431 33 33',
            rating: 4.6,
            reviewCount: 1240,
            websiteUrl: 'https://www.wyndhamhotels.com/ramada/samsun-turkey/ramada-plaza-samsun/overview',
            linkUrl: 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJEeZYZRBfbkAR0n82tWZAhsE', 
            description: 'Karadeniz manzaralı odalarıyla şehrin kalbinde, prestijli bir konaklama.',
            imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop',
            googlePlaceId: 'ChIJEeZYZRBfbkAR0n82tWZAhsE'
          },
          { 
            id: 'h3', 
            name: 'Ramada Plaza by Wyndham Ankara', 
            location: 'Çankaya, Ankara', 
            address: 'Yaşam Cd. 1. Sk. No:4, 06520 Çankaya/Ankara',
            phoneNumber: '+90 312 219 03 03',
            rating: 4.5,
            reviewCount: 890,
            websiteUrl: 'https://www.wyndhamhotels.com/ramada/ankara-turkey/ramada-plaza-ankara/overview',
            linkUrl: 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJlS074TdVcUARsOK-acWMa1c', 
            description: 'Başkentin iş ve yaşam merkezinde, modern mimarisiyle öne çıkan bir otel.',
            imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
            googlePlaceId: 'ChIJlS074TdVcUARsOK-acWMa1c'
          },
          { id: 'h4', name: 'Mövenpick Hotel', location: 'Levent, İstanbul', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h5', name: 'Radisson Blu Hotel', location: 'Sarıyer, İstanbul', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h6', name: 'Divan Hotel', location: 'Şişli, İstanbul', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h7', name: 'Grand Millennium Hotel', location: 'Selçuklu, Konya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h8', name: 'Hotel Gold Majesty', location: 'Nilüfer, Bursa', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h9', name: 'Kikonia Art & Suites', location: 'Ayvalık, Balıkesir', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
        ]
      },
      {
        id: '1-34star',
        title: '3-4 Yıldızlı Otel',
        items: [
          { id: 'h10', name: 'North Door Hotel', location: 'Amasra, Bartın', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h11', name: 'Berra Resort Tatil Köyü', location: 'Sapanca, Sakarya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h12', name: 'Amber Suites', location: 'Akyaka, Muğla', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h13', name: 'Eleia Hotel', location: 'İznik, Bursa', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h14', name: 'Demederon Otel', location: 'Hamsiköy, Trabzon', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h15', name: 'Elifim Resort Hotel', location: 'Bolu', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h16', name: 'Ktisis Butik Otel', location: 'Şanlıurfa', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h17', name: 'Thrace Konak Hotel', location: 'Kırklareli', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h18', name: 'Macartaşı Hotel', location: 'Maçka, Trabzon', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h19', name: 'Bağlar Saray Hotel', location: 'Safranbolu, Karabük', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h20', name: 'LaDur Otel', location: 'Maçka, Trabzon', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h21', name: 'End Glory Hotel', location: 'Çorlu, Tekirdağ', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
        ]
      },
      {
        id: '1-apart',
        title: '1-2 Yıldız / Apart Otel',
        items: [
          { id: 'h22', name: 'Onur Taş Konak Otel', location: 'Halfeti, Şanlıurfa', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h23', name: 'Mavi Otel', location: 'Çorum', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h24', name: 'EzgiM Camping', location: 'Datça, Muğla', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h25', name: 'Serenti Otel', location: 'Giresun', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h26', name: 'Hacıhan Hotel', location: 'Trabzon', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h27', name: 'Ogün +1', location: 'Datça, Muğla', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h28', name: 'Akasya Apart Otel', location: 'Akyaka, Muğla', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h29', name: 'Ensar Otel Uzungöl', location: 'Trabzon', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
          { id: 'h30', name: 'Kuğu Butik Apart', location: 'Akçapınar, Muğla', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
        ]
      }
    ]
  },
  {
    id: '2',
    title: '2 | Kafe / Kahve Dükkanı',
    iconName: 'Coffee',
    items: [
      { id: 'c1', name: 'Arabica - Genel Müdürlüğü', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c2', name: 'Arabica - Velux', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c3', name: 'Arabica - Dora Park', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c4', name: 'Mackbear', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c5', name: 'Mackbear', location: 'Sivas', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c6', name: 'Mackbear', location: 'Kapadokya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c7', name: "Gloria Jean's", location: 'İstanbul', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c8', name: "Gloria Jean's", location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c9', name: "Gloria Jean's", location: 'Niğde', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c10', name: 'Coffy', location: 'Muğla', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c11', name: 'Coffy', location: 'Kayseri', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c12', name: 'Coffy', location: 'Denizli', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c13', name: 'Pablo Artisan', location: 'Eskişehir', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c14', name: 'Pablo Artisan', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c15', name: 'Pablo Artisan', location: 'İstanbul', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c16', name: 'Boston Drink & Dessert', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c17', name: 'Boston Drink & Dessert', location: 'Muğla', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c18', name: 'Colombia Coffee - 1', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c19', name: 'Colombia Coffee - 2', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c20', name: 'Milklaç', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c21', name: 'Çikolata Evim', location: 'İstanbul', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c22', name: "Cadı'nın Evi", location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c23', name: 'Bayramefendi Osmanlı Kahvecisi', location: 'Muğla', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c24', name: 'Dospresso', location: 'Gaziantep', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c25', name: 'Gua Coffee Company', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'c26', name: 'Artukbey Kahve', location: 'Erzurum', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '3',
    title: '3 | Mobilya Mağazası',
    iconName: 'Armchair',
    items: [
      { id: 'm1', name: 'İstikbal', location: 'Gaziantep', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm2', name: 'İstikbal', location: 'Konya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm3', name: 'İstikbal', location: 'Çorlu', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm4', name: 'Bellona', location: 'Amasya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm5', name: 'Bellona', location: 'Malatya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm6', name: 'Bellona', location: 'Çanakkale', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm7', name: 'Doğtaş', location: 'Çorum', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm8', name: 'Doğtaş', location: 'Bolu', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm9', name: 'Doğtaş', location: 'Çerkezköy', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm10', name: 'Kelebek', location: 'Nevşehir', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm11', name: 'Kelebek', location: 'Çorum', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm12', name: 'Kelebek', location: 'Amasya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm13', name: 'Mondi', location: 'Bolu', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm14', name: 'Mondi', location: 'Malatya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm15', name: 'Mondi', location: 'Rize', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm16', name: 'Weltew Home', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm17', name: 'Yataş Bedding', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm18', name: 'Çilek Odası', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm19', name: 'Bambi Yatak', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm20', name: 'DivanEv', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm21', name: 'İşbir Yatak', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm22', name: 'Puffy', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm23', name: 'Almila', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'm24', name: 'Alfemo', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '4',
    title: '4 | Restoran / Yeme İçme Yeri',
    iconName: 'UtensilsCrossed',
    items: [
      { id: 'r1', name: 'Konya Kebap Evi', location: 'Konya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r2', name: 'Ciğerci Remzi Usta', location: 'Diyarbakır', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r3', name: 'İconic cafe & bistro', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { 
        id: 'r4', 
        name: 'Aksu Cağ Kebap', 
        location: 'Erzurum', 
        linkUrl: '#', 
        description: 'Meşhur Erzurum Cağ Kebabı lezzetini yerinde keşfedin.',
        imageUrl: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2070&auto=format&fit=crop',
        reviewCount: 1150,
        rating: 4.8
      },
      { id: 'r5', name: 'Akpınar Restaurant', location: 'Trabzon', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r6', name: 'Ciğerci Ahmet', location: 'Sapanca', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r7', name: 'Romeika Restorant', location: 'İstanbul', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r8', name: 'Eypark Restaurant', location: 'Kırıkkale', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r9', name: 'Konakoğlu 1924 Tesisleri', location: 'Çanakkale', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r10', name: 'Han Mutfak Sanatları', location: 'Mardin', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r11', name: 'Van Kahvaltı Sarayı', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r12', name: "Nihat'ın Yeri Balık Restaurantı", location: 'İznik', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r13', name: 'Has Döner', location: 'Aksaray', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r14', name: 'Dayı Kürek Lahmacun', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r15', name: 'Bursa Kebap Evi', location: 'Muğla', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r16', name: 'Günbatımı Balık', location: 'Amasra', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r17', name: 'Mengen Et Mangal', location: 'Bolu', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r18', name: 'Konyalı Keko Usta', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r19', name: 'Pehlivan Et Lokantası', location: 'Sakarya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r20', name: 'Sera Gölü Restaurant', location: 'Trabzon', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'r21', name: 'SushiCo', location: 'Sakarya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '5',
    title: '5 | Eğitim Kurumu',
    iconName: 'GraduationCap',
    items: [
      { id: 'e1', name: 'Muğla Sıtkı Koçman Üniversitesi', location: 'Muğla', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'e2', name: 'Dünya Çocuk Üniversitesi', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'e3', name: 'English Time Dil Okulu', location: 'Muğla', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'e4', name: 'Sarızeybek Özel Eğitim Grubu', location: 'İzmir', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'e5', name: 'Wimbledon Academy', location: 'Konya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'e6', name: 'Doğru Rehber Cem Durak Kurs Merkezi', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '6',
    title: '6 | Güzellik Salonu / Kuaför / Berber',
    iconName: 'Scissors',
    items: [
      { id: 'g1', name: 'Hüseyin Gül Kuaför', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'g2', name: 'Chic Güzellik & Kuaför', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'g3', name: 'Freya Fit & Beauty', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '7',
    title: '7 | Kuyumcu / Mücevher Mağazası',
    iconName: 'Gem',
    items: [
      { id: 'k1', name: 'Yamaner Kuyumculuk', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'k2', name: 'Alyanaklar Kuyumculuk', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'k3', name: 'Özdemir Kuyumculuk', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '8',
    title: '8 | Kırtasiye / Kitapçı',
    iconName: 'BookOpen',
    items: [
      { id: 'kk1', name: 'Kampüs Kitap Kırtasiye', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'kk2', name: 'Ant Kırtasiye', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'kk3', name: 'Ayba Kırtasiye', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '9',
    title: '9 | Pet Shop / Veteriner',
    iconName: 'PawPrint',
    items: [
      { id: 'v1', name: 'Ortovet Veteriner Kliniği', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'v2', name: 'Dinç Pati Hayvan Hastanesi', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'v3', name: 'AKAVET Veteriner Kliniği', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '10',
    title: '10 | Spor Salonu / GYM',
    iconName: 'Dumbbell',
    items: [
      { id: 'sp1', name: 'Vamos Akademi', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'sp2', name: 'Jungle Pilates & Training Studio', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'sp3', name: 'Gymnasium Edremit Spor Merkezi', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'sp4', name: 'Olympia Sports Center', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'sp5', name: 'Podium Spor Merkezi', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '11',
    title: '11 | Optik Mağaza / Gözlükçü',
    iconName: 'Glasses',
    items: [
      { id: 'o1', name: 'Arasta Optik', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'o2', name: 'Esc Gülen Optik', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'o3', name: 'Bizim Optik', location: 'Çorlu', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '12',
    title: '12 | Klinik / Diş Kliniği',
    iconName: 'Stethoscope',
    items: [
      { id: 'dk1', name: 'Özel Beyazıt Diş Sağlığı Polikliniği', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'dk2', name: 'Gaziantep Akdeniz Diş Sağlığı Polikliniği', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'dk3', name: 'Avend Dental Clinic', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '13',
    title: '13 | Beyaz Eşya Mağazası',
    iconName: 'Refrigerator',
    items: [
      { id: 'b1', name: 'Arçelik - Erenler', location: 'Erenler, Sakarya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'b2', name: 'Vestel İbrahimli - Uğur Pazarlama', location: 'Şehitkamil, Gaziantep', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'b3', name: 'Siemens - Sivas', location: 'Merkez, Sivas', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'b4', name: 'Samsung - Kutup/Mahall', location: 'Çankaya, Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'b5', name: 'Beko - Kozmos Dayanıklı Tüketim', location: 'Melikgazi, Kayseri', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'b6', name: 'ÖZTUNA BOSCH AKKENT', location: 'Şahinbey, Gaziantep', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'b7', name: 'Uğur Yetkili Bayi-Altınoğlu', location: 'Altınoğlu, Antalya', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'b8', name: 'Franke Ankastre Mağazası Dessoni Bayi', location: 'Kadıköy, İstanbul', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'b9', name: 'CEN-AY PROFİLO BAYİİ', location: 'Merkez, Kırıkkale', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '14',
    title: '14 | Küçük Esnaf / Market',
    iconName: 'Store',
    items: [
      { id: 'ke1', name: 'Velux Eczanesi', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'ke2', name: 'Gurme Kırkpınar', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'ke3', name: 'Akvaryum Balık Av Malzemeleri', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '15',
    title: '15 | Otomotiv Sektörü',
    iconName: 'Car',
    items: [
      { id: 'oto1', name: 'Mercedes-Benz', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'oto2', name: 'Saskatoon Mitsubishi', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'oto3', name: 'Umran Oto Ekspertiz', location: 'Bolu', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '16',
    title: '16 | Yapı Market',
    iconName: 'Hammer',
    items: [
      { id: 'ym1', name: 'KARDEM YAPI İNŞAAT', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'ym2', name: 'Yapı Market - Filli Boya', location: 'Muğla', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'ym3', name: 'Koçlar Yapı Market', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '17',
    title: '17 | Cep Telefonu Mağazası',
    iconName: 'Smartphone',
    items: [
      { id: 't1', name: 'Turkuaz Teknoloji Ürünleri - Samsung', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 't2', name: 'BG STORE BAĞCI TEKNOLOJİ', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 't3', name: 'SILA İLETİŞİM', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '18',
    title: '18 | Eczane / Sağlık Mağazası',
    iconName: 'Pill',
    items: [
      { id: 'ecz1', name: 'Velux Eczanesi', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'ecz2', name: 'Metsa Medikal', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'ecz3', name: 'Hera Eczanesi', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '19',
    title: '19 | Giyim Mağazası / Butik',
    iconName: 'Shirt',
    items: [
      { id: 'gi1', name: 'Mercan / Leather & Fur', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'gi2', name: 'MODA TEXİN', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'gi3', name: 'İDEAL AYAKKABI', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '20',
    title: '20 | Pub / Bar',
    iconName: 'Beer',
    items: [
      { id: 'pb1', name: 'Holly Stone', location: 'Muğla', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'pb2', name: 'Bihter Tekirdağ Yeni Konsept Eğlence', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'pb3', name: 'Route 48', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'pb4', name: 'Xolo', location: 'Ankara', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'pb5', name: 'Holly Stone', location: 'Denizli', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'pb6', name: 'Zeytin Meyhane', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '21',
    title: '21 | Aydınlatma / Dekorasyon',
    iconName: 'Lightbulb',
    items: [
      { id: 'ad1', name: 'AKSOY AVİZE', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'ad2', name: 'KONYA AVİZE ATÖLYESİ', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'ad3', name: 'Bizim Optik', location: 'Çorlu', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  },
  {
    id: '22',
    title: '22 | Çiçekçi / Botanik',
    iconName: 'Flower',
    items: [
      { id: 'cicek1', name: 'Mevsim Çiçek', location: 'Kayseri', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'cicek2', name: 'The Garden Shopping Çiçek&Peyzaj', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' },
      { id: 'cicek3', name: 'TRAKYA ÇİÇEKÇİLİK PEYZAJ', location: '', linkUrl: '#', description: 'G360 AI ile 360° Gez!' }
    ]
  }
];