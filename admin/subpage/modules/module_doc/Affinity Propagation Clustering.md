# Affinity Propagation Clustering
+ Description

Perform Affinity Propagation Clustering of data.

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Clustering | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_file1 | True | FILE |  | True | None |
| damping | True | STRING | 0.5 | True | None |
| max_iter | True | STRING | 200 | True | None |
| convergence_iter | True | STRING | 15 | True | None |
| output_model_file | False | FILE |  | False | None |
| output_model | False | DIRECTORY | module | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_file1
+ Description

input csv file for trainer

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 2.damping
+ Description

Damping factor (between 0.5 and 1) is the extent to which the current value is maintained relative to incoming values (weighted 1 - damping). This in order to avoid numerical oscillations when updating these values (messages).

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.5 | Yes | None | None |


### 3.max_iter
+ Description

Maximum number of iterations.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 200 | Yes | None | None |


### 4.convergence_iter
+ Description

Number of iterations with no change in the number of estimated clusters that stops the convergence.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 15 | Yes | None | None |


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
## Desc:AP聚类对鸢尾花数据集进行聚类
### Input Params

| field | value | desc |
| --- | --- | --- |
| damping | 0.5 | 阻尼系数设置为0.5, |
| max_iter | 200 | 最大迭代次数限制为200 |
| convergence_iter | 15 | cluster经过15轮迭代未发生变化就停止 |


### Post Json Format

| sepal-length | sepal-width | petal-length | petal-width | Class |
| --- | --- | --- | --- | --- |
| 5.4 | 3.7 | 1.5 | 0.2 | 0 |


### Custom Test Report
+ Test Example


| field | value |
| --- | --- |
| sepal-length | 5.4 |
| sepal-width | 3.7 |
| petal-length | 1.5 |
| petal-width | 0.2 |
| Class | 0.0 |


+ Predict Result


| result |
| --- |
| {'class': '1'} |


