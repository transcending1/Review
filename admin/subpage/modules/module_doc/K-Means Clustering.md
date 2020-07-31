# K-Means Clustering
## Detailed Info
### Description
'K-Means clustering.'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Clustering | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_file1 | True | FILE |  | True | None |
| n_clusters | True | STRING | 8 | True | None |
| init | True | STRING | k-means++ | True | None |
| n_init | True | STRING | 10 | True | None |
| max_iter | True | STRING | 300 | True | None |
| tol | True | STRING | 0.0001 | True | None |
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
'The number of clusters to form as well as the number of\n            centroids to generate.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 8 | Yes | None | None |


### 3.init
"Method for initialization, defaults to 'k-means++': \n           clustering in a smart way to speed up convergence. \n           See section        Notes in k_init for more details.\n          'random': choose k observations (rows) at random from data for\n          the initial centroids.\n          If an ndarray is passed, it should be of shape (n_clusters, n_features)\n          and gives the initial centers."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | k-means++ | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| k-means++ |  |
| random |  |


### 4.n_init
'Number of time the k-means algorithm will be run with different\n            centroid seeds. The final results will be the best output of\n            n_init consecutive runs in terms of inertia.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 10 | Yes | None | None |


### 5.max_iter
'Maximum number of iterations of the k-means algorithm for a\n            single run.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 300 | Yes | None | None |


### 6.tol
'Relative tolerance with regards to inertia to declare convergence.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.0001 | Yes | None | None |


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
## Desc:KMeans聚类对鸢尾花数据集进行聚类
### Input Params

| field | value | desc |
| --- | --- | --- |
| n_clusters | 8 | 分成8类 |
| init | k-means++ | 采用k-means++算法进行初始化点的操作 |
| n_init | 10 | k-means算法进行10次聚类 |
| max_iter | 300 | 一次聚类中最大迭代次数设置为300 |
| tol | 0.0001 | 相对容忍度为0.0001 |


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
| {'class': '0'} |


