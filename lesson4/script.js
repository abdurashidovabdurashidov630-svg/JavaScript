let time = Number(prompt("Vaqt kiriting:"));

if (time >= 1 && time <= 5) {
  alert("Siz uxlaysiz");
} else if (time >= 6 && time <= 7) {
  alert("Siz nonushrta qilasiz");
} else if (time >= 8 && time <= 10) {
  alert("Siz kursga borasiz");
} else if (time > 10 && time <= 11) {
  alert("Siz vazifa qilasiz");
} else if (time >= 12 && time <= 13) {
  alert("Siz tushlik qilasiz");
} 
else if (time >= 14 && time <= 18) {
  alert("Siz maktabga borasiz");
} 
else if (time >= 19 && time <= 20) {
  alert("Siz ovqatlanasiz");
} 
else if (time >= 21 && time <= 22) {
  alert("Siz vazifa qilasiz");
} 
else if (time >= 23 && time <= 24) {
  alert("Siz uxlaysiz");
} 
else {
  alert("Siz vaqtni xato kiritdingiz.");
}