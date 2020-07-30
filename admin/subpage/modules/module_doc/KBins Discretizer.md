# KBins Discretizer
+ Description

Discretization of continuous features, advantages: more robust, introduction of non-linear (after box coding)

| category | sub_category | type | cpu | gpu | memory | pipe_status |
| --- | --- | --- | --- | --- | --- | --- |
| Feature Engineering | Feature Conversion | DOCKER | 1 | 0 | 2048 | keep |


# Parameter Detail

| name | is_input | category | default | required | selector_model |
| --- | --- | --- | --- | --- | --- |
| columns1 | True | STRING |  | True | MULTIPLE |
| input_file1 | True | FILE |  | True | None |
| keep_columns | True | STRING | yes | True | None |
| bins | True | STRING | 5 | True | None |
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


### 4.bins
+ Description

how many bins you want to split

| Category | Default Value | Is Required | Selector Model | Selector Super Field |
| --- | --- | --- | --- | --- |
| STRING | 5 | Yes | None | None |


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
## Desc:泰坦尼克号成员id,票价连续数值离散化变成one-hot编码测试
### Input Params

| field | value | desc |
| --- | --- | --- |
| columns1 | ['PASSENGERID', 'FARE'] | 选取两个连续的列 |
| keep_columns | no | 不保留离散化之前的列 |
| bins | 5 | 离散化成5份数据 |


### Post Json Format

| PASSENGERID | SURVIVED | PCLASS | NAME | SEX | AGE | SIBSP | PARCH | TICKET | FARE | CABIN | EMBARKED |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 3 | Braund, Mr. Owen Harris | male | 22.0 | 1 | 0 | A/5 21171 | 7.25 | nan | S |


### Custom Test Report
+ Data Format Before Transform


| Before |
| --- |
| (1, 12) |


+ Data Example Before Transform


| field | value |
| --- | --- |
| PASSENGERID | 1 |
| SURVIVED | 0 |
| PCLASS | 3 |
| NAME | Braund, Mr. Owen Harris |
| SEX | male |
| AGE | 22.0 |
| SIBSP | 1 |
| PARCH | 0 |
| TICKET | A/5 21171 |
| FARE | 7.25 |
| CABIN | nan |
| EMBARKED | S |


+ Data Format After Transform


| After |
| --- |
| (1, 20) |


+ Data Example After Transform


| field | value |
| --- | --- |
| SURVIVED | 0 |
| PCLASS | 3 |
| NAME | Braund, Mr. Owen Harris |
| SEX | male |
| AGE | 22.0 |
| SIBSP | 1 |
| PARCH | 0 |
| TICKET | A/5 21171 |
| CABIN | nan |
| EMBARKED | S |
| kbins_one_hot_0 | 1.0 |
| kbins_one_hot_1 | 0.0 |
| kbins_one_hot_2 | 0.0 |
| kbins_one_hot_3 | 0.0 |
| kbins_one_hot_4 | 0.0 |
| kbins_one_hot_5 | 1.0 |
| kbins_one_hot_6 | 0.0 |
| kbins_one_hot_7 | 0.0 |
| kbins_one_hot_8 | 0.0 |
| kbins_one_hot_9 | 0.0 |


