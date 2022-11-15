#!/usr/bin/env python
# -*- coding:utf-8 -*-

import os
import re
import sys
import json
import time
from datetime import datetime, date, timedelta
import requests
import shutil

current_dir = os.path.split(os.path.realpath(__file__))[0]

# 平台：macosx | win32 | global | all
platform = "global"

# 插件名字
plugin_name = ""

# 修改action配置文件
def edit_github_workflows_yml_file(platform, plugin_name):
    print("\n:: edit .github/workflows/main.yml")
    yml_file = os.path.join(current_dir, ".github/workflows/main.yml")

    with open(yml_file, "r+") as f:
        file_content = f.readlines()
    
    data = '      - run: cd /home/runner/work/hbuilderx-plugins/hbuilderx-plugins/{0}/{1} && npm publish \n'.format(platform, plugin_name)
    file_content[16] = data

    with open(yml_file, "w+") as f:
        f.writelines(file_content)

# 获取npmjs版本号
def get_npmjs_package_latest_version(package_name):
    """npmjs.org：get package version
    Args:
        package_name  npmjs.org包名，hbuilderx-plugin开头或包含此字段
    Return:
        version 包最新版本号
    """
    npmjs_url = "https://registry.npmmirror.com/" + package_name
    try:
        res = requests.get(npmjs_url)
        info = json.loads(res.text)
        version = info["dist-tags"]["latest"]
    except Exception as e:
        print("::从npmjs获取{0}版本号出错".format(package_name))
        return False
    else:
        print("[npmjs.org] from npmjs.org get package lastet version....{0}".format(version))
        sys.stdout.flush()
        return version

# 检查插件
def check_plugin(plugin_dir_files, plugin_name):
    print("\n:: check: ", plugin_dir_files, plugin_name)
    result = True

    if len(plugin_dir_files) != 2:
        result = False

    if "package.json" not in plugin_dir_files:
        result = False
    
    is_zip = [f for f in plugin_dir_files if ".zip" in f ]
    if len(is_zip) != 1:
        result = False
    return result


def handle_a_plugin():

    # 插件目录
    plugin_dir = os.path.join(current_dir, platform, plugin_name)
    if not os.path.exists(plugin_dir):
        print("\n:: check, file_path is not exists. {0}".format(plugin_dir))
        return 

    # 插件文件列表
    plugin_dir_files = os.listdir(plugin_dir)

    # 检查插件文件列表内容
    check_result = check_plugin(plugin_dir_files, plugin_name)
    if not check_result:
        print("\n:: {0} {1} 插件内容检查错误".format(platform, plugin_name))
    
    edit_github_workflows_yml_file(platform, plugin_name)

    print("\n:: git action \n\n")

    cmd = "cd {0} && git add .github/workflows/main.yml".format(current_dir)
    os.system(cmd)

    cmd = "cd {0} && git add * && git commit -m 'update {1}' && git push".format(plugin_dir, plugin_name)
    os.system(cmd)

    print("\n\n:: [npmjs.org] from npmjs.org get package lastet version....")
    time.sleep(20)
    get_npmjs_package_latest_version(plugin_name)


if __name__ == "__main__":
    if len(sys.argv) > 1:
        platform = sys.argv[1]
        plugin_name = sys.argv[2]
        handle_a_plugin()
    else:
        print("\n[init] Please input args....")
