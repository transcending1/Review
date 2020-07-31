# Birch Clustering
## Detailed Info
### Description
'Implements the Birch clustering algorithm.\n        It is a memory-efficient, online-learning algorithm provided as an    alternative to :class:`MiniBatchKMeans`. \n        It constructs a tree    data structure with the cluster centroids being read off the leaf.\n        These can be either the final cluster centroids or can be provided as input\n        to another clustering algorithm such as :class:`AgglomerativeClustering'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Clustering | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_file1 | True | FILE |  | True | None |
| threshold | True | STRING | 0.5 | True | None |
| branching_factor | True | STRING | 50 | True | None |
| n_clusters | True | STRING | 3 | True | None |
| output_model_file | False | FILE |  | False | None |
| output_model | False | DIRECTORY | module | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_file1
'input csv file for trainer'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 2.threshold
'The radius of the subcluster obtained by merging a new sample and the\n    closest subcluster should be lesser than the threshold. Otherwise a new\n    subcluster is started. Setting this value to be very low promotes\n    splitting and vice-versa.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.5 | Yes | None | None |


### 3.branching_factor
'Maximum number of CF subclusters in each node. If a new samples enters\n    such that the number of subclusters exceed the branching_factor then\n    that node is split into two nodes with the subclusters redistributed\n    in each. The parent subcluster of that node is removed and two new\n    subclusters are added as parents of the 2 split nodes.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 50 | Yes | None | None |


### 4.n_clusters
'Number of clusters after the final clustering step, which treats the\n    subclusters from the leaves as new samples.\n    subclusters are returned as they are.\n    is fit treating the subclusters as new samples and the initial data\n    is mapped to the label of the closest subcluster.\n    `n_clusters` set to be equal to the int.'


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
## Desc:Birch聚类算法对鸢尾花数据集进行聚类
### Input Params

| field | value | desc |
| --- | --- | --- |
| threshold | 0.5 | 算法中圆的半径设置成0.5 |
| branching_factor | 50 | 每个节点的最大子簇个数 |
| n_clusters | 3 | 分成多少类 |


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


