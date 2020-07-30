# Regression Evaluation
+ Description

regression evaluation

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Evaluation | DOCKER | 1 | 0 | 2048 | deny |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_model | True | DIRECTORY |  | False | None |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| output_directory | False | DIRECTORY |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_model
+ Description

module after training by trainer

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY |  | No | None | None |


### 2.label
+ Description

target feature

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | Yes | SINGLE | input_file1 |


### 3.input_file1
+ Description

test csv dataset to have a test about two regression module

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


## Output Parameters
### 1.output_directory
+ Description

regression evaluation report

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY |  | No | None | None |



# Test Case
## Case1
## Desc:随意抽取一个波士顿房价预测的回归模型进行评估测试
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | PRICE | 选取PRICE字段作为label |


