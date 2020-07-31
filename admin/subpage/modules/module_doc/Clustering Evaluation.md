# Clustering Evaluation
## Detailed Info
### Description
'clustering evaluation'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Machine Learning | Evaluation | DOCKER | 1 | 0 | 2048 | deny |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| input_model | True | DIRECTORY |  | False | None |
| input_file1 | True | FILE |  | True | None |
| output_directory | False | DIRECTORY |  | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.input_model
'module after training by trainer'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY |  | No | None | None |


### 2.input_file1
'test csv dataset to have a test about clustering'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


## Output Parameters
### 1.output_directory
'clustering evaluation report'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY |  | No | None | None |



# Test Case
## Case1
## Desc:随意抽取一个聚类模型进行评估测试
