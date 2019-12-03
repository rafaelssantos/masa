from sklearn.cluster import MiniBatchKMeans
from sklearn.preprocessing import StandardScaler
import sys
import numpy


def help():
    print ("--input or -i\t\t\tFile path that contains the dataset")
    print ("--feature-count or -m\t\tNumber of features")
    print ("--instance-count or -n\t\tIntances count for the output processing")
    print ("--output or -o\t\t\tFile path to save the result of the processing")



def extract_sys_params():
    PARAM_COUNT = 7
    input_file_path = None
    feature_count = None
    instance_count = None
    ouput_file_path = None

    if len(sys.argv) == 2 and (sys.argv[1] == "-h" or sys.argv[1] == "--help"):
        help()
        exit()

    
    elif len(sys.argv) >= PARAM_COUNT:
        for i in range(1, len(sys.argv), 2):
            if sys.argv[i] == "-i" or sys.argv[i] == "--input":
                i = i + 1
                input_file_path = sys.argv[i]
            if sys.argv[i] == "-m" or sys.argv[i] == "--feature-count":
                i = i + 1
                feature_count = int(sys.argv[i])
            if sys.argv[i] == "-n" or sys.argv[i] == "--instance-count":
                i = i + 1
                instance_count = int(sys.argv[i])
            if sys.argv[i] == '-o' or sys.argv[i] == "--output":
                i = i + 1
                ouput_file_path = sys.argv[i]
        
        
        if ouput_file_path == None and input_file_path != None:
            end = input_file_path.rfind("/") + 1
            ouput_file_path = input_file_path[0:end] + "_output.csv"
    
    return input_file_path, feature_count, instance_count, ouput_file_path
        





def main():
    input_file_path = None
    feature_count = None
    instance_count = None
    ouput_file_path = None

    input_file_path, feature_count, instance_count, ouput_file_path = extract_sys_params();

    if input_file_path == None or feature_count == None or instance_count == None or ouput_file_path == None :
        print("Incorret parameters.\nType -h or --help for help.")
        exit()



    data = numpy.fromfile(input_file_path, dtype='f4')                     #Reading a binary file of float array 
    m = int(feature_count)
    data = numpy.reshape(data, (data.shape[0]//m, m))    #Reshaping to m columns


    print("Dataset " + input_file_path + " loaded...")
    print("N of instances: "+ str(data.shape[0]))       
    print("M of attributes: "+ str(data.shape[1]))


    scaler = StandardScaler()                   #Z-score
    scaler.fit(data)                            #Z-score
    normalizedData = scaler.transform(data)     #Z-score


    print ("K-means processing started...")    

    kmeans = MiniBatchKMeans(n_clusters=instance_count, init='k-means++', init_size=instance_count).fit(normalizedData)     #Mini batch k-means
    numpy.savetxt(ouput_file_path, kmeans.cluster_centers_, delimiter=",")
    
    print ("K-means processing finished.")





if __name__ == "__main__":
    main()