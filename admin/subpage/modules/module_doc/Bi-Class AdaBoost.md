# Bi-Class AdaBoost
+ Description

An AdaBoost classifier. An AdaBoost [1] classifi er is a meta-estimator that begins by fitting a classifier on the original dataset and then fits additional copies of the classifier on the same dataset but where the weights of incorrectly c lassified instances are adjusted such that subsequ ent classifiers focus more on difficult cases. This class implements the algorithm known as Ad aBoost-SAMME [2].

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Binary Classification | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| n_estimators | True | STRING | 50 | True | None |
| learning_rate | True | STRING | 1.0 | True | None |
| algorithm | True | STRING | SAMME.R | True | None |
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


### 3.n_estimators
+ Description

The maximum number of estimators at which boosting is terminated. In case of perfect fit, the learning procedure is stopped early.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 50 | Yes | None | None |


### 4.learning_rate
+ Description

Learning rate shrinks the contribution of each clas sifier by ``learning_rate``. There is a tra de-off between ``learning_rate`` and ``n_es timators``.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1.0 | Yes | None | None |


### 5.algorithm
+ Description

If 'SAMME.R' then use the SAMME.R real boosting alg orithm. ``base_estimator`` must support cal culation of class probabilities. If 'SAMME' then use the SAMME discrete boosting algorithm. The SAMME.R algorithm typically converges fa ster than SAMME, achieving a lower test err or with fewer boosting iterations.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | SAMME.R | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| SAMME |  |
| SAMME.R |  |


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
## Desc:鸢尾花Adaboost二分类
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | Class | 标签 |
| n_estimators | 50 | booting 算法最大树的个数设置成50个 |
| learning_rate | 1.0 | 学习率设置成1.0 |
| algorithm | SAMME.R | 使用 基于SAMME优化的SAMME.R算法提高收敛速度 |


### Post Json Format

| sepal-length | sepal-width | petal-length | petal-width |
| --- | --- | --- | --- |
| 6.3 | 2.9 | 5.6 | 1.8 |


### Custom Test Report
+ Test Example


| field | value |
| --- | --- |
| sepal-length | 6.3 |
| sepal-width | 2.9 |
| petal-length | 5.6 |
| petal-width | 1.8 |


+ Predict Result


| result |
| --- |
| {'class': '1', 'score': {'0': 2.220446049250318e-16, '1': 0.9999999999999998}} |


