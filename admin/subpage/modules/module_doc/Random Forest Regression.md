# Random Forest Regression
+ Description

A random forest regressor.A random forest i s a meta estimator that fits a number of classifyi ng decision trees on various sub-samples of the dataset and uses averaging to improve the pred ictive accuracy and control over-fitting. The s ub-sample size is always the same as the original input sample size but the samples are drawn wit h replacement if `bootstrap=True` (default).

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Regression | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| n_estimators | True | STRING | 100 | True | None |
| criterion | True | STRING | mse | True | None |
| max_depth | True | STRING | None | True | None |
| min_samples_leaf | True | STRING | 1 | True | None |
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

The number of trees in the forest.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 100 | Yes | None | None |


### 4.criterion
+ Description

The function to measure the quality of a split. Sup ported criteria are "mse" for the mean squa red error, which is equal to variance reduction as feature selection criterion, and "mae" for the mean absolute error.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | mse | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| mse |  |
| friedman_mse |  |
| mae |  |


### 5.max_depth
+ Description

The maximum depth of the tree. If None, then nodes are expanded until all leaves are pure or until all leaves contain less than min_sampl es_split samples.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | None | Yes | None | None |


### 6.min_samples_leaf
+ Description

The minimum number of samples required to be at a l eaf node. A split point at any depth will o nly be considered if it leaves at least ``m in_samples_leaf`` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression. - If int, then consider `min _samples_leaf` as the minimum number. - If float, then `min_samples_leaf` is a fraction and `ceil(min_samples_leaf * n_samples)` are t he minimum number of samples for each nod e.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1 | Yes | None | None |


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
## Desc:波士顿房价随机森林回归
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | PRICE | 标签 |
| n_estimators | 100 | 100颗树来泛化模型 |
| criterion | mse | 树每次分裂的衡量标准:这里选用均方误差mse |
| max_depth | 5 | 这里树的最大深度设置成5 |
| min_samples_leaf | 1 | 叶子节点最小样本数量设为1 |


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
| {'result': '27.381974493016617'} |


