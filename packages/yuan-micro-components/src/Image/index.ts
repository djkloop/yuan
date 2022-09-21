import YuanImage from "./Image"

export default {
  render: YuanImage,
  editorProps: {
    src: {
      type: 'string',
      defaultValue: '',
    }
  }
}
