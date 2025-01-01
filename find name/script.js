// لیست مرتب‌شده از اسامی
const names = [
  "Ali",
  "Amir",
  "Fatemeh",
  "Hassan",
  "Leila",
  "Maryam",
  "Narges",
  "Reza",
  "Sara",
  "Zahra",
];

// گرفتن المان‌های صفحه
const nameInput = document.getElementById("nameInput");
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");

// تابع جستجوی دودویی
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // عنصر پیدا شد
    } else if (arr[mid] < target) {
      left = mid + 1; // جستجو در نیمه راست
    } else {
      right = mid - 1; // جستجو در نیمه چپ
    }
  }

  return -1; // عنصر پیدا نشد
}

// رویداد کلیک دکمه جستجو
searchBtn.addEventListener("click", () => {
  const nameToFind = nameInput.value.trim();

  if (!nameToFind) {
    resultDiv.textContent = "Please enter a name!";
    return;
  }

  const index = binarySearch(names, nameToFind);

  if (index !== -1) {
    resultDiv.textContent = `The name "${nameToFind}" is found at index ${index}.`;
  } else {
    resultDiv.textContent = `The name "${nameToFind}" is not found in the list.`;
  }
});
