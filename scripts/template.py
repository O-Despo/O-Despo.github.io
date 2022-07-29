"""
Uses Jinja to render and save templates for static delivery all output is put into `./static`

Commands:
    render dataSource templateName 
"""
import argparse
import json
from jinja2 import Environment, FileSystemLoader

class template_render():
    def __init__(self) -> None:
        self.env = Environment(
            loader=FileSystemLoader("./templates")
        )

        self.parser = argparse.ArgumentParser()
        self.parser.add_argument("jsonSource", metavar="jsonName", type=str,
                                 help="A json file that will be used to build the template")
        self.parser.add_argument("templateName", metavar="templateName", type=str,
                                 help="A name of a template in the template directory")

    def render(self, data_source:str, template_name:str) -> bool:
        """Renders a source json file into a template

        Args:
            dataSource (str): the json file to be used as a source
            templateName (str): file name of the template to be used

        Returns:
            bool: if the render was successful
            TODO add regex
        """
        try:
            with open(data_source) as json_source_file: 
                data_source_dict = json.load(json_source_file)
        except:
            print("Failed: data_source error")

        template = self.env.get_template(template_name)
        print("Fail: TemplateName not in ./template")

        render = template.render({"article": data_source_dict})
        print(render)
        with  open(f"./static/{data_source_dict['title'].replace(' ','_')}.html", "w+") as output_fp:
            output_fp.write(render)

        print("Sucess")
         
    def runCommandline(self) -> None:
        self.args = self.parser.parse_args()
        render_out = self.render(self.args.jsonSource, self.args.templateName)

if __name__ == "__main__":
    render_obj = template_render()
    render_obj.runCommandline()