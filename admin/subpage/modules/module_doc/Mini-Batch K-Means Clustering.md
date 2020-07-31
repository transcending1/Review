# Mini-Batch K-Means Clustering
## Detailed Info
### Description
'    Mini-Batch K-Means clustering.'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Clustering | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_file1 | True | FILE |  | True | None |
| n_clusters | True | STRING | 8 | True | None |
| init | True | STRING | k-means++ | True | None |
| max_iter | True | STRING | 100 | True | None |
| batch_size | True | STRING | 100 | True | None |
| tol | True | STRING | 0.0 | True | None |
| n_init | True | STRING | 3 | True | None |
| output_model_file | False | FILE |  | False | None |
| output_model | False | DIRECTORY | module | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_file1
'input csv file for trainer'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 2.n_clusters
'The number of clusters to form as well as the number of centroids to generate.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 8 | Yes | None | None |


### 3.init
"Method for initialization\n            clustering in a smart way to speed up convergence. See section\n            Notes in k_init for more details.\n            'random': choose k observations (rows) at random from data for\n            the initial centroids.\n            If an ndarray is passed, it should be of shape (n_clusters, n_features)\n            and gives the initial centers."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | k-means++ | Yes | None | None |


### 4.max_iter
'Maximum number of iterations over the complete dataset before\n           stopping independently of any early stopping criterion heuristics.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 100 | Yes | None | None |


### 5.batch_size
'Size of the mini batches.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 100 | Yes | None | None |


### 6.tol
'Control early stopping based on the relative center changes as\n            measured by a smoothed, variance-normalized of the mean center\n            squared position changes. This early stopping heuristics is\n            closer to the one used for the batch variant of the algorithms\n            but induces a slight computational and memory overhead over the\n            inertia heuristic.To disable convergence detection based on normalized center\n            change, set tol to 0.0 (default).'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.0 | Yes | None | None |


### 7.n_init
'Number of random initializations that are tried.\n        In contrast to KMeans, the algorithm is only run once,\n        using the best of the ``n_init`` initializations as measured by inertia.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 3 | Yes | None | None |


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
## Desc:Mini-Batch K-Means聚类对鸢尾花数据集进行聚类
### Input Params

| field | value | desc |
| --- | --- | --- |
| n_clusters | 8 | 分成8类 |
| init | k-means++ | 采用k-means++算法进行初始化点的操作 |
| max_iter | 100 | 一次聚类中最大迭代次数设置为300 |
| batch_size | 100 | 没批次取100个 |
| tol | 0 | 相对容忍度为0 |
| n_init | 3 | 对该算法进行随机初始化3次,优化初始化点的分布 |


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


