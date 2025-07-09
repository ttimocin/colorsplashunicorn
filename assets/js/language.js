/**
 * Color Splash - Unicorn Boyama Kitabı
 * Multi-language Support System
 */

// Language data
const translations = {
    tr: {
        // Meta
        meta_title: 'Color Splash Unicorn Boyama - Eğlenceli Boyama Uygulaması',
        meta_description: 'Çocuklar için eğlenceli ve eğitici boyama uygulaması. Yüzlerce farklı boyama sayfası ile çocuğunuzun yaratıcılığını geliştirin.',
        
        // Menu
        menu_home: 'Ana Sayfa',
        menu_features: 'Özellikler',
        menu_about: 'Hakkımızda',
        menu_privacy: 'Gizlilik Politikası',
        menu_contact: 'İletişim',
        menu_download: 'İndir',
        
        // Home Page
        home_title: 'Color Splash Unicorn Boyama',
        home_subtitle: 'Çocuğunuzun yaratıcılığını ve hayal gücünü geliştiren eğlenceli boyama uygulaması!',
        home_download: 'Hemen İndir',
        home_features: 'Özellikler',
        home_why: 'Neden Color Splash Unicorn Boyama?',
        home_fun_coloring: 'Eğlenceli Boyama',
        home_fun_coloring_desc: 'Yüzlerce farklı boyama sayfası ile çocuklar eğlenerek öğrenir',
        home_creativity: 'Yaratıcılık',
        home_creativity_desc: 'Sınırsız renk seçeneği ile yaratıcılığı geliştirme',
        home_child_friendly: 'Çocuk Dostu',
        home_child_friendly_desc: 'Basit ve kullanımı kolay arayüz ile çocuklar için özel tasarım',
        home_anywhere: 'Heryerde Kullanım',
        home_anywhere_desc: 'Çevrimdışı çalışma özelliği ile her yerde boyama yapabilme',
        home_categories: 'Boyama Kategorilerimiz',
        home_category_animals: 'Hayvanlar',
        home_category_nature: 'Doğa',
        home_category_vehicles: 'Taşıtlar',
        home_category_unicorns: 'Tek Boynuzlular',
        home_testimonials: 'Ebeveynler Ne Diyor?',
        home_testimonial1: '"Kızım bu uygulamayı çok seviyor. Her gün en az bir saat boyama yapıyor ve yaratıcılığını geliştiriyor."',
        home_testimonial1_author: 'Ayşe Y.',
        home_testimonial1_info: 'İki çocuk annesi',
        home_testimonial2: '"Oğlum tablet bağımlısıydı ama şimdi bu uygulamayla hem eğleniyor hem de faydalı vakit geçiriyor."',
        home_testimonial2_author: 'Mehmet K.',
        home_testimonial2_info: 'Bir çocuk babası',
        home_download_now: 'Hemen İndirin!',
        home_download_desc: 'Çocuğunuzun hayal gücünü geliştirmek için şimdi Color Splash Unicorn Boyama uygulamasını indirin.',
        
        // Footer
        footer_description: 'Çocukların yaratıcılığını geliştiren eğlenceli boyama uygulaması',
        footer_quick_links: 'Hızlı Bağlantılar',
        footer_legal: 'Yasal',
        footer_terms: 'Kullanım Şartları',
        footer_gdpr: 'KVKK',
        footer_follow: 'Bizi Takip Edin',
        footer_copyright: 'Tüm hakları saklıdır.',
        footer_rights: 'Tüm hakları saklıdır.',
        footer_design: 'Tasarım ve Geliştirme:',
        
        // Contact
        contact_title: 'İletişim',
        contact_subtitle: 'Sorularınız için bizimle iletişime geçin',
        contact_info: 'İletişim Bilgileri',
        contact_email: 'E-posta',
        contact_form: 'İletişim Formu',
        contact_name: 'İsim Soyisim',
        contact_subject: 'Konu',
        contact_message: 'Mesajınız',
        contact_send: 'Gönder',
        
        // Features Page
        features_title: 'Uygulamamızın Özellikleri',
        features_subtitle: 'Çocuğunuzun yaratıcılığını geliştiren tüm özelliklerimiz',
        features_description: 'Color Splash Unicorn Boyama uygulamasının çocuğunuzun yaratıcılığını geliştiren tüm özellikleri',
        features_templates_title: 'Yüzlerce Boyama Şablonu',
        features_templates_desc: 'Color Splash Unicorn Boyama uygulaması, yüzlerce farklı boyama şablonu içerir. Hayvanlar, doğa, taşıtlar, unicornlar ve daha birçok kategoride boyama şablonları bulunur.',
        features_templates_1: 'Sürekli güncellenen şablonlar',
        features_templates_2: 'Yaş gruplarına göre zorluk seviyeleri',
        features_templates_3: 'Eğitici ve eğlenceli içerikler',
        features_templates_4: 'HD kalitede çizimler',
        features_advanced_title: 'Gelişmiş Boyama Özellikleri',
        features_advanced_desc: 'Çocuk Boyama uygulaması, gelişmiş boyama özellikleri ile çocuğunuzun yaratıcılığını destekler. Sınırsız renk seçeneği, farklı fırça boyutları ve özel efektler ile boyama yapmak çok daha eğlenceli.',
        features_advanced_1: 'Sınırsız renk paleti',
        features_advanced_2: 'Farklı fırça boyutları ve tipleri',
        features_advanced_3: 'Silme ve geri alma özellikleri',
        features_advanced_4: 'Parıltı, gökkuşağı ve sihirli efektler',
        features_sharing_title: 'Paylaşım Özellikleri',
        features_sharing_desc: 'Çocuğunuzun tamamladığı resimleri kolayca kaydedin ve ailenizle paylaşın. Sosyal medyada paylaşabilir veya direkt olarak cihazınıza kaydedebilirsiniz.',
        features_sharing_1: 'Tamamlanan resimleri kaydetme',
        features_sharing_2: 'Sosyal medyada doğrudan paylaşım',
        features_sharing_3: 'Galeri oluşturma ve düzenleme',
        features_sharing_4: 'Yazdırma özelliği',
        features_offline_title: 'Çevrimdışı Kullanım',
        features_offline_desc: 'İnternet bağlantısı olmadan da Color Splash Unicorn Boyama uygulamasını kullanabilirsiniz. İlk indirme sonrasında tüm temel özellikler çevrimdışı olarak kullanılabilir.',
        features_offline_1: 'İnternet bağlantısı gerekmez',
        features_offline_2: 'Seyahatler için ideal',
        features_offline_3: 'Veri kullanımı yok',
        features_offline_4: 'Her zaman erişilebilir',
        features_categories_title: 'Boyama Kategorilerimiz',
        features_category_animals: 'Hayvanlar',
        features_category_animals_desc: 'Sevimli hayvanlar, vahşi yaşam ve çiftlik hayvanları boyama sayfaları',
        features_category_nature: 'Doğa',
        features_category_nature_desc: 'Mevsimler, bitkiler, çiçekler ve manzara resimleri',
        features_category_vehicles: 'Taşıtlar',
        features_category_vehicles_desc: 'Arabalar, trenler, uçaklar ve daha fazlası',
        features_category_unicorns: 'Tek Boynuzlular',
        features_category_unicorns_desc: 'Sihirli unicornlar ve peri masalı karakterleri',
        features_category_heroes: 'Kahramanlar',
        features_category_heroes_desc: 'Süper kahramanlar ve çizgi film karakterleri',
        features_category_shapes: 'Figürler',
        features_category_shapes_desc: 'Geometrik şekiller ve eğitici figürler',
        features_unicorn_title: 'Unicorn Macera Oyunu',
        features_unicorn_desc: 'İnteraktif unicorn macera oyun moduyla büyülü yolculuklara çıkın',
        features_unicorn_1: 'Kendi benzersiz unicorn karakterinizi oluşturun',
        features_unicorn_2: 'Büyülü ormanları ve sihirli diyarları keşfedin',
        features_unicorn_3: 'Sihirli eşyalar ve özel güçler toplayın',
        features_unicorn_4: 'Heyecan verici görevleri ve maceraları tamamlayın',
        features_puzzle_title: 'Puzzle Oyun Modu',
        features_puzzle_desc: 'Eğlenceli puzzle oyun özellikleriyle kendinizi zorlayın',
        features_puzzle_1: 'Her yaş için farklı zorluk seviyeleri',
        features_puzzle_2: 'Güzel resimleri parça parça oluşturun',
        features_puzzle_3: 'Rekabetçi oyun için süre ve puan takibi',
        features_puzzle_4: 'İstediğiniz zaman puzzle ilerlemenizi kaydedin ve devam edin',
        
        // About Page
        about_title: 'Hakkımızda',
        about_subtitle: 'Çocuk Boyama uygulamasının hikayesi ve arkasındaki ekip',
        about_description: 'Color Splash Unicorn Boyama uygulamasının hikayesi ve arkasındaki ekip hakkında bilgi edinin',
        about_story_title: 'Hikayemiz',
        about_story_p1: 'Color Splash Unicorn Boyama uygulaması, çocukların yaratıcılığını ve hayal gücünü geliştirmek amacıyla 2023 yılında kuruldu. Ebeveynler olarak, çocuklarımızın dijital dünyada kaliteli zaman geçirmelerini sağlamak istedik.',
        about_story_p2: 'Geleneksel boyama kitaplarının dijital ortama taşınması fikri ile yola çıktık ve çocuklar için özel olarak tasarlanmış, eğlenceli ve eğitici bir uygulama geliştirdik.',
        about_story_p3: 'Bugün, Color Splash Unicorn Boyama uygulaması dünya genelinde milyonlarca çocuk tarafından kullanılmakta ve her geçen gün daha da büyümektedir.',
        about_mission_title: 'Misyonumuz',
        about_mission_p1: 'Misyonumuz, çocukların yaratıcılığını ve hayal gücünü teknoloji ile birleştirerek geliştirmek ve onlara eğlenceli bir öğrenme ortamı sunmaktır.',
        about_mission_values: 'İnandığımız değerler:',
        about_value_creativity: 'Yaratıcılık',
        about_value_creativity_desc: 'Çocukların sınırsız hayal gücünü desteklemek',
        about_value_education: 'Eğitim',
        about_value_education_desc: 'Eğlenceli içerikler ile öğrenmeyi teşvik etmek',
        about_value_security: 'Güvenlik',
        about_value_security_desc: '%100 çocuk dostu ve güvenli bir dijital ortam sunmak',
        about_value_quality: 'Kalite',
        about_value_quality_desc: 'Sürekli gelişen ve yenilenen içerikler ile en kaliteli deneyimi sağlamak',
        about_team_title: 'Ekibimiz',
        about_team_subtitle: 'Color Splash Unicorn Boyama uygulamasının arkasındaki tutkulu ekip ile tanışın',
        about_team_member1_name: 'Ahmet Yılmaz',
        about_team_member1_title: 'Kurucu & CEO',
        about_team_member1_bio: 'İki çocuk babası olan Ahmet, teknoloji ve eğitim alanındaki deneyimini Color Splash Unicorn Boyama uygulamasını geliştirmek için kullanıyor.',
        about_team_member2_name: 'Zeynep Kaya',
        about_team_member2_title: 'Ürün Tasarımcısı',
        about_team_member2_bio: 'Çocuk psikolojisi alanında uzman olan Zeynep, uygulamanın kullanıcı deneyimini çocuklar için en uygun şekilde tasarlıyor.',
        about_team_member3_name: 'Mehmet Öztürk',
        about_team_member3_title: 'Baş Geliştirici',
        about_team_member3_bio: '10 yılı aşkın yazılım geliştirme deneyimi ile Mehmet, uygulamanın teknik altyapısını yönetiyor.',
        about_team_member4_name: 'Ayşe Demir',
        about_team_member4_title: 'İllüstratör',
        about_team_member4_bio: 'Çocuk kitapları illüstratörü olan Ayşe, uygulamadaki tüm boyama şablonlarını özenle tasarlıyor.',
        about_stats_title: 'Rakamlarla Biz',
        about_stats_downloads: 'İndirme',
        about_stats_templates: 'Boyama Şablonu',
        about_stats_countries: 'Ülke',
        about_stats_rating: 'Kullanıcı Puanı',
        
        // Privacy Page
        privacy_title: 'Gizlilik Politikası',
        privacy_subtitle: 'Çocuk Boyama uygulamasının gizlilik ilkeleri',
        privacy_description: 'Color Splash uygulamasının gizlilik politikası ve veri koruma ilkeleri',
        privacy_overview: 'Genel Bakış',
        privacy_overview_desc: 'Color Splash uygulaması olarak, kullanıcılarımızın gizliliğini korumak en öncelikli konularımızdandır. Bu gizlilik politikası, uygulamayı kullanırken hangi bilgilerin toplandığını, nasıl kullanıldığını ve korunduğunu açıklamaktadır.',
        privacy_collect_title: 'Hangi Bilgileri Topluyoruz?',
        privacy_collect_desc: 'Uygulamayı kullanırken topladığımız bilgi türleri şunlardır:',
        privacy_personal_info: 'Kişisel Bilgiler',
        privacy_personal_info_desc: 'Herhangi bir kişisel bilgi toplamamız. Uygulama tamamen anonim olarak kullanılabilir.',
        privacy_usage_data: 'Kullanım Verileri',
        privacy_usage_data_desc: 'Uygulamanın nasıl kullanıldığına dair anonim istatistikler toplarız. Bu veriler sadece uygulama performansını artırmak için kullanılır.',
        privacy_device_info: 'Cihaz Bilgileri',
        privacy_device_info_desc: 'Cihaz tipi, işletim sistemi versiyonu gibi teknik bilgiler uygulamanın uyumluluğunu sağlamak için toplanır.',
        privacy_use_title: 'Bilgileri Nasıl Kullanıyoruz?',
        privacy_use_desc: 'Topladığımız bilgileri şu amaçlar için kullanırız: uygulamanın performansını artırmak, teknik sorunları gidermek, yeni özellikler geliştirmek ve kullanıcı deneyimini iyileştirmek. Hiçbir şekilde kişisel bilgilerinizi üçüncü taraflarla paylaşmayız.',
        privacy_sharing_title: 'Bilgi Paylaşımı',
        privacy_sharing_desc: 'Kullanıcı bilgilerini üçüncü taraflarla paylaşmayız, satmayız veya kiralamayız. Sadece yasal zorunluluklar söz konusu olduğunda, mahkeme kararı ile bilgi paylaşımı yapabiliriz.',
        privacy_security_title: 'Veri Güvenliği',
        privacy_security_desc: 'Verilerinizin güvenliğini sağlamak için endüstri standartlarında güvenlik önlemleri alıyoruz. Tüm veriler şifrelenmiş olarak saklanır ve güvenli sunucularda barındırılır.',
        privacy_children_title: 'Çocukların Gizliliği',
        privacy_children_desc: 'Uygulamamız 13 yaşından küçük çocuklar için tasarlanmıştır ve COPPA (Children\'s Online Privacy Protection Act) kurallarına uygun olarak işletilir. 13 yaşından küçük çocuklardan bilinçli olarak kişisel bilgi toplamayız.',
        privacy_changes_title: 'Politika Değişiklikleri',
        privacy_changes_desc: 'Bu gizlilik politikasını gerektiğinde güncelleyebiliriz. Önemli değişikliklerde kullanıcıları bilgilendiririz. Son güncelleme tarihi bu sayfanın altında belirtilmiştir.',
        privacy_contact_title: 'İletişim',
        privacy_contact_desc: 'Gizlilik politikası ile ilgili sorularınız için info@colorsplash.com adresinden bizimle iletişime geçebilirsiniz.',
        privacy_last_updated: 'Son güncelleme: 01.06.2023',
        
        // Download Page
        download_title: 'Uygulamayı İndirin',
        download_subtitle: 'Color Splash Unicorn Boyama uygulamasını cihazınıza indirin',
        download_description: 'Çocuklar için eğlenceli boyama uygulamasını indirin. Android ve iOS için ücretsiz!',
        download_intro_title: 'Ücretsiz İndirin',
        download_intro_desc: 'Color Splash uygulamasını Android ve iOS cihazlarınıza ücretsiz olarak indirip çocuklarınızla birlikte eğlenceli vakit geçirin.',
        download_android: 'Android İçin',
        download_android_desc: 'Google Play Store\'dan hemen indirin',
        download_ios: 'iOS İçin',
        download_ios_desc: 'App Store\'dan hemen indirin',
        download_features_title: 'Neler İçeriyor?',
        download_features_desc: 'Uygulamadaki tüm özellikler tamamen ücretsiz!',
        download_feature1: '100+ ücretsiz boyama şablonu',
        download_feature2: 'Çocuklar için güvenli içerik',
        download_feature3: 'Offline çalışma desteği',
        download_feature4: 'Çoklu dil desteği',
        download_feature5: 'Reklamsız deneyim',
        download_feature6: 'Düzenli içerik güncellemeleri',
        download_screenshots_title: 'Ekran Görüntüleri',
        download_screenshots_desc: 'Uygulamanın özelliklerini keşfedin',
        download_faq_title: 'Sık Sorulan Sorular',
        download_faq_desc: 'Uygulamayla ilgili merak ettikleriniz',
        download_faq1_question: 'Uygulama gerçekten ücretsiz mi?',
        download_faq1_answer: 'Evet, Color Splash uygulaması tamamen ücretsizdir. Hiçbir gizli ücret veya abonelik yoktur.',
        download_faq2_question: 'Hangi yaş grubuna uygun?',
        download_faq2_answer: 'Uygulamamız 3-12 yaş arası çocuklar için tasarlanmıştır. Farklı yaş grupları için uygun içerikler bulunmaktadır.',
        download_faq3_question: 'İnternet bağlantısı gerekli mi?',
        download_faq3_answer: 'Hayır, uygulama offline olarak çalışabilir. Sadece ilk indirme için internet bağlantısı gereklidir.',
        download_faq4_question: 'Yeni şablonlar ne zaman ekleniyor?',
        download_faq4_answer: 'Her ay yeni şablonlar ve özellikler ekliyoruz. Güncellemeler otomatik olarak bildirilir.',
        download_faq5_question: 'Çizimlerimi kaydedebilir miyim?',
        download_faq5_answer: 'Evet, tüm çizimleriniz otomatik olarak cihazınızda kaydedilir ve galeri bölümünden erişebilirsiniz.',
        download_screenshot1: 'Ana Sayfa',
        download_screenshot2: 'Boyama Sayfası',
        download_screenshot3: 'Renk Seçimi',
        download_screenshot4: 'Kategoriler',
        download_screenshot5: 'Galeri',
        download_screenshot6: 'Puzzle Oyunu'
    },
    
    en: {
        // Meta
        meta_title: 'Color Splash Unicorn Coloring - Fun Coloring App',
        meta_description: 'Fun and educational coloring app for children. Develop your child\'s creativity with hundreds of different coloring pages.',
        
        // Menu
        menu_home: 'Home',
        menu_features: 'Features',
        menu_about: 'About',
        menu_privacy: 'Privacy Policy',
        menu_contact: 'Contact',
        menu_download: 'Download',
        
        // Home Page
        home_title: 'Color Splash Unicorn Coloring',
        home_subtitle: 'A fun coloring app that develops your child\'s creativity and imagination!',
        home_download: 'Download Now',
        home_features: 'Features',
        home_why: 'Why Color Splash Unicorn Coloring?',
        home_fun_coloring: 'Fun Coloring',
        home_fun_coloring_desc: 'Children learn while having fun with hundreds of different coloring pages',
        home_creativity: 'Creativity',
        home_creativity_desc: 'Developing creativity with unlimited color options',
        home_child_friendly: 'Child Friendly',
        home_child_friendly_desc: 'Special design for children with simple and easy-to-use interface',
        home_anywhere: 'Use Anywhere',
        home_anywhere_desc: 'Ability to color anywhere with offline feature',
        home_categories: 'Our Coloring Categories',
        home_category_animals: 'Animals',
        home_category_nature: 'Nature',
        home_category_vehicles: 'Vehicles',
        home_category_unicorns: 'Unicorns',
        home_testimonials: 'What Do Parents Say?',
        home_testimonial1: '"My daughter loves this app. She colors for at least an hour every day and develops her creativity."',
        home_testimonial1_author: 'Sarah J.',
        home_testimonial1_info: 'Mother of two',
        home_testimonial2: '"My son was addicted to tablets but now he has fun and spends useful time with this app."',
        home_testimonial2_author: 'Mike K.',
        home_testimonial2_info: 'Father of one',
        home_download_now: 'Download Now!',
        home_download_desc: 'Download the Color Splash Unicorn Coloring app now to develop your child\'s imagination.',
        
        // Footer
        footer_description: 'Fun coloring app that develops children\'s creativity',
        footer_quick_links: 'Quick Links',
        footer_legal: 'Legal',
        footer_terms: 'Terms of Use',
        footer_gdpr: 'GDPR',
        footer_follow: 'Follow Us',
        footer_copyright: 'All rights reserved.',
        footer_rights: 'All rights reserved.',
        footer_design: 'Design and Development:',
        
        // Contact
        contact_title: 'Contact',
        contact_subtitle: 'Contact us for your questions',
        contact_info: 'Contact Information',
        contact_email: 'Email',
        contact_form: 'Contact Form',
        contact_name: 'Full Name',
        contact_subject: 'Subject',
        contact_message: 'Your Message',
        contact_send: 'Send',
        
        // Features Page
        features_title: 'App Features',
        features_subtitle: 'All our features that develop your child\'s creativity',
        features_description: 'All features of Color Splash Unicorn Coloring app that develop your child\'s creativity',
        features_templates_title: 'Hundreds of Coloring Templates',
        features_templates_desc: 'Color Splash Unicorn Coloring app contains hundreds of different coloring templates. Coloring templates are available in many categories such as animals, nature, vehicles, unicorns and more.',
        features_templates_1: 'Constantly updated templates',
        features_templates_2: 'Difficulty levels according to age groups',
        features_templates_3: 'Educational and fun content',
        features_templates_4: 'HD quality drawings',
        features_advanced_title: 'Advanced Coloring Features',
        features_advanced_desc: 'Kids Coloring app supports your child\'s creativity with advanced coloring features. Coloring becomes much more fun with unlimited color options, different brush sizes and special effects.',
        features_advanced_1: 'Unlimited color palette',
        features_advanced_2: 'Different brush sizes and types',
        features_advanced_3: 'Erase and undo features',
        features_advanced_4: 'Glitter, rainbow and magical effects',
        features_sharing_title: 'Sharing Features',
        features_sharing_desc: 'Easily save and share the pictures your child has completed with your family. You can share on social media or save directly to your device.',
        features_sharing_1: 'Save completed pictures',
        features_sharing_2: 'Direct sharing on social media',
        features_sharing_3: 'Create and edit gallery',
        features_sharing_4: 'Printing feature',
        features_offline_title: 'Offline Usage',
        features_offline_desc: 'You can use Color Splash Unicorn Coloring app even without internet connection. After the first download, all basic features are available offline.',
        features_offline_1: 'No internet connection required',
        features_offline_2: 'Ideal for travels',
        features_offline_3: 'No data usage',
        features_offline_4: 'Always accessible',
        features_categories_title: 'Our Coloring Categories',
        features_category_animals: 'Animals',
        features_category_animals_desc: 'Cute animals, wildlife and farm animals coloring pages',
        features_category_nature: 'Nature',
        features_category_nature_desc: 'Seasons, plants, flowers and landscape pictures',
        features_category_vehicles: 'Vehicles',
        features_category_vehicles_desc: 'Cars, trains, airplanes and more',
        features_category_unicorns: 'Unicorns',
        features_category_unicorns_desc: 'Magical unicorns and fairy tale characters',
        features_category_heroes: 'Heroes',
        features_category_heroes_desc: 'Super heroes and cartoon characters',
        features_category_shapes: 'Shapes',
        features_category_shapes_desc: 'Geometric shapes and educational figures',
        features_unicorn_title: 'Unicorn Adventure Game',
        features_unicorn_desc: 'Embark on magical journeys with interactive unicorn adventure game mode',
        features_unicorn_1: 'Create your own unique unicorn character',
        features_unicorn_2: 'Explore magical forests and enchanted realms',
        features_unicorn_3: 'Collect magical items and special powers',
        features_unicorn_4: 'Complete exciting quests and adventures',
        features_puzzle_title: 'Puzzle Game Mode',
        features_puzzle_desc: 'Challenge yourself with fun puzzle game features',
        features_puzzle_1: 'Different difficulty levels for every age',
        features_puzzle_2: 'Create beautiful pictures piece by piece',
        features_puzzle_3: 'Time and score tracking for competitive gaming',
        features_puzzle_4: 'Save your puzzle progress anytime and continue',
        
        // About Page
        about_title: 'About Us',
        about_subtitle: 'The story of the Kids Coloring app and the team behind it',
        about_description: 'Learn about the story of the Color Splash Unicorn Coloring app and the team behind it',
        about_story_title: 'Our Story',
        about_story_p1: 'Color Splash Unicorn Coloring app was founded in 2023 to develop children\'s creativity and imagination. As parents, we wanted to ensure our children spend quality time in the digital world.',
        about_story_p2: 'We started with the idea of bringing traditional coloring books to the digital environment and developed a fun and educational app specially designed for children.',
        about_story_p3: 'Today, Color Splash Unicorn Coloring app is used by millions of children worldwide and continues to grow every day.',
        about_mission_title: 'Our Mission',
        about_mission_p1: 'Our mission is to develop children\'s creativity and imagination by combining them with technology and provide them with a fun learning environment.',
        about_mission_values: 'Our core values:',
        about_value_creativity: 'Creativity',
        about_value_creativity_desc: 'Supporting children\'s unlimited imagination',
        about_value_education: 'Education',
        about_value_education_desc: 'Encouraging learning through fun content',
        about_value_security: 'Security',
        about_value_security_desc: 'Providing a 100% child-friendly and safe digital environment',
        about_value_quality: 'Quality',
        about_value_quality_desc: 'Providing the highest quality experience with constantly evolving and renewed content',
        about_team_title: 'Our Team',
        about_team_subtitle: 'Meet the passionate team behind Color Splash Unicorn Coloring app',
        about_team_member1_name: 'John Smith',
        about_team_member1_title: 'Founder & CEO',
        about_team_member1_bio: 'John, a father of two, uses his experience in technology and education to develop the Color Splash Unicorn Coloring app.',
        about_team_member2_name: 'Sarah Wilson',
        about_team_member2_title: 'Product Designer',
        about_team_member2_bio: 'Sarah, an expert in child psychology, designs the user experience of the app in the most suitable way for children.',
        about_team_member3_name: 'Mike Johnson',
        about_team_member3_title: 'Lead Developer',
        about_team_member3_bio: 'With over 10 years of software development experience, Mike manages the technical infrastructure of the app.',
        about_team_member4_name: 'Emma Davis',
        about_team_member4_title: 'Illustrator',
        about_team_member4_bio: 'Emma, a children\'s book illustrator, carefully designs all the coloring templates in the app.',
        about_stats_title: 'Our Numbers',
        about_stats_downloads: 'Downloads',
        about_stats_templates: 'Coloring Templates',
        about_stats_countries: 'Countries',
        about_stats_rating: 'User Rating',
        
        // Privacy Page
        privacy_title: 'Privacy Policy',
        privacy_subtitle: 'Privacy principles of the Kids Coloring app',
        privacy_description: 'Privacy policy and data protection principles of the Color Splash app',
        privacy_overview: 'Overview',
        privacy_overview_desc: 'As the Color Splash app, protecting the privacy of our users is one of our top priorities. This privacy policy explains what information is collected when using the app, how it is used and protected.',
        privacy_collect_title: 'What Information Do We Collect?',
        privacy_collect_desc: 'The types of information we collect when using the app are:',
        privacy_personal_info: 'Personal Information',
        privacy_personal_info_desc: 'We do not collect any personal information. The app can be used completely anonymously.',
        privacy_usage_data: 'Usage Data',
        privacy_usage_data_desc: 'We collect anonymous statistics about how the app is used. This data is only used to improve app performance.',
        privacy_device_info: 'Device Information',
        privacy_device_info_desc: 'Technical information such as device type, operating system version is collected to ensure app compatibility.',
        privacy_use_title: 'How Do We Use Information?',
        privacy_use_desc: 'We use the information we collect for the following purposes: improving app performance, fixing technical issues, developing new features and improving user experience. We never share your personal information with third parties.',
        privacy_sharing_title: 'Information Sharing',
        privacy_sharing_desc: 'We do not share, sell or rent user information to third parties. Information sharing can only be done with a court order when legal obligations are involved.',
        privacy_security_title: 'Data Security',
        privacy_security_desc: 'We take industry-standard security measures to ensure the security of your data. All data is stored encrypted and hosted on secure servers.',
        privacy_children_title: 'Children\'s Privacy',
        privacy_children_desc: 'Our app is designed for children under 13 and is operated in accordance with COPPA (Children\'s Online Privacy Protection Act) rules. We do not knowingly collect personal information from children under 13.',
        privacy_changes_title: 'Policy Changes',
        privacy_changes_desc: 'We may update this privacy policy when necessary. We will inform users of important changes. The last update date is specified at the bottom of this page.',
        privacy_contact_title: 'Contact',
        privacy_contact_desc: 'For questions about the privacy policy, you can contact us at info@colorsplash.com.',
        privacy_last_updated: 'Last updated: June 1, 2023',
        
        // Download Page
        download_title: 'Download the App',
        download_subtitle: 'Download Color Splash Unicorn Coloring app to your device',
        download_description: 'Download the fun coloring app for kids. Free for Android and iOS!',
        download_intro_title: 'Download for Free',
        download_intro_desc: 'Download the Color Splash app for free on your Android and iOS devices and have fun with your children.',
        download_android: 'For Android',
        download_android_desc: 'Download now from Google Play Store',
        download_ios: 'For iOS',
        download_ios_desc: 'Download now from App Store',
        download_features_title: 'What\'s Included?',
        download_features_desc: 'All features in the app are completely free!',
        download_feature1: '100+ free coloring templates',
        download_feature2: 'Safe content for children',
        download_feature3: 'Offline work support',
        download_feature4: 'Multi-language support',
        download_feature5: 'Ad-free experience',
        download_feature6: 'Regular content updates',
        download_screenshots_title: 'Screenshots',
        download_screenshots_desc: 'Explore the app\'s features',
        download_faq_title: 'Frequently Asked Questions',
        download_faq_desc: 'What you wonder about the app',
        download_faq1_question: 'Is the app really free?',
        download_faq1_answer: 'Yes, the Color Splash app is completely free. There are no hidden fees or subscriptions.',
        download_faq2_question: 'What age group is it suitable for?',
        download_faq2_answer: 'Our app is designed for children aged 3-12. There are suitable contents for different age groups.',
        download_faq3_question: 'Is internet connection required?',
        download_faq3_answer: 'No, the app can work offline. Internet connection is only required for the first download.',
        download_faq4_question: 'When are new templates added?',
        download_faq4_answer: 'We add new templates and features every month. Updates are automatically notified.',
        download_faq5_question: 'Can I save my drawings?',
        download_faq5_answer: 'Yes, all your drawings are automatically saved on your device and accessible from the gallery section.',
        download_screenshot1: 'Home Page',
        download_screenshot2: 'Coloring Page',
        download_screenshot3: 'Color Selection',
        download_screenshot4: 'Categories',
        download_screenshot5: 'Gallery',
        download_screenshot6: 'Puzzle Game'
    },
    
    de: {
        // Meta
        meta_title: 'Color Splash Unicorn Malbuch - Spaßige Mal-App',
        meta_description: 'Spaßige und lehrreiche Mal-App für Kinder. Entwickeln Sie die Kreativität Ihres Kindes mit Hunderten verschiedenen Malvorlagen.',
        
        // Menu
        menu_home: 'Startseite',
        menu_features: 'Funktionen',
        menu_about: 'Über uns',
        menu_privacy: 'Datenschutz',
        menu_contact: 'Kontakt',
        menu_download: 'Herunterladen',
        
        // Home Page
        home_title: 'Color Splash Unicorn Malbuch',
        home_subtitle: 'Eine lustige Mal-App, die die Kreativität und Fantasie Ihres Kindes entwickelt!',
        home_download: 'Jetzt herunterladen',
        home_features: 'Funktionen',
        home_why: 'Warum Color Splash Unicorn Malbuch?',
        home_fun_coloring: 'Spaßiges Malen',
        home_fun_coloring_desc: 'Kinder lernen beim Spaß haben mit Hunderten verschiedenen Malvorlagen',
        home_creativity: 'Kreativität',
        home_creativity_desc: 'Kreativitätsentwicklung mit unbegrenzten Farboptionen',
        home_child_friendly: 'Kinderfreundlich',
        home_child_friendly_desc: 'Spezielles Design für Kinder mit einfacher und benutzerfreundlicher Oberfläche',
        home_anywhere: 'Überall verwenden',
        home_anywhere_desc: 'Möglichkeit überall zu malen mit Offline-Funktion',
        home_categories: 'Unsere Malkategorien',
        home_category_animals: 'Tiere',
        home_category_nature: 'Natur',
        home_category_vehicles: 'Fahrzeuge',
        home_category_unicorns: 'Einhörner',
        home_testimonials: 'Was sagen Eltern?',
        home_testimonial1: '"Meine Tochter liebt diese App. Sie malt jeden Tag mindestens eine Stunde und entwickelt ihre Kreativität."',
        home_testimonial1_author: 'Anna M.',
        home_testimonial1_info: 'Mutter von zwei Kindern',
        home_testimonial2: '"Mein Sohn war tablettsüchtig, aber jetzt hat er Spaß und verbringt nützliche Zeit mit dieser App."',
        home_testimonial2_author: 'Thomas K.',
        home_testimonial2_info: 'Vater eines Kindes',
        home_download_now: 'Jetzt herunterladen!',
        home_download_desc: 'Laden Sie die Color Splash Unicorn Malbuch-App jetzt herunter, um die Fantasie Ihres Kindes zu entwickeln.',
        
        // Footer
        footer_description: 'Spaßige Mal-App, die die Kreativität von Kindern entwickelt',
        footer_quick_links: 'Schnelle Links',
        footer_legal: 'Rechtliches',
        footer_terms: 'Nutzungsbedingungen',
        footer_gdpr: 'DSGVO',
        footer_follow: 'Folgen Sie uns',
        footer_copyright: 'Alle Rechte vorbehalten.',
        footer_rights: 'Alle Rechte vorbehalten.',
        footer_design: 'Design und Entwicklung:',
        
        // Contact
        contact_title: 'Kontakt',
        contact_subtitle: 'Kontaktieren Sie uns für Ihre Fragen',
        contact_info: 'Kontaktinformationen',
        contact_email: 'E-Mail',
        contact_form: 'Kontaktformular',
        contact_name: 'Vollständiger Name',
        contact_subject: 'Betreff',
        contact_message: 'Ihre Nachricht',
        contact_send: 'Senden',
        
        // Features Page
        features_title: 'App-Funktionen',
        features_subtitle: 'Alle unsere Funktionen, die die Kreativität Ihres Kindes entwickeln',
        features_description: 'Alle Funktionen der Color Splash Unicorn Malbuch-App, die die Kreativität Ihres Kindes entwickeln',
        features_templates_title: 'Hunderte von Malvorlagen',
        features_templates_desc: 'Die Color Splash Unicorn Malbuch-App enthält Hunderte verschiedener Malvorlagen. Malvorlagen sind in vielen Kategorien verfügbar wie Tiere, Natur, Fahrzeuge, Einhörner und mehr.',
        features_templates_1: 'Ständig aktualisierte Vorlagen',
        features_templates_2: 'Schwierigkeitsgrade nach Altersgruppen',
        features_templates_3: 'Lehrreiche und unterhaltsame Inhalte',
        features_templates_4: 'HD-Qualität Zeichnungen',
        features_advanced_title: 'Erweiterte Mal-Funktionen',
        features_advanced_desc: 'Die Kinder-Mal-App unterstützt die Kreativität Ihres Kindes mit erweiterten Mal-Funktionen. Malen wird viel unterhaltsamer mit unbegrenzten Farboptionen, verschiedenen Pinselgrößen und besonderen Effekten.',
        features_advanced_1: 'Unbegrenzte Farbpalette',
        features_advanced_2: 'Verschiedene Pinselgrößen und -typen',
        features_advanced_3: 'Lösch- und Rückgängig-Funktionen',
        features_advanced_4: 'Glitzer-, Regenbogen- und magische Effekte',
        features_sharing_title: 'Teilen-Funktionen',
        features_sharing_desc: 'Speichern und teilen Sie die von Ihrem Kind fertiggestellten Bilder einfach mit Ihrer Familie. Sie können in sozialen Medien teilen oder direkt auf Ihrem Gerät speichern.',
        features_sharing_1: 'Fertige Bilder speichern',
        features_sharing_2: 'Direktes Teilen in sozialen Medien',
        features_sharing_3: 'Galerie erstellen und bearbeiten',
        features_sharing_4: 'Druckfunktion',
        features_offline_title: 'Offline-Nutzung',
        features_offline_desc: 'Sie können die Color Splash Unicorn Malbuch-App auch ohne Internetverbindung verwenden. Nach dem ersten Download sind alle grundlegenden Funktionen offline verfügbar.',
        features_offline_1: 'Keine Internetverbindung erforderlich',
        features_offline_2: 'Ideal für Reisen',
        features_offline_3: 'Kein Datenverbrauch',
        features_offline_4: 'Immer zugänglich',
        features_categories_title: 'Unsere Malkategorien',
        features_category_animals: 'Tiere',
        features_category_animals_desc: 'Niedliche Tiere, Wildtiere und Bauernhoftiere Malvorlagen',
        features_category_nature: 'Natur',
        features_category_nature_desc: 'Jahreszeiten, Pflanzen, Blumen und Landschaftsbilder',
        features_category_vehicles: 'Fahrzeuge',
        features_category_vehicles_desc: 'Autos, Züge, Flugzeuge und mehr',
        features_category_unicorns: 'Einhörner',
        features_category_unicorns_desc: 'Magische Einhörner und Märchenfiguren',
        features_category_heroes: 'Helden',
        features_category_heroes_desc: 'Superhelden und Zeichentrickfiguren',
        features_category_shapes: 'Formen',
        features_category_shapes_desc: 'Geometrische Formen und lehrreiche Figuren',
        features_unicorn_title: 'Einhorn-Abenteuerspiel',
        features_unicorn_desc: 'Begeben Sie sich auf magische Reisen mit dem interaktiven Einhorn-Abenteuerspiel-Modus',
        features_unicorn_1: 'Erstellen Sie Ihren eigenen einzigartigen Einhorn-Charakter',
        features_unicorn_2: 'Erkunden Sie magische Wälder und verzauberte Reiche',
        features_unicorn_3: 'Sammeln Sie magische Gegenstände und besondere Kräfte',
        features_unicorn_4: 'Erfüllen Sie aufregende Aufgaben und Abenteuer',
        features_puzzle_title: 'Puzzle-Spielmodus',
        features_puzzle_desc: 'Fordern Sie sich selbst mit unterhaltsamen Puzzle-Spielfunktionen heraus',
        features_puzzle_1: 'Verschiedene Schwierigkeitsgrade für jedes Alter',
        features_puzzle_2: 'Erstellen Sie schöne Bilder Stück für Stück',
        features_puzzle_3: 'Zeit- und Punkteverfolgung für kompetitives Spielen',
        features_puzzle_4: 'Speichern Sie Ihren Puzzle-Fortschritt jederzeit und setzen Sie fort',
        
        // About Page
        about_title: 'Über uns',
        about_subtitle: 'Die Geschichte der Kids Coloring App und das Team dahinter',
        about_description: 'Erfahren Sie mehr über die Geschichte der Color Splash Unicorn Malbuch App und das Team dahinter',
        about_story_title: 'Unsere Geschichte',
        about_story_p1: 'Die Color Splash Unicorn Malbuch-App wurde 2023 gegründet, um die Kreativität und Fantasie von Kindern zu entwickeln. Als Eltern wollten wir sicherstellen, dass unsere Kinder qualitativ hochwertige Zeit in der digitalen Welt verbringen.',
        about_story_p2: 'Wir begannen mit der Idee, traditionelle Malbücher in die digitale Umgebung zu bringen und entwickelten eine lustige und lehrreiche App, die speziell für Kinder entwickelt wurde.',
        about_story_p3: 'Heute wird die Color Splash Unicorn Malbuch-App von Millionen von Kindern weltweit verwendet und wächst jeden Tag weiter.',
        about_mission_title: 'Unsere Mission',
        about_mission_p1: 'Unsere Mission ist es, die Kreativität und Fantasie von Kindern zu entwickeln, indem wir sie mit Technologie verbinden und ihnen eine lustige Lernumgebung bieten.',
        about_mission_values: 'Unsere Grundwerte:',
        about_value_creativity: 'Kreativität',
        about_value_creativity_desc: 'Unterstützung der unbegrenzten Fantasie von Kindern',
        about_value_education: 'Bildung',
        about_value_education_desc: 'Förderung des Lernens durch unterhaltsame Inhalte',
        about_value_security: 'Sicherheit',
        about_value_security_desc: 'Bereitstellung einer 100% kinderfreundlichen und sicheren digitalen Umgebung',
        about_value_quality: 'Qualität',
        about_value_quality_desc: 'Bereitstellung der höchsten Qualitätserfahrung mit sich ständig weiterentwickelnden und erneuerten Inhalten',
        about_team_title: 'Unser Team',
        about_team_subtitle: 'Lernen Sie das leidenschaftliche Team hinter der Color Splash Unicorn Malbuch-App kennen',
        about_team_member1_name: 'Hans Müller',
        about_team_member1_title: 'Gründer & CEO',
        about_team_member1_bio: 'Hans, Vater von zwei Kindern, nutzt seine Erfahrung in Technologie und Bildung zur Entwicklung der Color Splash Unicorn Malbuch-App.',
        about_team_member2_name: 'Anna Schmidt',
        about_team_member2_title: 'Produktdesignerin',
        about_team_member2_bio: 'Anna, eine Expertin für Kinderpsychologie, gestaltet die Benutzererfahrung der App auf die für Kinder am besten geeignete Weise.',
        about_team_member3_name: 'Michael Weber',
        about_team_member3_title: 'Leitender Entwickler',
        about_team_member3_bio: 'Mit über 10 Jahren Erfahrung in der Softwareentwicklung verwaltet Michael die technische Infrastruktur der App.',
        about_team_member4_name: 'Lisa Wagner',
        about_team_member4_title: 'Illustratorin',
        about_team_member4_bio: 'Lisa, eine Kinderbuchillustratorin, gestaltet sorgfältig alle Malvorlagen in der App.',
        about_stats_title: 'Unsere Zahlen',
        about_stats_downloads: 'Downloads',
        about_stats_templates: 'Malvorlagen',
        about_stats_countries: 'Länder',
        about_stats_rating: 'Nutzerbewertung',
        
        // Privacy Page
        privacy_title: 'Datenschutzrichtlinie',
        privacy_subtitle: 'Datenschutzprinzipien der Kinder-Mal-App',
        privacy_description: 'Datenschutzrichtlinie und Datenschutzprinzipien der Color Splash App',
        privacy_overview: 'Überblick',
        privacy_overview_desc: 'Als Color Splash App ist der Schutz der Privatsphäre unserer Nutzer eine unserer obersten Prioritäten. Diese Datenschutzrichtlinie erklärt, welche Informationen bei der Nutzung der App gesammelt, wie sie verwendet und geschützt werden.',
        privacy_collect_title: 'Welche Informationen sammeln wir?',
        privacy_collect_desc: 'Die Arten von Informationen, die wir bei der Nutzung der App sammeln, sind:',
        privacy_personal_info: 'Persönliche Informationen',
        privacy_personal_info_desc: 'Wir sammeln keine persönlichen Informationen. Die App kann vollständig anonym verwendet werden.',
        privacy_usage_data: 'Nutzungsdaten',
        privacy_usage_data_desc: 'Wir sammeln anonyme Statistiken darüber, wie die App verwendet wird. Diese Daten werden nur zur Verbesserung der App-Leistung verwendet.',
        privacy_device_info: 'Geräteinformationen',
        privacy_device_info_desc: 'Technische Informationen wie Gerätetyp, Betriebssystemversion werden gesammelt, um die App-Kompatibilität sicherzustellen.',
        privacy_use_title: 'Wie verwenden wir Informationen?',
        privacy_use_desc: 'Wir verwenden die gesammelten Informationen für folgende Zwecke: Verbesserung der App-Leistung, Behebung technischer Probleme, Entwicklung neuer Funktionen und Verbesserung der Benutzererfahrung. Wir teilen niemals Ihre persönlichen Informationen mit Dritten.',
        privacy_sharing_title: 'Informationsaustausch',
        privacy_sharing_desc: 'Wir teilen, verkaufen oder vermieten Benutzerinformationen nicht an Dritte. Informationsaustausch kann nur mit einem Gerichtsbeschluss erfolgen, wenn rechtliche Verpflichtungen vorliegen.',
        privacy_security_title: 'Datensicherheit',
        privacy_security_desc: 'Wir ergreifen branchenübliche Sicherheitsmaßnahmen, um die Sicherheit Ihrer Daten zu gewährleisten. Alle Daten werden verschlüsselt gespeichert und auf sicheren Servern gehostet.',
        privacy_children_title: 'Datenschutz für Kinder',
        privacy_children_desc: 'Unsere App ist für Kinder unter 13 Jahren konzipiert und wird in Übereinstimmung mit den COPPA-Regeln (Children\'s Online Privacy Protection Act) betrieben. Wir sammeln wissentlich keine persönlichen Informationen von Kindern unter 13 Jahren.',
        privacy_changes_title: 'Richtlinienänderungen',
        privacy_changes_desc: 'Wir können diese Datenschutzrichtlinie bei Bedarf aktualisieren. Wir werden Benutzer über wichtige Änderungen informieren. Das letzte Aktualisierungsdatum ist am Ende dieser Seite angegeben.',
        privacy_contact_title: 'Kontakt',
        privacy_contact_desc: 'Für Fragen zur Datenschutzrichtlinie können Sie uns unter info@colorsplash.com kontaktieren.',
        privacy_last_updated: 'Letzte Aktualisierung: 1. Juni 2023',
        
        // Download Page
        download_title: 'App herunterladen',
        download_subtitle: 'Laden Sie die Color Splash Unicorn Malbuch-App auf Ihr Gerät herunter',
        download_description: 'Laden Sie die lustige Mal-App für Kinder herunter. Kostenlos für Android und iOS!',
        download_intro_title: 'Kostenlos Herunterladen',
        download_intro_desc: 'Laden Sie die Color Splash App kostenlos auf Ihre Android- und iOS-Geräte herunter und haben Sie Spaß mit Ihren Kindern.',
        download_android: 'Für Android',
        download_android_desc: 'Jetzt vom Google Play Store herunterladen',
        download_ios: 'Für iOS',
        download_ios_desc: 'Jetzt vom App Store herunterladen',
        download_features_title: 'Was ist enthalten?',
        download_features_desc: 'Alle Funktionen in der App sind völlig kostenlos!',
        download_feature1: '100+ kostenlose Malvorlagen',
        download_feature2: 'Sicherer Inhalt für Kinder',
        download_feature3: 'Offline-Arbeitsunterstützung',
        download_feature4: 'Mehrsprachige Unterstützung',
        download_feature5: 'Werbefreie Erfahrung',
        download_feature6: 'Regelmäßige Inhaltsaktualisierungen',
        download_screenshots_title: 'Screenshots',
        download_screenshots_desc: 'Entdecken Sie die Funktionen der App',
        download_faq_title: 'Häufig gestellte Fragen',
        download_faq_desc: 'Was Sie über die App wissen möchten',
        download_faq1_question: 'Ist die App wirklich kostenlos?',
        download_faq1_answer: 'Ja, die Color Splash App ist völlig kostenlos. Es gibt keine versteckten Gebühren oder Abonnements.',
        download_faq2_question: 'Für welche Altersgruppe ist es geeignet?',
        download_faq2_answer: 'Unsere App ist für Kinder im Alter von 3-12 Jahren konzipiert. Es gibt geeignete Inhalte für verschiedene Altersgruppen.',
        download_faq3_question: 'Ist eine Internetverbindung erforderlich?',
        download_faq3_answer: 'Nein, die App kann offline arbeiten. Eine Internetverbindung ist nur für den ersten Download erforderlich.',
        download_faq4_question: 'Wann werden neue Vorlagen hinzugefügt?',
        download_faq4_answer: 'Wir fügen jeden Monat neue Vorlagen und Funktionen hinzu. Updates werden automatisch benachrichtigt.',
        download_faq5_question: 'Kann ich meine Zeichnungen speichern?',
        download_faq5_answer: 'Ja, alle Ihre Zeichnungen werden automatisch auf Ihrem Gerät gespeichert und sind über den Galeriebereich zugänglich.',
        download_screenshot1: 'Startseite',
        download_screenshot2: 'Malseite',
        download_screenshot3: 'Farbauswahl',
        download_screenshot4: 'Kategorien',
        download_screenshot5: 'Galerie',
        download_screenshot6: 'Puzzle-Spiel'
    }
};

