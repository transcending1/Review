Search.setIndex({docnames:["exlib","exlib.apis","exlib.exceptions","exlib.manager","exlib.serializer","exlib.serializer.extractor","exlib.serializer.plugin","exlib.service","exlib.tests","exlib.tests.test_add_argument","exlib.tests.test_apis","exlib.tests.test_argument_parser","exlib.tests.test_mlflow_mixin","exlib.tests.test_program_execute","exlib.tests.test_test","exlib.utils","exlib.utils.markdown","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,sphinx:56},filenames:["exlib.rst","exlib.apis.rst","exlib.exceptions.rst","exlib.manager.rst","exlib.serializer.rst","exlib.serializer.extractor.rst","exlib.serializer.plugin.rst","exlib.service.rst","exlib.tests.rst","exlib.tests.test_add_argument.rst","exlib.tests.test_apis.rst","exlib.tests.test_argument_parser.rst","exlib.tests.test_mlflow_mixin.rst","exlib.tests.test_program_execute.rst","exlib.tests.test_test.rst","exlib.utils.rst","exlib.utils.markdown.rst","index.rst","modules.rst"],objects:{"":{exlib:[0,0,0,"-"]},"exlib.apis":{address:[1,0,0,"-"],datasets:[1,0,0,"-"],jobs:[1,0,0,"-"],modules:[1,0,0,"-"]},"exlib.apis.modules":{manager:[1,1,1,""]},"exlib.config":{ConfigAttribute:[0,2,1,""]},"exlib.env":{Env:[0,2,1,""]},"exlib.env.Env":{SERVING:[0,3,1,""],TEST:[0,3,1,""],del_serving_env:[0,4,1,""],del_test_env:[0,4,1,""],has_serving_env:[0,4,1,""],has_test_env:[0,4,1,""],set_serving_env:[0,4,1,""],set_test_env:[0,4,1,""]},"exlib.exceptions":{base:[2,0,0,"-"],http:[2,0,0,"-"]},"exlib.exceptions.base":{CapBaseException:[2,5,1,""],HttpBaseException:[2,5,1,""]},"exlib.exceptions.base.CapBaseException":{code:[2,3,1,""],description:[2,3,1,""]},"exlib.exceptions.base.HttpBaseException":{code:[2,3,1,""],description:[2,3,1,""],get_response:[2,4,1,""],name:[2,4,1,""]},"exlib.exceptions.http":{BadRequest:[2,5,1,""],InternalServerError:[2,5,1,""]},"exlib.exceptions.http.BadRequest":{code:[2,3,1,""],description:[2,3,1,""]},"exlib.exceptions.http.InternalServerError":{code:[2,3,1,""],description:[2,3,1,""]},"exlib.globals":{Category:[0,2,1,""],ConfigBase:[0,2,1,""],Cpu:[0,2,1,""],DataInputAndOutputSubCategory:[0,2,1,""],DataTransformationSubCategory:[0,2,1,""],DeepLearningSubCategory:[0,2,1,""],FeatureEngineeringSubCategory:[0,2,1,""],Gpu:[0,2,1,""],Image:[0,2,1,""],InputOutputConfig:[0,2,1,""],MachineLearningSubCategory:[0,2,1,""],Memory:[0,2,1,""],PipeStatus:[0,2,1,""],SavedDatasetSubCategory:[0,2,1,""],SelectorModel:[0,2,1,""],TestEnv:[0,2,1,""],TestStatus:[0,2,1,""],Type:[0,2,1,""],VisualizationSubCategory:[0,2,1,""],value:[0,3,1,""]},"exlib.globals.Category":{DATA_INPUT_AND_OUTPUT:[0,3,1,""],DATA_INPUT_AND_OUTPUT_SUB:[0,3,1,""],DATA_TRANSFORMATION:[0,3,1,""],DATA_TRANSFORMATION_SUB:[0,3,1,""],DEEP_LEARNING:[0,3,1,""],DEEP_LEARNING_SUB:[0,3,1,""],DEFAULT:[0,3,1,""],DEFAULT_SUB:[0,3,1,""],EXECUTIVE_FRAMEWORK:[0,3,1,""],EXECUTIVE_FRAMEWORK_SUB:[0,3,1,""],FEATURE_ENGINEERING:[0,3,1,""],FEATURE_ENGINEERING_SUB:[0,3,1,""],MACHINE_LEARNING:[0,3,1,""],MACHINE_LEARNING_SUB:[0,3,1,""],SAVED_DATASET:[0,3,1,""],SAVED_DATASET_SUB:[0,3,1,""],VISUALIZATION:[0,3,1,""],VISUALIZATION_SUB:[0,3,1,""]},"exlib.globals.ConfigBase":{choices:[0,4,1,""]},"exlib.globals.Cpu":{EIGHT_CORE:[0,3,1,""],FOUR_CORE:[0,3,1,""],HALF_CORE:[0,3,1,""],ONE_CORE:[0,3,1,""],TWO_CORE:[0,3,1,""]},"exlib.globals.DataInputAndOutputSubCategory":{EXPORT:[0,3,1,""],IMPORT:[0,3,1,""]},"exlib.globals.DataTransformationSubCategory":{MANIPULATION:[0,3,1,""],SAMPLING_AND_SPLIT:[0,3,1,""]},"exlib.globals.DeepLearningSubCategory":{CV:[0,3,1,""],NLP:[0,3,1,""]},"exlib.globals.FeatureEngineeringSubCategory":{FEATURE_CONVERSION:[0,3,1,""],FEATURE_SELECTION:[0,3,1,""]},"exlib.globals.Gpu":{NO_GPU:[0,3,1,""],ONE_GPU:[0,3,1,""]},"exlib.globals.Image":{DEFAULT:[0,3,1,""]},"exlib.globals.InputOutputConfig":{DIRECTORY:[0,3,1,""],FILE:[0,3,1,""],STRING:[0,3,1,""]},"exlib.globals.MachineLearningSubCategory":{ANOMALY_DETECTION:[0,3,1,""],BINARY_CLASSIFICATION:[0,3,1,""],CLUSTERING:[0,3,1,""],EVALUATION:[0,3,1,""],MULTI_CLASSIFICATION:[0,3,1,""],REGRESSION:[0,3,1,""],TIMESERIES:[0,3,1,""]},"exlib.globals.Memory":{MEMORY_1024:[0,3,1,""],MEMORY_2048:[0,3,1,""],MEMORY_256:[0,3,1,""],MEMORY_4096:[0,3,1,""],MEMORY_512:[0,3,1,""]},"exlib.globals.PipeStatus":{ALLOW:[0,3,1,""],DENY:[0,3,1,""],KEEP:[0,3,1,""]},"exlib.globals.SavedDatasetSubCategory":{PUBLIC_DATASET:[0,3,1,""],USER_DATASET:[0,3,1,""]},"exlib.globals.SelectorModel":{MULTIPLE:[0,3,1,""],SINGLE:[0,3,1,""],UNLIMIT:[0,3,1,""]},"exlib.globals.TestEnv":{EXTERNAL:[0,3,1,""],INTERNAL:[0,3,1,""]},"exlib.globals.TestStatus":{NORMAL:[0,3,1,""],PASSED:[0,3,1,""],PENDING:[0,3,1,""]},"exlib.globals.Type":{DOCKER:[0,3,1,""]},"exlib.globals.VisualizationSubCategory":{COMBINE:[0,3,1,""],COMPARE:[0,3,1,""],DISTRIBUTION:[0,3,1,""],RELATION:[0,3,1,""],STATISTICAL_ANALYSIS:[0,3,1,""]},"exlib.manager":{manager:[3,0,0,"-"],python_func_manager:[3,0,0,"-"],sklearn_manager:[3,0,0,"-"]},"exlib.manager.manager":{Manager:[3,2,1,""]},"exlib.manager.manager.Manager":{save:[3,4,1,""],save_model:[3,4,1,""],to_csv:[3,4,1,""]},"exlib.manager.python_func_manager":{PythonFunctionManager:[3,2,1,""]},"exlib.manager.python_func_manager.PythonFunctionManager":{transform_test:[3,4,1,""]},"exlib.manager.sklearn_manager":{SklearnManager:[3,2,1,""]},"exlib.manager.sklearn_manager.SklearnManager":{classification_learning_predict:[3,4,1,""],clustering_predict:[3,4,1,""],dump_model:[3,4,1,""],regression_predict:[3,4,1,""],transform_test:[3,4,1,""]},"exlib.model":{MLFlowModel:[0,2,1,""]},"exlib.model.MLFlowModel":{python_model_predict:[0,4,1,""],transform:[0,4,1,""]},"exlib.pipeline":{PipeLine:[0,2,1,""]},"exlib.pipeline.PipeLine":{transform:[0,4,1,""]},"exlib.serializer":{external_serializer:[4,0,0,"-"],extractor:[5,0,0,"-"],parser:[4,0,0,"-"],plugin:[6,0,0,"-"]},"exlib.serializer.external_serializer":{ArgumentParser:[4,2,1,""]},"exlib.serializer.extractor":{csv:[5,0,0,"-"],supervised:[5,0,0,"-"]},"exlib.serializer.extractor.csv":{CsvExtractor:[5,2,1,""]},"exlib.serializer.extractor.csv.CsvExtractor":{data2json:[5,4,1,""],data:[5,4,1,""],json2data:[5,4,1,""],json_post_input:[5,4,1,""],one_unit:[5,4,1,""]},"exlib.serializer.extractor.supervised":{SupervisedLearningExtractor:[5,2,1,""]},"exlib.serializer.extractor.supervised.SupervisedLearningExtractor":{data:[5,4,1,""],feature_label:[5,4,1,""],json2data:[5,4,1,""],one_unit:[5,4,1,""]},"exlib.serializer.parser":{ArgumentParser:[4,2,1,""]},"exlib.serializer.plugin":{choice:[6,0,0,"-"],selector:[6,0,0,"-"],test:[6,0,0,"-"]},"exlib.serializer.plugin.choice":{Choice:[6,2,1,""]},"exlib.serializer.plugin.choice.Choice":{to_tuple:[6,4,1,""]},"exlib.serializer.plugin.selector":{Label:[6,2,1,""],Selector:[6,2,1,""]},"exlib.serializer.plugin.test":{TestUnit:[6,2,1,""]},"exlib.serializer.plugin.test.TestUnit":{to_dict:[6,4,1,""],wrap_test_data:[6,4,1,""]},"exlib.service":{cli:[7,0,0,"-"]},"exlib.tests":{test_add_argument:[9,0,0,"-"],test_apis:[10,0,0,"-"],test_argument_parser:[11,0,0,"-"],test_mlflow_mixin:[12,0,0,"-"],test_program_execute:[13,0,0,"-"],test_test:[14,0,0,"-"],utils:[8,0,0,"-"]},"exlib.tests.test_add_argument":{test_basic_fields:[9,0,0,"-"],test_choice_field:[9,0,0,"-"],test_column_selector:[9,0,0,"-"],test_required_field:[9,0,0,"-"]},"exlib.tests.test_add_argument.test_basic_fields":{TestAddArgument:[9,2,1,""],TestCase:[9,2,1,""]},"exlib.tests.test_add_argument.test_basic_fields.TestAddArgument":{setUp:[9,4,1,""],test_basic_fields:[9,4,1,""],test_default_value:[9,4,1,""],test_eval_parser_1:[9,4,1,""],test_eval_parser_2:[9,4,1,""],test_test_command:[9,4,1,""]},"exlib.tests.test_add_argument.test_basic_fields.TestCase":{execute:[9,4,1,""]},"exlib.tests.test_add_argument.test_choice_field":{TestCase:[9,2,1,""],TestChoice:[9,2,1,""]},"exlib.tests.test_add_argument.test_choice_field.TestCase":{execute:[9,4,1,""]},"exlib.tests.test_add_argument.test_choice_field.TestChoice":{setUp:[9,4,1,""],test_choice:[9,4,1,""],test_wrong_default_choice:[9,4,1,""],test_wrong_test_choice:[9,4,1,""]},"exlib.tests.test_add_argument.test_column_selector":{TestCase:[9,2,1,""],TestColumnSelector:[9,2,1,""]},"exlib.tests.test_add_argument.test_column_selector.TestCase":{execute:[9,4,1,""]},"exlib.tests.test_add_argument.test_column_selector.TestColumnSelector":{setUp:[9,4,1,""],tearDown:[9,4,1,""],test_default_parsed_values:[9,4,1,""],test_multi_selector:[9,4,1,""],test_single_selector:[9,4,1,""]},"exlib.tests.test_add_argument.test_required_field":{TestCase:[9,2,1,""],TestRequiredField:[9,2,1,""]},"exlib.tests.test_add_argument.test_required_field.TestCase":{execute:[9,4,1,""]},"exlib.tests.test_add_argument.test_required_field.TestRequiredField":{setUp:[9,4,1,""],test_required_test_field:[9,4,1,""]},"exlib.tests.test_apis":{test_upload:[10,0,0,"-"]},"exlib.tests.test_apis.test_upload":{TestUpload:[10,2,1,""]},"exlib.tests.test_apis.test_upload.TestUpload":{setUp:[10,4,1,""],test_upload_module:[10,4,1,""]},"exlib.tests.test_argument_parser":{test_argument_parser:[11,0,0,"-"],test_wrong_params:[11,0,0,"-"]},"exlib.tests.test_argument_parser.test_argument_parser":{TestArgumentParser:[11,2,1,""],TestCase:[11,2,1,""]},"exlib.tests.test_argument_parser.test_argument_parser.TestArgumentParser":{setUp:[11,4,1,""],tearDown:[11,4,1,""],test_module_running:[11,4,1,""],test_set_parameters:[11,4,1,""],test_wrong_category:[11,4,1,""]},"exlib.tests.test_argument_parser.test_argument_parser.TestCase":{execute:[11,4,1,""]},"exlib.tests.test_argument_parser.test_wrong_params":{TestWrongParamsInArgumentParser:[11,2,1,""]},"exlib.tests.test_argument_parser.test_wrong_params.TestWrongParamsInArgumentParser":{test_right_subcategory_1___Machine_Learning____Regression__:[11,4,1,""],test_right_subcategory_2___Default___None_:[11,4,1,""],test_wrong_fixed_params_1__123___DOCKER___1__1__2048___normal__:[11,4,1,""],test_wrong_fixed_params_2___Machine_Learning___123__1__1__2048___normal__:[11,4,1,""],test_wrong_fixed_params_3___Machine_Learning____DOCKER___123__1__2048___normal__:[11,4,1,""],test_wrong_fixed_params_4___Machine_Learning____DOCKER___1__123__2048___normal__:[11,4,1,""],test_wrong_fixed_params_5___Machine_Learning____DOCKER___1__1__123___normal__:[11,4,1,""],test_wrong_fixed_params_6___Machine_Learning____DOCKER___1__1__2048__123_:[11,4,1,""],test_wrong_subcategory_1___Machine_Learning____sb__:[11,4,1,""],test_wrong_subcategory_2___Default____bb__:[11,4,1,""]},"exlib.tests.test_mlflow_mixin":{test_pipeline:[12,0,0,"-"],test_save_model:[12,0,0,"-"],test_save_sklearn_model:[12,0,0,"-"]},"exlib.tests.test_mlflow_mixin.test_pipeline":{TestModelToPipeline:[12,2,1,""]},"exlib.tests.test_mlflow_mixin.test_pipeline.TestModelToPipeline":{setUp:[12,4,1,""],tearDown:[12,4,1,""],test_pipeline:[12,4,1,""]},"exlib.tests.test_mlflow_mixin.test_save_model":{TestSaveModel:[12,2,1,""]},"exlib.tests.test_mlflow_mixin.test_save_model.TestSaveModel":{setUp:[12,4,1,""],tearDown:[12,4,1,""],test_mlflow_pickle_normal_function:[12,4,1,""]},"exlib.tests.test_mlflow_mixin.test_save_sklearn_model":{TestSaveSklearnModel:[12,2,1,""]},"exlib.tests.test_mlflow_mixin.test_save_sklearn_model.TestSaveSklearnModel":{setUp:[12,4,1,""],tearDown:[12,4,1,""],test_sklearn_model:[12,4,1,""]},"exlib.tests.test_program_execute":{test_doc:[13,0,0,"-"],test_manager:[13,0,0,"-"],test_pandas_extractor:[13,0,0,"-"]},"exlib.tests.test_program_execute.test_doc":{TestCase:[13,2,1,""],TestDoc:[13,2,1,""]},"exlib.tests.test_program_execute.test_doc.TestCase":{execute:[13,4,1,""]},"exlib.tests.test_program_execute.test_doc.TestDoc":{setUp:[13,4,1,""],tearDown:[13,4,1,""],test_gen_markdown_file:[13,4,1,""],test_markdown_generator:[13,4,1,""]},"exlib.tests.test_program_execute.test_manager":{TestManagerBasicFunction:[13,2,1,""]},"exlib.tests.test_program_execute.test_manager.TestManagerBasicFunction":{setUp:[13,4,1,""],tearDown:[13,4,1,""],test_to_csv:[13,4,1,""]},"exlib.tests.test_program_execute.test_pandas_extractor":{TestCase:[13,2,1,""],TestPandasExtractor:[13,2,1,""]},"exlib.tests.test_program_execute.test_pandas_extractor.TestCase":{execute:[13,4,1,""]},"exlib.tests.test_program_execute.test_pandas_extractor.TestPandasExtractor":{setUp:[13,4,1,""],tearDown:[13,4,1,""],test_extract_most_frequency_value:[13,4,1,""],test_get_data:[13,4,1,""],test_post_request_json_to_dataframe:[13,4,1,""]},"exlib.tests.test_test":{test_test_plugin:[14,0,0,"-"]},"exlib.tests.test_test.test_test_plugin":{TestCase:[14,2,1,""],TestTesting:[14,2,1,""]},"exlib.tests.test_test.test_test_plugin.TestCase":{execute:[14,4,1,""]},"exlib.tests.test_test.test_test_plugin.TestTesting":{setUp:[14,4,1,""],tearDown:[14,4,1,""],test_docker_test:[14,4,1,""],test_execute_all_test_case:[14,4,1,""],test_test_unit:[14,4,1,""],test_wrong_test_desc:[14,4,1,""],test_wrong_test_field:[14,4,1,""]},"exlib.tests.utils":{exec_router_change:[8,1,1,""],remove_exist:[8,1,1,""]},"exlib.utils":{basic:[15,0,0,"-"],markdown:[16,0,0,"-"]},"exlib.utils.basic":{CachedProperty:[15,2,1,""],serving_pass:[15,1,1,""],wrap:[15,1,1,""]},"exlib.utils.markdown":{fields:[16,0,0,"-"],manager:[16,0,0,"-"]},"exlib.utils.markdown.fields":{BaseField:[16,2,1,""],H1Field:[16,2,1,""],H2Field:[16,2,1,""],H3Field:[16,2,1,""],TableField:[16,2,1,""],TableInfoField:[16,2,1,""],TextField:[16,2,1,""],UnorderedListField:[16,2,1,""]},"exlib.utils.markdown.fields.BaseField":{to_md:[16,4,1,""]},"exlib.utils.markdown.fields.H1Field":{to_md:[16,4,1,""]},"exlib.utils.markdown.fields.H2Field":{to_md:[16,4,1,""]},"exlib.utils.markdown.fields.H3Field":{to_md:[16,4,1,""]},"exlib.utils.markdown.fields.TableField":{to_md:[16,4,1,""]},"exlib.utils.markdown.fields.TableInfoField":{to_md:[16,4,1,""]},"exlib.utils.markdown.fields.TextField":{to_md:[16,4,1,""]},"exlib.utils.markdown.fields.UnorderedListField":{to_md:[16,4,1,""]},"exlib.utils.markdown.manager":{MarkDownManager:[16,2,1,""]},"exlib.utils.markdown.manager.MarkDownManager":{add:[16,4,1,""],save_markdown_sentence:[16,4,1,""],to_md:[16,4,1,""]},exlib:{apis:[1,0,0,"-"],cli:[0,0,0,"-"],config:[0,0,0,"-"],env:[0,0,0,"-"],exceptions:[2,0,0,"-"],globals:[0,0,0,"-"],manager:[3,0,0,"-"],model:[0,0,0,"-"],pipeline:[0,0,0,"-"],serializer:[4,0,0,"-"],service:[7,0,0,"-"],tests:[8,0,0,"-"],utils:[15,0,0,"-"]}},objnames:{"0":["py","module","Python \u6a21\u5757"],"1":["py","function","Python \u51fd\u6570"],"2":["py","class","Python \u7c7b"],"3":["py","attribute","Python \u5c5e\u6027"],"4":["py","method","Python \u65b9\u6cd5"],"5":["py","exception","Python \u4f8b\u5916"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:exception"},terms:{"1024":0,"111":16,"2048":0,"256":0,"400":2,"4096":0,"500":2,"512":0,"abstract":16,"case":[6,9,10,11,12,13,14],"class":[0,2,3,4,5,6,9,10,11,12,13,14,15,16],"default":[0,6,9],"export":0,"for":[0,2,4,9,10,11,12,13,14],"function":0,"if":2,"import":0,"in":[0,2,6,16],"public":0,"return":[0,2,3,5,6,8,10,13,14,15],"static":[3,6,16],"true":6,"with":15,_api:3,_base:[4,5],_doc:3,_test:3,add:16,address:[0,18],after:[9,11,12,13,14],all:[0,2],allow:[0,15],an:[0,2],analysi:0,and:[0,2,16],anomali:0,anomaly_detect:0,api:[0,3,18],applic:2,arg:[0,3,4,5,8,15,16],argument:15,argumentpars:4,attribut:0,bad:2,badrequest:2,base:[0,18],baseextractor:5,basefield:16,basepars:4,basic:[0,18],be:6,befor:[9,10,11,12,13,14],binari:0,binary_classif:0,browser:2,cach:15,cached_properti:15,cachedproperti:15,can:[0,6],cannot:2,cap:1,capbaseexcept:2,categori:[0,4,11],choic:[0,4],choos:0,classif:0,classification_learning_predict:3,classmethod:0,cli:18,cluster:0,clustering_predict:3,code:2,combin:0,compar:0,complet:2,config:18,configattribut:0,configbas:0,content:18,convers:0,convert:15,core:5,could:2,cpu:[0,11],csv:[0,3,4,13],csvextractor:5,cv:0,data2json:5,data:[0,3,5,16],data_input_and_output:0,data_input_and_output_sub:0,data_transform:0,data_transformation_sub:0,dataformat:6,datafram:[3,5,13],datainputandoutputsubcategori:0,dataset:[0,18],datatransformationsubcategori:0,deconstruct:[9,11,12,13,14],decor:15,deep:0,deep_learn:0,deep_learning_sub:0,deeplearningsubcategori:0,default_sub:0,del_serving_env:0,del_test_env:0,deni:0,desc:6,descript:2,detail:16,detect:0,dict:[0,3,5,6,16],directori:0,dispatch:2,distribut:0,doc:3,docker:0,dump_model:3,dynam:0,eight_cor:0,either:2,embed:6,encount:2,engin:0,env:[1,18],error:2,eval:9,evalu:0,except:[0,18],exec_router_chang:8,execut:[0,9,11,13,14],execute_typ:11,executive_framework:0,executive_framework_sub:0,exercis:[9,10,11,12,13,14],extern:0,external_seri:[0,18],extractor:[0,4,13],fallback:2,featur:0,feature_convers:0,feature_engin:0,feature_engineering_sub:0,feature_label:5,feature_select:0,featureengineeringsubcategori:0,femal:16,field:[0,9,15],file:[0,8],fixtur:[9,10,11,12,13,14],format:[0,6,16],forward:0,four_cor:0,frame:5,framework:0,from:0,frontend:0,func:[0,15],get_absolute_url:15,get_respons:2,global:18,good:2,gpu:[0,11],h1field:16,h2field:16,h3field:16,half_cor:0,handl:2,has_serving_env:0,has_test_env:0,hook:[9,10,11,12,13,14],html:13,http:[0,18],httpbaseexcept:2,imag:[0,4],info:16,inner:4,input:0,input_dict:6,input_fil:5,inputoutputconfig:0,instanc:15,interfac:0,intern:[0,2],internalservererror:2,into:15,is:2,it:[9,10,11,12,13,14],job:[0,18],json2data:5,json:[0,5,13],json_post_input:5,keep:0,kwarg:[0,3,4,10,14],label:[5,6,13],learn:0,list:[0,6,16],machin:0,machine_learn:0,machine_learning_sub:0,machinelearningsubcategori:0,make:[0,15],male:16,manag:[0,1,9,11,13,14,15,18],manipul:0,markdown:[0,15],markdown_sent:16,markdownmanag:16,md:[13,16],memori:[0,11],memory_1024:0,memory_2048:0,memory_256:0,memory_4096:0,memory_512:0,meta_data:[1,11],method:[9,10,11,12,13,14,15],methodnam:[9,10,11,12,13,14],mlflow:[0,12],mlflowmodel:0,model:[12,18],model_dir:0,modul:18,module_dir:3,module_path:4,multi:0,multi_classif:0,multipl:[0,6],name:[2,6,15,16],nlp:0,nn:0,no_gpu:0,none:[0,2,3,4,5,6,9,10,11,12,13,14,15],normal:0,not:2,object:[0,6,15,16],occur:2,of:[0,15,16],on:15,one_cor:0,one_gpu:0,one_unit:5,option:[4,15],or:2,other:15,outer:4,output:[0,16],output_fil:3,overload:2,packag:18,panda:[3,5],parser:[0,18],pass:0,pend:0,pipelin:18,pipestatu:0,plugin:[0,4],post:[5,13],post_json:5,predict:[0,3],properti:[2,5,15],proxi:2,public_dataset:0,python:[0,3,6,15],python_func_manag:[0,13,18],python_model_predict:0,pythonfunctionmanag:[3,13],rais:2,raw:0,regress:0,regression_predict:3,relat:0,remove_exist:8,request:2,requir:[6,9],result:0,rout:8,run_all_cas:18,runtest:[9,10,11,12,13,14],sampl:0,sampling_and_split:0,save:[0,3],save_markdown_sent:16,save_model:3,saved_dataset:0,saved_dataset_sub:0,saveddatasetsubcategori:0,select:0,selector:[0,4],selector_model:6,selectormodel:0,self:15,send:2,sent:2,sentenc:16,seri:0,serial:[0,18],serv:0,server:2,servic:[0,18],serving_pass:15,set:[9,10,11,12,13,14],set_serving_env:0,set_test_env:0,setup:[9,10,11,12,13,14],sex:16,shape:5,singl:[0,15],sklearn:[3,12],sklearn_manag:[0,18],sklearnmanag:3,someth:2,split:0,statist:0,statistical_analysi:0,statu:2,str:[3,4,6,16],string:[0,15],sub_categori:4,submodul:18,subpackag:18,supervis:[0,4],supervisedlearningextractor:5,tabl:16,tablefield:16,tableinfofield:16,teardown:[9,11,12,13,14],test:[0,3,4,18],test_add_argu:[0,8],test_api:[0,8],test_argument_pars:[0,8],test_basic_field:[0,8],test_choic:9,test_choice_field:[0,8],test_column_selector:[0,8],test_default_parsed_valu:9,test_default_valu:9,test_doc:[0,8],test_docker_test:14,test_eval_parser_1:9,test_eval_parser_2:9,test_execute_all_test_cas:14,test_extract_most_frequency_valu:13,test_gen_markdown_fil:13,test_get_data:13,test_manag:[0,8],test_markdown_gener:13,test_mlflow_mixin:[0,8],test_mlflow_pickle_normal_funct:12,test_module_run:11,test_multi_selector:9,test_pandas_extractor:[0,8],test_pipelin:[0,8],test_post_request_json_to_datafram:13,test_program_execut:[0,8],test_required_field:[0,8],test_required_test_field:9,test_right_subcategory_1___machine_learning____regression__:11,test_right_subcategory_2___default___none_:11,test_save_model:[0,8],test_save_sklearn_model:[0,8],test_set_paramet:11,test_single_selector:9,test_sklearn_model:12,test_statu:11,test_test:[0,8],test_test_command:9,test_test_plugin:[0,8],test_test_unit:14,test_to_csv:13,test_upload:[0,8],test_upload_modul:10,test_wrong_categori:11,test_wrong_default_choic:9,test_wrong_fixed_params_1__123___docker___1__1__2048___normal__:11,test_wrong_fixed_params_2___machine_learning___123__1__1__2048___normal__:11,test_wrong_fixed_params_3___machine_learning____docker___123__1__2048___normal__:11,test_wrong_fixed_params_4___machine_learning____docker___1__123__2048___normal__:11,test_wrong_fixed_params_5___machine_learning____docker___1__1__123___normal__:11,test_wrong_fixed_params_6___machine_learning____docker___1__1__2048__123_:11,test_wrong_param:[0,8],test_wrong_subcategory_1___machine_learning____sb__:11,test_wrong_subcategory_2___default____bb__:11,test_wrong_test_choic:9,test_wrong_test_desc:14,test_wrong_test_field:14,testaddargu:9,testargumentpars:11,testcas:[9,10,11,12,13,14],testchoic:9,testcolumnselector:9,testdoc:13,testenv:0,testmanagerbasicfunct:13,testmodeltopipelin:12,testpandasextractor:13,testrequiredfield:9,testsavemodel:12,testsavesklearnmodel:12,teststatu:0,testtest:14,testunit:6,testupload:10,testwrongparamsinargumentpars:11,textfield:16,that:[2,6,15],the:[0,2,9,10,11,12,13,14,15],there:2,thi:2,time:0,timeseri:0,to:[0,2,6,15,16],to_csv:3,to_dict:6,to_md:16,to_tupl:6,transform:[0,3,5],transform_test:3,tupl:6,two_cor:0,type:0,unabl:2,understand:2,unittest:[9,10,11,12,13,14],unknown:2,unlimit:0,unorderedlistfield:16,up:[9,10,11,12,13,14],url:15,use:4,used:6,user:0,user_dataset:0,util:[0,18],valu:[0,6],visual:0,visualization_sub:0,visualizationsubcategori:0,was:2,wrap:[6,15],wrap_test_data:6,xxx:[5,16],you:15,your:[0,2,4]},titles:["exlib package","exlib.apis package","exlib.exceptions package","exlib.manager package","exlib.serializer package","exlib.serializer.extractor package","exlib.serializer.plugin package","exlib.service package","exlib.tests package","exlib.tests.test_add_argument package","exlib.tests.test_apis package","exlib.tests.test_argument_parser package","exlib.tests.test_mlflow_mixin package","exlib.tests.test_program_execute package","exlib.tests.test_test package","exlib.utils package","exlib.utils.markdown package","Welcome to ML Manager\u2019s documentation!","exlib"],titleterms:{address:1,and:17,api:1,base:2,basic:15,choic:6,cli:[0,7],config:0,content:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],csv:5,dataset:1,document:17,env:0,except:2,exlib:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18],external_seri:4,extractor:5,field:16,global:0,http:2,indic:17,job:1,manag:[3,16,17],markdown:16,ml:17,model:0,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],packag:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],parser:4,pipelin:0,plugin:6,python_func_manag:3,run_all_cas:0,selector:6,serial:[4,5,6],servic:7,sklearn_manag:3,submodul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],subpackag:[0,4,8,15],supervis:5,tabl:17,test:[6,8,9,10,11,12,13,14],test_add_argu:9,test_api:10,test_argument_pars:11,test_basic_field:9,test_choice_field:9,test_column_selector:9,test_doc:13,test_manag:13,test_mlflow_mixin:12,test_pandas_extractor:13,test_pipelin:12,test_program_execut:13,test_required_field:9,test_save_model:12,test_save_sklearn_model:12,test_test:14,test_test_plugin:14,test_upload:10,test_wrong_param:11,to:17,util:[8,15,16],welcom:17}})