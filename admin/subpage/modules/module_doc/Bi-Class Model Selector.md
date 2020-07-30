# Bi-Class Model Selector
+ Description

choose the best model of different models

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Evaluation | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| evaluation_metrics | True | STRING | accuracy | True | None |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| input_module1 | True | DIRECTORY |  | False | None |
| input_module2 | True | DIRECTORY |  | False | None |
| input_module3 | True | DIRECTORY |  | False | None |
| input_module4 | True | DIRECTORY |  | False | None |
| input_module5 | True | DIRECTORY |  | False | None |
| input_module6 | True | DIRECTORY |  | False | None |
| input_module7 | True | DIRECTORY |  | False | None |
| input_module8 | True | DIRECTORY |  | False | None |
| input_module9 | True | DIRECTORY |  | False | None |
| output_statistic_file | False | FILE |  | False | None |
| output_model | False | DIRECTORY | module | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.evaluation_metrics
+ Description

index of evaluating several given modules

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | accuracy | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| accuracy |  |
| recall |  |
| f1-score |  |


### 2.label
+ Description

target feature

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | Yes | SINGLE | input_file1 |


### 3.input_file1
+ Description

input test file

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 4.input_module1
+ Description

input module

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY |  | No | None | None |


### 5.input_module2
+ Description

input module

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY |  | No | None | None |


### 6.input_module3
+ Description

input module

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY |  | No | None | None |


### 7.input_module4
+ Description

input module

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY |  | No | None | None |


### 8.input_module5
+ Description

input module

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY |  | No | None | None |


### 9.input_module6
+ Description

input module

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY |  | No | None | None |


### 10.input_module7
+ Description

input module

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY |  | No | None | None |


### 11.input_module8
+ Description

input module

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY |  | No | None | None |


### 12.input_module9
+ Description

input module

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY |  | No | None | None |


## Output Parameters
### 1.output_statistic_file
+ Description

output statistic file

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |


### 2.output_model
+ Description

output module

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY | module | No | None | None |



# Test Case
## Case1
## Desc:多个二分类模型根据指标选择最优模型
### Input Params

| field | value | desc |
| --- | --- | --- |
| evaluation_metrics | recall | 使用召回率作为模型选择的评估指标 |
| label | Class | 选取Class作为label |


### Post Json Format

| sepal-length | sepal-width | petal-length | petal-width |
| --- | --- | --- | --- |
| 5.4 | 3.7 | 1.5 | 0.2 |


