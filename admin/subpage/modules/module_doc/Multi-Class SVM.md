# Multi-Class SVM
## Detailed Info
### Description
'C-Support Vector Classification.    The implementat\n             ion is based on libsvm. The fit time scales at lea\n             st    quadratically with the number of samples and\n              may be impractical    beyond tens of thousands of\n              samples. For large datasets    consider using :cl\n             ass:`sklearn.svm.LinearSVC` or    :class:`sklearn.\n             linear_model.SGDClassifier` instead, possibly afte\n             r a    :class:`sklearn.kernel_approximation.Nystro\n             em` transformer.    The multiclass support is hand\n             led according to a one-vs-one scheme.    For detai\n             ls on the precise mathematical formulation of the \n             provided    kernel functions and how `gamma`, `coe\n             f0` and `degree` affect each    other, see the cor\n             responding section in the narrative documentation:\n                 :ref:`svm_kernels`.'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Multi Classification | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| C | True | STRING | 1.0 | True | None |
| kernel | True | STRING | rbf | True | None |
| gamma | True | STRING | scale | True | None |
| degree | True | STRING | 3 | True | None |
| coef0 | True | STRING | 0.0 | True | None |
| tol | True | STRING | 0.001 | True | None |
| max_iter | True | STRING | -1 | True | None |
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


### 3.C
'float, optional (default=1.0)\n        Regularization parameter. The strength of the regularization is\n        inversely proportional to C. Must be strictly positive. The penalty\n        is a squared l2 penalty.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1.0 | Yes | None | None |


### 4.kernel
"string, optional (default='rbf')\n        Specifies the kernel type to be used in the algorithm.\n        It must be one of 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' or\n        a callable.\n        If none is given, 'rbf' will be used. If a callable is given it is\n        used to pre-compute the kernel matrix from data matrices; that matrix\n        should be an array of shape ``(n_samples, n_samples)``."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | rbf | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| linear |  |
| poly |  |
| rbf |  |
| sigmoid |  |
| precomputed |  |


### 5.gamma
"{'scale', 'auto'} or float, optional (default='scale')\n        Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.\n\n        - if ``gamma='scale'`` (default) is passed then it uses\n          1 / (n_features * x.var()) as value of gamma,\n        - if 'auto', uses 1 / n_features."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | scale | Yes | None | None |


### 6.degree
"Degree of the polynomial kernel function ('poly').\n        Ignored by all other kernels."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 3 | Yes | None | None |


### 7.coef0
"Independent term in kernel function.\n        It is only significant in 'poly' and 'sigmoid'."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.0 | Yes | None | None |


### 8.tol
'Tolerance for stopping criterion.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.001 | Yes | None | None |


### 9.max_iter
'Hard limit on iterations within solver, or -1 for n\n             o limit.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | -1 | Yes | None | None |


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
## Desc:鸢尾花SVM分类
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | Class | 标签 |
| C | 1.0 | 正则化惩罚力度设置为 1.0 |
| kernel | rbf | 核函数选为高斯核函数 |
| gamma | scale | 参数gamma的计算规则选用:1 / (n_features * x.var()) |
| degree | 3 | 由于选取了高斯核rbf作为激活函数,此处的参数为多项式核函数的degree参数,对算法无效 |
| coef0 | 0.0 | 由于选取了高斯核rbf作为激活函数,此处的参数为多项式核函数以及sigmod激活函数的coef0参数,对算法无效 |
| tol | 0.001 | 早停容忍度设置小一点为0.001 |
| max_iter | -1 | 不限制最大迭代次数 |


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
| {'class': '0'} |


