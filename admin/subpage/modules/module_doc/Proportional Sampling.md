# Proportional Sampling
## Detailed Info
### Description
'It provides a method of randomly extracting small sample data with a specific proportion from the original data set. This module is often used to extract small samples for data visualization'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Data Transformation | Sampling And Split | DOCKER | 1 | 0 | 2048 | allow |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_file1 | True | FILE |  | True | None |
| proportion | True | STRING |  | False | None |
| is_putback | True | STRING | False | True | None |
| output_file | False | FILE |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_file1
'csv file'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 2.proportion
'proportion of samples'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 3.is_putback
'is sampling putback'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | False | Yes | None | None |


## Output Parameters
### 1.output_file
'merged csv file'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |



# Test Case
## Case1
## Desc:鸢尾花数据集按照数据重量的大小的比例进行下采样
### Input Params

| field | value | desc |
| --- | --- | --- |
| proportion | 0.2 | 取20%的数据进行采样 |
| is_putback | False | 采样的时候不把已经拿到的数据放回原处再进行采样 |


