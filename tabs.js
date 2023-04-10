const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", (e) => {
  const keydownLeft = 37;
  const keydownRight = 39;

  // change current tabindex to -1
  e.tabindex = -1;
  // if right key pressed, moved to next tab on right

  // if left key pressed, moved to next tab on left
});
