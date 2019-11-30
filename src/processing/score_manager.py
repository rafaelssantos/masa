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





def calc_scores(feature_data, n_features):
    labels = []
    data = []
    
    labels.append('Laplacian Score')  
    data.append(score_functions.calc_lap_score(feature_data))

    labels.append('SPEC')
    data.append(score_functions.calc_SPEC(feature_data))

    labels.append('MCFS')
    # data.append(score_functions.calc_MCFS(feature_data, n_features))

    # labels.append('NDFS')
    # data.append(score_functions.calc_NDFS(feature_data))
  
    # labels.append('UDFS')
    # data.append(score_functions.calc_UDFS(feature_data))


    return data, labels





def generate_dict(feature_labels, score_labels, score_data, title=''):
    values_keys = list(score_labels)
    values_keys.insert(0, 'name')

    json = []
    values = [[0 for x in range(len(score_labels))] for y in range(len(feature_labels))] 

    for k in  range(0, len(feature_labels), 1):
        json_element = {}
        json_element['name'] = feature_labels[k]
        for i in range(0, len(score_data), 1):
            data = score_data[i].tolist()
            values[k][i] = data[k]
            json_element[score_labels[i]] = score_data[i][k]
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