// Current language
let currentLanguage = 'tr';

// Language system initialization
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSystem();
});

/**
 * Initialize language system
 */
function initLanguageSystem() {
    // Get saved language from localStorage or use default
    const savedLanguage = localStorage.getItem('color-splash-language') || 'tr';
    
    // Set current language
    setLanguage(savedLanguage);
    
    // Add event listeners to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (lang && lang !== currentLanguage) {
                setLanguage(lang);
            }
        });
    });
}

/**
 * Set language and update content
 */
function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language ${lang} not found, using default (tr)`);
        lang = 'tr';
    }
    
    currentLanguage = lang;
    
    // Save to localStorage
    localStorage.setItem('color-splash-language', lang);
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    
    // Update page title and meta description
    updateMetaTags(lang);
    
    // Update all text content
    updateContent(lang);
    
    // Update active language button
    updateLanguageButtons(lang);
    
    // Trigger custom event
    document.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: lang }
    }));
}

/**
 * Update meta tags
 */
function updateMetaTags(lang) {
    const langData = translations[lang];
    
    // Update title
    const titleElement = document.querySelector('title');
    if (titleElement && langData.meta_title) {
        titleElement.textContent = langData.meta_title;
    }
    
    // Update meta description
    const descriptionElement = document.querySelector('meta[name="description"]');
    if (descriptionElement && langData.meta_description) {
        descriptionElement.setAttribute('content', langData.meta_description);
    }
}

/**
 * Update all content with translations
 */
function updateContent(lang) {
    const langData = translations[lang];
    
    // Update all elements with data-i18n attribute
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.type === 'submit' || element.type === 'button') {
                    element.value = langData[key];
                } else {
                    element.placeholder = langData[key];
                }
            } else if (element.tagName === 'IMG') {
                element.alt = langData[key];
            } else {
                element.textContent = langData[key];
            }
        }
    });
    
    // Update form placeholders specifically
    updateFormPlaceholders(lang);
}

/**
 * Update form placeholders
 */
function updateFormPlaceholders(lang) {
    const langData = translations[lang];
    
    // Contact form placeholders
    const nameInput = document.querySelector('input[name="name"]');
    if (nameInput && langData.contact_name) {
        nameInput.placeholder = langData.contact_name;
    }
    
    const emailInput = document.querySelector('input[name="email"]');
    if (emailInput && langData.contact_email) {
        emailInput.placeholder = langData.contact_email;
    }
    
    const subjectSelect = document.querySelector('select[name="subject"]');
    if (subjectSelect && langData.contact_subject) {
        const firstOption = subjectSelect.querySelector('option[value=""]');
        if (firstOption) {
            firstOption.textContent = `${langData.contact_subject}...`;
        }
    }
    
    const messageTextarea = document.querySelector('textarea[name="message"]');
    if (messageTextarea && langData.contact_message) {
        messageTextarea.placeholder = langData.contact_message;
    }
}

/**
 * Update language buttons
 */
function updateLanguageButtons(lang) {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

/**
 * Get current language
 */
function getCurrentLanguage() {
    return currentLanguage;
}

/**
 * Get translation for a key
 */
function t(key, lang = null) {
    const targetLang = lang || currentLanguage;
    return translations[targetLang] && translations[targetLang][key] 
        ? translations[targetLang][key] 
        : key;
}

/**
 * Check if language is RTL
 */
function isRTL(lang = null) {
    const targetLang = lang || currentLanguage;
    const rtlLanguages = ['ar', 'he', 'fa'];
    return rtlLanguages.includes(targetLang);
}

/**
 * Format date according to language
 */
function formatDate(date, lang = null) {
    const targetLang = lang || currentLanguage;
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    return new Intl.DateTimeFormat(targetLang, options).format(date);
}

/**
 * Format number according to language
 */
function formatNumber(number, lang = null) {
    const targetLang = lang || currentLanguage;
    return new Intl.NumberFormat(targetLang).format(number);
}

// Export language functions
window.LanguageSystem = {
    setLanguage,
    getCurrentLanguage,
    t,
    isRTL,
    formatDate,
    formatNumber,
    translations
};

// Auto-detect language from browser if no saved preference
if (!localStorage.getItem('color-splash-language')) {
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
        setLanguage(browserLang);
    }
} 