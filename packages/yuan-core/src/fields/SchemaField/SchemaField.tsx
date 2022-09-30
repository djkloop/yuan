import { defineComponent } from "vue";
import { schemaFieldProps } from "../../props";
import { retrieveSchema } from "../../utils/schema/retrieveSchema";


const SchemaField = defineComponent({
  name: 'SchemaField',
  props: schemaFieldProps,
  setup(props) {
    const schema = retrieveSchema(props.schema, props.rootSchema)
    console.log(schema, ' SchemaField ')

    //
    const curProps = { ...props, schema }

    if (Object.keys(schema).length === 0) return null

    //???
    const { field: fieldComponent, fieldProps } = getUiField()
  }
})

export default SchemaField
