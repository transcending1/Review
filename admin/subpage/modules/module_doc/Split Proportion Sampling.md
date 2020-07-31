# Split Proportion Sampling
## Detailed Info
### Description
'The method of random sampling a certain number of small proportion data in the original data set of each group This module is often used to extract small samples for data visualization'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Data Transformation | Sampling And Split | DOCKER | 1 | 0 | 2048 | allow |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| group | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| group_sampling | True | STRING |  | False | None |
| is_putback | True | STRING | False | True | None |
| output_file | False | FILE |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.group
'target group'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | Yes | SINGLE | input_file1 |


### 2.input_file1
'csv file'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 3.group_sampling
'Number of samples of each group,Example:{1:0.2,0:0.2,2:0.1}}'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | No | None | None |


### 4.is_putback
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
## Desc:鸢尾花数据集按比例下采样
### Input Params

| field | value | desc |
| --- | --- | --- |
| group | Class | 选取花的类别,对里面花的种类进行按比例下采样 |
| group_sampling | {1: 0.2, 0: 0.2, 2: 0.1} | 鸢尾花类别为1的占比为2,类别为0的占比为4,类别为2的占比为5进行下采样 |
| is_putback | False | 无放回进行采样 |


