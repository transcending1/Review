import subprocess

from exlib.tests.utils import exec_router_change


@exec_router_change("../scripts")
def collect_module_html():
    subprocess.Popen("python auto_collect_document.py").wait()


@exec_router_change("../exlib/doc")
def collect_framework_doc():
    subprocess.Popen("python generate_doc.py").wait()


@exec_router_change("../exlib")
def collect_unittest_report():
    subprocess.Popen("python run_all_cases.py").wait()


if __name__ == "__main__":
    collect_module_html()
    collect_framework_doc()
    collect_unittest_report()
