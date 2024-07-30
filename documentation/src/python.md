# Python
This page teaches you how to use LinkGuard in your Python applications

## Before Distribution
Before you distribute your python application, insert this at the very top of the application and then obfuscate & distribute
(*don't forget to replace `PROJECT_NAME`*)
```python
import requests

project_name = "PROJECT_NAME"
license_key = input("License Key: ")

response = requests.get("https://linkguard.cc/v1/project/{}/licenses/{}".format(project_name, license_key))
if response.status_code != 200:
    print("Invalid License")
    exit(1)

body = response.json()
if not body["valid"]:
    print("Invalid License")
    exit(1)
```