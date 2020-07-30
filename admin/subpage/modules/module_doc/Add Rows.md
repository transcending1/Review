# Add Rows
+ Description

merge two csv files into one csv file by rows,encoding:utf8 sep:,

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Data Transformation | Manipulation | DOCKER | 1 | 0 | 2048 | allow |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_file1 | True | FILE |  | True | None |
| input_file2 | True | FILE |  | True | None |
| output_file | False | FILE |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_file1
+ Description

csv file

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 2.input_file2
+ Description

csv file

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


## Output Parameters
### 1.output_file
+ Description

merged csv file

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |



# Test Case
## Case1
## Desc:纵向合并两个csv文件
### Custom Test Report
+ File's Shape


| Shape | File |
| --- | --- |
| (5, 3) | First File |
| (5, 3) | Second File |
| (10, 3) | Result File |


