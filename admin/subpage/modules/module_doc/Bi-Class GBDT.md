# Bi-Class GBDT
+ Description

Gradient Boosting for classification. GB builds an additive model in a forward stage-wise fashi on; it allows for the optimization of arbitrary differentiable loss functions. In each stage ``n_ classes_`` regression trees are fit on the nega tive gradient of the binomial or multinomial de viance loss function. Binary classification is a special case where only a single regression tree is induced.

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Binary Classification | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

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


### 3.loss
+ Description

loss function to be optimized. 'deviance' refers to deviance (= logistic regression) for class ification with probabilistic outputs. For l oss 'exponential' gradient boosting recover s the AdaBoost algorithm.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | deviance | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| deviance | logistic regression algorithm |
| exponential | AdaBoost algorithm |


### 4.learning_rate
+ Description

learning rate shrinks the contribution of each tree by `learning_rate`. There is a trade-off b etween learning_rate and n_estimators.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.1 | Yes | None | None |


### 5.n_estimators
+ Description

The number of boosting stages to perform. Gradient boosting is fairly robust to over-fitting s o a large number usually results in better performance.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 100 | Yes | None | None |


### 6.min_samples_leaf
+ Description

The minimum number of samples required to be at a l eaf node. A split point at any depth will o nly be considered if it leaves at least ``m in_samples_leaf`` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression. - If int, then consider `min _samples_leaf` as the minimum number. - If float, then `min_samples_leaf` is a fraction and `ceil(min_samples_leaf * n_samples)` are t he minimum

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1 | Yes | None | None |


### 7.max_depth
+ Description

maximum depth of the individual regression estimato rs. The maximum depth limits the number of nodes in the tree. Tune this parameter for best performance; the best value depends on the in teraction of the input variables.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 3 | Yes | None | None |


### 8.tol
+ Description

Tolerance for the early stopping. When the loss is not improving by at least tol for ``n_iter_ no_change`` iterations (if set to a number) , the training stops.

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


