# Standardization
## Detailed Info
### Description
'In the original data, the range of each variable is very different. For some machine learning algorithms, if not standardized, the objective function will not work properly. For example, most classifiers use the distance between two points to calculate the difference between two points. If one of the features has a very wide range, the difference between the two points will be around the feature. Therefore, some features should be standardized so that each feature can affect the distance between the two points in proportion. Another reason for feature scaling is that it can make the gradient descent method converge. Standard normalization makes the average value of each feature become 0 (the value of each feature is subtracted from the mean value of the feature in the original data), and the standard deviation become 1.'


| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Feature Engineering | Feature Conversion | DOCKER | 1 | 0 | 2048 | keep |


### Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| columns1 | True | STRING |  | True | MULTIPLE |
| input_file1 | True | FILE |  | True | None |
| output_file | False | FILE |  | False | None |
| output_model | False | DIRECTORY | module | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.columns1
'column selector for field input_file1'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | Yes | MULTIPLE | input_file1 |


### 2.input_file1
'csv file'


| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


## Output Parameters
### 1.output_file
'output dataset'


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
## Desc:泰坦尼克数据集对特定连续列进行标准化处理
### Input Params

| field | value | desc |
| --- | --- | --- |
| columns1 | ['AGE', 'FARE'] | 选取两个连续列进行标准化 |


### Post Json Format

| SURVIVED | AGE | FARE | one_hot_0 | one_hot_1 | one_hot_2 | one_hot_3 | one_hot_4 | one_hot_5 | one_hot_6 | one_hot_7 | one_hot_8 | one_hot_9 | one_hot_10 | one_hot_11 | one_hot_12 | one_hot_13 | one_hot_14 | one_hot_15 | one_hot_16 | one_hot_17 | one_hot_18 | one_hot_19 | one_hot_20 | one_hot_21 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 22.0 | 7.25 | 0.0 | 0.0 | 1.0 | 0.0 | 1.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 1.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 1.0 | 0.0 | 0.0 | 1.0 |


### Custom Test Report
+ Data Format Before Transform


| Before |
| --- |
| (1, 25) |


+ Data Example Before Transform


| field | value |
| --- | --- |
| SURVIVED | 0.0 |
| AGE | 22.0 |
| FARE | 7.25 |
| one_hot_0 | 0.0 |
| one_hot_1 | 0.0 |
| one_hot_2 | 1.0 |
| one_hot_3 | 0.0 |
| one_hot_4 | 1.0 |
| one_hot_5 | 0.0 |
| one_hot_6 | 0.0 |
| one_hot_7 | 0.0 |
| one_hot_8 | 0.0 |
| one_hot_9 | 0.0 |
| one_hot_10 | 1.0 |
| one_hot_11 | 0.0 |
| one_hot_12 | 0.0 |
| one_hot_13 | 0.0 |
| one_hot_14 | 0.0 |
| one_hot_15 | 0.0 |
| one_hot_16 | 0.0 |
| one_hot_17 | 0.0 |
| one_hot_18 | 1.0 |
| one_hot_19 | 0.0 |
| one_hot_20 | 0.0 |
| one_hot_21 | 1.0 |


+ Data Format After Transform


| After |
| --- |
| (1, 25) |


+ Data Example After Transform


| field | value |
| --- | --- |
| SURVIVED | 0.0 |
| AGE | -0.5924805998028931 |
| FARE | -0.5024451714361923 |
| one_hot_0 | 0.0 |
| one_hot_1 | 0.0 |
| one_hot_2 | 1.0 |
| one_hot_3 | 0.0 |
| one_hot_4 | 1.0 |
| one_hot_5 | 0.0 |
| one_hot_6 | 0.0 |
| one_hot_7 | 0.0 |
| one_hot_8 | 0.0 |
| one_hot_9 | 0.0 |
| one_hot_10 | 1.0 |
| one_hot_11 | 0.0 |
| one_hot_12 | 0.0 |
| one_hot_13 | 0.0 |
| one_hot_14 | 0.0 |
| one_hot_15 | 0.0 |
| one_hot_16 | 0.0 |
| one_hot_17 | 0.0 |
| one_hot_18 | 1.0 |
| one_hot_19 | 0.0 |
| one_hot_20 | 0.0 |
| one_hot_21 | 1.0 |


