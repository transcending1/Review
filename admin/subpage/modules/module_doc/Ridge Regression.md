# Ridge Regression
+ Description

Linear least squares with l2 regularization. Min imizes the objective function:: ||y - Xw||^2_2 + alpha * ||w||^2_2 This model solves a regress ion model where the loss function is the linear least squares function and regularization is give n by the l2-norm. Also known as Ridge Regressio n or Tikhonov regularization. This estimator ha s built-in support for multi-variate regression (i.e., when y is a 2d-array of shape (n_samples, n_targets)).

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Regression | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| alpha | True | STRING | 1.0 | True | None |
| tol | True | STRING | 0.001 | True | None |
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

Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of th e estimates. Larger values specify stronger regula rization. Alpha corresponds to ``C^-1`` in other linear models such as LogisticRegress ion or LinearSVC. If an array is passed, penalties are assumed to be specific to the targets. Hence they must correspond in number.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1.0 | Yes | None | None |


### 4.tol
+ Description

Precision of the solution.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.001 | Yes | None | None |


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
## Desc:波士顿房价Ridge回归
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | PRICE | 标签 |
| alpha | 1.0 | 选择一个常量1.0来乘以惩罚项 |
| tol | 0.001 | 梯度下降停止容忍度设置小一点为0.001 |


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
| {'result': '30.665684948608778'} |


