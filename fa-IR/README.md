<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>سوالات جاوااسکریپت</h1>

---

<span>من سوالات چندگزینه‌ای جاوااسکریپت را در [اینستاگرامم](https://www.instagram.com/theavocoder) در قالب **استوری** قرار می‌دهم. همچنین آن‌ها را اینجا هم منتشر می‌کنم! آخرین بروزرسانی: <a href=#20200612><b>12 ژوئن</b></a>

از سطح ابتدایی تا پیشرفته: بسنجید چقدر با جاوااسکریپت آشنا هستید، دانش خود را کمی تازه کنید یا برای مصاحبه کدنویسی خود آماده شوید! 💪 🚀 من این مخزن را با سوال‌های جدید به طور منظم به‌روز می‌کنم. جواب‌ها را در بخش‌ زیر سوالات اضافه کردم. برای مشاهده آنها، به سادگی روی آنها کلیک کنید. صرفا جهت سرگرمی، موفق باشید! 💗
</span>

با من در تماس باشید 😊 <br />
<a href="https://www.instagram.com/theavocoder">اینستاگرام</a> || <a href="https://www.twitter.com/lydiahallie">توئیتر</a> || <a href="https://www.linkedin.com/in/lydia-hallie">لینکدین</a> || <a href="https://www.lydiahallie.dev">بلاگ</a>

</div>

|
با اطمینان از آن‌ها در پروژه‌های خود استفاده کنید! 😃 بسیار خوشحال می‌شوم اگر به این مخزن ارجاع دهید. من سوالات و توضیحات را ایجاد می‌کنم (بله، یکمی عجیبم!) و مشارکت شما به شدت به من در حفظ و بهبود آن کمک می‌کند! 💪🏼 از شما متشکرم و امیدوارم که لذت ببرید! |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

---

<details><summary><b> مشاهده ترجمه‌های موجود</b></summary>
<p>

- [🇸🇦 العربية](../ar-AR/README_AR.md)
- [🇪🇬 اللغة العامية](../ar-EG/README_ar-EG.md)
- [🇧🇦 Bosanski](../bs-BS/README-bs_BS.md)
- [🇩🇪 Deutsch](../de-DE/README.md)
- [🇪🇸 Español](../es-ES/README-ES.md)
- [🇫🇷 Français](../fr-FR/README_fr-FR.md)
- [🇮🇩 Indonesia](../id-ID/README.md)
- [🇮🇹 Italiano](../it-IT/README.md)
- [🇯🇵 日本語](../ja-JA/README-ja_JA.md)
- [🇰🇷 한국어](../ko-KR/README-ko_KR.md)
- [🇳🇱 Nederlands](../nl-NL/README.md)
- [🇵🇱 Polski](../pl-PL/README.md)
- [🇧🇷 Português Brasil](../pt-BR/README_pt_BR.md)
- [🇷🇺 Русский](../ru-RU/README.md)
- [🇹🇭 ไทย](../th-TH/README-th_TH.md)
- [🇹🇷 Türkçe](../tr-TR/README-tr_TR.md)
- [🇺🇦 Українська мова](../uk-UA/README.md)
- [🇻🇳 Tiếng Việt](../vi-VI/README-vi.md)
- [🇨🇳 简体中文](../zh-CN/README-zh_CN.md)
- [🇹🇼 繁體中文](../zh-TW/README_zh-TW.md)

</p>
</details>

---

###### 1. خروجی کد زیر کدام گزینه است؟

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` - `undefined`
- B: `Lydia` - `ReferenceError`
- C: `ReferenceError` - `21`
- D: `undefined` - `ReferenceError`

<details><summary><b>پاسخ</b></summary>
<p>

#### پاسخ: D

در داخل تابع، ابتدا متغیر `name` را با کلمه کلیدی `var` تعریف می‌کنیم. این بدان معنی است که متغیر (فضای حافظه) هنگام مرحله ایجاد با مقدار پیش‌فرض `undefined` به بالا برده می‌شود(hoisting)، تا زمانی که به خطی که متغیر را مقداردهی می‌کنیم برسیم. تاکنون در خطی که تلاش می‌کنیم متغیر `name` را چاپ کنیم، متغیر مقداردهی نشده است، بنابراین هنوز مقدار `undefined` را نگه می‌دارد.

متغیرهایی که با کلمه کلیدی `let` (و `const`) تعریف می‌شوند، هم بالا می‌روند (hoisting)، اما بر خلاف `var`، <i>مقداردهی</i> نمی‌شوند. آنها قبل از خطی که آنها را تعریف می‌کنیم (مقداردهی) قابل دسترسی نیستند. این به عنوان "منطقه مرده زمانی(temporal dead zone)" شناخته می‌شود. زمانی که سعی می‌کنیم به متغیرها دسترسی پیدا کنیم قبل از آنکه آنها را تعریف کنیم، جاوااسکریپت یک `ReferenceError` (خطای مرجع) اعلام می‌کند.

</p>
</details>

---
