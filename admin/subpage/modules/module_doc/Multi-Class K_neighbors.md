# Multi-Class K_neighbors
## Detailed Info
### Description
'Classifier implementing the k-nearest neighbors vote.'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Multi Classification | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| label | True | STRING |  | True | SINGLE |
| input_file1 | True | FILE |  | True | None |
| n_neighbors | True | STRING | 5 | True | None |
| algorithm | True | STRING | auto | True | None |
| leaf_size | True | STRING | 30 | True | None |
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


### 3.n_neighbors
'Number of neighbors to use by default for :meth:`kneighbors` queries.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 5 | Yes | None | None |


### 4.algorithm
"Algorithm used to compute the nearest neighbors:   \n                  - 'ball_tree' will use :class:`BallTree`     \n                - 'kd_tree' will use :class:`KDTree`        - '\n             brute' will use a brute-force search.        - 'au\n             to' will attempt to decide the most appropriate al\n             gorithm          based on the values passed to :me\n             th:`fit` method.        Note: fitting on sparse in\n             put will override the setting of        this param\n             eter, using brute force."


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | auto | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| ball_tree |  |
| kd_tree |  |
| brute |  |
| auto |  |


### 5.leaf_size
'Leaf size passed to BallTree or KDTree.  This can a\n             ffect the        speed of the construction and que\n             ry, as well as the memory        required to store\n              the tree.  The optimal value depends on the      \n               nature of the problem.'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 30 | Yes | None | None |


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
## Desc:鸢尾花KNN多分类
### Input Params

| field | value | desc |
| --- | --- | --- |
| label | Class | 标签 |
| n_neighbors | 5 | 选取5个邻居进行分类 |
| algorithm | auto | KNN核心算法,选用自动选取的方式,kd树,球树,蛮力算法中自动选取 |
| leaf_size | 30 | 由于上面选取了auto的选项,此参数无效,仅仅对KDTree或者BallTree生效 |


### Post Json Format

| sepal-length | sepal-width | petal-length | petal-width |
| --- | --- | --- | --- |
| 5.4 | 3.7 | 1.5 | 0.2 |


### Custom Test Report
+ Test Example


| field | value |
| --- | --- |
| sepal-length | 5.4 |
| sepal-width | 3.7 |
| petal-length | 1.5 |
| petal-width | 0.2 |


+ Predict Result


| result |
| --- |
| {'class': '0', 'score': {'0': 1.0, '1': 0.0, '2': 0.0}} |


