import { ServiceItem, UpgradePackage, ReviewItem, GalleryProject, EstimatorOption } from '../types';
import { APP_IMAGES } from '../assets/images';

export const CENTER_INFO = {
  nameAr: 'مركز نائل عديلة لصوتيات وزينة السيارات',
  nameEn: 'Nael Adelah Center | Car Audio & Styling',
  shortNameAr: 'مركز نائل عديلة',
  shortNameEn: 'Nael Adelah Center',
  phone: '+962 7 9563 7776',
  rawPhone: '+962795637776',
  whatsappUrl: 'https://wa.me/962795637776',
  googleMapsUrl: 'https://maps.app.goo.gl/VRwJTwyaHY8xS8Yi6',
  googleMapsEmbedQuery: 'مركز نائل عديلة, طبربور, عمان',
  facebookUrl: 'https://www.facebook.com/nael.adelah.center/?locale=ar_AR',
  addressAr: 'عمان - طبربور / شارع طارق - بالقرب من دوار المشاغل، الأردن',
  addressEn: 'Amman - Tabarbour / Tariq St, near Mashaghel R/A, Jordan',
  hoursAr: 'السبت - الخميس: 9:30 ص – 10:00 م | الجمعة: 1:30 م – 9:00 م',
  hoursEn: 'Sat - Thu: 9:30 AM – 10:00 PM | Fri: 1:30 PM – 9:00 PM',
  experienceYears: 16,
  completedCars: '15,000+',
  satisfactionRate: '99.4%',
  googleRating: 4.8,
  googleReviewsCount: 380,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'audio-systems',
    titleAr: 'أنظمة الصوت الاحترافية والساوند سستم',
    titleEn: 'Audiophile Sound Systems & Acoustics',
    subtitleAr: 'تضخيم نقي وهندسة صوتية مخصصة لكل سيارة',
    subtitleEn: 'High-power amplification and tailored acoustic tuning',
    descriptionAr: 'تركيب وضبط أنظمة الصوت العالمية بمضخمات رقمية Class D، صب ووفرات بصناديق تفصيلية محسوبة التردد، سماعات كومبوننت ثلاثية، مع عزل صوتي كامل للأبواب لمنع أي اهتزاز وتشويش.',
    descriptionEn: 'Expert acoustic installation featuring Class-D amplifiers, custom frequency-tuned subwoofer enclosures, 3-way component speakers, and automotive door sound damping.',
    featuresAr: [
      'مضخمات صوت عالية الطاقة (Amplifiers 2/4/5 Channels)',
      'صب ووفر وبازوكا أحجام 10، 12، 15 إنش',
      'سماعات أبواب وتويترات نقية من كبرى الشركات العالمية',
      'عوازل صوت واهتزازات للأبواب والشنطة (Acoustic Dampening)',
      'معالجات صوتية رقمية DSP لضبط المسرح الصوتي بدقة'
    ],
    featuresEn: [
      'High-power amplifiers (2/4/5 channel configurations)',
      'Subwoofers & bass tubes (10", 12", 15" custom boxes)',
      'High-clarity door speakers & silk-dome tweeters',
      'Automotive sound damping for doors and trunk',
      'Digital Signal Processors (DSP) for precision acoustic staging'
    ],
    image: APP_IMAGES.audio,
    brands: ['Pioneer', 'JBL', 'Kenwood', 'Sony', 'Hertz', 'Alpine', 'Rockford'],
    warrantyAr: 'كفالة حقيقية لمدة عام كامل على الأجهزة والتركيب',
    warrantyEn: '1-Year comprehensive warranty on parts & labor',
    estimatedTimeAr: '2 - 4 ساعات',
    estimatedTimeEn: '2 - 4 hours',
    startingPriceJod: 65,
  },
  {
    id: 'smart-screens',
    titleAr: 'الشاشات الذكية وأنظمة الملاحة والكاميرات',
    titleEn: 'Smart Android Infotainment & 360° Cameras',
    subtitleAr: 'Apple CarPlay & Android Auto بدقة فائقة 2K/4K',
    subtitleEn: 'Seamless wireless smartphone integration and crisp displays',
    descriptionAr: 'شاشات أندرويد متطورة قياسات من 9 إلى 13 بوصة وشاشات طراز تسلا لجميع موديلات السيارات، معالجات ثمانية النواة فائقة السرعة، مخرجات صوت DSP، وكاميرات رؤية ليلية 360 درجة عالية الوضوح.',
    descriptionEn: 'Next-gen Android touchscreens ranging from 9 to 13 inches plus Tesla-style screens with 8-core CPUs, DSP chips, and ultra-wide 360° AHD night-vision cameras.',
    featuresAr: [
      'دعم كامل لـ Apple CarPlay و Android Auto لاسلكياً',
      'شاشات QLED و IPS بدقة ألوان زاهية وزوايا رؤية واسعة',
      'كاميرات خلفية AHD ليلية وكاميرات محيطية 360 درجة',
      'ربط كامل بأزرار المقود الأصلية وحساسات السيارة',
      'تطبيقات الخرائط واليوتيوب والموسيقى مع إنترنت 4G/WiFi'
    ],
    featuresEn: [
      'Wireless Apple CarPlay & Android Auto built-in',
      'High-brightness QLED & IPS screens with vivid colors',
      'AHD Starlight night-vision reverse & 360° surround cameras',
      'Full retention of OEM steering wheel controls & sensors',
      'Offline/Online Google Maps, YouTube, and 4G SIM connectivity'
    ],
    image: APP_IMAGES.screens,
    brands: ['Roadmaster', 'Teyes', 'Havit', 'Sony', 'Dynavin', 'Alpine'],
    warrantyAr: 'سنتان كفالة على الشاشة واللوحة الإلكترونية',
    warrantyEn: '2 Years warranty on motherboard & screen panel',
    estimatedTimeAr: '1.5 - 3 ساعات',
    estimatedTimeEn: '1.5 - 3 hours',
    startingPriceJod: 85,
  },
  {
    id: 'ambient-lighting',
    titleAr: 'الإضاءة المحيطية الذكية وعدسات الليزر LED',
    titleEn: 'Dynamic Ambient Lighting & Bi-LED Laser Projectors',
    subtitleAr: 'أجواء مقصورة فاخرة بـ 64 لون وإضاءة أمامية خارقة',
    subtitleEn: '64-Color symphony interior LEDs and laser projector headlamps',
    descriptionAr: 'تحويل مقصورة سيارتك إلى فخامة لامتناهية عبر خيوط إضاءة نيون فايبر مدمجة بالأبواب والكونسول والتابلوه مع تحكم كامل بالهاتف ومزامنة الصوت، مع عدسات Bi-LED للشمعات الأمامية برؤية ليلية كاشفة.',
    descriptionEn: 'Elevate your cabin with seamless acrylic fiber optic ambient lighting controlled via mobile app with rhythm sync, plus Bi-LED projector lenses providing ultra-sharp night beam.',
    featuresAr: [
      'إضاءة محيطية مخفية 64 / 128 لون بدون أي أسلاك ظاهرة',
      'تحكم كامل عبر تطبيق الموبايل مع إمكانية دمج وتدريج الألوان',
      'مزامنة ديناميكية مع إيقاع الموسيقى والصوت داخل السيارة',
      'عدسات ليزر Bi-LED للشمعات الأمامية مع خط قطع حاد ومثالي',
      'لمبات ليد كانباص Canbus Error-Free مع ضمان عدم ظهور أخطاء'
    ],
    featuresEn: [
      'Flush-mount hidden 64/128-color fiber optics with zero exposed wires',
      'Intuitive smartphone application with gradient multi-zone control',
      'Sound & music rhythm synchronization modes',
      'Bi-LED laser headlamp projectors with laser-sharp cutoff line',
      'Canbus Error-Free LED bulbs for high and low beams'
    ],
    image: APP_IMAGES.ambient,
    brands: ['Osram', 'Philips', 'Aozoom', 'Novsight', 'Symphony Light'],
    warrantyAr: 'سنة كاملة كفالة استبدال فوري',
    warrantyEn: '1-Year full replacement warranty',
    estimatedTimeAr: '2 - 5 ساعات',
    estimatedTimeEn: '2 - 5 hours',
    startingPriceJod: 45,
  },
  {
    id: 'thermal-tinting',
    titleAr: 'التظليل الحراري وعازل النانو سيراميك',
    titleEn: 'Thermal Tinting & Nano-Ceramic Window Films',
    subtitleAr: 'عزل حراري يصل إلى 95% وحماية فائقة من أشعة الشمس',
    subtitleEn: 'Up to 95% infrared heat rejection and 99% UV radiation blocking',
    descriptionAr: 'أفلام نانو سيراميك أمريكية وألمانية أصلية توفر عزلاً حرارياً خارقاً ضد لهيب الصيف في عمان، مع وضوح رؤية استثنائي من الداخل للخارج وتخفيض حرارة المقصورة والحفاظ على أداء المكيف.',
    descriptionEn: 'High-performance American and German nano-ceramic window films engineered for Amman weather, giving massive heat reduction, crystal-clear night optics, and zero signal interference.',
    featuresAr: [
      'عزل حراري للأشعة تحت الحمراء IR بنسبة تصل حتى 95%',
      'حجب 99% من الأشعة فوق البنفسجية UV الضارة للجلد والمقاعد',
      'رؤية ليلية شديدة الوضوح بدون أي تشويش أو ضبابية',
      'لا يؤثر إطلاقاً على إشارات الهواتف أو الـ GPS أو الراديو',
      'ضمان شامل ضد التقشير والفقاعات وتغير اللون إلى البنفسجي'
    ],
    featuresEn: [
      'Rejects up to 95% of infrared thermal heat (IR)',
      'Blocks 99% of harmful ultraviolet radiation (UV)',
      'Ultra-clear optical visibility day and night without haze',
      'Zero radio, GPS, or cellular signal interference',
      'Comprehensive warranty against fading, bubbling, and peeling'
    ],
    image: APP_IMAGES.tinting,
    brands: ['3M', 'SolarGard', 'Lumar', 'XPEL', 'CeramicPro'],
    warrantyAr: 'كفالة من 5 إلى 10 سنوات موثقة بالشهادة',
    warrantyEn: '5 to 10 Years official certified warranty',
    estimatedTimeAr: '1.5 - 2.5 ساعة',
    estimatedTimeEn: '1.5 - 2.5 hours',
    startingPriceJod: 55,
  },
  {
    id: 'security-remote-start',
    titleAr: 'أنظمة الإنذار والتشغيل عن بعد والداش كام',
    titleEn: 'Smart Security, Remote Start & 4K Dashcams',
    subtitleAr: 'أمان متكامل للسيارة وتسجيل مستمر وتشغيل ذكي',
    subtitleEn: 'Intelligent push-to-start, keyless access, and dual dashcam surveillance',
    descriptionAr: 'تركيب أجهزة إنذار وحساسات سرقة ذكية، بصمة تشغيل Push-to-Start، وتشغيل المحرك عن بعد لتبريد السيارة صيفاً وتدفئتها شتاءً، مع كاميرات داش كام أمامية وخلفية لتسجيل الحوادث على مدار الساعة.',
    descriptionEn: 'Protect your vehicle with high-sensitivity alarm systems, smart push-to-start, remote engine pre-start for climate readiness, and 24/7 parking mode 4K dashcams.',
    featuresAr: [
      'كاميرات داش كام 4K مزدوجة مع حساس الصدمات ونظام المراقبة أثناء الوقوف',
      'تشغيل المحرك والمكيف عن بعد عبر ريموت ذكي مشفر',
      'تحويل السويتش التقليدي إلى بصمة تشغيل أنيقة مع فتح وإغلاق تلقائي عند الاقتراب',
      'أجهزة إنذار قوية ضد الكسر والاهتزاز ورفع السيارة',
      'حساسات اصطفاف أمامية وخلفية مع تنبيهات صوتية وشاشة قياس المسافة'
    ],
    featuresEn: [
      'Dual 4K dashcams with G-sensor and 24/7 parking surveillance',
      'Encrypted remote engine start for winter heating and summer AC pre-cooling',
      'Push-to-start smart button conversion with proximity auto lock/unlock',
      'Anti-theft shock, tilt, and glass break security sensors',
      'Front and rear parking ultrasonic sensors with visual obstacle display'
    ],
    image: APP_IMAGES.hero,
    brands: ['70mai', 'VIOFO', 'Steelmate', 'Magicar', 'Easyguard'],
    warrantyAr: 'سنة كفالة شاملة على التركيب والبرمجة',
    warrantyEn: '1-Year complete installation & programming warranty',
    estimatedTimeAr: '2 - 4 ساعات',
    estimatedTimeEn: '2 - 4 hours',
    startingPriceJod: 40,
  },
  {
    id: 'upholstery-styling',
    titleAr: 'التنجيد الفاخر وتفصيل الأرضيات 7D وتعديل البودي',
    titleEn: 'Luxury Leather Upholstery, 7D Mats & Exterior Styling',
    subtitleAr: 'تفصيل مقاعد ملكية وسجاد حماية كامل وقطع بدي كت رياضية',
    subtitleEn: 'Custom Napa leather upholstery, waterproof 7D floor mats & body kits',
    descriptionAr: 'تنجيد مقاعد السيارات بأجود أنواع الجلد الألماني والإيطالي بتطريزات ماسية رياضية، فرش أرضيات 7D مقاوم للماء ومفصل لكل سيارة، مع سبويلرات وشفايف صدام وديكورات كاربون فايبر أصلية.',
    descriptionEn: 'Bespoke custom leather interior trims, handcrafted diamond stitching, tailored waterproof 7D tub floor mats, and aerodynamic styling spoilers and splitters.',
    featuresAr: [
      'تفصيل كراسي جلد مقاوم للحرارة وسهل التنظيف مع إسفنج ميموري مريح',
      'سجاد وأرضيات 7D بتغطية كاملة لكافة زوايا الأرضية وصندوق الأمتعة',
      'تنجيد مقاود (ستيرنج) جلد ناعم ومخرم مع درزات بلون مميز',
      'سبويلرات رياضية، شفايف صدام، ناشر خلفي ديفيوزر، وأغطية مرايا',
      'أحزمة أمان ملونة رياضية (أحمر، أزرق، أصفر، برتقالي)'
    ],
    featuresEn: [
      'Heat-resistant custom leather seat covers with memory foam support',
      'Complete 7D waterproof tub floor mats and tailored trunk protectors',
      'Hand-stitched leather steering wheel wraps with colored center stripe',
      'Aerodynamic rear trunk spoilers, front bumper lips, and mirror caps',
      'Motorsport colored seatbelts in custom performance shades'
    ],
    image: APP_IMAGES.audio,
    brands: ['Alcantara', 'Nappa Leather', '3D Mats', 'Custom Craft'],
    warrantyAr: 'كفالة سنتين على الخياطة وجودة الجلد والأرضيات',
    warrantyEn: '2 Years warranty on stitching & leather resilience',
    estimatedTimeAr: '3 - 6 ساعات',
    estimatedTimeEn: '3 - 6 hours',
    startingPriceJod: 35,
  }
];

