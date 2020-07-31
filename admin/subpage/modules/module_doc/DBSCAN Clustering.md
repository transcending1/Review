# DBSCAN Clustering
## Detailed Info
### Description
'Perform DBSCAN clustering from vector array or distance matrix.\n            DBSCAN - Density-Based Spatial Clustering of Applications with Noise.\n            Finds core samples of high density and expands clusters from them.\n            Good for data which contains clusters of similar density.\n            Read more in the :ref:`User Guide <dbscan>`.'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Clustering | DOCKER | 1 | 0 | 2048 | deny |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_file1 | True | FILE |  | True | None |
| eps | True | STRING | 0.5 | True | None |
| min_samples | True | STRING | 5 | True | None |
| output_file | False | FILE |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_file1
'input csv file for trainer'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 2.eps
'The maximum distance between two samples for one to be considered\n            as in the neighborhood of the other. This is not a maximum bound\n            on the distances of points within a cluster. This is the most\n            important DBSCAN parameter to choose appropriately for your data set\n            and distance function.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 0.5 | Yes | None | None |


### 3.min_samples
'The number of samples (or total weight) in a neighborhood for a point\n    to be considered as a core point. This includes the point itself.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 5 | Yes | None | None |


## Output Parameters
### 1.output_file
'output dataset'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |



# Test Case
## Case1
## Desc:DBSCAN聚类对鸢尾花数据集进行聚类
### Input Params

| field | value | desc |
| --- | --- | --- |
| eps | 0.5 | 两个样本最大距离选择5 |
| min_samples | 5 | 扩张的时候周围的样本数选择为5 |


