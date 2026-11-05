# مركز نائل عديلة لصوتيات وزينة السيارات | Nael Adelah Center
### الموقع الإلكتروني الرسمي والمنصة الرقمية المتكاملة

---

## 🛡️ إشعار حقوق الملكية الفكرية والحماية القانونية (Intellectual Property Notice)

> **تنبيه قانوني صارم / STRICT PROPRIETARY NOTICE**
> 
> جميع حقوق الملكية الفكرية، البرمجية، المعمارية، التصميمية، والبيانية في هذا المشروع وملفاته هي **حقوق ملكية حصرية وخاصة بمؤسسة العلامة المميزة للمطور كريم خليل (Special Mark Co. Karim Khaleel)**.
> 
> ⛔ **يُمنع منعاً باتاً ولا يجوز استخدام، أو نسخ، أو تعديل، أو اقتباس، أو هندسة عكسية، أو إعادة نشر، أو توزيع أي ملف أو كود أو أصل من أصول هذا المشروع لأي غرض شخصي أو تجاري بغير إذن رسمي كتابي ومصرح مسبقاً من مؤسسة العلامة المميزة للمطور كريم خليل.**
> 
> **All rights reserved © 2026 Special Mark Co. Karim Khaleel.**  
> No part of this software, code, layout, or assets may be copied, reproduced, distributed, or transmitted in any form or by any means without the prior written permission of Special Mark Co. Karim Khaleel.

---

## 🔒 بنود الحماية السيبرانية والأمن الرقمي (Cybersecurity & Hardening)

تم فحص وتحصين هذا المشروع بأحدث معايير الأمان السيبراني للواجهات الأمامية والمواقع السحابية:

1. **Content-Security-Policy (CSP) صارمة**:
   - حظر تنفيذ الأكواد الخبيثة من مصادر خارجية غير موثوقة.
   - حصر استدعاء الخطوط والمكتبات والوسائط بنطاقات معتمدة وآمنة (Google Fonts, Google Maps, Self).