export const UPGRADE_PACKAGES: UpgradePackage[] = [
  {
    id: 'smart-driver-pack',
    nameAr: 'باقة القيادة الذكية',
    nameEn: 'Smart Driver Bundle',
    tagAr: 'الأكثر طلباً',
    tagEn: 'Most Popular',
    priceJod: 139,
    originalPriceJod: 175,
    popular: true,
    timeEstimateAr: '3 ساعات',
    timeEstimateEn: '3 Hours',
    featuresAr: [
      'شاشة أندرويد 10 إنش معالج 8 أنوية بدقة Full HD',
      'دعم Apple CarPlay و Android Auto لاسلكياً',
      'كاميرا رجوع خلفية AHD عالية النقاء مع رؤية ليلية',
      'ربط كامل مع أزرار الستيرنج وكهرباء السيارة بدون تجريح أسلاك',
      'قواعد وحوامل شاحن مغناطيسي سريع مجاناً'
    ],
    featuresEn: [
      '10-inch Full HD 8-Core Android Touchscreen',
      'Wireless Apple CarPlay & Android Auto integration',
      'AHD Starlight high-clarity reverse camera',
      'Plug-and-play OEM steering wheel button integration',
      'Complimentary fast magnetic dashboard phone mount'
    ]
  },
  {
    id: 'sound-beast-pack',
    nameAr: 'باقة الصوت الاحترافية',
    nameEn: 'Pro Audiophile Sound Pack',
    tagAr: 'لعشاق الصوت النقي',
    tagEn: 'Acoustic Master',
    priceJod: 185,
    originalPriceJod: 230,
    popular: false,
    timeEstimateAr: '4 ساعات',
    timeEstimateEn: '4 Hours',
    featuresAr: [
      'مضخم صوت رقمي 4 قنوات عالي الاستطاعة (Amplifier)',
      'صب ووفر 12 إنش بصندوق خشبي احترافي مدروس التردد',
      'طقم سماعات أبواب كومبوننت نقية مع تويترات حريرية منفصلة',
      'طقم أسلاك صوت نحاسية نقية مع فيوز أمان رئيسي',
      'عزل للأبواب الأمامية مجاناً لضمان عدم حدوث أي رنين'
    ],
    featuresEn: [
      '4-Channel high-output Class-D audio amplifier',
      '12-inch Subwoofer in frequency-tuned acoustic enclosure',
      'Front 2-way component speakers with silk dome tweeters',
      'Oxygen-free copper cabling kit with main fuse holder',
      'Front door damping insulation included to eliminate vibrations'
    ]
  },
  {
    id: 'summer-shield-pack',
    nameAr: 'باقة الصيف والعزل الحراري',
    nameEn: 'All-Weather Thermal Shield',
    tagAr: 'حماية قصوى',
    tagEn: 'Ultimate Protection',
    priceJod: 95,
    originalPriceJod: 125,
    popular: false,
    timeEstimateAr: '2.5 ساعة',
    timeEstimateEn: '2.5 Hours',
    featuresAr: [
      'تظليل كامل لزجاج السيارة بأفلام نانو سيراميك أصلية',
      'عزل حراري للأشعة تحت الحمراء بنسبة تتجاوز 90%',
      'حماية الزجاج الأمامي من حرارة الشمس مع رؤية ليلية كريستالية',
      'حماية الشمعات الأمامية بطبقة فيلم شفافة ضد الخدوش والترميل',
      'شهادة كفالة رسمية لمدة 5 سنوات ضد تغير اللون'
    ],
    featuresEn: [
      'Full vehicle glass tinting with genuine nano-ceramic film',
      'High infrared heat rejection exceeding 90%',
      'Windshield thermal clear film with razor-sharp night optics',
      'Clear protective film on front headlights against gravel & oxidation',
      '5-Year official written warranty against fading & bubbling'
    ]
  },
  {
    id: 'vip-black-pack',
    nameAr: 'باقة VIP الملكية المتكاملة',
    nameEn: 'Imperial VIP Transformation',
    tagAr: 'تجهيز كامل شامل',
    tagEn: 'All-in-One Luxury',
    priceJod: 299,
    originalPriceJod: 390,
    popular: false,
    timeEstimateAr: 'يوم عمل كامل',
    timeEstimateEn: 'Full Day',
    featuresAr: [
      'شاشة أندرويد 12 إنش أو تسلا ستايل بأعلى مواصفات ورام 8GB',
      'إضاءة محيطية 64 لون Symphony Lighting للأبواب والكونسول',
      'داش كام 4K مزدوجة أمامية وخلفية مع تسجيل وحراسة 24 ساعة',
      'تظليل نانو سيراميك عازل للحرارة لكامل زجاج السيارة',
      'طقم فرش أرضيات 7D تفصيل فاخر مقاوم للماء لكامل السيارة',
      'بوليش تلميع وتغذية لمعان البودي مجاناً'
    ],
    featuresEn: [
      '12-inch or Tesla-style 8GB RAM flagship Android screen',
      'Dynamic 64-color Symphony ambient lighting along dash & 4 doors',
      'Dual 4K Dashcam with 24/7 buffered parking surveillance',
      'Full nano-ceramic heat-blocking window tinting',
      'Custom 7D luxury waterproof full-floor leather mats',
      'Complimentary multi-stage exterior paint polish & gloss sealant'
    ]
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'project-1',
    titleAr: 'تجهيز سستم صوت احترافي وضبط الترددات',
    titleEn: 'Audiophile Trunk Subwoofer & Amp Installation',
    category: 'audio',
    categoryLabelAr: 'صوتيات وبازوكا',
    categoryLabelEn: 'Sound Systems',
    carAr: 'نيسان جي تي آر & سيدان رياضية',
    carEn: 'Sports Coupe & Sedan',
    image: APP_IMAGES.audio,
    highlightsAr: ['مضخمات ماكنتوش رقمية', 'صب ووفر مزدوج Ground Zero', 'صندوق تفصيل مضيء مع كوابل نحاس نقي'],
    highlightsEn: ['High-end power amps', 'Dual Ground Zero subwoofers', 'Custom illuminated enclosure with pure copper wiring']
  },
  {
    id: 'project-2',
    titleAr: 'تركيب شاشة أندرويد 10 إنش مع كاربلاي وكاميرا AHD',
    titleEn: '10-inch Android Infotainment & CarPlay Conversion',
    category: 'screens',
    categoryLabelAr: 'شاشات وكاميرات',
    categoryLabelEn: 'Screens & Tech',
    carAr: 'أودي A6 / كيا K5 / تويوتا كامري',
    carEn: 'Audi A6 / Kia K5 / Toyota Camry',
    image: APP_IMAGES.screens,
    highlightsAr: ['دعم كامل لنظام CarPlay اللاسلكي', 'شاشة مدمجة كأنها وكالة بدون أي فراغات', 'تحكم مباشر من الستيرنج'],
    highlightsEn: ['Seamless wireless CarPlay', 'OEM-fit factory look with zero gaps', 'Full steering wheel integration']
  },
  {
    id: 'project-3',
    titleAr: 'إضاءة محيطية تفصيلية 64 لون عبر الموبايل',
    titleEn: 'Dynamic 64-Color Symphony Ambient Lighting',
    category: 'lighting',
    categoryLabelAr: 'إضاءة محيطية وليد',
    categoryLabelEn: 'Ambient Lighting',
    carAr: 'مرسيدس E-Class / هيونداي سوناتا',
    carEn: 'Mercedes E-Class / Hyundai Sonata',
    image: APP_IMAGES.ambient,
    highlightsAr: ['خيوط فايبر مخفية بالأبواب والتابلوه', 'تحكم بدرجات الألوان والسطوع بالهاتف', 'تفاعل مع الموسيقى'],
    highlightsEn: ['Hidden fiber optics along console and 4 doors', 'App-controlled color & brightness', 'Dynamic sound-sync pulse']
  },
  {
    id: 'project-4',
    titleAr: 'تظليل حراري نانو سيراميك عالي الكفاءة',
    titleEn: 'Full Nano-Ceramic Heat Rejection Window Tinting',
    category: 'tinting',
    categoryLabelAr: 'تظليل ونانو سيراميك',
    categoryLabelEn: 'Thermal Tinting',
    carAr: 'بي إم دبليو الفئة السابعة / جيب شيروكي',
    carEn: 'BMW 7 Series / Grand Cherokee',
    image: APP_IMAGES.tinting,
    highlightsAr: ['عزل 94% حرارة بدون تعتيم الرؤية', 'قص حراري إلكتروني دقيق بالمليمتر', 'كفالة 10 سنوات'],
    highlightsEn: ['94% IR rejection with crystal night clarity', 'Precision computerized film cutting', '10-Year written guarantee']
  },
  {
    id: 'project-5',
    titleAr: 'تجهيز مركز نائل عديلة المتكامل في طبربور',
    titleEn: 'Nael Adelah Center Main Workshop & Showroom',
    category: 'protection',
    categoryLabelAr: 'المركز وتجهيزات VIP',
    categoryLabelEn: 'Workshop & Facilities',
    carAr: 'مختلف أنواع السيارات الحديثة والكهربائية',
    carEn: 'Modern Sedans, SUVs & Electric Vehicles',
    image: APP_IMAGES.hero,
    highlightsAr: ['أحدث أجهزة الفحص والبرمجة', 'كادر فني محترف بخبرة 15 عاماً', 'صالة استقبال مريحة للزبائن'],
    highlightsEn: ['State-of-the-art diagnostic and testing gear', 'Master technicians with 15+ years experience', 'Comfortable customer lounge']
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    authorAr: 'المهندس أحمد المجالي',
    authorEn: 'Eng. Ahmad Al-Majali',
    carAr: 'كيا سورينتو 2023',
    carEn: 'Kia Sorento 2023',
    rating: 5,
    dateAr: 'منذ أسبوعين',
    dateEn: '2 weeks ago',
    commentAr: 'مركز نائل عديلة هو الأفضل بلا منازع في عمان! ركبت شاشة أندرويد وكاميرا وسستم صوت، شغل نظيف جداً وتوصيل الأسلاك مخفي ومرتب بدون أي تجريح في أسلاك الوكالة. المعاملة قمة في الاحترام والأسعار ممتازة مقارنة بجودة الأجهزة.',
    commentEn: 'Nael Adelah Center is hands down the best in Amman! Installed an Android screen, camera, and sound system. Pristine wire routing with zero cuts to factory harness. Top-notch customer care and very reasonable prices.',
    source: 'google'
  },
  {
    id: 'rev-2',
    authorAr: 'طارق الزعبي',
    authorEn: 'Tareq Al-Zoubi',
    carAr: 'هيونداي أفانتي / إلنترا CN7',
    carEn: 'Hyundai Elantra CN7',
    rating: 5,
    dateAr: 'منذ شهر',
    dateEn: '1 month ago',
    commentAr: 'تجربة رائعة مع الأخ نائل والشباب. عملت عندهم تظليل نانو سيراميك وإضاءة محيطية داخلية، فرق رهيب في برودة المكيف بالصيف والإضاءة بالليل بتجنن وتتحكم فيها من التلفون. الله يباركلهم.',
    commentEn: 'Outstanding experience with brother Nael and his team. Got nano-ceramic tinting and ambient lighting. Huge difference in summer cabin temperature, and the night ambient glow looks incredible via phone app.',
    source: 'facebook'
  },
  {
    id: 'rev-3',
    authorAr: 'خالد الرواشدة',
    authorEn: 'Khaled Rawashdeh',
    carAr: 'تويوتا بريوس بلس',
    carEn: 'Toyota Prius Plus',
    rating: 5,
    dateAr: 'منذ 3 أسابيع',
    dateEn: '3 weeks ago',
    commentAr: 'ركبت عندهم بصمة تشغيل ذكية مع تشغيل عن بعد وداش كام 4K. دقة عالية وسرعة في الإنجاز وفهم عميق لكهرباء السيارات الحديثة والهايبرد. بنصح الجميع بزيارتهم في طبربور.',
    commentEn: 'Installed smart push-to-start with remote engine start and a 4K dashcam. Extreme accuracy, fast execution, and deep understanding of modern hybrid vehicle electronics. Highly recommend visiting them in Tabarbour.',
    source: 'google'
  },
  {
    id: 'rev-4',
    authorAr: 'محمد الكردي',
    authorEn: 'Mohammad Al-Kurdi',
    carAr: 'فورد فيوجن',
    carEn: 'Ford Fusion',
    rating: 5,
    dateAr: 'منذ شهرين',
    dateEn: '2 months ago',
    commentAr: 'صوتيات سيارات على أصولها! زبطولي البازوكا والصب ووفر والسماعات ووزنوا الصوت بجهاز فحص. الصوت نقي جداً والباص عميق بدون أي زنة بالبلاستيك أو الأبواب. شكراً جزيلاً لمركز نائل عديلة.',
    commentEn: 'True audiophile car acoustics! They tuned the subwoofers, speakers, and adjusted the soundstage with acoustic testing. Ultra-clean highs and deep bass without any door panel rattles. Thank you Nael Adelah Center!',
    source: 'facebook'
  }
];

