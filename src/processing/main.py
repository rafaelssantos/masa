import sys
import score_manager as scmanager



def extract_params():
    PARAM_COUNT = 7
    input_data_path = None
    input_labels_path = None
    output_path = None

    n_features = None

    if len(sys.argv) >= PARAM_COUNT:
        for i in range(1, len(sys.argv), 2):
            if sys.argv[i] == "-i" or sys.argv[i] == "--input":
                i = i + 1
                input_data_path = sys.argv[i]
            if sys.argv[i] == "-l" or sys.argv[i] == "--label":
                i = i + 1
                input_labels_path = sys.argv[i]
            if sys.argv[i] == "-n" or sys.argv[i] == "--n-features":
                i = i + 1
                n_features = int(sys.argv[i])
            if sys.argv[i] == '-o' or sys.argv[i] == "--output":
                i = i + 1
                output_path = sys.argv[i]
        
        if output_path == None and input_data_path != None:
            end = input_data_path.rfind("/") + 1
            output_path = input_data_path[0:end] + "output.json"
 
    return input_data_path, input_labels_path, n_features, output_path






def main():
    feature_data_file_path, feature_labels_file_path, n_features, output_path = extract_params()    



    if feature_data_file_path == None or feature_labels_file_path == None or n_features == None:
        print("Incorret parameters.\nType -h or --help for help.")
    
    else :
        feature_labels = scmanager.load_labels(feature_labels_file_path)
        feature_data = scmanager.load_data(feature_data_file_path)
        standardized, non_standardized, score_labels = scmanager.calc_scores(feature_data, n_features)

        result_dict = scmanager.generate_dict(feature_labels, score_labels, standardized, non_standardized)

        scmanager.save_as_json(result_dict, output_path)


if __name__ == "__main__":
    main()