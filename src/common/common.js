//函数节流
let lastTime = 0;
let timer = null;

function throttle(fn, delay) {
  return function () {
    let nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      fn && fn.call(this);
      lastTime = nowTime;
    }
  }
}

//函数节流（定时器后执行）
function throttleTime(fn, delay) {
  return (...args) => {
    console.log(111);
    if (!timer) {
      timer = setTimeout(() => {
        fn && fn.apply(this, args)
        timer = null;
      }, delay);
    }
  }
}

//函数防抖
function debounce(fn, delay) {
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn && fn.apply(this, args)
    }, delay)
  }
}

export default {
  throttle,
  debounce,
  throttleTime
}