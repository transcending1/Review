# Split Data
## Detailed Info
### Description
'divide a dataset into two distinct sets'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Data Transformation | Sampling And Split | DOCKER | 1 | 0 | 2048 | allow |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_file1 | True | FILE |  | True | None |
| radio | True | STRING | 0.8 | True | None |
| output_file1 | False | FILE |  | False | None |
| output_file2 | False | FILE |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_file1
'file to split by radio'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 2.radio
'radio of the first output file'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.8 | Yes | None | None |


## Output Parameters
### 1.output_file1
'file1 be splited'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |


### 2.output_file2
'file2 be splited'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |



# Test Case
## Case1
## Desc:把数据集按比例分隔成两部分:测试集,训练集
### Input Params

| field | value | desc |
| --- | --- | --- |
| radio | 0.8 | 分割比例,output_file1占比80%,output_file2占比20% |


