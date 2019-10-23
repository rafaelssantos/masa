from sklearn.cluster import MiniBatchKMeans
from sklearn.preprocessing import StandardScaler
import sys
import numpy as np


if ((len(sys.argv) == 3) and (sys.argv[1] == "-i" or sys.argv[1] == "--input")):
    
    data = np.fromfile(sys.argv[2])                     #Reading a binary file of float array    
    data = np.reshape(data, (data.shape[0]//12, 12))    #Reshaping to 12 columns


    print("Dataset " + sys.argv[2] + " loaded...")
    print("N of instances: "+ str(data.shape[0]))       
    print("M of attributes: "+ str(data.shape[1]))


    scaler = StandardScaler()                           #Z-score normalization
    scaler.fit(data);                                   #Z-score normalization
    normalizedData = scaler.transform(data)             #Z-score normalization


    print ("K-means processing started...")    

    kmeans = MiniBatchKMeans(n_clusters=5000, init='k-means++', init_size=5000).fit(normalizedData)     #Mini batch k-means
    np.savetxt(sys.argv[2][:-4] + "_out.csv", kmeans.cluster_centers_, delimiter=",")
    
    print ("K-means processing finished.")

else:
    print("Incorret parameters!\nType '-h' or '--help' for help.")