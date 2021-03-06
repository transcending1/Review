# Optics Clustering
## Detailed Info
### Description
"Estimate clustering structure from vector array.\n    OPTICS (Ordering Points To Identify the Clustering Structure), closely \n    related to DBSCAN, finds core sample of high density and expands clusters\n    from them [1]_. Unlike DBSCAN, keeps cluster hierarchy for a variable\n    neighborhood radius. Better suited for usage on large datasets than the\n    current sklearn implementation of DBSCAN.\n    Clusters are then extracted using a DBSCAN-like method \n    (cluster_method = 'dbscan') or an automatic    technique proposed in [1]_ (cluster_method = 'xi').\n    This implementation deviates from the original OPTICS by first performing \n    k-nearest-neighborhood searches on all points to identify core sizes, then \n    computing only the distances to unprocessed points when constructing the\n    cluster order. Note that we do not employ a heap to manage the expansion \n    candidates, so the time complexity will be O(n^2)."


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Clustering | DOCKER | 1 | 0 | 2048 | deny |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_file1 | True | FILE |  | True | None |
| min_samples | True | STRING | 5 | True | None |
| cluster_method | True | STRING | xi | True | None |
| xi | True | STRING | 0.05 | True | None |
| output_file | False | FILE |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_file1
'input csv file for trainer'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 2.min_samples
"The number of samples in a neighborhood for a point to be considered as\n        a core point. Also, up and down steep regions can't have more then\n        ``min_samples`` consecutive non-steep points. Expressed as an absolute\n        number or a fraction of the number of samples (rounded to be at least 2)."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 5 | Yes | None | None |


### 3.cluster_method
'The extraction method used to extract clusters using the calculated\n            reachability and ordering. Possible values are "xi" and "dbscan".'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | xi | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| xi |  |
| dbscan |  |


### 4.xi
"Determines the minimum steepness on the reachability plot that\n        constitutes a cluster boundary. For example, an upwards point in the\n        reachability plot is defined by the ratio from one point to its\n        successor being at most 1-xi.        Used only when ``cluster_method='xi'``."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.05 | Yes | None | None |


## Output Parameters
### 1.output_file
'output dataset'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |



# Test Case
## Case1
## Desc:Optics 聚类对鸢尾花数据集进行聚类
### Input Params

| field | value | desc |
| --- | --- | --- |
| min_samples | 5 | 邻居5个样本 |
| cluster_method | xi | 抽取算法选用xi算法 |
| xi | 0.05 | xi算法设置最小坡度 |


