# Bi-Class Logistic Regression
## Detailed Info
### Description
"    Logistic Regression (aka logit, MaxEnt) classif\n             ier.    In the multiclass case, the training algor\n             ithm uses the one-vs-rest (OvR)    scheme if the '\n             multi_class' option is set to 'ovr', and uses the \n                cross-entropy loss if the 'multi_class' option \n             is set to 'multinomial'.    (Currently the 'multin\n             omial' option is supported only by the 'lbfgs',   \n              'sag', 'saga' and 'newton-cg' solvers.)    This c\n             lass implements regularized logistic regression us\n             ing the    'liblinear' library, 'newton-cg', 'sag'\n             , 'saga' and 'lbfgs' solvers. **Note    that regul\n             arization is applied by default**. It can handle b\n             oth dense    and sparse input. Use C-ordered array\n             s or CSR matrices containing 64-bit    floats for \n             optimal performance; any other input format will b\n             e converted    (and copied).    The 'newton-cg', '\n             sag', and 'lbfgs' solvers support only L2 regulari\n             zation    with primal formulation, or no regulariz\n             ation. The 'liblinear' solver    supports both L1 \n             and L2 regularization, with a dual formulation onl\n             y for    the L2 penalty. The Elastic-Net regulariz\n             ation is only supported by the    'saga' solver.  \n             "


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Binary Classification | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| penalty | True | STRING | l2 | True | None |
| tol | True | STRING | 0.0001 | True | None |
| C | True | STRING | 1.0 | True | None |
| fit_intercept | True | STRING | True | True | None |
| max_iter | True | STRING | 100 | True | None |
| multi_class | True | STRING | auto | True | None |
| l1_ratio | True | STRING | None | True | None |
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


### 3.penalty
"Used to specify the norm used in the penalization. \n             The 'newton-cg',        'sag' and 'lbfgs' solvers \n             support only l2 penalties. 'elasticnet' is        \n             only supported by the 'saga' solver. If 'none' (no\n             t supported by the        liblinear solver), no re\n             gularization is applied."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | l2 | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| l1 |  |
| l2 |  |
| elasticnet |  |
| none |  |


### 4.tol
'Tolerance for stopping criteria.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.0001 | Yes | None | None |


### 5.C
'Inverse of regularization strength; must be a posit\n             ive float.        Like in support vector machines,\n              smaller values specify stronger        regulariza\n             tion.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1.0 | Yes | None | None |


### 6.fit_intercept
'Specifies if a constant (a.k.a. bias or intercept) \n             should be        added to the decision function.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | True | Yes | None | None |


### 7.max_iter
'Maximum number of iterations taken for the solvers \n             to converge.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 100 | Yes | None | None |


### 8.multi_class
"If the option chosen is 'ovr', then a binary proble\n             m is fit for each        label. For 'multinomial' \n             the loss minimised is the multinomial loss fit    \n                 across the entire probability distribution, *e\n             ven when the data is        binary*. 'multinomial'\n              is unavailable when solver='liblinear'.        'a\n             uto' selects 'ovr' if the data is binary, or if so\n             lver='liblinear',        and otherwise selects 'mu\n             ltinomial'."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | auto | Yes | None | None |


### 9.l1_ratio
"The Elastic-Net mixing parameter, with ``0 <= l1_ra\n             tio <= 1``. Only        used if ``penalty='elastic\n             net'`. Setting ``l1_ratio=0`` is equivalent       \n              to using ``penalty='l2'``, while setting ``l1_rat\n             io=1`` is equivalent        to using ``penalty='l1\n             '``. For ``0 < l1_ratio <1``, the penalty is a    \n                 combination of L1 and L2.    Attributes"


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | None | Yes | None | None |


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
## Desc:泰坦尼克清洗后的数据集逻辑回归二分类
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | SURVIVED | 标签 |
| penalty | l2 | l2 正则惩罚项 |
| tol | 0.0001 | 梯度下降停止容忍度设置小一点为0.0001 |
| C | 1.0 | 正则化惩罚力度设置成1.0 |
| fit_intercept | True | 正则化惩罚后加入常量到决策函数中 |
| max_iter | 100 | 最大迭代次数设置成100 |
| multi_class | auto | 多分类拓展:auto进行自动捕获多分类 |
| l1_ratio | None | 由于没有选用Elastic-Net作为正则惩罚项,这里不设置任何值作为l1惩罚比例 |


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
| {'class': '0', 'score': {'0': 0.8831216863716406, '1': 0.11687831362835945}} |


