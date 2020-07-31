# Multi-Class Random Forest
## Detailed Info
### Description
'    A random forest classifier.    A random forest \n             is a meta estimator that fits a number of decision\n              tree    classifiers on various sub-samples of the\n              dataset and uses averaging to    improve the pred\n             ictive accuracy and control over-fitting.    The s\n             ub-sample size is always the same as the original \n                input sample size but the samples are drawn wit\n             h replacement if    `bootstrap=True` (default).   \n            '


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Multi Classification | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| n_estimators | True | STRING | 100 | True | None |
| criterion | True | STRING | gini | True | None |
| max_depth | True | STRING | None | True | None |
| min_samples_leaf | True | STRING | 1 | True | None |
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
'The number of trees in the forest'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 100 | Yes | None | None |


### 4.criterion
'The function to measure the quality of a split. Sup\n             ported criteria are        "gini" for the Gini imp\n             urity and "entropy" for the information gain.     \n                Note: this parameter is tree-specific.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | gini | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| gini |  |
| entropy |  |


### 5.max_depth
'The maximum depth of the tree. If None, then nodes \n             are expanded until        all leaves are pure or u\n             ntil all leaves contain less than        min_sampl\n             es_split samples.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | None | Yes | None | None |


### 6.min_samples_leaf
'The minimum number of samples required to be at a l\n             eaf node.        A split point at any depth will o\n             nly be considered if it leaves at        least ``m\n             in_samples_leaf`` training samples in each of the \n             left and        right branches.  This may have the\n              effect of smoothing the model,        especially \n             in regression.        - If int, then consider `min\n             _samples_leaf` as the minimum number.        - If \n             float, then `min_samples_leaf` is a fraction and  \n                     `ceil(min_samples_leaf * n_samples)` are t\n             he minimum          number of samples for each nod\n             e.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1 | Yes | None | None |


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
## Desc:鸢尾花随机森林多分类
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | Class | 标签 |
| n_estimators | 200 | booting 算法最大树的个数设置成200个 |
| criterion | gini | 分类标准采用基尼系数 |
| max_depth | 5 | 这里树的最大深度设置成5 |
| min_samples_leaf | 1 | 叶子节点最小样本数量 |


### Post Json Format

| sepal-length | sepal-width | petal-length | petal-width |
| --- | --- | --- | --- |
| 5.4 | 3.7 | 1.5 | 0.2 |


### Custom Test Report
+ Test Example


| field | value |
| --- | --- |
| sepal-length | 5.4 |
| sepal-width | 3.7 |
| petal-length | 1.5 |
| petal-width | 0.2 |


+ Predict Result


| result |
| --- |
| {'class': '0', 'score': {'0': 1.0, '1': 0.0, '2': 0.0}} |


