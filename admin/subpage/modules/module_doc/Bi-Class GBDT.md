# Bi-Class GBDT
## Detailed Info
### Description
'Gradient Boosting for classification.    GB builds \n             an additive model in a    forward stage-wise fashi\n             on; it allows for the optimization of    arbitrary\n              differentiable loss functions. In each stage ``n_\n             classes_``    regression trees are fit on the nega\n             tive gradient of the    binomial or multinomial de\n             viance loss function. Binary classification    is \n             a special case where only a single regression tree\n              is induced.'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Binary Classification | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| loss | True | STRING | deviance | True | None |
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
"loss function to be optimized. 'deviance' refers to\n                     deviance (= logistic regression) for class\n             ification        with probabilistic outputs. For l\n             oss 'exponential' gradient        boosting recover\n             s the AdaBoost algorithm."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | deviance | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| deviance | logistic regression algorithm |
| exponential | AdaBoost algorithm |


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
'The minimum number of samples required to be at a l\n             eaf node.        A split point at any depth will o\n             nly be considered if it leaves at        least ``m\n             in_samples_leaf`` training samples in each of the \n             left and        right branches.  This may have the\n              effect of smoothing the model,        especially \n             in regression.        - If int, then consider `min\n             _samples_leaf` as the minimum number.        - If \n             float, then `min_samples_leaf` is a fraction and  \n                     `ceil(min_samples_leaf * n_samples)` are t\n             he minimum'


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
## Desc:鸢尾花GBDT二分类
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | Class | 标签 |
| loss | deviance | 优化方式选择:deviance |
| learning_rate | 0.1 | 学习率设置成1.0 |
| n_estimators | 100 | booting 算法最大树的个数设置成100个 |
| min_samples_leaf | 1 | 收敛条件:最小叶子节点上的数量设置成1 |
| max_depth | 3 | 树的最大深度设置成3 |
| tol | 0.001 | 早停容忍度设置小一点为0.001 |


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
| {'class': '1', 'score': {'0': 0.00029488326534299336, '1': 0.999705116734657}} |


