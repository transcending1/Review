# SVM Regression
+ Description

Epsilon-Support Vector Regression. The free para meters in the model are C and epsilon. The impl ementation is based on libsvm. The fit time comple xity is more than quadratic with the number of samples which makes it hard to scale to dataset s with more than a couple of 10000 samples. For la rge datasets consider using :class:`sklearn.svm .LinearSVR` or :class:`sklearn.linear_model.SGD Regressor` instead, possibly after a :class:`sk learn.kernel_approximation.Nystroem` transformer.

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Regression | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| kernel | True | STRING | rbf | True | None |
| degree | True | STRING | 3 | True | None |
| gamma | True | STRING | scale | True | None |
| coef0 | True | STRING | 0.0 | True | None |
| tol | True | STRING | 0.001 | True | None |
| C | True | STRING | 1.0 | True | None |
| max_iter | True | STRING | -1 | True | None |
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


### 3.kernel
+ Description

Specifies the kernel type to be used in the algorit hm. It must be one of 'linear', 'poly', 'r bf', 'sigmoid', 'precomputed' or a callabl e. If none is given, 'rbf' will be used. I f a callable is given it is used to precom pute the kernel matrix.

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


### 4.degree
+ Description

Degree of the polynomial kernel function ('poly'). Ignored by all other kernels.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 3 | Yes | None | None |


### 5.gamma
+ Description

Kernel coefficient for 'rbf', 'poly' and 'sigmoid'. - if ``gamma='scale'`` (default) is passed then it uses 1 / (n_features * x.var()) as value of gamma, - if 'auto', uses 1 / n_ features..

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | scale | Yes | None | None |


### 6.coef0
+ Description

Independent term in kernel function. It is o nly significant in 'poly' and 'sigmoid'.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.0 | Yes | None | None |


### 7.tol
+ Description

Tolerance for stopping criterion.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.001 | Yes | None | None |


### 8.C
+ Description

Regularization parameter. The strength of the regul arization is inversely proportional to C. M ust be strictly positive. The penalty is a squared l2 penalty.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1.0 | Yes | None | None |


### 9.max_iter
+ Description

Hard limit on iterations within solver, or -1 for n o limit. Attributes

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | -1 | Yes | None | None |


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
## Desc:波士顿房价SVR回归
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | PRICE | 标签 |
| kernel | rbf | 核函数选为高斯核函数 |
| degree | 3 | 由于选取了高斯核rbf作为激活函数,此处的参数为多项式核函数的degree参数,对算法无效 |
| gamma | scale | 参数gamma的计算规则选用:1 / (n_features * x.var()) |
| coef0 | 0.0 | 由于选取了高斯核rbf作为激活函数,此处的参数为多项式核函数以及sigmod激活函数的coef0参数,对算法无效 |
| tol | 0.001 | 早停容忍度设置小一点为0.001 |
| C | 1.0 | 正则化惩罚力度设置为 1.0 |
| max_iter | -1 | 不限制最大迭代次数 |


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
| {'result': '22.93701713176694'} |


