# Decision Tree Regression
## Detailed Info
### Description
'A decision tree regressor'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Regression | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| criterion | True | STRING | mse | True | None |
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
'The function to measure the quality of a split. Sup\n             ported criteria        are "mse" for the mean squa\n             red error, which is equal to variance        reduc\n             tion as feature selection criterion and minimizes \n             the L2 loss        using the mean of each terminal\n              node, "friedman_mse", which uses mean        squa\n             red error with Friedman\'s improvement score for po\n             tential splits,        and "mae" for the mean abso\n             lute error, which minimizes the L1 loss        usi\n             ng the median of each terminal node.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | mse | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| mse |  |
| friedman_mse |  |
| mae |  |


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
## Desc:波士顿房价决策树回归
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | PRICE | 标签 |
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
| {'result': '25.77619047619048'} |


