<div dir="rtl" align="justify">

  <div align="center">
    <img height="60" src="https://img.icons8.com/color/344/javascript.png"> 
    <h1>سوالات متداول جاوا اسکریپت</h1>
  </div>

---

<span>
  سوالات جاوا اسکریپت چند گزینه ای را میتوانید در استوری های [اینستاگرام](https://www.instagram.com/theavocoder) من مشاهده کنید .

  سوالات مطرح شده از سطح مقدماتی تا پیشرفته جاوا اسکریپت هستند . که میتوانید آنها را بررسی کرده تا ببینید که چقدر مهارت در حل مسائل جاوا اسکریپت دارید و یا حتی خودتان را برای تست های مصاحبه جاوا اسکریپت آماده کنید. :muscle: :rocket: 

  من این رپو را مرتبا با سوالات و چالش های جدید جاوا اسکریپت بروز میکنم تا در کنار هم جاوا اسکریپت را بیشتر یاد بگیریم . پاسخ سوالات در زیر هر سوال و کد های آن قرار دارد . بهتر است قبل از دیدن پاسخ ها خودتان جواب را بدست آورید . موفق باشید :heart:
</span>

---

<details><summary><b> سوالات جاوا اسکریپت به غیر از زبان فارسی به  19 زبان دیگر نیز ترجمه شده اند که میتوانید در لیست زیر مشاهده کنید</b></summary>
<p>

* [English](../en-EN/README.md)
* [العربية](../ar-AR/README_AR.md)
* [اللغة العامية - Egyptian Arabic](../ar-EG/README_ar-EG.md)
* [فارسی](../fa-IR/README.md)
* [Bosanski](../bs-BS/README-bs_BS.md)  
* [Deutsch](../de-DE/README.md)  
* [Español](../es-ES/README-ES.md)
* [Français](../fr-FR/README_fr-FR.md)
* [日本語](../ja-JA/README-ja_JA.md)  
* [한국어](../ko-KR/README-ko_KR.md)
* [Nederlands](./nl-NL/README.md)
* [Português Brasil](../pt-BR/README_pt_BR.md)  
* [Русский](../ru-RU/README.md)
* [Українська мова](../ua-UA/README-ua_UA.md)  
* [Tiếng Việt](../vi-VI/README-vi.md)
* [简体中文](../zh-CN/README-zh_CN.md)
* [繁體中文](../zh-TW/README-zh_TW.md)
* [Türkçe](../tr-TR/README-tr_TR.md)
* [ไทย](../th-TH/README-th_TH.md)
* [Indonesia](../id-ID/README.md)

</p>
</details>
---
</div>
<!-- end div base -->



###### 1. خروجی تابع زیر چه خواهد بود  ؟

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

- A: `Lydia` and `undefined`
- B: `Lydia` and `ReferenceError`
- C: `ReferenceError` and `21`
- D: `undefined` and `ReferenceError`

<details><summary><b>پاسخ به شرح زیر میباشد.</b></summary>
<p>

#### Answer: D

Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.

Variables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.

</p>
</details>

---


