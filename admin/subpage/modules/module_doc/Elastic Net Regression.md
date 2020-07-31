# Elastic Net Regression
## Detailed Info
### Description
'Linear regression with combined L1 and L2 priors as\n              regularizer.    Minimizes the objective function:\n             :            1 / (2 * n_samples) * ||y - Xw||^2_2 \n                        + alpha * l1_ratio * ||w||_1           \n              + 0.5 * alpha * (1 - l1_ratio) * ||w||^2_2    If \n             you are interested in controlling the L1 and L2 pe\n             nalty    separately, keep in mind that this is equ\n             ivalent to::            a * L1 + b * L2    where::\n                         alpha = a + b and l1_ratio = a / (a + \n             b)    The parameter l1_ratio corresponds to alpha \n             in the glmnet R package while    alpha corresponds\n              to the lambda parameter in glmnet. Specifically, \n             l1_ratio    = 1 is the lasso penalty. Currently, l\n             1_ratio <= 0.01 is not reliable,    unless you sup\n             ply your own sequence of alpha.    Read more in th\n             e :ref:`User Guide <elastic_net>`.'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Regression | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| alpha | True | STRING | 1.0 | True | None |
| l1_ratio | True | STRING | 0.5 | True | None |
| max_iter | True | STRING | 1000 | True | None |
| tol | True | STRING | 0.0001 | True | None |
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


### 3.alpha
'Constant that multiplies the penalty terms. Default\n             s to 1.0.        See the notes for the exact mathe\n             matical meaning of this        parameter. ``alpha \n             = 0`` is equivalent to an ordinary least square,  \n                   solved by the :class:`LinearRegression` obje\n             ct. For numerical        reasons, using ``alpha = \n             0`` with the ``Lasso`` object is not advised.     \n                Given this, you should use the :class:`LinearRe\n             gression` object.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1.0 | Yes | None | None |


### 4.l1_ratio
'The ElasticNet mixing parameter, with ``0 <= l1_rat\n             io <= 1``. For        ``l1_ratio = 0`` the penalty\n              is an L2 penalty. ``For l1_ratio = 1`` it        \n             is an L1 penalty.  For ``0 < l1_ratio < 1``, the p\n             enalty is a        combination of L1 and L2.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.5 | Yes | None | None |


### 5.max_iter
'The maximum number of iterations'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1000 | Yes | None | None |


### 6.tol
'The tolerance for the optimization: if the updates \n             are        smaller than ``tol``, the optimization \n             code checks the        dual gap for optimality and\n              continues until it is smaller        than ``tol``\n             .'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.0001 | Yes | None | None |


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
## Desc:波士顿房价Elastic Net回归
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | PRICE | 标签 |
| alpha | 1.0 | 选择一个常量1.0来乘以惩罚项 |
| l1_ratio | 0.5 | L2 惩罚项和 L1惩罚项占比都是0.5 |
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
| {'result': '31.36632313437977'} |


