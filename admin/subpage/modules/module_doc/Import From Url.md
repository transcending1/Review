# Import From Url
## Detailed Info
### Description
'import from web url to csv'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Data Input and Output | Import | DOCKER | 1 | 0 | 2048 | deny |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| url_path | True | STRING |  | False | None |
| input_file_encoding | True | STRING | utf8 | True | None |
| sep | True | STRING | , | True | None |
| output_file1 | False | FILE |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.url_path
'static web url'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 2.input_file_encoding
'file encoding'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | utf8 | Yes | None | None |


### 3.sep
'sep of static file'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | , | Yes | None | None |


## Output Parameters
### 1.output_file1
'file generated from web url'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |



# Test Case
## Case1
## Desc:从静态网页导入csv
### Input Params

| field | value | desc |
| --- | --- | --- |
| url_path | http://biostat.mc.vanderbilt.edu/wiki/pub/Main/DataSets/titanic.txt | 静态网页地址 |
| input_file_encoding | utf8 | 该文件的编码为utf8 |
| sep | , | 该文件的分隔符为逗号 |


