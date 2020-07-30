# One-Hot Encoding
+ Description

Each value of discrete feature is regarded as a state. If you have n different values in this feature, then we can abstract this feature into n different states. DHC ensures that each value will only make one state in "active state", that is to say, only one state bit in this n state is 1, and the other state bits are 0

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Feature Engineering | Feature Conversion | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| columns1 | True | STRING |  | True | MULTIPLE |
| input_file1 | True | FILE |  | True | None |
| keep_columns | True | STRING | yes | True | None |
| output_file | False | FILE |  | False | None |
| output_model | False | DIRECTORY | module | False | None |


# Detailed Info of Parameters
## Input Parameters
### 1.columns1
+ Description

column selector for field input_file1

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING |  | Yes | MULTIPLE | input_file1 |


### 2.input_file1
+ Description

csv file

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | Yes | None | None |


### 3.keep_columns
+ Description

keep old columns or not

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | yes | Yes | None | None |


+ choices


| choice | help |
| --- | --- |
| yes | keep old columns |
| no | don't keep old columns |


## Output Parameters
### 1.output_file
+ Description

output dataset

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| FILE |  | No | None | None |


### 2.output_model
+ Description

output module

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| DIRECTORY | module | No | None | None |



# Test Case
## Case1
## Desc:泰坦尼克数据集对离散列进行one-hot编码
### Input Params

| field | value | desc |
| --- | --- | --- |
| columns1 | ['PCLASS', 'SIBSP', 'PARCH', 'SEX', 'EMBARKED'] | 数据集中特定的离散列 |
| keep_columns | no | 不保留之前相关列 |


### Post Json Format

| SURVIVED | PCLASS | SEX | AGE | SIBSP | PARCH | FARE | EMBARKED |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 3 | male | 22.0 | 1 | 0 | 7.25 | S |


### Custom Test Report
+ Data Format Before Transform


| Before |
| --- |
| (1, 8) |


+ Data Example Before Transform


| field | value |
| --- | --- |
| SURVIVED | 0 |
| PCLASS | 3 |
| SEX | male |
| AGE | 22.0 |
| SIBSP | 1 |
| PARCH | 0 |
| FARE | 7.25 |
| EMBARKED | S |


+ Data Format After Transform


| After |
| --- |
| (1, 25) |


+ Data Example After Transform


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


