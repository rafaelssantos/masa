import numpy
import score_functions
import json






def load_labels(file_path):
    file = open(file_path, 'r')
    lines = file.readlines()
        

    feature_labels = []

    for line in lines:
        feature_labels.append(line.strip())
    
    return feature_labels





def load_data(file_path):
    data = numpy.loadtxt(file_path, delimiter=',')
    return data





def calc_scores(features, n):
    labels = []
    standardized = []
    non_standardized = []
    
    labels.append('Laplacian Score') 
    result_lap_score = score_functions.calc_lap_score(features)
    min_lap_score =  numpy.min(result_lap_score)
    range_lap_score = numpy.ptp(result_lap_score)
    standardized.append((result_lap_score - min_lap_score) / range_lap_score)
    non_standardized.append(result_lap_score)

    labels.append('MCFS')
    result_mcfs = score_functions.calc_MCFS(features, n)
    min_mcfs =  numpy.min(result_mcfs)
    range_mcfs = numpy.ptp(result_mcfs)
    standardized.append((result_mcfs - min_mcfs) / range_mcfs)
    non_standardized.append(result_mcfs)

    labels.append('NDFS')
    result_ndfs = score_functions.calc_NDFS(features)
    min_ndfs =  numpy.min(result_ndfs)
    range_ndfs = numpy.ptp(result_ndfs)
    standardized.append((result_ndfs - min_ndfs) / range_ndfs)
    non_standardized.append(result_ndfs)

    labels.append('SPEC')
    result_spec = score_functions.calc_SPEC(features)
    min_spec =  numpy.min(result_spec)
    range_spec = numpy.ptp(result_spec)
    standardized.append((result_spec - min_spec) / range_spec)
    non_standardized.append(result_spec)

    labels.append('UDFS')
    result_udfs = score_functions.calc_UDFS(features)
    min_udfs =  numpy.min(result_udfs)
    range_udfs = numpy.ptp(result_udfs)
    standardized.append((result_udfs - min_udfs) / range_udfs)
    non_standardized.append(result_udfs)


    return standardized, non_standardized, labels





def generate_dict(feature_labels, score_labels, standardized, non_standardized, title=''):
    values_keys = list(score_labels)
    values_keys.insert(0, 'name')

    json = []
    values = [[0 for x in range(len(score_labels))] for y in range(len(feature_labels))] 

    for k in  range(0, len(feature_labels), 1):
        json_element = {}
        json_element['name'] = feature_labels[k]
        for i in range(0, len(standardized), 1):
            data = standardized[i].tolist()
            values[k][i] = data[k]
            json_element[score_labels[i]] = non_standardized[i][k]
        json.append(json_element)


    result_dict = {}
    result_dict['scoreLabels'] = score_labels
    result_dict['featureLabels'] = feature_labels
    result_dict['title'] = title
    result_dict['values'] = values
    result_dict['json'] = json

    return result_dict




def save_as_json(dict_data, file_path):
    file = open(file_path, 'w')
    json.dump(dict_data, file, sort_keys=False, indent=4)