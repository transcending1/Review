# Add Columns
## Detailed Info
### Description
'merge two csv files into one csv file by columns,encoding:utf8  sep:,'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Data Transformation | Manipulation | DOCKER | 1 | 0 | 2048 | deny |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| columns1 | True | STRING |  | True | MULTIPLE |
| input_file1 | True | FILE |  | True | None |
| columns2 | True | STRING |  | True | MULTIPLE |
| input_file2 | True | FILE |  | True | None |
| output_file | False | FILE |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.columns1
'column selector for field input_file1'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | Yes | MULTIPLE | input_file1 |


### 2.input_file1
'csv file'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 3.columns2
'column selector for field input_file2'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | Yes | MULTIPLE | input_file2 |


### 4.input_file2
'csv file'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


## Output Parameters
### 1.output_file
'merged csv file'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |



# Test Case
## Case1
## Desc:合并两个csv文件
### Input Params

| field | value | desc |
| --- | --- | --- |
| columns1 | ['姓名', '年龄'] | 第一个csv文件中选择的列 |
| columns2 | ['姓名', '年龄'] | 第二个csv文件中选择的列 |


### Custom Test Report
+ File's Shape


| Shape | File |
| --- | --- |
| (5, 2) | First File |
| (5, 2) | Second File |
| (5, 4) | Result File |


