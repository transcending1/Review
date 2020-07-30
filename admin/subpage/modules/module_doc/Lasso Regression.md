# Lasso Regression
+ Description

Linear Model trained with L1 prior as regularizer ( aka the Lasso) The optimization objective for L asso is:: (1 / (2 * n_samples)) * ||y - Xw| |^2_2 + alpha * ||w||_1 Technically the Lasso m odel is optimizing the same objective function as the Elastic Net with ``l1_ratio=1.0`` (no L2 pe nalty). Read more in the :ref:`User Guide <lass o>`.

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Regression | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| alpha | True | STRING | 1.0 | True | None |
| max_iter | True | STRING | 1000 | True | None |
| tol | True | STRING | 0.0001 | True | None |
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

Constant that multiplies the L1 term. Defaults to 1 .0. ``alpha = 0`` is equivalent to an ordin ary least square, solved by the :class:`Lin earRegression` object. For numerical reason s, using ``alpha = 0`` with the ``Lasso`` object i s not advised. Given this, you should use t he :class:`LinearRegression` object.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1.0 | Yes | None | None |


### 4.max_iter
+ Description

The maximum number of iterations

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1000 | Yes | None | None |


### 5.tol
+ Description

The tolerance for the optimization: if the updates are smaller than ``tol``, the optimization code checks the dual gap for optimality and continues until it is smaller than ``tol`` .

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.0001 | Yes | None | None |


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
## Desc:波士顿房价Lasso回归
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | PRICE | 标签 |
| alpha | 1.0 | 选择一个常量1.0来乘以惩罚项 |
| max_iter | 1000 | 最大迭代次数设置成1000 |
| tol | 0.0001 | 梯度下降停止容忍度设置小一点为0.0001 |


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
| {'result': '31.266836396853463'} |


