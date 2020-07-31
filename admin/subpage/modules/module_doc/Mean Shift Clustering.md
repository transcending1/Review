# Mean Shift Clustering
## Detailed Info
### Description
'Mean shift clustering using a flat kernel.\n    Mean shift clustering aims to discover "blobs" in a smooth density of\n    samples. It is a centroid-based algorithm, which works by updating\n    candidates for centroids to be the mean of the points within a given\n    region. These candidates are then filtered in a post-processing stage to\n    eliminate near-duplicates to form the final set of centroids.\n    Seeding is performed using a binning technique for scalability.'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Clustering | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_file1 | True | FILE |  | True | None |
| min_bin_freq | True | STRING | 1 | True | None |
| max_iter | True | STRING | 300 | True | None |
| output_model_file | False | FILE |  | False | None |
| output_model | False | DIRECTORY | module | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_file1
'input csv file for trainer'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 2.min_bin_freq
'To speed up the algorithm, accept only those bins with at least\n           min_bin_freq points as seeds. If not defined, set to 1.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 1 | Yes | None | None |


### 3.max_iter
'Maximum number of iterations, per seed point before the clustering\n        operation terminates (for that seed point), if has not converged yet.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 300 | Yes | None | None |


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
## Desc:Mean Shift聚类对鸢尾花数据集进行聚类
### Input Params

| field | value | desc |
| --- | --- | --- |
| min_bin_freq | 1 | 种子数设置成1 |
| max_iter | 300 | 最大迭代次数设置成300 |


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


