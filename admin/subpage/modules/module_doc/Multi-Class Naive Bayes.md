# Multi-Class Naive Bayes
+ Description

 Naive Bayes classifier for multinomial models The multinomial Naive Bayes classifier is suitab le for classification with discrete features (e .g., word counts for text classification). The multinomial distribution normally requires integer feature counts. However, in practice, fraction al counts such as tf-idf may also work.

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Multi Classification | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| alpha | True | STRING | 1.0 | True | None |
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


### 3.alpha
+ Description

Additive (Laplace/Lidstone) smoothing parameter (0 for no smoothing).

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1.0 | Yes | None | None |


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
## Desc:鸢尾花朴素贝叶斯多分类
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | Class | 标签 |
| alpha | 1.0 | 设置拉普拉斯平滑系数为1.0 |


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
| {'class': '0', 'score': {'0': 0.8215229354039445, '1': 0.11763061483408778, '2': 0.060846449761967694}} |


