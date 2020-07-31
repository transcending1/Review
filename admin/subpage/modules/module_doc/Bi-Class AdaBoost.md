# Bi-Class AdaBoost
## Detailed Info
### Description
'An AdaBoost classifier.    An AdaBoost [1] classifi\n             er is a meta-estimator that begins by fitting a   \n              classifier on the original dataset and then fits \n             additional copies of the    classifier on the same\n              dataset but where the weights of incorrectly    c\n             lassified instances are adjusted such that subsequ\n             ent classifiers focus    more on difficult cases. \n                This class implements the algorithm known as Ad\n             aBoost-SAMME [2].'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Binary Classification | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

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
'target feature'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | Yes | SINGLE | input_file1 |


### 2.input_file1
'input csv file for trainer'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 3.n_estimators
'The maximum number of estimators at which boosting \n             is terminated.        In case of perfect fit, the \n             learning procedure is stopped early.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 50 | Yes | None | None |


### 4.learning_rate
'Learning rate shrinks the contribution of each clas\n             sifier by        ``learning_rate``. There is a tra\n             de-off between ``learning_rate`` and        ``n_es\n             timators``.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1.0 | Yes | None | None |


### 5.algorithm
"If 'SAMME.R' then use the SAMME.R real boosting alg\n             orithm.        ``base_estimator`` must support cal\n             culation of class probabilities.        If 'SAMME'\n              then use the SAMME discrete boosting algorithm.  \n                   The SAMME.R algorithm typically converges fa\n             ster than SAMME,        achieving a lower test err\n             or with fewer boosting iterations."


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
'output module'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |


### 2.output_model
'output module'


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


