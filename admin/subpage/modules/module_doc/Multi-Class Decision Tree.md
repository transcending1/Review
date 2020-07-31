# Multi-Class Decision Tree
## Detailed Info
### Description
'A decision tree classifier.'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Multi Classification | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
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


### 3.criterion
'The function to measure the quality of a split. Sup\n             ported criteria are        "gini" for the Gini imp\n             urity and "entropy" for the information gain.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | gini | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| gini |  |
| entropy |  |


### 4.max_depth
'The maximum depth of the tree. If None, then nodes \n             are expanded until        all leaves are pure or u\n             ntil all leaves contain less than        min_sampl\n             es_split samples.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | None | Yes | None | None |


### 5.min_samples_leaf
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
## Desc:鸢尾花决策树多分类
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | SURVIVED | 标签 |
| criterion | gini | 分类标准采用基尼系数 |
| max_depth | 5 | 这里树的最大深度设置成5 |
| min_samples_leaf | 1 | 叶子节点最小样本数量 |


### Post Json Format

| AGE | FARE | one_hot_0 | one_hot_1 | one_hot_2 | one_hot_3 | one_hot_4 | one_hot_5 | one_hot_6 | one_hot_7 | one_hot_8 | one_hot_9 | one_hot_10 | one_hot_11 | one_hot_12 | one_hot_13 | one_hot_14 | one_hot_15 | one_hot_16 | one_hot_17 | one_hot_18 | one_hot_19 | one_hot_20 | one_hot_21 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -0.5924805998028931 | -0.5024451714361923 | 0.0 | 0.0 | 1.0 | 0.0 | 1.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 1.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 1.0 | 0.0 | 0.0 | 1.0 |


### Custom Test Report
+ Test Example


| field | value |
| --- | --- |
| AGE | -0.5924805998028931 |
| FARE | -0.5024451714361923 |
| one_hot_0 | 0.0 |
| one_hot_1 | 0.0 |
| one_hot_2 | 1.0 |
| one_hot_3 | 0.0 |
| one_hot_4 | 1.0 |
| one_hot_5 | 0.0 |
| one_hot_6 | 0.0 |
| one_hot_7 | 0.0 |
| one_hot_8 | 0.0 |
| one_hot_9 | 0.0 |
| one_hot_10 | 1.0 |
| one_hot_11 | 0.0 |
| one_hot_12 | 0.0 |
| one_hot_13 | 0.0 |
| one_hot_14 | 0.0 |
| one_hot_15 | 0.0 |
| one_hot_16 | 0.0 |
| one_hot_17 | 0.0 |
| one_hot_18 | 1.0 |
| one_hot_19 | 0.0 |
| one_hot_20 | 0.0 |
| one_hot_21 | 1.0 |


+ Predict Result


| result |
| --- |
| {'class': '0', 'score': {'0': 0.8987654320987655, '1': 0.10123456790123457}} |


