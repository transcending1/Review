# GBDT Regression
## Detailed Info
### Description
'Gradient Boosting for regression.    GB builds an a\n             dditive model in a forward stage-wise fashion;    \n             it allows for the optimization of arbitrary differ\n             entiable loss functions.    In each stage a regres\n             sion tree is fit on the negative gradient of the  \n               given loss function.'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Regression | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| loss | True | STRING | ls | True | None |
| learning_rate | True | STRING | 0.1 | True | None |
| n_estimators | True | STRING | 100 | True | None |
| min_samples_leaf | True | STRING | 1 | True | None |
| max_depth | True | STRING | 3 | True | None |
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


### 3.loss
"loss function to be optimized. 'ls' refers to least\n              squares        regression. 'lad' (least absolute \n             deviation) is a highly robust        loss function\n              solely based on order information of the input   \n                  variables. 'huber' is a combination of the tw\n             o. 'quantile'        allows quantile regression (u\n             se `alpha` to specify the quantile)."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | ls | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| ls |  |
| lad |  |
| huber |  |


### 4.learning_rate
'learning rate shrinks the contribution of each tree\n              by `learning_rate`.        There is a trade-off b\n             etween learning_rate and n_estimators.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.1 | Yes | None | None |


### 5.n_estimators
'The number of boosting stages to perform. Gradient \n             boosting        is fairly robust to over-fitting s\n             o a large number usually        results in better \n             performance.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 100 | Yes | None | None |


### 6.min_samples_leaf
'The minimum number of samples required to be at a l\n             eaf node.        A split point at any depth will o\n             nly be considered if it leaves at        least ``m\n             in_samples_leaf`` training samples in each of the \n             left and        right branches.  This may have the\n              effect of smoothing the model,        especially \n             in regression.        - If int, then consider `min\n             _samples_leaf` as the minimum number.        - If \n             float, then `min_samples_leaf` is a fraction and  \n                     `ceil(min_samples_leaf * n_samples)` are t\n             he minimum          number of samples for each nod\n             e.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1 | Yes | None | None |


### 7.max_depth
'maximum depth of the individual regression estimato\n             rs. The maximum        depth limits the number of \n             nodes in the tree. Tune this parameter        for \n             best performance; the best value depends on the in\n             teraction        of the input variables.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 3 | Yes | None | None |


### 8.tol
'Tolerance for the early stopping. When the loss is \n             not improving        by at least tol for ``n_iter_\n             no_change`` iterations (if set to a        number)\n             , the training stops.'


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
## Desc:波士顿房价GBDT回归
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | PRICE | 标签 |
| loss | ls | 选取损失函数:ls |
| learning_rate | 0.1 | 学习率设置成0.1 |
| n_estimators | 100 | booting 算法最大树的个数设置成100个 |
| min_samples_leaf | 1 | 叶子节点最小样本数量设置为1 |
| max_depth | 3 | 这里树的最大深度设置成3 |
| tol | 0.0001 | 早停容忍度设置小一点为0.0001 |


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
| {'result': '25.80586435221686'} |


