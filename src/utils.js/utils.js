export function fuck(dick) {
  if (dick.style.display === "block") {
    setTimeout(() => {
      dick.style.display = "none";
    }, 100);

    return;
  }
  dick.style.display = "block";
  console.log(1); 
}


export function ass(dick,tok) {
  setTimeout(() => {
    dick.style.display = "none";
  }, 100);

  tok.check.checked = false;
}