2. **منع هجمات XSS وحقن البيانات (XSS & Injection Prevention)**:
   - تطبيق دالة تعقيم برمجية (`sanitize`) تقوم بفلترة أي رموز خبيثة (`<`, `>`, `{`, `}`, `[`, `]`, `\`, `/`, `$`) من نماذج الحجز والملاحظات.
   - تقييد أطوال المدخلات (`maxLength`) للأسماء وأرقام الهواتف وتفاصيل المركبة لمنع تجاوز سعة الذاكرة (Buffer Overflow Attempts).
3. **مكافحة ثغرات Reverse Tabnabbing**:
   - تأمين كافة الروابط الخارجية (خرائط جوجل، فيسبوك، واتساب) بخاصية `rel="noopener noreferrer"` لمنع الصفحات المفتوحة من التحكم بالنافذة الأصلية (`window.opener`).
4. **حماية التضمين والإطارات (Clickjacking & MIME-Sniffing Defense)**:
   - تفعيل `X-Content-Type-Options: nosniff`.
   - تقييد الأذونات الحساسة عبر `Permissions-Policy` لمنع الوصول للكاميرا، الميكروفون، أو منافذ USB دون إذن.
5. **خلو كامل من المفاتيح والأسرار البرمجية**:
   - لا يحتوي الكود المصدري على أي مفاتيح خاصة أو بيانات حساسة مكشوفة. كافة التبادلات آمنة تماماً ومجهزة للعمل على الخوادم الثابتة و GitHub Pages.

---

## 🚀 التشغيل المباشر على صفحات جيت هب (GitHub Pages Ready 100%)

تم ضبط المشروع ليعمل فورياً ومباشرة على **GitHub Pages** بنسبة 100%:

- **مسار نسبي ديناميكي (`base: './'`)**: تم ضبط ملف `vite.config.ts` ليعتمد مسارات نسبية، مما يضمن تحميل الصور وملفات الـ CSS والـ JS دون أخطاء 404، سواء كان الموقع مرفوعاً على النطاق الجذري `username.github.io` أو داخل مستودع فرعي `username.github.io/repo-name/`.
- **أتمتة النشر التلقائي عبر GitHub Actions**:
  - تم إنشاء مسار عمل متكامل في `.github/workflows/deploy.yml`.
  - بمجرد رفع الكود إلى فرع `main` أو `master`، يقوم جيت هب آلياً ببناء المشروع (`npm run build`) ونشره على GitHub Pages خلال ثوانٍ معدودة.
- **تخطي معالجة جيكيل (`public/.nojekyll`)**: موجود داخل مجلد `public` لضمان عدم تجاهل GitHub Pages لأي ملفات داخل حزمة البناء.
- **إعادة التوجيه الذكي (`public/404.html`)**: للتعامل مع أي تحديث للصفحة بسلاسة وتوجيه الزائر للرئيسية دون توقف.

---

## 🛠️ خطوات رفع المشروع إلى مستودع GitHub (How to Push to GitHub)

اتبع هذه الخطوات البسيطة لرفع المشروع على حسابك في GitHub:

### 1. إنشاء مستودع جديد على GitHub:
- ادخل إلى [github.com/new](https://github.com/new).
- اكتب اسم المستودع (مثال: `nael-adelah-center`).
- اختر المستودع كـ **Public** أو **Private**.
- **لا تضع علامة** على (Add README) أو (.gitignore) لأنها موجودة وجاهزة بالفعل في المشروع.
- اضغط **Create repository**.

### 2. رفع الملفات من جهازك عبر الطرفية (Terminal / Git):
افتح مجلد المشروع في التيرمينال ونفّذ الأوامر التالية بالترتيب:

```bash
# 1. تهيئة مستودع Git المحلي (إن لم يكن مهيئاً)
git init

# 2. إضافة كافة ملفات المشروع
git add .

# 3. حفظ التغييرات مع رسالة
git commit -m "Initial release: Nael Adelah Center web app by Special Mark Co. Karim Khaleel"

# 4. تعيين الفرع الأساسي إلى main
git branch -M main

# 5. ربط المستودع برابط مستودعك على جيت هب (استبدل الرابط برابط مستودعك)
git remote add origin https://github.com/USERNAME/nael-adelah-center.git

# 6. رفع المشروع
git push -u origin main
```

---

## 🌐 تفعيل GitHub Pages (Enable GitHub Pages)

بعد رفع المشروع:
1. اذهب إلى صفحة المستودع على GitHub ثم اضغط على تبويب **Settings**.
2. من القائمة الجانبية اليسرى، اضغط على **Pages**.
3. تحت قسم **Build and deployment**:
   - عند خيار **Source**، اختر: **GitHub Actions**.
4. سيبدأ مسار العمل المرفق (`.github/workflows/deploy.yml`) بالعمل تلقائياً.
5. خلال دقيقة واحدة، ستجد رابط موقعك جاهزاً ويعمل في أعلى الصفحة على الرابط:
   `https://USERNAME.github.io/nael-adelah-center/`

---

## 💻 التشغيل والتطوير المحلي (Local Development)

لتشغيل المشروع محلياً على جهازك:

```bash
# تثبيت الحزم
npm install

# تشغيل خادم التطوير السريع
npm run dev

# بناء النسخة الإنتاجية
npm run build

# معاينة حزمة الإنتاج
npm run preview
```

---

## 📋 معلومات وحقوق المركز
- **العميل**: مركز نائل عديلة لصوتيات وزينة السيارات (عَمّان - الأردن).
- **التطوير والإشراف التقني**: **مؤسسة العلامة المميزة للمطور كريم خليل (Special Mark Co. Karim Khaleel)**.
- **الترخيص**: **ترخيص مقيد وخاص (Proprietary & Confidential)** - لا يجوز استخدام أي من ملفات المشروع بغير إذن كتابي مصرح من المؤسسة.