export const ESTIMATOR_ITEMS: EstimatorOption[] = [
  { id: 'screen-standard', nameAr: 'شاشة أندرويد 10" مع كاربلاي وكاميرا خلفية', nameEn: '10" Android Screen + CarPlay + Reverse Cam', category: 'screens', basePriceJod: 85, durationMinutes: 120 },
  { id: 'screen-flagship', nameAr: 'شاشة أندرويد فائقة 2K مع كاميرات 360 درجة', nameEn: 'Flagship 2K Android Screen + 360° Cam System', category: 'screens', basePriceJod: 170, durationMinutes: 210 },
  { id: 'audio-subwoofer', nameAr: 'صب ووفر 12" مع مضخم صوت 4 قنوات وسماعات', nameEn: '12" Subwoofer + 4-Ch Amp + Component Speakers', category: 'audio', basePriceJod: 120, durationMinutes: 150 },
  { id: 'audio-speakers-only', nameAr: 'ترقية سماعات الأبواب الأربعة لسماعات بايونير/JBL', nameEn: 'Upgrade 4 OEM Door Speakers (Pioneer / JBL)', category: 'audio', basePriceJod: 55, durationMinutes: 90 },
  { id: 'ambient-interior', nameAr: 'إضاءة محيطية Symphony 64 لون للأبواب والكونسول', nameEn: 'Symphony 64-Color Ambient Interior Lighting', category: 'lighting', basePriceJod: 65, durationMinutes: 150 },
  { id: 'laser-projector', nameAr: 'عدسات ليزر Bi-LED للشمعات الأمامية مع كانباص', nameEn: 'Bi-LED Laser Headlight Projectors + Canbus', category: 'lighting', basePriceJod: 80, durationMinutes: 120 },
  { id: 'tinting-ceramic-full', nameAr: 'تظليل نانو سيراميك حراري عازل لكامل زجاج السيارة', nameEn: 'Full Vehicle Nano-Ceramic Thermal Window Tint', category: 'tinting', basePriceJod: 75, durationMinutes: 90 },
  { id: 'security-dashcam', nameAr: 'كاميرا داش كام 4K مزدوجة مع مراقبة أثناء الوقوف', nameEn: 'Dual 4K Dashcam with 24/7 Parking Surveillance', category: 'security', basePriceJod: 60, durationMinutes: 60 },
  { id: 'security-remote-start', nameAr: 'بصمة تشغيل ذكية مع تشغيل المحرك والمكيف عن بعد', nameEn: 'Smart Push-to-Start + Remote Engine Start Kit', category: 'security', basePriceJod: 75, durationMinutes: 180 },
  { id: 'interior-mats-7d', nameAr: 'طقم فرش أرضيات 7D جلد تفصيل فاخر ضد الماء', nameEn: 'Custom 7D Waterproof Tailored Floor Leather Mats', category: 'interior', basePriceJod: 40, durationMinutes: 30 }
];

export const CAR_BRANDS = [
  'تويوتا (Toyota)',
  'هيونداي (Hyundai)',
  'كيا (Kia)',
  'نيسان (Nissan)',
  'مرسيدس (Mercedes-Benz)',
  'بي إم دبليو (BMW)',
  'أودي (Audi)',
  'فورد (Ford)',
  'فولكس فاجن (Volkswagen)',
  'شيفروليه (Chevrolet)',
  'ميتسوبيشي (Mitsubishi)',
  'هوندا (Honda)',
  'مازدا (Mazda)',
  'بي واي دي (BYD)',
  'تسلا (Tesla)',
  'شيري / جيلي / إم جي (Chinese EVs & Cars)',
  'سيارة أخرى (Other Vehicle)'
];
