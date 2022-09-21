const n = window.Vue.createVNode, t = window.Vue.defineComponent, o = {
  src: String
}, r = t({
  name: "YuanImage",
  props: o,
  setup(e) {
    return () => n("img", {
      src: e.src
    }, null);
  }
}), s = {
  render: r,
  editorProps: {
    src: {
      type: "string",
      defaultValue: ""
    }
  }
}, a = {
  YuanImage: s
};
export {
  a as default
};
