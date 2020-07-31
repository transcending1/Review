# AdaBoost Regression
## Detailed Info
### Description
'An AdaBoost regressor.    An AdaBoost [1] regressor\n              is a meta-estimator that begins by fitting a    r\n             egressor on the original dataset and then fits add\n             itional copies of the    regressor on the same dat\n             aset but where the weights of instances are    adj\n             usted according to the error of the current predic\n             tion. As such,    subsequent regressors focus more\n              on difficult cases.    This class implements the \n             algorithm known as AdaBoost.R2 [2]'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Regression | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| n_estimators | True | STRING | 50 | True | None |
| learning_rate | True | STRING | 1.0 | True | None |
| loss | True | STRING | linear | True | None |
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
'Learning rate shrinks the contribution of each regr\n             essor by        ``learning_rate``. There is a trad\n             e-off between ``learning_rate`` and        ``n_est\n             imators``.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1.0 | Yes | None | None |


### 5.loss
'The loss function to use when updating the weights \n             after each        boosting iteration.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | linear | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| linear |  |
| square |  |
| exponential |  |


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
## Desc:波士顿房价AdaBoost回归
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | PRICE | 标签 |
| n_estimators | 50 | booting 算法最大树的个数设置成100个 |
| learning_rate | 1.0 | 学习率设置成1.0 |
| loss | linear | 损失函数设置为:linear |


### Post Json Format

| CRIM | ZN | INDUS | CHAS | NOX | RM | AGE | DIS | RAD | TAX | PTRATIO | B | LSTAT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0.00632 | 18.0 | 2.31 | 0 | 0.5379999999999999 | 6.575 | 65.2 | 4.09 | 1 | 296 | 15.3 | 396.9 | 4.98 |


### Custom Test Report
+ Test Example


| field | value |
| --- | --- |
| CRIM | 0.00632 |
| ZN | 18.0 |
| INDUS | 2.31 |
| CHAS | 0.0 |
| NOX | 0.5379999999999999 |
| RM | 6.575 |
| AGE | 65.2 |
| DIS | 4.09 |
| RAD | 1.0 |
| TAX | 296.0 |
| PTRATIO | 15.3 |
| B | 396.9 |
| LSTAT | 4.98 |


+ Predict Result


| result |
| --- |
| {'result': '28.150769230769225'} |


