# Multi-Class Gaussian Naive Bayes
+ Description

Gaussian Naive Bayes (GaussianNB) Can perfor m online updates to model parameters via :meth:`pa rtial_fit

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Multi Classification | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| output_model_file | False | FILE |  | False | None |
| output_model | False | DIRECTORY | module | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.label
+ Description

target feature

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | Yes | SINGLE | input_file1 |


### 2.input_file1
+ Description

input csv file for trainer

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


## Output Parameters
### 1.output_model_file
+ Description

output module

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
## Desc:鸢尾花高斯朴素贝叶斯多分类
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | Class | 标签 |


### Post Json Format

| sepal-length | sepal-width | petal-length | petal-width |
| --- | --- | --- | --- |
| 5.4 | 3.7 | 1.5 | 0.2 |


### Custom Test Report
+ Test Example


| field | value |
| --- | --- |
| sepal-length | 5.4 |
| sepal-width | 3.7 |
| petal-length | 1.5 |
| petal-width | 0.2 |


+ Predict Result


| result |
| --- |
| {'class': '0', 'score': {'0': 1.0, '1': 1.727498821099061e-20, '2': 2.9772583563821957e-24}} |


