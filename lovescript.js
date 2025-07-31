const sound = document.getElementById('popsound');
const nyanCat = document.getElementById('nyan-cat');
const meow = document.getElementById('meosound');

nyanCat.addEventListener('click', () => {
  meow.play();
});

nyanCat.addEventListener('touchstart', () => {
  meow.play();
});

const messages = [
  "love you မကြီးတို့ 💕", "I miss you 🤗", "I Love You 🥰", "ချစ်တယ်",
  "သတိလဲရတယ်နော် 💫", "❤️ တစ်နေ့ကြအပြင်မှာတွေ့ကြမယ်❤️", "စာမေးပွဲအတွက်ဖိုက်တင်းမကြီးတို့ 😊",
  "စာမေးပွဲပြီးရင်အပြင်မှာတွေ့ကြမယ်နော် 💖", "ကိုကိုဖန်မကြီးခင်ရော ရည်းစားကိုသတ်ချင်နေတဲ့ အခြူးရော ကျန်တဲ့single 4 ယောက်ရောအကုန်လုံးကိုချစ်တယ်။🌸",
  "ရည်းစားရှိတဲ့သူတွေလဲအဆင်ပြေနိုင်ကြပါစေ🎁", "မရှိတဲ့သူတွေကတော့တစ်သက်လုံးsingle ဖြစ်ပါစေ💘",
  " စာမေးပွဲမှာ အမှတ်တွေအများကြီးရကြပါစေ💐", "ရည်းစားလေးကိုကြူးချင်ရင်လာပြောလိုက်🤭",
  "ကံ့ကော်ပင်တင်ပေးမယ့်မကြီး မိုးရာသီကုန်တော့မယ်လို့ 💞", "မယွန်းလဲဒေါ်မာချဉ်ကြီးဂရုစိုက်အုံး❤️",
  "မကြီး ၀၀၁ ကကျွန်မကိုအကသင်ပေးအုံး 🌈", "Love You my dear freinds❤️",
  "ခြူးရည်းစားဟောင်းကြီးရိုက်သတ်ဖို့ သံကြိုးတင်ပေးလိုက်မယ်နော် 🏡", "မထက်နဲ့မနှင်းနဲ့လဲဂရုစိုက်ကြနော် 😘",
  "မယွန်းလဲ crush ကြီးကပြန်ကြိုက်ပါစေ ✨","ကျောင်းတူတူတက်ပြီးခင်ခွင့်ရလို့ဝမ်းသာပါတယ်ရှင့် 😘", "fighting fighting မကြီးတို့❤️"
];

function showRandomMessage(event) {
  sound.play();
  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = messages[Math.floor(Math.random() * messages.length)];

  const directions = [0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI, 5*Math.PI/4, 3*Math.PI/2, 7*Math.PI/4];
  const angle = directions[Math.floor(Math.random() * directions.length)];
  const distance = 200;
  const dx = Math.cos(angle) * distance + "px";
  const dy = Math.sin(angle) * distance + "px";
  msg.style.setProperty('--dx', dx);
  msg.style.setProperty('--dy', dy);

  const rect = event.currentTarget.getBoundingClientRect();
  msg.style.left = rect.left + rect.width / 2 + "px";
  msg.style.top = rect.top + rect.height / 2 + "px";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.position = "fixed";

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 3000);
}
