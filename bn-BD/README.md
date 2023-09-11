<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>জাভাস্ক্রিপ্ট প্রশ্নসমূহ</h1>

---

<span>আমি আমার [Instagram](https://www.instagram.com/theavocoder) **stories**, বহু প্রকারের জাভাস্ক্রিপ্ট নির্বাচনী প্রশ্ন পোস্ট করি, যা আমি এখানেও পোস্ট করব! সর্বশেষ আপডেট: <a href=#20200612><b>জুন 12</b></a>

ব্যাসিক থেকে এডভ্যান্সঃ পরীক্ষা করুন জাভাস্ক্রিপ্ট কত ভাল করে জানেন, জ্ঞান রিফেশ করুন অথবা কোডিং ইন্টারভিউয়ের জন্যে প্রস্তুতি নিন! :muscle: :rocket: আমি এই রিপো নিয়মিত আপডেট করবো নতুন প্রশ্ন সহ। উত্তরগুলি **collapsed sections** এর নিচে থাকবে, ক্লিক করে উওর দেখা যাবে। এটা শুধুমাত্র মজার জন্যে, গুড লাক। :heart:</span>

প্রয়োজনে আমার সংগে কোন প্রকার কিন্তু ছাড়াই যোগাযোগ করতে পারেন 😊 <br />
<a href="https://www.instagram.com/theavocoder">Instagram</a> || <a href="https://www.twitter.com/lydiahallie">Twitter</a> || <a href="https://www.linkedin.com/in/lydia-hallie">LinkedIn</a> || <a href="https://www.lydiahallie.dev">Blog</a>

</div>

| এগুলি কোনো প্রজেক্টে ব্যবহার করার জন্য স্বাগত! 😃 যদি রেফারেন্স দেয়া হয় এই রিপোর তাহলে অনেক খুশি হব। আমি এই প্রজোক্টের প্রশ্ন বানিয়েছি আর কমিউনিটি আমাকে মেইনটেইন এবং আরো ভাল করতে সাহায্য করেছে! 💪🏼 ধন্যবাদ এবং মজা করুন! |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

---

<details><summary><b> 20টি অনুবাদ দেখুন 🇸🇦🇪🇬🇧🇦🇩🇪🇪🇸🇫🇷🇮🇩🇯🇵🇰🇷🇳🇱🇧🇷🇷🇺🇹🇭🇹🇷🇺🇦🇻🇳🇨🇳🇹🇼🇽🇰</b></summary>
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
- [🇷o Română](../ro-RO/README.ro.md)
- [🇷🇺 Русский](../ru-RU/README.md)
- [🇽🇰 Shqip](../sq-KS/README_sq_KS.md)
- [🇹🇭 ไทย](../th-TH/README-th_TH.md)
- [🇹🇷 Türkçe](../tr-TR/README-tr_TR.md)
- [🇺🇦 Українська мова](../uk-UA/README.md)
- [🇻🇳 Tiếng Việt](../vi-VI/README-vi.md)
- [🇨🇳 简体中文](../zh-CN/README-zh_CN.md)
- [🇹🇼 繁體中文](../zh-TW/README_zh-TW.md)

</p>
</details>

---

###### 1. আউটপুট কি হবে?

```javascript
function sayHi() {
  console.log(name)
  console.log(age)
  var name = 'Lydia'
  let age = 21
}

sayHi()
```

- A: `Lydia` and `undefined`
- B: `Lydia` and `ReferenceError`
- C: `ReferenceError` and `21`
- D: `undefined` and `ReferenceError`

<details><summary><b>উত্তর</b></summary>
<p>

#### উত্তর: D

ফাংশনের মধ্যে, আমরা প্রথমে `var` কীওয়ার্ড দিয়ে `name` ভেরিয়েবল ডিক্লেয়ার করি। এটা মানে যে ভেরিয়েবলটি `hoist` হয় (মেমরি স্পেস ভ্যারিয়েবেল ক্রিয়েটের সেটাপ সময় হয়) এবং ডিফল্ট মান `undefined` দিয়া হয়, যত টা সত্যিকতা হয় তা প্রাপ্ত হতে পর্যন্ত যা কোনও লাইনে আসলে। আমরা এখনও সেই লাইনে যেখানে আমরা ভেরিয়েবলটির ডেফাইনশন দেওয়া শুরু করি নি। এই লাইনে আমরা ভেরিয়েবলটি ডিফাইন করা হয়নি, সো এখানে আমরা `name` ভেরিয়েবল লগ করতে চেষ্টা করলে, এটি এখনো `undefined` এর মান ধারণ করে।

`let` কীওয়ার্ড (এবং `const`) দিয়ে ডিক্লেয়ার করা ভেরিয়েবলগুলি `hoist` হয়, কিন্তু `var` এর মতই <i>ইনিশিয়ালাইজড</i> হয় না। এগুলি তাদের ডিক্লেয়ার (ইনিশিয়ালাইজ) হওয়ার আগে অ্যাক্সেস করা যায় না। এটা "টেম্পোরাল ডেড জোন(temporal dead zone)" হিসেবে পরিচিত। যখন আমরা এই ভেরিয়েবলগুলির ডিক্লেয়ারেশন আগে তাদের অ্যাক্সেস করতে চেষ্টা করি, তখন জাভাস্ক্রিপ্ট একটি `ReferenceError` থ্রো করে।

</p>
</details>
