from nicegui import ui


class ComponentTranslator:
    def translate(self, schema: dict):
        raise NotImplementedError("This method should be implemented by a subclass.")


class ObjectTranslator(ComponentTranslator):
    def __init__(self, mapper):
        self.mapper = mapper

    def translate(self, label, schema: dict):
        properties: dict[str, dict] = schema.get("properties", {})
        definitions: dict[str, dict] = schema.get("definitions", {})

        for prop_name, prop_schema in properties.items():
            self.mapper.get_component(prop_name, prop_schema)
            if "patternProperties" in prop_schema:
                definition_ref: str = next(iter(prop_schema["patternProperties"]))
                prop_def_path = prop_schema["patternProperties"][definition_ref]["$ref"].split("/")[1:]
                with ui.expansion(text=prop_name):
                    for def_prop_name in definitions[prop_def_path[1]]["properties"].keys():
                        ui.input(label=def_prop_name)


class StringTranslator(ComponentTranslator):
    def translate(self, label, schema: dict):
        with ui.input(label=label):
            if "description" in schema:
                with ui.icon(name="help", size="md").classes("rounded"):
                    ui.tooltip(schema["description"])
                

class ArrayTranslator(ComponentTranslator):
    def translate(self, label, schema: dict):
        with ui.input(label=label):
            if "description" in schema:
                with ui.icon(name="help", size="md").classes("rounded"):
                    ui.tooltip(schema["description"])