# Spectral Clustering
+ Description

Apply clustering to a projection of the normalized Laplacian. In practice Spectral Clustering is very useful when the structure of the individual clusters is highly non-convex or more generally when a measure of the center and spread of the cluster is not a suitable description of the complete cluster. For instance when clusters are nested circles on the 2D plane. If affinity is the adjacency matrix of a graph, this method can be used to find normalized graph cuts. When calling ``fit``, an affinity matrix is constructed using either kernel function such the Gaussian (aka RBF) kernel of the euclidean distanced ``d(X, X)``:: np.exp(-gamma * d(X,X) ** 2) or a k-nearest neighbors connectivity matrix. Alternatively, using ``precomputed``, a user-provided affinity matrix can be used. 

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Clustering | DOCKER | 1 | 0 | 2048 | deny |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_file1 | True | FILE |  | True | None |
| n_clusters | True | STRING | 8 | True | None |
| n_init | True | STRING | 10 | True | None |
| assign_labels | True | STRING | kmeans | True | None |
| gamma | True | STRING | 1.0 | True | None |
| output_file | False | FILE |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_file1
+ Description

input csv file for trainer

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 2.n_clusters
+ Description

The dimension of the projection subspace.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 8 | Yes | None | None |


### 3.n_init
+ Description

Number of time the k-means algorithm will be run with different centroid seeds. The final results will be the best output o f n_init consecutive runs in terms of inertia.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 10 | Yes | None | None |


### 4.assign_labels
+ Description

The strategy to use to assign labels in the embedding space. There are two ways to assign labels after the laplacian embedding. k-means can be applied and is a popular choice. But it can also be sensitive to initialization. Discretization is another approach which is less sensitive to random initialization.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | kmeans | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| kmeans |  |
| discretize |  |


### 5.gamma
+ Description

Kernel coefficient for rbf, poly, sigmoid, laplacian and chi2 kernels. Ignored for ``affinity='nearest_neighbors'``.

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1.0 | Yes | None | None |


## Output Parameters
### 1.output_file
+ Description

output dataset

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |



# Test Case
## Case1
## Desc:谱聚类对鸢尾花数据集进行聚类
### Input Params

| field | value | desc |
| --- | --- | --- |
| n_clusters | 8 | 分成8类 |
| n_init | 10 | k-means算法进行10次聚类 |
| assign_labels | kmeans | 使用kmeans算法去分配标签 |
| gamma | 1.0 | 核函数系数设置为1.0 |


