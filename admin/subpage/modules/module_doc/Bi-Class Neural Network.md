# Bi-Class Neural Network
+ Description

Multi-layer Perceptron classifier. This model op timizes the log-loss function using LBFGS or stoch astic gradient descent.

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Binary Classification | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

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


### 3.hidden_layer_sizes
+ Description

The ith element represents the number of neurons in the ith hidden layer.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 100 | Yes | None | None |


### 4.activation
+ Description

Activation function for the hidden layer. - 'identity', no-op activation, useful to implement linear bottleneck, returns f(x) = x - 'logistic', the logistic sigmoid function, returns f(x) = 1 / (1 + exp(-x)). - ' tanh', the hyperbolic tan function, retur ns f(x) = tanh(x). - 'relu', the rectified linear unit function, returns f(x) = max( 0, x)

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
+ Description

The solver for weight optimization. - 'lbfgs ' is an optimizer in the family of quasi-Newton me thods. - 'sgd' refers to stochastic gradien t descent. - 'adam' refers to a stochastic gradient-based optimizer proposed by King ma, Diederik, and Jimmy Ba Note: The defaul t solver 'adam' works pretty well on relatively large datasets (with thousands of training sa mples or more) in terms of both training ti me and validation score. For small datasets , however, 'lbfgs' can converge faster and perform better.

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
+ Description

L2 penalty (regularization term) parameter.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.0001 | Yes | None | None |


### 7.batch_size
+ Description

Size of minibatches for stochastic optimizers. If the solver is 'lbfgs', the classifier will n ot use minibatch. When set to "auto", `batc h_size=min(200, n_samples)`

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | auto | Yes | None | None |


### 8.learning_rate
+ Description

Learning rate schedule for weight updates. - 'constant' is a constant learning rate given by 'learning_rate_init'. - 'invscaling ' gradually decreases the learning rate at each time step 't' using an inverse scaling expo nent of 'power_t'. effective_learning_rat e = learning_rate_init / pow(t, power_t) - 'adaptive' keeps the learning rate constant to 'learning_rate_init' as long as training los s keeps decreasing. Each time two consecu tive epochs fail to decrease training loss by at least tol, or fail to increase validation score by at least tol if 'early_stopping' is on, the current learning rate is divided by 5. Only used when ``solver='sgd'``.

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
+ Description

The initial learning rate used. It controls the ste p-size in updating the weights. Only used w hen solver='sgd' or 'adam'.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.001 | Yes | None | None |


### 10.power_t
+ Description

The exponent for inverse scaling learning rate. It is used in updating effective learning rate when the learning_rate is set to 'invscali ng'. Only used when solver='sgd'.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.5 | Yes | None | None |


### 11.max_iter
+ Description

Maximum number of iterations. The solver iterates u ntil convergence (determined by 'tol') or t his number of iterations. For stochastic so lvers ('sgd', 'adam'), note that this determines t he number of epochs (how many times each da ta point will be used), not the number of g radient steps.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 200 | Yes | None | None |


### 12.shuffle
+ Description

Whether to shuffle samples in each iteration. Only used when solver='sgd' or 'adam'.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | True | Yes | None | None |


### 13.tol
+ Description

Tolerance for the optimization. When the loss or sc ore is not improving by at least ``tol`` fo r ``n_iter_no_change`` consecutive iterations, unless ``learning_rate`` is set to 'adaptive', convergence is considered to be reached an d training stops.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.0001 | Yes | None | None |


### 14.momentum
+ Description

Momentum for gradient descent update. Should be bet ween 0 and 1. Only used when solver='sgd'.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.9 | Yes | None | None |


### 15.early_stopping
+ Description

Whether to use early stopping to terminate training when validation score is not improving. If set to true, it will automatically set asi de 10% of training data as validation and terminat e training when validation score is not imp roving by at least tol for ``n_iter_no_chan ge`` consecutive epochs. The split is stratified, except in a multilabel setting. Only effective when solver='sgd' or 'adam

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | False | Yes | None | None |


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
## Desc:鸢尾花多层感知机二分类
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | Class | 标签 |
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
| {'class': '1', 'score': {'0': 0.0099002565323566, '1': 0.9900997434676434}} |


