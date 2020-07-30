# Convert To CSV
+ Description

 Covert from other file to csv,you can appoint encoding of your input file(Default:utf8) and sep unit(Default:,)

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Data Transformation | Manipulation | DOCKER | 1 | 0 | 2048 | deny |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_file1 | True | FILE |  | True | None |
| input_file_encoding | True | STRING | utf8 | True | None |
| sep | True | STRING | , | True | None |
| output_file | True | FILE |  | True | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_file1
+ Description

the file you want to convert to csv

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 2.input_file_encoding
+ Description

the file's encoding you input

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | utf8 | Yes | None | None |


### 3.sep
+ Description

unit that separate different fields in one line

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | , | Yes | None | None |


### 4.output_file
+ Description

convert from other files

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |



# Test Case
## Case1
## Desc:把txt文件转换为csv文件
### Input Params

| field | value | desc |
| --- | --- | --- |
| input_file_encoding | utf8 | txt文件的编码 |
| sep | , | txt文件分隔符为逗号 |


