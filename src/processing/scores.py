import sys


import numpy
import scipy.io
from skfeature.function.similarity_based import lap_score
from skfeature.function.similarity_based import SPEC

from skfeature.function.sparse_learning_based import MCFS
from skfeature.function.sparse_learning_based import UDFS


from skfeature.utility import construct_W
from skfeature.utility import unsupervised_evaluation
from skfeature.utility.sparse_learning import feature_ranking



def feature_scores_lap(data):
    kwargs_W = {"metric": "euclidean", "neighbor_mode": "knn", "weight_mode": "heat_kernel", "k": 5, 't': 1}
    W = construct_W.construct_W(data, **kwargs_W)

    return lap_score.lap_score(data, W=W)




def feature_scores_SPEC(data):
    kwargs = {'style': 0}

    return SPEC.spec(mat, **kwargs)



def feature_scores_MCFS(data, n_features, n_clusters):
    kwargs_W = {"metric": "euclidean", "neighbor_mode": "knn", "weight_mode": "heat_kernel", "k": 5, 't': 1}
    W = construct_W.construct_W(data, **kwargs_W)

    return MCFS.mcfs(data, n_selected_features=n_features, W=W, n_clusters=n_clusters).max(1)



def main():
    # load data
    mat =  numpy.loadtxt(sys.argv[2], delimiter = ",")

    # construct affinity matrix
    #kwargs_W = {"metric": "euclidean", "neighbor_mode": "knn", "weight_mode": "heat_kernel", "k": 5, 't': 1}

    #W = construct_W.construct_W(mat, **kwargs_W)

    # obtain the scores of features
    #res_lap = lap_score.lap_score(mat, W=W)
    #kwargs = {'style': 0}

    # obtain the scores of features
    #res_spec = SPEC.spec(mat, **kwargs)
    # num_fea = 12
    # res_mcfs = MCFS.mcfs(mat, n_selected_features=num_fea, W=W, n_clusters=20).max(1)
    
    Weight = UDFS.udfs(mat, gamma=0.1, n_clusters=20).max(1)
    res_udfs = (Weight * Weight).sum(1)

    # print (res_lap)
    # print (res_spec)
    # print (res_mcfs)
    print (res_udfs)


if __name__ == '__main__':
    main()