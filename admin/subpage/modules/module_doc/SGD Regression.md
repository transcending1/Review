# SGD Regression
## Detailed Info
### Description
'Linear model fitted by minimizing a regularized emp\n             irical loss with SGD    SGD stands for Stochastic \n             Gradient Descent: the gradient of the loss is    e\n             stimated each sample at a time and the model is up\n             dated along the way with    a decreasing strength \n             schedule (aka learning rate).    The regularizer i\n             s a penalty added to the loss function that shrink\n             s model    parameters towards the zero vector usin\n             g either the squared euclidean norm    L2 or the a\n             bsolute norm L1 or a combination of both (Elastic \n             Net). If the    parameter update crosses the 0.0 v\n             alue because of the regularizer, the    update is \n             truncated to 0.0 to allow for learning sparse mode\n             ls and achieve    online feature selection.    Thi\n             s implementation works with data represented as de\n             nse numpy arrays of    floating point values for t\n             he features.'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Regression | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| loss | True | STRING | squared_loss | True | None |
| penalty | True | STRING | l2 | True | None |
| alpha | True | STRING | 0.0001 | True | None |
| l1_ratio | True | STRING | 0.15 | True | None |
| max_iter | True | STRING | 1000 | True | None |
| tol | True | STRING | 0.001 | True | None |
| shuffle | True | STRING | True | True | None |
| learning_rate | True | STRING | invscaling | True | None |
| early_stopping | True | STRING | False | True | None |
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
"The loss function to be used. The possible values a\n             re 'squared_loss',        'huber', 'epsilon_insens\n             itive', or 'squared_epsilon_insensitive'        Th\n             e 'squared_loss' refers to the ordinary least squa\n             res fit.        'huber' modifies 'squared_loss' to\n              focus less on getting outliers        correct by \n             switching from squared to linear loss past a dista\n             nce of        epsilon. 'epsilon_insensitive' ignor\n             es errors less than epsilon and is        linear p\n             ast that; this is the loss function used in SVR.  \n                   'squared_epsilon_insensitive' is the same bu\n             t becomes squared loss past        a tolerance of \n             epsilon."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | squared_loss | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| squared_loss |  |
| huber |  |
| epsilon_insensitive |  |
| squared_epsilon_insensitive |  |


### 4.penalty
"The penalty (aka regularization term) to be used. D\n             efaults to 'l2'        which is the standard regul\n             arizer for linear SVM models. 'l1' and        'ela\n             sticnet' might bring sparsity to the model (featur\n             e selection)        not achievable with 'l2'."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | l2 | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| l2 |  |
| l1 |  |
| elasticnet |  |


### 5.alpha
"Constant that multiplies the regularization term.  \n                   Also used to compute learning_rate when set \n             to 'optimal'."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.0001 | Yes | None | None |


### 6.l1_ratio
'The Elastic Net mixing parameter, with 0 <= l1_rati\n             o <= 1.        l1_ratio=0 corresponds to L2 penalt\n             y, l1_ratio=1 to L1.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.15 | Yes | None | None |


### 7.max_iter
'The maximum number of passes over the training data\n              (aka epochs).        It only impacts the behavior\n              in the ``fit`` method, and not the        :meth:`\n             partial_fit` method.        .. versionadded:: 0.19\n             '


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1000 | Yes | None | None |


### 8.tol
'The stopping criterion. If it is not None, the iter\n             ations will stop        when (loss > best_loss - t\n             ol) for ``n_iter_no_change`` consecutive        ep\n             ochs.        .. versionadded:: 0.19'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.001 | Yes | None | None |


### 9.shuffle
'Whether or not the training data should be shuffled\n              after each epoch.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | True | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| True |  |
| False |  |


### 10.learning_rate
"The learning rate schedule:        'constant':     \n                    eta = eta0        'optimal':            eta\n              = 1.0 / (alpha * (t + t0))            where t0 is\n              chosen by a heuristic proposed by Leon Bottou.   \n                  'invscaling': [default]            eta = eta0\n              / pow(t, power_t)        'adaptive':            e\n             ta = eta0, as long as the training keeps decreasin\n             g.            Each time n_iter_no_change consecuti\n             ve epochs fail to decrease the            training\n              loss by tol or fail to increase validation score \n             by tol if            early_stopping is True, the c\n             urrent learning rate is divided by 5."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | invscaling | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| constant |  |
| optimal |  |
| invscaling |  |
| adaptive |  |


### 11.early_stopping
'Whether to use early stopping to terminate training\n              when validation        score is not improving. If\n              set to True, it will automatically set aside     \n                a fraction of training data as validation and t\n             erminate        training when validation score is \n             not improving by at least tol for        n_iter_no\n             _change consecutive epochs.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | False | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| True |  |
| False |  |


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
## Desc:波士顿房价SGD回归,参数没设置好产生了梯度爆炸的结果
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | PRICE | 标签 |
| loss | squared_loss | 损失函数设置为:均方误差 |
| penalty | l2 | l2 正则惩罚项 |
| alpha | 0.0001 | 选择一个常量0.0001来乘以惩罚项 |
| l1_ratio | 0.15 | ElasticNet L1惩罚项占比,选取了L2惩罚项,这里不生效 |
| max_iter | 1000 | 最大迭代次数设置为1000 |
| tol | 0.001 | 梯度下降停止容忍度设置小一点为0.001 |
| shuffle | True | 每批次训练是否打乱数据集 |
| learning_rate | invscaling | 学习率不为常量,选用eta = eta0/ pow(t, power_t)的方式优化学习率 |
| early_stopping | False | 不采用早停策略 |


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
| {'result': '229343958774862.9'} |


