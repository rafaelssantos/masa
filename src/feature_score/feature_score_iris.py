import sys
import manager
from sklearn import datasets


def help():
    print ("--input or -i\t\tFile path that contains the dataset")
    print ("--label or -l\t\tFile path that contains the labels of each feature in the dataset")
    print ("--feature-count or -m\tNumber of features")
    print ("--output or -o\t\tFile path to save the result of the processing")



def extract_sys_params():
    PARAM_COUNT = 7
    input_data_file_path = None
    input_labels_file_path = None
    output_file_path = None

    n_features = None

    if len(sys.argv) == 2 and (sys.argv[1] == "-h" or sys.argv[1] == "--help"):
        help()
        exit()

    
    elif len(sys.argv) >= PARAM_COUNT:
        for i in range(1, len(sys.argv), 2):
            if sys.argv[i] == "-i" or sys.argv[i] == "--input":
                i = i + 1
                input_data_file_path = sys.argv[i]
            if sys.argv[i] == "-l" or sys.argv[i] == "--label":
                i = i + 1
                input_labels_file_path = sys.argv[i]
            if sys.argv[i] == "-m" or sys.argv[i] == "--feature-count":
                i = i + 1
                n_features = int(sys.argv[i])
            if sys.argv[i] == '-o' or sys.argv[i] == "--output":
                i = i + 1
                output_file_path = sys.argv[i]
        
        if output_file_path == None and input_data_file_path != None:
            end = input_data_file_path.rfind("/") + 1
            output_file_path = input_data_file_path[0:end] + "output.json"
 

    return input_data_file_path, input_labels_file_path, n_features, output_file_path






def main():
    iris = datasets.load_iris()
    X = iris.data
    print(X)
    
    # data_file_path, labels_file_path, n_features, output_file_path = extract_sys_params()    

    n_features = 4
    output_file_path = "/home/rafaelssantos/teste.out.csv"

    # if data_file_path == None or labels_file_path == None or n_features == None:
    #     print("Incorret parameters.\nType -h or --help for help.")
    #     exit()
    

    # feature_labels = manager.load_labels(labels_file_path)
    # feature_data = manager.load_data(data_file_path)
    feature_labels = ["1", "2", "3", "4"]
    feature_data = iris.data
    standardized, non_standardized, score_labels = manager.calc_scores(feature_data, n_features)

    result_dict = manager.generate_dict(feature_labels, score_labels, standardized, non_standardized)

    manager.save_as_json(result_dict, output_file_path)


if __name__ == "__main__":
    main()