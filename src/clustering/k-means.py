from sklearn.cluster import MiniBatchKMeans
from sklearn.preprocessing import StandardScaler
import sys
import numpy


def help():
    print ("--input or -i\t\tFile path that contains the dataset")
    print ("--feature-count or -m\t\tNumber of features")
    print ("--instance-count or -n\t\tIntances count for the output processing")



def extract_params():
    PARAM_COUNT = 7
    input_data_path = None
    feature_count = None

    if len(sys.argv) == 2 and (sys.argv[1] == "-h" or sys.argv[1] == "--help"):
        help()
        exit()

    
    elif len(sys.argv) >= PARAM_COUNT:
        for i in range(1, len(sys.argv), 2):
            if sys.argv[i] == "-i" or sys.argv[i] == "--input":
                i = i + 1
                input_data_path = sys.argv[i]
            if sys.argv[i] == "-m" or sys.argv[i] == "--feature-count":
                i = i + 1
                feature_count = int(sys.argv[i])
             if sys.argv[i] == "-n" or sys.argv[i] == "--instance-count":
                i = i + 1
                feature_count = int(sys.argv[i])
        return input_data_path, feature_count
        

def main:
    data_file_path = None
    feature_count = None


if __name__ == "__main__":
    main()


# if ((len(sys.argv) == 5) and (sys.argv[1] == "-i" or sys.argv[1] == "--input") and (sys.argv[1] == "-m" or sys.argv[1] == "--attr-size")):
if ((len(sys.argv) == 5)):
    data = numpy.fromfile(sys.argv[2])                     #Reading a binary file of float array 
    m = int(sys.argv[4])   
    data = numpy.reshape(data, (data.shape[0]//m, m))    #Reshaping to m columns


    print("Dataset " + sys.argv[2] + " loaded...")
    print("N of instances: "+ str(data.shape[0]))       
    print("M of attributes: "+ str(data.shape[1]))


    scaler = StandardScaler()                   #Z-score normalization
    scaler.fit(data)                            #Z-score normalization
    normalizedData = scaler.transform(data)     #Z-score normalization


    print ("K-means processing started...")    

    kmeans = MiniBatchKMeans(n_clusters=5000, init='k-means++', init_size=5000).fit(normalizedData)     #Mini batch k-means
    numpy.savetxt(sys.argv[2][:-4] + "_out.csv", kmeans.cluster_centers_, delimiter=",")
    
    print ("K-means processing finished.")

elif ((len(sys.argv) >= 2) and (sys.argv[1] == "-h" or sys.argv[1] == "--help")):
    print("\nOn-line K-means")
    print("[-i | --input] <file>")
    print("[-m | --attr-size] <int>")

else:
    print("Incorret parameters!\nType '-h' or '--help' for help.")