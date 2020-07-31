# Remove Duplicate Rows
## Detailed Info
### Description
'drop duplicate rows in your dataset'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Data Transformation | Manipulation | DOCKER | 1 | 0 | 2048 | allow |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| subset | True | STRING |  | False | MULTIPLE |
| input_file1 | True | FILE |  | True | None |
| output_file | False | FILE |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.subset
'for example: you can put in rowA,rowBwhich means you can drop the rows duplicated in union rowA and rowB'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | MULTIPLE | input_file1 |


### 2.input_file1
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
## Desc:去除重复行,指定子列,对应的子列中的数据如果有重复就去除
### Input Params

| field | value | desc |
| --- | --- | --- |
| subset | ['姓名', '年龄'] | 选取测试的子列为姓名,年龄 |


