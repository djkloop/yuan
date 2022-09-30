import { defineComponent } from "vue";
import { schemaFieldProps } from "../../props";

// Object 组件
const ObjectField = defineComponent({
  name: 'ObjectField',
  props: schemaFieldProps,
  setup(props) {
    const isRequired = name => Array.isArray(props.schema.required) && !!~props.schema.required.indexOf(name);
  }
})
