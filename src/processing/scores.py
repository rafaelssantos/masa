import sys
# import numpy

# filePath = sys.argv[2]

# mat = numpy.loadtxt(filePath, delimiter = ",")

# print(mat)


import numpy
import scipy.io
from skfeature.function.similarity_based import lap_score
from skfeature.utility import construct_W
from skfeature.utility import unsupervised_evaluation


def main():
    # load data
    mat =  numpy.loadtxt(sys.argv[2], delimiter = ",")

    # construct affinity matrix
    kwargs_W = {"metric": "euclidean", "neighbor_mode": "knn", "weight_mode": "heat_kernel", "k": 5, 't': 1}
    W = construct_W.construct_W(mat, **kwargs_W)

    # obtain the scores of features
    res_lap = lap_score.lap_score(mat, W=W)

    print (res_lap)


if __name__ == '__main__':
    main()