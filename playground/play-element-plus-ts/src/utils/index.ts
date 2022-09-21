export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// 动态加载组件
export const loadScript = (src: string) => {
  return new Promise((resolve, reject) => {
    const sc = document.createElement('script')
    sc.setAttribute('type', 'module')
    sc.setAttribute('id', src.replace('/', ''))
    function _onLoad() {
      resolve(src)
      sc.onload = sc.onerror = null
    }
    sc.onload = _onLoad;
    sc.onerror = reject;
    sc.setAttribute('src', '.' + src)
    sc.crossOrigin = "anonymous"
    document.head.append(sc)
  })
}
