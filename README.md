👨‍💻 Developers Hub - Social Media Platform for Developers
Developers Hub is a social media platform designed specifically for developers, where they can connect, share projects, and engage with each other. The platform is built using Next.js for the frontend and Nest.js for the backend, providing a scalable and maintainable architecture.

Website Preview

🛠️ Technologies Used
Backend:
Nest.js with Modular Monolithic Architecture
Redis Pub/Sub for real-time notifications
Redis for caching to improve performance
BullMQ for background tasks like email notifications
PostgreSQL as the main database
Prisma ORM for database management
Socket.io for real-time communication
Frontend:
Next.js 15 for fast and SEO-friendly pages with Server-Side Rendering (SSR)
TailwindCSS for styling
Shadcn UI for modern UI components
🚀 How to Run the Project Locally
✅ Prerequisites
Docker and Docker Compose installed
Redis running locally on port 6887:
docker run -p 6887:6379 redis
A PostgreSQL or MySQL database (local or via Docker)
Your SMTP credentials: EMAIL and PASSWORD (e.g., Gmail or Mailtrap)
.env files configured with:
DATABASE_URL
REDIS_URL
SMTP_EMAIL, SMTP_PASSWORD, etc.
🗂️ Project Structure
The code is organized into the apps folder:

apps/
├── api   # Nest.js backend
└── web   # Next.js frontend
📦 Installation Steps
Clone the repository:
git clone https://github.com/JamalMohafil/Developers_Hub-Social-Media-Application.git
cd Developers_Hub-Social-Media-Application
Install dependencies:
Backend:
cd apps/api
npm install
Frontend:
cd ../web
npm install
Create your .env files in both apps/api and apps/web, and add the necessary environment variables.
▶️ Run the Project
Backend (API):
npm run start:dev
Frontend (Web):
npm run dev
🌍 Live Preview
Watch the demo on YouTube: Watch the demo on YouTube

📱 Connect with Me
LinkedIn
Instagram
YouTube
⚡ About the Project
This project was an exciting learning journey for me, and through it, I explored powerful tools like Redis and BullMQ for building large-scale applications. During development, I faced numerous challenges, but overcoming them helped me understand the best practices for building scalable and maintainable projects. Next.js allowed me to create a fast and efficient frontend for the platform, and I'm excited about the future development of Developers Hub.

🔖 License
This project is licensed under the MIT License - see the LICENSE file for details.

🧑‍💻 Developers Hub - منصة تواصل اجتماعي للمطورين
Developers Hub هي منصة تواصل اجتماعي مخصصة للمطورين، فيهن يتواصلوا مع بعض، يشاركوا مشاريعهم، ويتفاعلوا مع بعض. المنصة مبنية باستخدام Next.js للواجهة الأمامية وNest.js للخلفية، وهاد الشي بيوفر هيكلية قابلة للتوسع والصيانة بسهولة.

صورة الموقع

🛠️ التقنيات المستخدمة
Backend:
Nest.js مع Modular Monolithic Architecture
Redis Pub/Sub للإشعارات الفورية
Redis للتخزين المؤقت (Caching) لتحسين الأداء
BullMQ لمعالجة المهام الخلفية مثل إرسال الإيميلات
PostgreSQL كقاعدة بيانات رئيسية
Prisma ORM لإدارة قاعدة البيانات
Socket.io للتواصل في الوقت الفعلي
Frontend:
Next.js 15 لإنشاء صفحات سريعة ومتوافقة مع محركات البحث (SEO) مع دعم الـ SSR
TailwindCSS للتصميم
Shadcn UI لتقديم مكونات واجهة مستخدم حديثة
🚀 كيفية تشغيل المشروع محليًا
✅ المتطلبات الأساسية
وجود Docker و Docker Compose مثبتين
تشغيل Redis محليًا على المنفذ 6887:
docker run -p 6887:6379 redis
قاعدة بيانات PostgreSQL أو MySQL (محلية أو من خلال Docker)
بيانات اعتماد SMTP الخاصة بك: EMAIL و PASSWORD
إعداد ملف .env يحتوي على:
DATABASE_URL
REDIS_URL
SMTP_EMAIL, SMTP_PASSWORD, وغيرها
🗂️ هيكلية المشروع
apps/
├── api   # الواجهة الخلفية (Nest.js)
└── web   # الواجهة الأمامية (Next.js)
📦 خطوات التثبيت
استنساخ المستودع:
git clone https://github.com/JamalMohafil/Developers_Hub-Social-Media-Application.git
cd Developers_Hub-Social-Media-Application
تثبيت الحزم:
الخلفية (Backend):
cd apps/api
npm install
الواجهة الأمامية (Frontend):
cd ../web
npm install
أنشئ ملفات .env داخل apps/api و apps/web وأضف متغيرات البيئة المطلوبة كما ذُكر أعلاه.
▶️ تشغيل المشروع
الخلفية (API):
npm run start:dev
الواجهة الأمامية (Web):
npm run dev
🌍 معاينة حية
فيك تشوف العرض التوضيحي للمشروع على يوتيوب:
شاهد العرض التوضيحي على يوتيوب

📱 تواصل معي
لينكد إن
إنستغرام
يوتيوب
⚡ عن المشروع
المشروع كان رحلة تعلم كتير مثيرة إلي، ومن خلاله اكتشفت أدوات قوية مثل Redis وBullMQ لبناء تطبيقات ضخمة. خلال مرحلة التطوير، واجهت كتير تحديات، بس التغلب عليهن ساعدني فهم أفضل الطرق لبناء مشاريع قابلة للتوسع والصيانة. استخدمت Next.js لعمل واجهة أمامية سريعة وفعالة للمنصة، وأنا متحمس لتطوير Developers Hub أكتر بالمستقبل.

🔖 الترخيص
هذا المشروع مرخص بموجب MIT License - راجع ملف LICENSE لمزيد من التفاصيل.
