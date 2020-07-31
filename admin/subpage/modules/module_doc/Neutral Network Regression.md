# Neutral Network Regression
## Detailed Info
### Description
'Multi-layer Perceptron regressor.    This model opt\n             imizes the squared-loss using LBFGS or stochastic \n             gradient    descent.'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Regression | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| hidden_layer_sizes | True | STRING | 100 | True | None |
| activation | True | STRING | relu | True | None |
| solver | True | STRING | adam | True | None |
| alpha | True | STRING | 0.0001 | True | None |
| batch_size | True | STRING | auto | True | None |
| learning_rate | True | STRING | constant | True | None |
| learning_rate_init | True | STRING | 0.001 | True | None |
| power_t | True | STRING | 0.5 | True | None |
| max_iter | True | STRING | 200 | True | None |
| shuffle | True | STRING | True | True | None |
| tol | True | STRING | 0.0001 | True | None |
| momentum | True | STRING | 0.9 | True | None |
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


### 3.hidden_layer_sizes
'The ith element represents the number of neurons in\n              the ith        hidden layer.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 100 | Yes | None | None |


### 4.activation
"Activation function for the hidden layer.        - \n             'identity', no-op activation, useful to implement \n             linear bottleneck,          returns f(x) = x      \n               - 'logistic', the logistic sigmoid function,    \n                   returns f(x) = 1 / (1 + exp(-x)).        - '\n             tanh', the hyperbolic tan function,          retur\n             ns f(x) = tanh(x).        - 'relu', the rectified \n             linear unit function,          returns f(x) = max(\n             0, x)"


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | relu | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| identity |  |
| logistic |  |
| tanh |  |
| relu |  |


### 5.solver
"The solver for weight optimization.        - 'lbfgs\n             ' is an optimizer in the family of quasi-Newton me\n             thods.        - 'sgd' refers to stochastic gradien\n             t descent.        - 'adam' refers to a stochastic \n             gradient-based optimizer proposed          by King\n             ma, Diederik, and Jimmy Ba        Note: The defaul\n             t solver 'adam' works pretty well on relatively   \n                  large datasets (with thousands of training sa\n             mples or more) in terms of        both training ti\n             me and validation score.        For small datasets\n             , however, 'lbfgs' can converge faster and perform\n                     better."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | adam | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| lbfgs |  |
| sgd |  |
| adam |  |


### 6.alpha
'L2 penalty (regularization term) parameter.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.0001 | Yes | None | None |


### 7.batch_size
'Size of minibatches for stochastic optimizers.     \n                If the solver is \'lbfgs\', the classifier will n\n             ot use minibatch.        When set to "auto", `batc\n             h_size=min(200, n_samples)`'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | auto | Yes | None | None |


### 8.learning_rate
"Learning rate schedule for weight updates.        -\n              'constant' is a constant learning rate given by  \n                     'learning_rate_init'.        - 'invscaling\n             ' gradually decreases the learning rate at each   \n                    time step 't' using an inverse scaling expo\n             nent of 'power_t'.          effective_learning_rat\n             e = learning_rate_init / pow(t, power_t)        - \n             'adaptive' keeps the learning rate constant to    \n                   'learning_rate_init' as long as training los\n             s keeps decreasing.          Each time two consecu\n             tive epochs fail to decrease training loss by at  \n                     least tol, or fail to increase validation \n             score by at least tol if          'early_stopping'\n              is on, the current learning rate is divided by 5.\n                     Only used when ``solver='sgd'``."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | constant | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| constant |  |
| invscaling |  |
| adaptive |  |


### 9.learning_rate_init
"The initial learning rate used. It controls the ste\n             p-size        in updating the weights. Only used w\n             hen solver='sgd' or 'adam'."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.001 | Yes | None | None |


### 10.power_t
"The exponent for inverse scaling learning rate.    \n                 It is used in updating effective learning rate\n              when the learning_rate        is set to 'invscali\n             ng'. Only used when solver='sgd'."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.5 | Yes | None | None |


### 11.max_iter
"Maximum number of iterations. The solver iterates u\n             ntil convergence        (determined by 'tol') or t\n             his number of iterations. For stochastic        so\n             lvers ('sgd', 'adam'), note that this determines t\n             he number of epochs        (how many times each da\n             ta point will be used), not the number of        g\n             radient steps."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 200 | Yes | None | None |


### 12.shuffle
"Whether to shuffle samples in each iteration. Only \n             used when        solver='sgd' or 'adam'."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | True | Yes | None | None |


### 13.tol
"Tolerance for the optimization. When the loss or sc\n             ore is not improving        by at least ``tol`` fo\n             r ``n_iter_no_change`` consecutive iterations,    \n                 unless ``learning_rate`` is set to 'adaptive',\n              convergence is        considered to be reached an\n             d training stops."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.0001 | Yes | None | None |


### 14.momentum
"Momentum for gradient descent update. Should be bet\n             ween 0 and 1. Only        used when solver='sgd'."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.9 | Yes | None | None |


### 15.early_stopping
"Whether to use early stopping to terminate training\n              when validation        score is not improving. If\n              set to true, it will automatically set        asi\n             de 10% of training data as validation and terminat\n             e training when        validation score is not imp\n             roving by at least tol for        ``n_iter_no_chan\n             ge`` consecutive epochs. The split is stratified, \n                    except in a multilabel setting.        Only\n              effective when solver='sgd' or 'adam"


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | False | Yes | None | None |


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
## Desc:波士顿房价多层感知机回归
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | PRICE | 标签 |
| hidden_layer_sizes | 100 | 隐层大小设置成100 |
| activation | relu | 选用relu激活函数 |
| solver | adam | 优化器选用adam算法优化 |
| alpha | 0.0001 | l2正则惩罚力度alpha设置为0.0001 |
| batch_size | auto | 每次训练数据放入的数据量,默认auto即可,每次训练200条数据 |
| learning_rate | constant | 学习率保持为常量,和初始学习率一致 |
| learning_rate_init | 0.001 | 初始学习率设置成0.001 |
| power_t | 0.5 | 由于学习率下降的策略没有指定,学习率仅仅指定为常量,sgd策略中的下降力度参数不生效 |
| max_iter | 200 | 最大迭代次数限制为200 |
| shuffle | True | 每次迭代把数据打乱 |
| tol | 0.0001 | 梯度下降变化停止阈值设置小一点:0.0001 |
| momentum | 0.9 | 梯度更新动力参数:由于策略不为sgd,这个参数此处不生效 |
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
| {'result': '29.649208236011518'} |


